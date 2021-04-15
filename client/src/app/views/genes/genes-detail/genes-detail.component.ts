import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, map, tap } from 'rxjs/operators';
import { NGXLogger } from "ngx-logger";

import { GenesDetailService } from './genes.detail.service';
import {
  CommentableInput,
  CommentableEntities,
  Gene,
  User,
} from '@app/generated/civic.apollo';

import { ViewerService } from '@app/shared/services/viewer/viewer.service';

@Component({
  selector: 'genes-detail',
  templateUrl: './genes-detail.component.html',
  styleUrls: ['./genes-detail.component.less']
})
export class GenesDetailComponent implements OnInit {
  gene$!: Observable<any>;
  comments$!: Observable<any>;
  revisions$!: Observable<any>;
  myGeneInfo$!: Observable<any>;
  viewer$!: Observable<User | null>;

  subject!: CommentableInput;

  constructor(private api: GenesDetailService,
              private viewerService: ViewerService,
              private route: ActivatedRoute,
              private logger: NGXLogger) {

    this.route.params.subscribe(params => {
      const geneId: string = params['geneId'];
      const source$: Observable<any> = this.api.watchGeneDetail(geneId);
      this.gene$ = source$.pipe(
        pluck('data', 'gene'),
        // add shareReplay
        tap((g: Gene) => {
          this.subject = <CommentableInput>{
            id: g.id,
            entityType: CommentableEntities[g.__typename]
          }
        })
      );
      this.comments$ = this.gene$.pipe(pluck('comments', 'edges'));
      this.revisions$ = this.gene$.pipe(pluck('revisions', 'edges'));
      this.myGeneInfo$ = this.gene$.pipe(
        pluck('myGeneInfoDetails'),
        map(info => JSON.parse(info))
      );
    });

    this.viewer$ = this.viewerService.viewer$;
  }

  ngOnInit(): void {
    this.logger.trace("GenesDetailComponent initialized.");
  }

  loadMoreComments(): void {
    this.logger.trace('loadMoreComments called.');
  }

}

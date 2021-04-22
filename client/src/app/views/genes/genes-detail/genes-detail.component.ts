import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, map, tap, switchMap, startWith, distinctUntilChanged } from 'rxjs/operators';
import { NGXLogger } from "ngx-logger";

import { GenesDetailService } from './genes-detail.service';
import {
  CommentableInput,
  CommentableEntities,
  Gene,
  User,
} from '@app/generated/civic.apollo';

import { Viewer, ViewerService } from '@app/shared/services/viewer/viewer.service';

@Component({
  selector: 'genes-detail',
  templateUrl: './genes-detail.component.html',
  styleUrls: ['./genes-detail.component.less']
})

export class GenesDetailComponent implements OnInit {
  loading$!: Observable<boolean>;
  gene$!: Observable<any>;
  viewer$: Observable<Viewer>;

  subject!: CommentableInput;

  constructor(private service: GenesDetailService,
              private viewerService: ViewerService,
              private route: ActivatedRoute,
              private logger: NGXLogger) {

    this.route.params.subscribe(params => {
      const geneId: number = +params['geneId'];
      const source$: Observable<any> = this.service.watchGeneDetail(geneId);

      this.gene$ = source$.pipe(
        pluck('data', 'gene'),
      );
      this.loading$ = source$.pipe(
        pluck('data', 'loading'),
        startWith(true));
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

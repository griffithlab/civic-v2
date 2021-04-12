import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, map} from 'rxjs/operators';
import { NGXLogger } from "ngx-logger";

import { GenesDetailService } from './genes.detail.service';
import {
  Gene,
  User,
  AddCommentInput,
} from '@app/generated/civic.apollo';

import { ViewerService } from '@app/shared/services/viewer/viewer.service';
import { NewComment } from '@app/components/shared/comment-add/comment-add.component';

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

  constructor(private api: GenesDetailService,
              private viewerService: ViewerService,
              private route: ActivatedRoute,
              private logger: NGXLogger) {

    this.route.params.subscribe(params => {
      const geneId: string = params['geneId'];
      const source$: Observable<any> = this.api.watchGeneDetail(geneId);
      this.gene$ = source$.pipe(pluck('data', 'gene'));
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

  submitComment = (newComment: NewComment): void => {
    this.logger.trace('submitComment called.', newComment);
  }

  loadMoreComments(): void {
    this.logger.trace('loadMoreComments called.');
  }

}

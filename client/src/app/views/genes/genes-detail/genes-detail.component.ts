import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Data } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { pluck, map, tap, switchMap, startWith, distinctUntilChanged } from 'rxjs/operators';
import { NGXLogger } from "ngx-logger";

import { GenesDetailService } from './genes-detail.service';
import {
  CommentableInput,
  CommentableEntities,
  Gene,
  User,
  Flag,
} from '@app/generated/civic.apollo';

import { Viewer, ViewerService } from '@app/shared/services/viewer/viewer.service';

@Component({
  selector: 'genes-detail',
  templateUrl: './genes-detail.component.html',
  styleUrls: ['./genes-detail.component.less']
})

export class GenesDetailComponent implements OnInit {
  params$: Subscription;
  loading$!: Observable<boolean>;
  gene$!: Observable<any>;
  viewer$: Observable<Viewer>;
  commentsTotal!: number;
  revisionsTotal!: number;
  flagsTotal: number = 2;
  flags$!: Observable<Flag>;

  subject!: CommentableInput;

  constructor(private service: GenesDetailService,
              private viewerService: ViewerService,
              private route: ActivatedRoute,
              private logger: NGXLogger) {

    this.params$ = this.route.params.subscribe(params => {
      const geneId: number = +params['geneId'];
      const source$: Observable<any> = this.service.watchGeneDetail(geneId);

      this.gene$ = source$.pipe(
        pluck('data', 'gene'),
        tap((g: Gene) => {
          console.log(g);
          this.commentsTotal = g.comments?.edges ? g.comments.edges.length : 0;
          this.revisionsTotal = g.revisions?.edges ? g.revisions.edges.length : 0;
          this.flagsTotal = g.id === 3 ? 2 : 0;
        })
      );

      this.flags$ = this.gene$.pipe(
        pluck('flags'));

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

  ngOnDestroy(): void {
    this.params$.unsubscribe();
  }
}

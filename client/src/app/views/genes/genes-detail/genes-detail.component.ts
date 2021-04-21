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
  GenesDetailResolveQuery,
} from '@app/generated/civic.apollo';

import { ViewerService } from '@app/shared/services/viewer/viewer.service';
import { ApolloQueryResult } from '@apollo/client/core';

@Component({
  selector: 'genes-detail',
  templateUrl: './genes-detail.component.html',
  styleUrls: ['./genes-detail.component.less']
})

export class GenesDetailComponent implements OnInit {
  resolved$: Observable<Data>;
  loading$: Observable<boolean>;
  gene$: Observable<any>;
  comments$!: Observable<any>;
  revisions$!: Observable<any>;
  myGeneInfo$!: Observable<any>;
  viewer$!: Observable<User | null>;

  subject!: CommentableInput;

  constructor(private api: GenesDetailService,
              private viewerService: ViewerService,
              private route: ActivatedRoute,
              private logger: NGXLogger) {

    this.resolved$ = this.route.data.pipe(
      switchMap((data) => {
        return data.resolved as Observable<ApolloQueryResult<GenesDetailResolveQuery>>;
      }));;

    this.gene$ = this.resolved$.pipe(
      distinctUntilChanged(),
      map((response) => {
        return response.data.gene;
      }),
      tap((gene: Gene) => {
        this.subject = {
          id: gene.id,
          entityType: CommentableEntities[gene.__typename]
        } as CommentableInput;
      }));

    this.loading$ = this.resolved$.pipe(
      map((response) => {
        return response.data.loading;
      }),
      startWith(true));

    this.route.params.subscribe(params => {
      const geneId: number = +params['geneId'];
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

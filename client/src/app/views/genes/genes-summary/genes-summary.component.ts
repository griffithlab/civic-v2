import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, map, tap, withLatestFrom, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { NGXLogger } from "ngx-logger";

import { GenesDetailService } from '@app/views/genes/genes-detail/genes-detail.service';
import {
  CommentableInput,
  CommentableEntities,
  Gene,
  User,
  Revision,
} from '@app/generated/civic.apollo';

import { Viewer, ViewerService } from '@app/shared/services/viewer/viewer.service';


@Component({
  selector: 'cvc-genes-summary',
  templateUrl: './genes-summary.component.html',
  styleUrls: ['./genes-summary.component.less']
})
export class GenesSummaryComponent implements OnInit {
  gene$: Observable<Gene>;
  subject$: Observable<CommentableInput>;
  params$: Observable<Params>;
  data$: Observable<Data>;
  loading$: Observable<boolean>
  myGeneInfo$: Observable<any>;
  viewer$: Observable<Viewer>;
  comments$!: Observable<Comment[]>;
  revisions$!: Observable<Revision[]>;

  constructor(private service: GenesDetailService,
              private viewerService: ViewerService,
              private route: ActivatedRoute,
              private logger: NGXLogger) {

    this.viewer$ = this.viewerService.viewer$;
    this.params$ = this.route.params;
    this.data$ = this.params$.pipe(
      pluck('geneId'),
      switchMap((id: string) => {
        return this.service.watchGeneDetail(+id);
      }));

    this.loading$ = this.data$
      .pipe(pluck('loading'));

    this.gene$ = this.data$
      .pipe(pluck('gene'));

    this.subject$ = this.gene$.pipe(
      map(gene => { return { id: +gene.id, entityType: CommentableEntities[gene.__typename]} }))

    this.myGeneInfo$ = this.gene$.pipe(
      pluck('myGeneInfoDetails'),
      map(info => JSON.parse(info))
    );

    // this.comments$ = this.gene$
    //   .pipe(pluck('comments', 'edges'));

    // this.revisions$ = this.gene$
    //   .pipe(pluck('revisions', 'edges'));

  }

  ngOnInit(): void {
  }

}

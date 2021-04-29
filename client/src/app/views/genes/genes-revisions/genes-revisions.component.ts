import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, map, tap, withLatestFrom, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { NGXLogger } from "ngx-logger";

import { GenesSummaryService } from '@app/views/genes/genes-summary/genes-summary.service';
import {
  CommentableInput,
  CommentableEntities,
  Gene,
  Revision,
  RevisionEdge,
} from '@app/generated/civic.apollo';

import { Viewer, ViewerService } from '@app/shared/services/viewer/viewer.service';
import { Maybe } from 'graphql/jsutils/Maybe';

@Component({
  selector: 'cvc-genes-revisions',
  templateUrl: './genes-revisions.component.html',
  styleUrls: ['./genes-revisions.component.less']
})
export class GenesRevisionsComponent implements OnInit {
  gene$!: Observable<Gene>;
  subject$!: Observable<any>;
  data$!: Observable<Data>;
  loading$!: Observable<boolean>
  viewer$: Observable<Viewer>;
  revisions$!: Observable<RevisionEdge[]>;

  constructor(private service: GenesSummaryService,
    private viewerService: ViewerService,
    private route: ActivatedRoute) {

    this.viewer$ = this.viewerService.viewer$;
    this.route.params.subscribe(params => {
      const geneId: number = +params['geneId'];
      this.data$ = this.service.watchGenesSummary(geneId);
      this.gene$ = this.data$.pipe(
        pluck('data', 'gene'),
      );

      this.loading$ = this.data$
        .pipe(pluck('loading'));

      this.subject$ = this.gene$.pipe(
        map(gene => {
          return {
            id: +gene.id,
            entityType: CommentableEntities[gene.__typename]
          } as CommentableInput;
        }));


      this.revisions$ = this.gene$
        .pipe(pluck('revisions', 'edges'));
    });
  }

  ngOnInit(): void {
  }
}

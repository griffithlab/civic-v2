import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

import { GenesSummaryService } from '@app/views/genes/genes-summary/genes-summary.service';
import {
  CommentableInput,
  CommentableEntities,
  Gene,
} from '@app/generated/civic.apollo';

import { Viewer, ViewerService } from '@app/shared/services/viewer/viewer.service';

@Component({
  selector: 'cvc-genes-comments',
  templateUrl: './genes-comments.component.html',
  styleUrls: ['./genes-comments.component.less']
})
export class GenesCommentsComponent implements OnInit {
  gene$!: Observable<Gene>;
  subject$!: Observable<any>;
  data$!: Observable<Data>;
  loading$!: Observable<boolean>
  viewer$: Observable<Viewer>;
  comments$!: Observable<any>;

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

      this.comments$ = this.gene$
        .pipe(pluck('comments', 'edges'));

    });
  }

  ngOnInit(): void {
  }

}

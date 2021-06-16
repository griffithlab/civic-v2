import { Component } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck, startWith } from 'rxjs/operators';

import { GenesDetailService } from './genes-detail.service';
import {
  Gene,
} from '@app/generated/civic.apollo';

import { Viewer, ViewerService } from '@app/shared/services/viewer/viewer.service';

@Component({
  selector: 'genes-detail',
  templateUrl: './genes-detail.component.html',
  styleUrls: ['./genes-detail.component.less']
})

export class GenesDetailComponent {
  loading$: Observable<boolean>;
  gene$: Observable<Gene>;
  viewer$: Observable<Viewer>;
  commentsTotal$: Observable<number>;
  revisionsTotal$: Observable<number>;
  flagsTotal$: Observable<number>;

  constructor(private service: GenesDetailService,
              private viewerService: ViewerService,
              private route: ActivatedRoute) {

    const geneId: number = +this.route.snapshot.params['geneId'];
    const source$: Observable<any> = this.service.watchGeneDetail(geneId);

    this.loading$ = source$.pipe(
      pluck('data', 'loading'),
      startWith(true));

    this.gene$ = source$.pipe(
      pluck('data', 'gene'));

    this.commentsTotal$ = this.gene$.pipe(
      pluck('comments', 'totalCount'));

    this.flagsTotal$ = this.gene$.pipe(
      pluck('flags', 'totalCount'));

    this.revisionsTotal$ = this.gene$.pipe(
      pluck('revisions', 'Count'));

    this.viewer$ = this.viewerService.viewer$;
  }
}

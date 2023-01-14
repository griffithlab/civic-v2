import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewerService } from '@app/core/services/viewer/viewer.service';
import {
  GeneDetailFieldsFragment,
  GeneDetailGQL,
  Maybe,
} from '@app/generated/civic.apollo';
import { Observable, Subscription } from 'rxjs';
import { map, pluck, startWith } from 'rxjs/operators';

@Component({
  selector: 'genes-revise',
  templateUrl: './genes-revise.view.html',
  styleUrls: ['./genes-revise.view.less'],
})
export class GenesReviseView implements OnInit, OnDestroy {
  loading$?: Observable<boolean>;
  gene$?: Observable<Maybe<GeneDetailFieldsFragment>>;
  commentsTotal$?: Observable<number>;
  revisionsTotal$?: Observable<number>;
  flagsTotal$?: Observable<number>;
  routeSub: Subscription;
  isSignedIn$?: Observable<boolean>;

  constructor(
    private gql: GeneDetailGQL,
    private route: ActivatedRoute,
    private viewerService: ViewerService
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      let observable = this.gql.watch({ geneId: +params.geneId }).valueChanges;

      this.loading$ = observable.pipe(pluck('loading'), startWith(true));

      this.gene$ = observable.pipe(pluck('data', 'gene'));

      this.commentsTotal$ = this.gene$.pipe(pluck('comments', 'totalCount'));

      this.flagsTotal$ = this.gene$.pipe(pluck('flags', 'totalCount'));

      this.revisionsTotal$ = this.gene$.pipe(pluck('revisions', 'totalCount'));
    });
  }

  ngOnInit(): void {
    this.isSignedIn$ = this.viewerService.viewer$.pipe(map((v) => v.signedIn));
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}

import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { GeneDetailFieldsFragment, GeneDetailGQL, Maybe } from '@app/generated/civic.apollo';
import { Observable, Subscription } from 'rxjs';
import { pluck, startWith } from 'rxjs/operators';

@Component({
  selector: 'genes-revise',
  templateUrl: './genes-revise.view.html',
  styleUrls: ['./genes-revise.view.less']
})
export class GenesReviseView implements OnDestroy {
  loading$?: Observable<boolean>;
  gene$?: Observable<Maybe<GeneDetailFieldsFragment>>;
  commentsTotal$?: Observable<number>;
  revisionsTotal$?: Observable<number>;
  flagsTotal$?: Observable<number>;
  routeSub: Subscription;

  constructor(
    private gql: GeneDetailGQL,
    private route: ActivatedRoute
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

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}

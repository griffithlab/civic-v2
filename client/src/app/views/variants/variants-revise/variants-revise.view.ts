import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maybe, VariantDetailFieldsFragment, VariantDetailGQL } from '@app/generated/civic.apollo';
import { Observable, Subscription } from 'rxjs';
import { pluck, startWith } from 'rxjs/operators';

@Component({
  selector: 'cvc-variants-revise',
  templateUrl: './variants-revise.view.html',
  styleUrls: ['./variants-revise.view.less']
})
export class VariantsReviseView implements OnDestroy {
  loading$?: Observable<boolean>;
  variant$?: Observable<Maybe<VariantDetailFieldsFragment>>;
  commentsTotal$?: Observable<number>;
  revisionsTotal$?: Observable<number>;
  flagsTotal$?: Observable<number>;
  routeSub: Subscription;

  constructor(
    private gql: VariantDetailGQL,
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      let observable = this.gql.watch({ variantId: +params.variantId }).valueChanges;

      this.loading$ = observable.pipe(pluck('loading'), startWith(true));

      this.variant$ = observable.pipe(pluck('data', 'variant'));

      this.commentsTotal$ = this.variant$.pipe(pluck('comments', 'totalCount'));

      this.flagsTotal$ = this.variant$.pipe(pluck('flags', 'totalCount'));

      this.revisionsTotal$ = this.variant$.pipe(pluck('revisions', 'totalCount'));

    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}

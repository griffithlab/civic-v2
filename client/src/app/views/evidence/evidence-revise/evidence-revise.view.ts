import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Maybe, EvidenceDetailFieldsFragment, EvidenceDetailGQL } from '@app/generated/civic.apollo';
import { Observable, Subscription } from 'rxjs';
import { pluck, startWith } from 'rxjs/operators';

@Component({
  selector: 'cvc-evidence-revise',
  templateUrl: './evidence-revise.view.html',
  styleUrls: ['./evidence-revise.view.less']
})
export class EvidenceReviseView implements OnDestroy {
  loading$?: Observable<boolean>;
  evidence$?: Observable<Maybe<EvidenceDetailFieldsFragment>>;
  commentsTotal$?: Observable<number>;
  revisionsTotal$?: Observable<number>;
  flagsTotal$?: Observable<number>;
  routeSub: Subscription;

  constructor(
    private gql: EvidenceDetailGQL,
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      let observable = this.gql.watch({ evidenceId: +params.evidenceId }).valueChanges;

      this.loading$ = observable.pipe(pluck('loading'), startWith(true));

      this.evidence$ = observable.pipe(pluck('data', 'evidenceItem'));

      this.commentsTotal$ = this.evidence$.pipe(pluck('comments', 'totalCount'));

      this.flagsTotal$ = this.evidence$.pipe(pluck('flags', 'totalCount'));

      this.revisionsTotal$ = this.evidence$.pipe(pluck('revisions', 'totalCount'));

    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

}

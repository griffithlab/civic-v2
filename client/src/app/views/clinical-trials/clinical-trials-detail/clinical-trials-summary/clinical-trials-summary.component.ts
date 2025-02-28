import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  ClinicalTrial,
  ClinicalTrialSummaryGQL,
  ClinicalTrialSummaryQuery,
  ClinicalTrialSummaryQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular/query-ref'
import { Observable, Subscription } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

@Component({
    selector: 'cvc-clinical-trials-summary',
    templateUrl: './clinical-trials-summary.component.html',
    styleUrls: ['./clinical-trials-summary.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ClinicalTrialsSummaryComponent implements OnDestroy {
  routeSub: Subscription
  clinicalTrialId?: number

  queryRef?: QueryRef<
    ClinicalTrialSummaryQuery,
    ClinicalTrialSummaryQueryVariables
  >

  loading$?: Observable<boolean>
  clinicalTrial$?: Observable<Maybe<Partial<ClinicalTrial>>>

  constructor(
    private route: ActivatedRoute,
    private gql: ClinicalTrialSummaryGQL
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.clinicalTrialId = +params.clinicalTrialId

      this.queryRef = this.gql.watch({
        clinicalTrialId: this.clinicalTrialId,
      })

      let observable = this.queryRef.valueChanges
      this.loading$ = observable.pipe(pluck('loading'), filter(isNonNulled))

      this.clinicalTrial$ = observable.pipe(
        pluck('data', 'clinicalTrial'),
        filter(isNonNulled)
      )
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}

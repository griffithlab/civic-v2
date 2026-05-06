import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  Maybe,
  ClinicalTrial,
  ClinicalTrialDetailQuery,
  ClinicalTrialDetailQueryVariables,
  ClinicalTrialDetailGQL,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { Observable, Subscription } from 'rxjs'
import { startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

@Component({
    selector: 'cvc-clinical-trials-detail',
    templateUrl: './clinical-trials-detail.component.html',
    styleUrls: ['./clinical-trials-detail.component.less'],
    standalone: false
})
export class ClinicalTrialsDetailComponent implements OnDestroy {
  routeSub: Subscription
  clinicalTrialId?: number

  queryRef?: QueryRef<
    ClinicalTrialDetailQuery,
    ClinicalTrialDetailQueryVariables
  >

  loading$?: Observable<boolean>
  clinicalTrial$?: Observable<Maybe<Partial<ClinicalTrial>>>

  constructor(
    private route: ActivatedRoute,
    private gql: ClinicalTrialDetailGQL
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.clinicalTrialId = +params.clinicalTrialId

      this.queryRef = this.gql.watch({
        clinicalTrialId: this.clinicalTrialId,
      })

      let observable = this.queryRef.valueChanges
      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.clinicalTrial$ = observable.pipe(pluck('data', 'clinicalTrial'))
    })
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}

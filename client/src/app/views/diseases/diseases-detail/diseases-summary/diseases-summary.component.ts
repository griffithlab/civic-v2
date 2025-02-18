import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  DiseasesSummaryFieldsFragment,
  DiseasesSummaryGQL,
  DiseasesSummaryQuery,
  DiseasesSummaryQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular/query-ref'
import { Observable, Subscription } from 'rxjs'
import { pluck, startWith } from 'rxjs/operators'

@Component({
  selector: 'cvc-diseases-summary',
  templateUrl: './diseases-summary.component.html',
  styleUrls: ['./diseases-summary.component.less'],
  standalone: false,
})
export class DiseasesSummaryComponent implements OnDestroy {
  routeSub: Subscription
  diseaseId?: number
  loading$?: Observable<boolean>
  queryRef?: QueryRef<DiseasesSummaryQuery, DiseasesSummaryQueryVariables>
  disease$?: Observable<Maybe<DiseasesSummaryFieldsFragment>>

  constructor(
    private route: ActivatedRoute,
    private gql: DiseasesSummaryGQL
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.diseaseId = +params.diseaseId
      this.queryRef = this.gql.watch({ diseaseId: this.diseaseId })

      let observable = this.queryRef.valueChanges
      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.disease$ = observable.pipe(pluck('data', 'disease'))
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}

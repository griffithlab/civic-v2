import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  DiseasesSummaryFieldsFragment,
  DiseasesSummaryGQL,
  DiseasesSummaryQuery,
  DiseasesSummaryQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import { onlyCompleteData, QueryRef } from 'apollo-angular'
import { Observable, Subscription } from 'rxjs'
import { map, startWith } from 'rxjs/operators'

@Component({
  selector: 'cvc-diseases-summary',
  templateUrl: './diseases-summary.component.html',
  styleUrls: ['./diseases-summary.component.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
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
      this.queryRef = this.gql.watch({
        variables: { diseaseId: this.diseaseId },
      })

      let observable = this.queryRef.valueChanges
      this.loading$ = observable.pipe(
        map(({ loading }) => loading),
        startWith(true)
      )

      this.disease$ = observable.pipe(
        onlyCompleteData(),
        map(({ data }) => data.disease)
      )
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}

import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  SourceSummaryGQL,
  Maybe,
  SourceSummaryQuery,
  SourceSummaryQueryVariables,
  SourceSummaryFieldsFragment,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { Observable, Subscription } from 'rxjs'

@Component({
  selector: 'cvc-sources-summary',
  templateUrl: './sources-summary.page.html',
  styleUrls: ['./sources-summary.page.less'],
  standalone: false,
})
export class SourcesSummaryPage implements OnDestroy {
  routeSub: Subscription
  sourceId?: number

  queryRef?: QueryRef<SourceSummaryQuery, SourceSummaryQueryVariables>

  loading$?: Observable<boolean>
  source$?: Observable<Maybe<SourceSummaryFieldsFragment>>

  constructor(
    private route: ActivatedRoute,
    private gql: SourceSummaryGQL
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.sourceId = +params.sourceId

      this.queryRef = this.gql.watch({
        sourceId: this.sourceId,
      })

      let observable = this.queryRef.valueChanges
      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.source$ = observable.pipe(pluck('data', 'source'))
    })
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}

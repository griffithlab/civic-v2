import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  AssertionSummaryGQL,
  Maybe,
  AssertionSummaryQuery,
  AssertionSummaryQueryVariables,
  AssertionSummaryFieldsFragment,
  SubscribableInput,
  SubscribableEntities,
  EvidenceStatus,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { Observable } from 'rxjs'
import { AssertionState } from '@app/forms/states/assertion.state'

@Component({
    selector: 'cvc-assertion-summary',
    templateUrl: './assertions-summary.page.html',
    styleUrls: ['./assertions-summary.page.less'],
    standalone: false
})
export class AssertionsSummaryPage {
  @Input() assertionId: Maybe<number>

  queryRef: QueryRef<AssertionSummaryQuery, AssertionSummaryQueryVariables>
  loading$: Observable<boolean>
  assertion$: Observable<Maybe<AssertionSummaryFieldsFragment>>

  assertionRules = new AssertionState()
  statusValues = EvidenceStatus

  subscribable: SubscribableInput

  constructor(private gql: AssertionSummaryGQL, private route: ActivatedRoute) {
    var queryAssertionId: number
    if (this.assertionId) {
      queryAssertionId = this.assertionId
    } else {
      queryAssertionId = +this.route.snapshot.params['assertionId']
    }

    if (queryAssertionId == undefined) {
      throw new Error(
        'Must pass in an assertion ID as an input or via the route.'
      )
    }

    this.queryRef = this.gql.watch({ assertionId: queryAssertionId })

    let observable = this.queryRef.valueChanges

    this.loading$ = observable.pipe(pluck('loading'), startWith(true))

    this.assertion$ = observable.pipe(pluck('data', 'assertion'))

    this.subscribable = {
      entityType: SubscribableEntities.Assertion,
      id: queryAssertionId,
    }
  }
}

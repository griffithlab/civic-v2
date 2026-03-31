import { Component, computed, effect, Input, signal, Signal } from '@angular/core'
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
import { map, startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { Observable } from 'rxjs'
import { AssertionState } from '@app/forms/states/assertion.state'
import { toSignal } from '@angular/core/rxjs-interop'

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

  assertionDescriptionDisplayMode: string = 'raw';
  assertionDescriptionTagMode: string = 'eid';

  queryAssertionId: Signal<number>

  constructor(private gql: AssertionSummaryGQL, private route: ActivatedRoute) {


    if (this.assertionId) {
      this.queryAssertionId = signal(this.assertionId)
    } else {
      this.queryAssertionId = toSignal(
        this.route.params.pipe(
          map(params => +params['assertionId']),
        ),
        { requireSync: true }
      );
    }

    if (this.queryAssertionId() == undefined) {
      throw new Error(
        'Must pass in an assertion ID as an input or via the route.'
      )
    }

    this.queryRef = this.gql.watch({ assertionId: this.queryAssertionId() })

    effect(() => {
      this.queryRef.refetch({assertionId: this.queryAssertionId()})
    })

    let observable = this.queryRef.valueChanges

    this.loading$ = observable.pipe(pluck('loading'), startWith(true))

    this.assertion$ = observable.pipe(pluck('data', 'assertion'))

    this.subscribable = {
      entityType: SubscribableEntities.Assertion,
      id: this.queryAssertionId(),
    }
  }
}

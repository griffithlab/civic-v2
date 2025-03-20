import { Component, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  VariantSummaryGQL,
  Maybe,
  VariantSummaryQuery,
  VariantSummaryQueryVariables,
  VariantSummaryFieldsFragment,
  SubscribableInput,
  SubscribableEntities,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { Observable } from 'rxjs'

@Component({
    selector: 'cvc-variants-summary',
    templateUrl: './variants-summary.page.html',
    styleUrls: ['./variants-summary.page.less'],
    standalone: false
})
export class VariantsSummaryPage {
  @Input() variantId: Maybe<number>

  queryRef: QueryRef<VariantSummaryQuery, VariantSummaryQueryVariables>
  loading$: Observable<boolean>
  variant$: Observable<Maybe<VariantSummaryFieldsFragment>>

  subscribable: SubscribableInput

  constructor(private gql: VariantSummaryGQL, private route: ActivatedRoute) {
    var queryVariantId: number
    if (this.variantId) {
      queryVariantId = this.variantId
    } else {
      queryVariantId = +this.route.snapshot.params['variantId']
    }

    if (queryVariantId == undefined) {
      throw new Error('Must pass in a variant ID as an input or via the route.')
    }

    this.queryRef = this.gql.watch({ variantId: queryVariantId })

    let observable = this.queryRef.valueChanges

    this.loading$ = observable.pipe(pluck('loading'), startWith(true))

    this.variant$ = observable.pipe(pluck('data', 'variant'))

    this.subscribable = {
      entityType: SubscribableEntities.Variant,
      id: queryVariantId,
    }
  }
}

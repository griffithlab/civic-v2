import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import {
  Maybe,
  SubscribableEntities,
  SubscribableInput,
  SubscribeGQL,
  SubscribeMutation,
  SubscribeMutationVariables,
  SubscriptionForEntityGQL,
  SubscriptionForEntityQuery,
  SubscriptionForEntityQueryVariables,
  SubscriptionIdFragment,
  UnsubscribeGQL,
  UnsubscribeMutation,
  UnsubscribeMutationVariables,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { filter, Observable, Subject } from 'rxjs'
import { map, takeUntil } from 'rxjs/operators'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'

@Component({
    selector: 'cvc-entity-subscription-button',
    templateUrl: './entity-subscription-button.component.html',
    styleUrls: ['./entity-subscription-button.component.less'],
    standalone: false
})
export class CvcEntitySubscriptionButtonComponent implements OnInit, OnDestroy {
  @Input() viewer!: Viewer
  @Input() typename!: string
  @Input() subscribableId!: number

  subscribable!: SubscribableInput

  existingSubscription$?: Observable<Maybe<SubscriptionIdFragment>>
  queryRef?: QueryRef<
    SubscriptionForEntityQuery,
    SubscriptionForEntityQueryVariables
  >
  isSubmitting = false

  destroy$ = new Subject<void>()

  unsubscribeMutator: MutatorWithState<
    UnsubscribeGQL,
    UnsubscribeMutation,
    UnsubscribeMutationVariables
  >
  subscribeMutator: MutatorWithState<
    SubscribeGQL,
    SubscribeMutation,
    SubscribeMutationVariables
  >

  constructor(
    private isSubscribedGQL: SubscriptionForEntityGQL,
    private unsubscribeMutation: UnsubscribeGQL,
    private subscribeMutation: SubscribeGQL,
    private networkErrorService: NetworkErrorsService
  ) {
    this.unsubscribeMutator = new MutatorWithState(networkErrorService)
    this.subscribeMutator = new MutatorWithState(networkErrorService)
  }

  ngOnInit() {
    if (this.viewer === undefined) {
      throw new Error(
        'Must pass in a viewer to the CvcEntitySubscriptionButtonComponent'
      )
    }
    if (this.typename === undefined) {
      throw new Error(
        'Must pass in a typename to the CvcEntitySubscriptionButtonComponent'
      )
    }
    if (this.subscribableId === undefined) {
      throw new Error(
        'Must pass in a subscribableId to the CvcEntitySubscriptionButtonComponent'
      )
    }

    let entityType: keyof typeof SubscribableEntities = <
      keyof typeof SubscribableEntities
    >this.typename
    this.subscribable = {
      id: this.subscribableId,
      entityType: SubscribableEntities[entityType],
    }
    this.queryRef = this.isSubscribedGQL.watch({
      subscribable: this.subscribable,
    })

    this.existingSubscription$ = this.queryRef.valueChanges.pipe(
      pluck('data', 'subscriptionForEntity'),
      filter(isNonNulled)
    )
  }

  subscribe() {
    if (this.subscribable) {
      this.isSubmitting = true
      let state = this.subscribeMutator.mutate(this.subscribeMutation, {
        input: { subscribables: [this.subscribable] },
      })

      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((s) => {
        if (s) {
          this.queryRef?.refetch()
          this.isSubmitting = false
        }
      })
    }
  }

  unsubscribe() {
    if (this.subscribable) {
      this.isSubmitting = true
      let state = this.unsubscribeMutator.mutate(this.unsubscribeMutation, {
        input: { subscribables: [this.subscribable] },
      })

      state.submitSuccess$.pipe(takeUntil(this.destroy$)).subscribe((s) => {
        if (s) {
          this.queryRef?.refetch()
          this.isSubmitting = false
        }
      })
    }
  }

  ngOnDestroy() {
    this.destroy$.next()
    this.destroy$.complete()
  }
}

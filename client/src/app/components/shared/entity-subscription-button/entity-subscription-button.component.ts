import { Component, Input, OnInit } from "@angular/core";
import { NetworkErrorsService } from "@app/core/services/network-errors.service";
import { Viewer } from "@app/core/services/viewer/viewer.service";
import { MutatorWithState } from "@app/core/utilities/mutation-state-wrapper";
import { Maybe, SubscribableEntities, SubscribableInput, SubscribeGQL, SubscribeMutation, SubscribeMutationVariables, SubscriptionForEntityGQL, SubscriptionForEntityQuery, SubscriptionForEntityQueryVariables, UnsubscribeGQL, UnsubscribeMutation, UnsubscribeMutationVariables } from "@app/generated/civic.apollo";
import { QueryRef } from "apollo-angular";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'cvc-entity-subscription-button',
  templateUrl: './entity-subscription-button.component.html',
  styleUrls: ['./entity-subscription-button.component.less']
})
export class CvcEntitySubscriptionButtonComponent implements OnInit {
  @Input() viewer!: Viewer
  @Input() typename!: string
  @Input() subscribableId!: number

  subscribable!: SubscribableInput

  existingSubscription$?: Observable<Maybe<number>>
  queryRef?: QueryRef<SubscriptionForEntityQuery, SubscriptionForEntityQueryVariables>

  unsubscribeMutator: MutatorWithState<UnsubscribeGQL, UnsubscribeMutation, UnsubscribeMutationVariables>
  subscribeMutator: MutatorWithState<SubscribeGQL, SubscribeMutation, SubscribeMutationVariables>

  constructor(private isSubscribedGQL: SubscriptionForEntityGQL, private unsubscribeMutation: UnsubscribeGQL, private subscribeMutation: SubscribeGQL, private networkErrorService: NetworkErrorsService) {
    this.unsubscribeMutator = new MutatorWithState(networkErrorService)
    this.subscribeMutator = new MutatorWithState(networkErrorService)
  }

  ngOnInit() {
    if(this.viewer === undefined) {
      throw new Error("Must pass in a viewer to the CvcEntitySubscriptionButtonComponent")
    }
    if(this.typename === undefined) {
      throw new Error("Must pass in a typename to the CvcEntitySubscriptionButtonComponent")
    }
    if(this.subscribableId === undefined) {
      throw new Error("Must pass in a subscribableId to the CvcEntitySubscriptionButtonComponent")
    }

    let entityType: keyof typeof SubscribableEntities = <keyof typeof SubscribableEntities> this.typename
    this.subscribable = {
      id: this.subscribableId,
      entityType: SubscribableEntities[entityType]
    }

    let queryRef = this.isSubscribedGQL.watch({subscribable: this.subscribable}).valueChanges

    this.existingSubscription$ = queryRef
      .pipe(map(({data}) => data.subscriptionForEntity?.id ))
  }

  subscribe() {
    if(this.subscribable) {
     this.subscribeMutator.mutate(this.subscribeMutation, {
        input: {subscribables: [ this.subscribable]} 
      })
    }
  }

  unsubscribe() {
    if(this.subscribable) {
      this.unsubscribeMutator.mutate(this.unsubscribeMutation, {
        input: {subscribables: [ this.subscribable]} 
      })
    }
  }
}

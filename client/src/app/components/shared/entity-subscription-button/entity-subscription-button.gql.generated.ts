/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SubscriptionForEntityQueryVariables = Types.Exact<{
  subscribable: Types.SubscribableInput;
}>;


export type SubscriptionForEntityQuery = { __typename: 'Query', subscriptionForEntity?: { __typename: 'Subscription', id: number } | undefined };

export type SubscriptionIdFragment = { __typename: 'Subscription', id: number };

export const SubscriptionIdFragmentDoc = gql`
    fragment subscriptionId on Subscription {
  id
  __typename
}
    `;
export const SubscriptionForEntityDocument = gql`
    query SubscriptionForEntity($subscribable: SubscribableInput!) {
  subscriptionForEntity(subscribable: $subscribable) {
    ...subscriptionId
  }
}
    ${SubscriptionIdFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SubscriptionForEntityGQL extends Apollo.Query<SubscriptionForEntityQuery, SubscriptionForEntityQueryVariables> {
    document = SubscriptionForEntityDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
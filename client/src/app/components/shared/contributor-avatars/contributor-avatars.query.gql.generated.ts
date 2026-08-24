/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ContributorAvatarsQueryVariables = Types.Exact<{
  subscribable: Types.SubscribableInput;
}>;


export type ContributorAvatarsQuery = { __typename: 'Query', contributors: { __typename: 'ContributingUsersSummary', editors: Array<{ __typename: 'ContributingUser', lastActionDate: any, totalActionCount: number, user: { __typename: 'User', id: number, profileImagePath?: string | undefined }, uniqueActions: Array<{ __typename: 'Contribution', action: Types.EventAction, count: number }> }>, curators: Array<{ __typename: 'ContributingUser', lastActionDate: any, totalActionCount: number, user: { __typename: 'User', id: number, profileImagePath?: string | undefined }, uniqueActions: Array<{ __typename: 'Contribution', action: Types.EventAction, count: number }> }> } };

export type ContributorFieldsFragment = { __typename: 'ContributingUser', lastActionDate: any, totalActionCount: number, user: { __typename: 'User', id: number, profileImagePath?: string | undefined }, uniqueActions: Array<{ __typename: 'Contribution', action: Types.EventAction, count: number }> };

export const ContributorFieldsFragmentDoc = gql`
    fragment ContributorFields on ContributingUser {
  user {
    id
    profileImagePath(size: 12)
  }
  uniqueActions {
    action
    count
  }
  lastActionDate
  totalActionCount
}
    `;
export const ContributorAvatarsDocument = gql`
    query ContributorAvatars($subscribable: SubscribableInput!) {
  contributors(subscribable: $subscribable) {
    editors {
      ...ContributorFields
    }
    curators {
      ...ContributorFields
    }
  }
}
    ${ContributorFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ContributorAvatarsGQL extends Apollo.Query<ContributorAvatarsQuery, ContributorAvatarsQueryVariables> {
    document = ContributorAvatarsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
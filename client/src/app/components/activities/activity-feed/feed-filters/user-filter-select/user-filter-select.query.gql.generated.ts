/* eslint-disable */
import * as Types from '../../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type UserFilterSearchQueryVariables = Types.Exact<{
  name?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type UserFilterSearchQuery = { __typename: 'Query', browseUsers: { __typename: 'BrowseUserConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined }, edges: Array<{ __typename: 'BrowseUserEdge', node?: { __typename: 'BrowseUser', id: number, displayName: string, name?: string | undefined, username: string, role: Types.UserRole } | undefined }> } };

export const UserFilterSearchDocument = gql`
    query UserFilterSearch($name: String) {
  browseUsers(name: $name) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    edges {
      node {
        id
        displayName
        name
        username
        role
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserFilterSearchGQL extends Apollo.Query<UserFilterSearchQuery, UserFilterSearchQueryVariables> {
    document = UserFilterSearchDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
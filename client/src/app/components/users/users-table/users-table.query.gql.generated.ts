/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type UsersBrowseQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  name?: Types.InputMaybe<Types.Scalars['String']['input']>;
  organization?: Types.InputMaybe<Types.OrganizationFilter>;
  role?: Types.InputMaybe<Types.UserRole>;
  sortBy?: Types.InputMaybe<Types.UsersSort>;
  ids?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
}>;


export type UsersBrowseQuery = { __typename: 'Query', browseUsers: { __typename: 'BrowseUserConnection', totalCount: number, pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined }, edges: Array<{ __typename: 'BrowseUserEdge', cursor: string, node?: { __typename: 'BrowseUser', id: number, name?: string | undefined, displayName: string, username: string, role: Types.UserRole, evidenceCount: number, revisionCount: number, profileImagePath?: string | undefined, mostRecentActivityTimestamp?: any | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string }> } | undefined }> } };

export type UserBrowseTableRowFieldsFragment = { __typename: 'BrowseUser', id: number, name?: string | undefined, displayName: string, username: string, role: Types.UserRole, evidenceCount: number, revisionCount: number, profileImagePath?: string | undefined, mostRecentActivityTimestamp?: any | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string }> };

export const UserBrowseTableRowFieldsFragmentDoc = gql`
    fragment UserBrowseTableRowFields on BrowseUser {
  id
  name
  displayName
  username
  organizations {
    id
    name
  }
  role
  evidenceCount
  revisionCount
  profileImagePath(size: 64)
  mostRecentActivityTimestamp
}
    `;
export const UsersBrowseDocument = gql`
    query UsersBrowse($first: Int, $last: Int, $before: String, $after: String, $name: String, $organization: OrganizationFilter, $role: UserRole, $sortBy: UsersSort, $ids: [Int!]) {
  browseUsers(
    ids: $ids
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    organization: $organization
    role: $role
    sortBy: $sortBy
  ) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    totalCount
    edges {
      cursor
      node {
        ...UserBrowseTableRowFields
      }
    }
  }
}
    ${UserBrowseTableRowFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UsersBrowseGQL extends Apollo.Query<UsersBrowseQuery, UsersBrowseQueryVariables> {
    document = UsersBrowseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type OrganizationsBrowseQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  name?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortBy?: Types.InputMaybe<Types.OrganizationSort>;
}>;


export type OrganizationsBrowseQuery = { __typename: 'Query', browseOrganizations: { __typename: 'BrowseOrganizationConnection', totalCount: number, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined, endCursor?: string | undefined }, edges: Array<{ __typename: 'BrowseOrganizationEdge', cursor: string, node?: { __typename: 'BrowseOrganization', id: number, name: string, description: string, url: string, memberCount: number, activityCount: number, mostRecentActivityTimestamp?: any | undefined, childOrganizations: Array<{ __typename: 'Organization', id: number, name: string }> } | undefined }> } };

export type OrganizationBrowseTableRowFieldsFragment = { __typename: 'BrowseOrganization', id: number, name: string, description: string, url: string, memberCount: number, activityCount: number, mostRecentActivityTimestamp?: any | undefined, childOrganizations: Array<{ __typename: 'Organization', id: number, name: string }> };

export const OrganizationBrowseTableRowFieldsFragmentDoc = gql`
    fragment OrganizationBrowseTableRowFields on BrowseOrganization {
  id
  name
  description
  url
  memberCount
  activityCount
  mostRecentActivityTimestamp
  childOrganizations {
    id
    name
  }
}
    `;
export const OrganizationsBrowseDocument = gql`
    query OrganizationsBrowse($first: Int, $last: Int, $before: String, $after: String, $id: Int, $name: String, $sortBy: OrganizationSort) {
  browseOrganizations(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    id: $id
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...OrganizationBrowseTableRowFields
      }
    }
  }
}
    ${OrganizationBrowseTableRowFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class OrganizationsBrowseGQL extends Apollo.Query<OrganizationsBrowseQuery, OrganizationsBrowseQueryVariables> {
    document = OrganizationsBrowseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
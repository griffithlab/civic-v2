/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type OrganizationMembersQueryVariables = Types.Exact<{
  organizationId?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type OrganizationMembersQuery = { __typename: 'Query', browseUsers: { __typename: 'BrowseUserConnection', pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined, endCursor?: string | undefined }, edges: Array<{ __typename: 'BrowseUserEdge', cursor: string, node?: { __typename: 'BrowseUser', id: number, name?: string | undefined, displayName: string, username: string, profileImagePath?: string | undefined, role: Types.UserRole, url?: string | undefined, areaOfExpertise?: Types.AreaOfExpertise | undefined, orcid?: string | undefined, twitterHandle?: string | undefined, facebookProfile?: string | undefined, linkedinProfile?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, url: string }> } | undefined }> } };

export type OrganizationMembersFieldsFragment = { __typename: 'BrowseUser', id: number, name?: string | undefined, displayName: string, username: string, profileImagePath?: string | undefined, role: Types.UserRole, url?: string | undefined, areaOfExpertise?: Types.AreaOfExpertise | undefined, orcid?: string | undefined, twitterHandle?: string | undefined, facebookProfile?: string | undefined, linkedinProfile?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, url: string }> };

export const OrganizationMembersFieldsFragmentDoc = gql`
    fragment OrganizationMembersFields on BrowseUser {
  id
  name
  displayName
  username
  profileImagePath(size: 64)
  role
  url
  areaOfExpertise
  orcid
  twitterHandle
  facebookProfile
  linkedinProfile
  organizations {
    id
    name
    url
  }
}
    `;
export const OrganizationMembersDocument = gql`
    query OrganizationMembers($organizationId: [Int!], $first: Int, $last: Int, $before: String, $after: String) {
  browseUsers(
    organization: {ids: $organizationId}
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...OrganizationMembersFields
      }
    }
  }
}
    ${OrganizationMembersFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class OrganizationMembersGQL extends Apollo.Query<OrganizationMembersQuery, OrganizationMembersQueryVariables> {
    document = OrganizationMembersDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
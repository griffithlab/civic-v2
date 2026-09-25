/* eslint-disable */
import * as Types from '../../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type OrgFilterSearchQueryVariables = Types.Exact<{
  name?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type OrgFilterSearchQuery = { __typename: 'Query', browseOrganizations: { __typename: 'BrowseOrganizationConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined }, edges: Array<{ __typename: 'BrowseOrganizationEdge', node?: { __typename: 'BrowseOrganization', id: number, name: string } | undefined }> } };

export const OrgFilterSearchDocument = gql`
    query OrgFilterSearch($name: String) {
  browseOrganizations(name: $name) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    edges {
      node {
        id
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class OrgFilterSearchGQL extends Apollo.Query<OrgFilterSearchQuery, OrgFilterSearchQueryVariables> {
    document = OrgFilterSearchDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type FusionMenuQueryVariables = Types.Exact<{
  genePartnerId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type FusionMenuQuery = { __typename: 'Query', fusions: { __typename: 'FusionConnection', totalCount: number, pageInfo: { __typename: 'PageInfo', startCursor?: string | undefined, endCursor?: string | undefined, hasPreviousPage: boolean, hasNextPage: boolean }, edges: Array<{ __typename: 'FusionEdge', cursor: string, node?: { __typename: 'Fusion', id: number, name: string, link: string, flagged: boolean, deprecated: boolean } | undefined }> } };

export type MenuFusionFragment = { __typename: 'Fusion', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export const MenuFusionFragmentDoc = gql`
    fragment menuFusion on Fusion {
  id
  name
  link
  flagged
  deprecated
}
    `;
export const FusionMenuDocument = gql`
    query FusionMenu($genePartnerId: Int, $first: Int, $last: Int, $before: String, $after: String) {
  fusions(
    genePartnerId: $genePartnerId
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    totalCount
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    edges {
      cursor
      node {
        ...menuFusion
      }
    }
  }
}
    ${MenuFusionFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FusionMenuGQL extends Apollo.Query<FusionMenuQuery, FusionMenuQueryVariables> {
    document = FusionMenuDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
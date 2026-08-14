/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type VariantTypesBrowseQueryVariables = Types.Exact<{
  ids?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  name?: Types.InputMaybe<Types.Scalars['String']['input']>;
  soid?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortBy?: Types.InputMaybe<Types.VariantTypeSort>;
}>;


export type VariantTypesBrowseQuery = { __typename: 'Query', variantTypes: { __typename: 'BrowseVariantTypeConnection', totalCount: number, filteredCount: number, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined, endCursor?: string | undefined }, edges: Array<{ __typename: 'BrowseVariantTypeEdge', cursor: string, node?: { __typename: 'BrowseVariantType', id: number, name: string, soid: string, url?: string | undefined, variantCount: number, link: string } | undefined }> } };

export type VariantTypeBrowseTableRowFieldsFragment = { __typename: 'BrowseVariantType', id: number, name: string, soid: string, url?: string | undefined, variantCount: number, link: string };

export const VariantTypeBrowseTableRowFieldsFragmentDoc = gql`
    fragment VariantTypeBrowseTableRowFields on BrowseVariantType {
  id
  name
  soid
  url
  variantCount
  link
}
    `;
export const VariantTypesBrowseDocument = gql`
    query VariantTypesBrowse($ids: [Int!], $first: Int, $last: Int, $before: String, $after: String, $name: String, $soid: String, $sortBy: VariantTypeSort) {
  variantTypes(
    ids: $ids
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    soid: $soid
    sortBy: $sortBy
  ) {
    totalCount
    filteredCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...VariantTypeBrowseTableRowFields
      }
    }
  }
}
    ${VariantTypeBrowseTableRowFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantTypesBrowseGQL extends Apollo.Query<VariantTypesBrowseQuery, VariantTypesBrowseQueryVariables> {
    document = VariantTypesBrowseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
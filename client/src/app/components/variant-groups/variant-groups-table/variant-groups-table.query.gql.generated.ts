/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type BrowseVariantGroupsQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortBy?: Types.InputMaybe<Types.VariantGroupsSort>;
  name?: Types.InputMaybe<Types.Scalars['String']['input']>;
  featureNames?: Types.InputMaybe<Types.Scalars['String']['input']>;
  variantNames?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type BrowseVariantGroupsQuery = { __typename: 'Query', browseVariantGroups: { __typename: 'BrowseVariantGroupConnection', totalCount: number, filteredCount: number, pageCount: number, lastUpdated: any, pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, startCursor?: string | undefined, hasPreviousPage: boolean }, edges: Array<{ __typename: 'BrowseVariantGroupEdge', cursor: string, node?: { __typename: 'BrowseVariantGroup', id: number, name: string, link: string, featureNames: Array<string>, variantNames: Array<string>, variantCount: number, evidenceItemCount: number } | undefined }> } };

export type BrowseVariantGroupRowFieldsFragment = { __typename: 'BrowseVariantGroup', id: number, name: string, link: string, featureNames: Array<string>, variantNames: Array<string>, variantCount: number, evidenceItemCount: number };

export const BrowseVariantGroupRowFieldsFragmentDoc = gql`
    fragment BrowseVariantGroupRowFields on BrowseVariantGroup {
  id
  name
  link
  featureNames
  variantNames
  variantCount
  evidenceItemCount
}
    `;
export const BrowseVariantGroupsDocument = gql`
    query BrowseVariantGroups($first: Int, $last: Int, $before: String, $after: String, $sortBy: VariantGroupsSort, $name: String, $featureNames: String, $variantNames: String) {
  browseVariantGroups(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    name: $name
    featureNames: $featureNames
    variantNames: $variantNames
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    totalCount
    filteredCount
    pageCount
    lastUpdated
    edges {
      cursor
      node {
        ...BrowseVariantGroupRowFields
      }
    }
  }
}
    ${BrowseVariantGroupRowFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class BrowseVariantGroupsGQL extends Apollo.Query<BrowseVariantGroupsQuery, BrowseVariantGroupsQueryVariables> {
    document = BrowseVariantGroupsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
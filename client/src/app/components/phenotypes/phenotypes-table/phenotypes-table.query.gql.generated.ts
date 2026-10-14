/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type PhenotypesBrowseQueryVariables = Types.Exact<{
  ids?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  name?: Types.InputMaybe<Types.Scalars['String']['input']>;
  hpoId?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortBy?: Types.InputMaybe<Types.PhenotypeSort>;
}>;


export type PhenotypesBrowseQuery = { __typename: 'Query', browsePhenotypes: { __typename: 'BrowsePhenotypeConnection', totalCount: number, filteredCount: number, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined, endCursor?: string | undefined }, edges: Array<{ __typename: 'BrowsePhenotypeEdge', cursor: string, node?: { __typename: 'BrowsePhenotype', id: number, name: string, hpoId: string, url: string, assertionCount: number, evidenceCount: number, link: string } | undefined }> } };

export type PhenotypeBrowseTableRowFieldsFragment = { __typename: 'BrowsePhenotype', id: number, name: string, hpoId: string, url: string, assertionCount: number, evidenceCount: number, link: string };

export const PhenotypeBrowseTableRowFieldsFragmentDoc = gql`
    fragment PhenotypeBrowseTableRowFields on BrowsePhenotype {
  id
  name
  hpoId
  url
  assertionCount
  evidenceCount
  link
}
    `;
export const PhenotypesBrowseDocument = gql`
    query PhenotypesBrowse($ids: [Int!], $first: Int, $last: Int, $before: String, $after: String, $name: String, $hpoId: String, $sortBy: PhenotypeSort) {
  browsePhenotypes(
    ids: $ids
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    hpoId: $hpoId
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
        ...PhenotypeBrowseTableRowFields
      }
    }
  }
}
    ${PhenotypeBrowseTableRowFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PhenotypesBrowseGQL extends Apollo.Query<PhenotypesBrowseQuery, PhenotypesBrowseQueryVariables> {
    document = PhenotypesBrowseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
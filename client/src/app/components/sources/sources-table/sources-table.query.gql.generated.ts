/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type BrowseSourcesQueryVariables = Types.Exact<{
  ids?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortBy?: Types.InputMaybe<Types.SourcesSort>;
  name?: Types.InputMaybe<Types.Scalars['String']['input']>;
  year?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  sourceType?: Types.InputMaybe<Types.SourceSource>;
  citationId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  author?: Types.InputMaybe<Types.Scalars['String']['input']>;
  journal?: Types.InputMaybe<Types.Scalars['String']['input']>;
  clinicalTrialId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  openAccess?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type BrowseSourcesQuery = { __typename: 'Query', browseSources: { __typename: 'BrowseSourceConnection', totalCount: number, filteredCount: number, lastUpdated: any, pageCount: number, pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, startCursor?: string | undefined, hasPreviousPage: boolean }, edges: Array<{ __typename: 'BrowseSourceEdge', cursor: string, node?: { __typename: 'BrowseSource', id: number, authors: Array<string>, citationId: number, evidenceItemCount: number, sourceSuggestionCount: number, journal?: string | undefined, name?: string | undefined, publicationYear?: number | undefined, sourceType: Types.SourceSource, citation: string, displayType: string, link: string, openAccess: boolean, deprecated: boolean } | undefined }> } };

export type BrowseSourceRowFieldsFragment = { __typename: 'BrowseSource', id: number, authors: Array<string>, citationId: number, evidenceItemCount: number, sourceSuggestionCount: number, journal?: string | undefined, name?: string | undefined, publicationYear?: number | undefined, sourceType: Types.SourceSource, citation: string, displayType: string, link: string, openAccess: boolean, deprecated: boolean };

export const BrowseSourceRowFieldsFragmentDoc = gql`
    fragment BrowseSourceRowFields on BrowseSource {
  id
  authors
  citationId
  evidenceItemCount
  sourceSuggestionCount
  journal
  name
  publicationYear
  sourceType
  citation
  displayType
  link
  openAccess
  deprecated
}
    `;
export const BrowseSourcesDocument = gql`
    query BrowseSources($ids: [Int!], $first: Int, $last: Int, $before: String, $after: String, $sortBy: SourcesSort, $name: String, $year: Int, $sourceType: SourceSource, $citationId: Int, $author: String, $journal: String, $clinicalTrialId: Int, $openAccess: Boolean) {
  browseSources(
    ids: $ids
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    name: $name
    year: $year
    sourceType: $sourceType
    citationId: $citationId
    author: $author
    journal: $journal
    clinicalTrialId: $clinicalTrialId
    openAccess: $openAccess
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    totalCount
    filteredCount
    lastUpdated
    pageCount
    edges {
      cursor
      node {
        ...BrowseSourceRowFields
      }
    }
  }
}
    ${BrowseSourceRowFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class BrowseSourcesGQL extends Apollo.Query<BrowseSourcesQuery, BrowseSourcesQueryVariables> {
    document = BrowseSourcesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
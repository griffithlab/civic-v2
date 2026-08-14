/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type QuicksearchQueryVariables = Types.Exact<{
  query: Types.Scalars['String']['input'];
  types?: Types.InputMaybe<Array<Types.SearchableEntities> | Types.SearchableEntities>;
  highlightMatches?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type QuicksearchQuery = { __typename: 'Query', search: Array<{ __typename: 'SearchResult', id: number, resultType: Types.SearchableEntities, name: string, matchingText: string }> };

export type QuicksearchResultFragment = { __typename: 'SearchResult', id: number, resultType: Types.SearchableEntities, name: string, matchingText: string };

export const QuicksearchResultFragmentDoc = gql`
    fragment QuicksearchResult on SearchResult {
  id
  resultType
  name
  matchingText
}
    `;
export const QuicksearchDocument = gql`
    query Quicksearch($query: String!, $types: [SearchableEntities!], $highlightMatches: Boolean) {
  search(query: $query, types: $types, highlightMatches: $highlightMatches) {
    ...QuicksearchResult
  }
}
    ${QuicksearchResultFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QuicksearchGQL extends Apollo.Query<QuicksearchQuery, QuicksearchQueryVariables> {
    document = QuicksearchDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
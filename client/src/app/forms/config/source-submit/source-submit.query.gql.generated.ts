/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SubmitSourceMutationVariables = Types.Exact<{
  input: Types.SuggestSourceInput;
}>;


export type SubmitSourceMutation = { __typename: 'Mutation', suggestSource?: { __typename: 'SuggestSourcePayload', clientMutationId?: string | undefined, sourceSuggestion: { __typename: 'SourceSuggestion', id: number } } | undefined };

export type SourceSuggestionChecksQueryVariables = Types.Exact<{
  sourceId: Types.Scalars['Int']['input'];
}>;


export type SourceSuggestionChecksQuery = { __typename: 'Query', source?: { __typename: 'Source', fullyCurated: boolean } | undefined, sourceSuggestions: { __typename: 'SourceSuggestionConnection', filteredCount: number } };

export const SubmitSourceDocument = gql`
    mutation SubmitSource($input: SuggestSourceInput!) {
  suggestSource(input: $input) {
    clientMutationId
    sourceSuggestion {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SubmitSourceGQL extends Apollo.Mutation<SubmitSourceMutation, SubmitSourceMutationVariables> {
    document = SubmitSourceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SourceSuggestionChecksDocument = gql`
    query SourceSuggestionChecks($sourceId: Int!) {
  source(id: $sourceId) {
    fullyCurated
  }
  sourceSuggestions(sourceId: $sourceId) {
    filteredCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SourceSuggestionChecksGQL extends Apollo.Query<SourceSuggestionChecksQuery, SourceSuggestionChecksQueryVariables> {
    document = SourceSuggestionChecksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
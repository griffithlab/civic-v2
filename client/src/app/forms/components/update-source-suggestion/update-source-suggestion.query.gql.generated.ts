/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type UpdateSourceSuggestionMutationVariables = Types.Exact<{
  input: Types.UpdateSourceSuggestionStatusInput;
}>;


export type UpdateSourceSuggestionMutation = { __typename: 'Mutation', updateSourceSuggestionStatus?: { __typename: 'UpdateSourceSuggestionStatusPayload', sourceSuggestion: { __typename: 'SourceSuggestion', id: number, status: Types.SourceSuggestionStatus } } | undefined };

export const UpdateSourceSuggestionDocument = gql`
    mutation UpdateSourceSuggestion($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateSourceSuggestionGQL extends Apollo.Mutation<UpdateSourceSuggestionMutation, UpdateSourceSuggestionMutationVariables> {
    document = UpdateSourceSuggestionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
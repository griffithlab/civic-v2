/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SubmitAssertionMutationVariables = Types.Exact<{
  input: Types.SubmitAssertionInput;
}>;


export type SubmitAssertionMutation = { __typename: 'Mutation', submitAssertion?: { __typename: 'SubmitAssertionPayload', clientMutationId?: string | undefined, assertion: { __typename: 'Assertion', id: number } } | undefined };

export const SubmitAssertionDocument = gql`
    mutation SubmitAssertion($input: SubmitAssertionInput!) {
  submitAssertion(input: $input) {
    clientMutationId
    assertion {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SubmitAssertionGQL extends Apollo.Mutation<SubmitAssertionMutation, SubmitAssertionMutationVariables> {
    document = SubmitAssertionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
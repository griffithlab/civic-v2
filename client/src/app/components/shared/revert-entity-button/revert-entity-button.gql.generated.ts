/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ModerateEvidenceItemMutationVariables = Types.Exact<{
  input: Types.ModerateEvidenceItemInput;
}>;


export type ModerateEvidenceItemMutation = { __typename: 'Mutation', moderateEvidenceItem?: { __typename: 'ModerateEvidenceItemPayload', evidenceItem: { __typename: 'EvidenceItem', id: number } } | undefined };

export type ModerateAssertionMutationVariables = Types.Exact<{
  input: Types.ModerateAssertionInput;
}>;


export type ModerateAssertionMutation = { __typename: 'Mutation', moderateAssertion?: { __typename: 'ModerateAssertionPayload', assertion: { __typename: 'Assertion', id: number } } | undefined };

export const ModerateEvidenceItemDocument = gql`
    mutation ModerateEvidenceItem($input: ModerateEvidenceItemInput!) {
  moderateEvidenceItem(input: $input) {
    evidenceItem {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ModerateEvidenceItemGQL extends Apollo.Mutation<ModerateEvidenceItemMutation, ModerateEvidenceItemMutationVariables> {
    document = ModerateEvidenceItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ModerateAssertionDocument = gql`
    mutation ModerateAssertion($input: ModerateAssertionInput!) {
  moderateAssertion(input: $input) {
    assertion {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ModerateAssertionGQL extends Apollo.Mutation<ModerateAssertionMutation, ModerateAssertionMutationVariables> {
    document = ModerateAssertionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
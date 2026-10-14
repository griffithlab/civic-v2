/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type AcceptRevisionMutationVariables = Types.Exact<{
  input: Types.AcceptRevisionsInput;
}>;


export type AcceptRevisionMutation = { __typename: 'Mutation', acceptRevisions?: { __typename: 'AcceptRevisionsPayload', revisions: Array<{ __typename: 'Revision', id: number }> } | undefined };

export type RejectRevisionMutationVariables = Types.Exact<{
  input: Types.RejectRevisionsInput;
}>;


export type RejectRevisionMutation = { __typename: 'Mutation', rejectRevisions?: { __typename: 'RejectRevisionsPayload', revisions: Array<{ __typename: 'Revision', id: number }> } | undefined };

export type ValidateRevisionsForAcceptanceQueryVariables = Types.Exact<{
  ids: Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input'];
}>;


export type ValidateRevisionsForAcceptanceQuery = { __typename: 'Query', validateRevisionsForAcceptance: { __typename: 'ValidationErrors', genericErrors: Array<string>, validationErrors: Array<{ __typename: 'FieldValidationError', fieldName: string, error: string }> } };

export type ValidationErrorFragment = { __typename: 'FieldValidationError', fieldName: string, error: string };

export const ValidationErrorFragmentDoc = gql`
    fragment validationError on FieldValidationError {
  fieldName
  error
}
    `;
export const AcceptRevisionDocument = gql`
    mutation AcceptRevision($input: AcceptRevisionsInput!) {
  acceptRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AcceptRevisionGQL extends Apollo.Mutation<AcceptRevisionMutation, AcceptRevisionMutationVariables> {
    document = AcceptRevisionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RejectRevisionDocument = gql`
    mutation RejectRevision($input: RejectRevisionsInput!) {
  rejectRevisions(input: $input) {
    revisions {
      id
      __typename
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RejectRevisionGQL extends Apollo.Mutation<RejectRevisionMutation, RejectRevisionMutationVariables> {
    document = RejectRevisionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ValidateRevisionsForAcceptanceDocument = gql`
    query ValidateRevisionsForAcceptance($ids: [Int!]!) {
  validateRevisionsForAcceptance(revisionIds: $ids) {
    genericErrors
    validationErrors {
      ...validationError
    }
  }
}
    ${ValidationErrorFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ValidateRevisionsForAcceptanceGQL extends Apollo.Query<ValidateRevisionsForAcceptanceQuery, ValidateRevisionsForAcceptanceQueryVariables> {
    document = ValidateRevisionsForAcceptanceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
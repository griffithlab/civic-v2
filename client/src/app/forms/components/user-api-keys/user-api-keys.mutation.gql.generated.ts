/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GenerateApiKeyMutationVariables = Types.Exact<{
  input: Types.GenerateApiKeyInput;
}>;


export type GenerateApiKeyMutation = { __typename: 'Mutation', generateApiKey?: { __typename: 'GenerateApiKeyPayload', apiKey?: { __typename: 'ApiKey', id: number, reminder: string, createdAt?: any | undefined, token?: string | undefined } | undefined } | undefined };

export type RevokeApiKeyMutationVariables = Types.Exact<{
  input: Types.RevokeApiKeyInput;
}>;


export type RevokeApiKeyMutation = { __typename: 'Mutation', revokeApiKey?: { __typename: 'RevokeApiKeyPayload', success: boolean } | undefined };

export type ApiKeysQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ApiKeysQuery = { __typename: 'Query', viewer?: { __typename: 'User', apiKeys: Array<{ __typename: 'ApiKey', id: number, reminder: string, createdAt?: any | undefined, token?: string | undefined }> } | undefined };

export const GenerateApiKeyDocument = gql`
    mutation GenerateApiKey($input: GenerateApiKeyInput!) {
  generateApiKey(input: $input) {
    apiKey {
      id
      reminder
      createdAt
      token
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GenerateApiKeyGQL extends Apollo.Mutation<GenerateApiKeyMutation, GenerateApiKeyMutationVariables> {
    document = GenerateApiKeyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RevokeApiKeyDocument = gql`
    mutation RevokeApiKey($input: RevokeApiKeyInput!) {
  revokeApiKey(input: $input) {
    success
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RevokeApiKeyGQL extends Apollo.Mutation<RevokeApiKeyMutation, RevokeApiKeyMutationVariables> {
    document = RevokeApiKeyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ApiKeysDocument = gql`
    query ApiKeys {
  viewer {
    apiKeys {
      id
      reminder
      createdAt
      token
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ApiKeysGQL extends Apollo.Query<ApiKeysQuery, ApiKeysQueryVariables> {
    document = ApiKeysDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
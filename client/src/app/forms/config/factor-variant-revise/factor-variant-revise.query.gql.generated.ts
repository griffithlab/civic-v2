/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type FactorVariantRevisableFieldsQueryVariables = Types.Exact<{
  variantId: Types.Scalars['Int']['input'];
}>;


export type FactorVariantRevisableFieldsQuery = { __typename: 'Query', variant?:
    | { __typename: 'FactorVariant', id: number, name: string, variantAliases: Array<string>, ncitId?: string | undefined, feature: { __typename: 'Feature', id: number, name: string }, variantTypes: Array<{ __typename: 'VariantType', id: number, name: string, soid: string }> }
    | { __typename: 'FusionVariant', id: number }
    | { __typename: 'GeneVariant', id: number }
    | { __typename: 'RegionVariant', id: number }
    | { __typename: 'Variant', id: number }
   | undefined };

export type RevisableFactorVariantFieldsFragment = { __typename: 'FactorVariant', name: string, variantAliases: Array<string>, ncitId?: string | undefined, feature: { __typename: 'Feature', id: number, name: string }, variantTypes: Array<{ __typename: 'VariantType', id: number, name: string, soid: string }> };

export type SuggestFactorVariantRevisionMutationVariables = Types.Exact<{
  input: Types.SuggestFactorVariantRevisionInput;
}>;


export type SuggestFactorVariantRevisionMutation = { __typename: 'Mutation', suggestFactorVariantRevision?: { __typename: 'SuggestFactorVariantRevisionPayload', clientMutationId?: string | undefined, variant: { __typename: 'FactorVariant', id: number }, results: Array<{ __typename: 'RevisionResult', id: number, fieldName: string, newlyCreated: boolean }> } | undefined };

export const RevisableFactorVariantFieldsFragmentDoc = gql`
    fragment RevisableFactorVariantFields on FactorVariant {
  name
  feature {
    id
    name
  }
  variantAliases
  variantTypes {
    id
    name
    soid
  }
  ncitId
}
    `;
export const FactorVariantRevisableFieldsDocument = gql`
    query FactorVariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    id
    ... on FactorVariant {
      ...RevisableFactorVariantFields
    }
  }
}
    ${RevisableFactorVariantFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FactorVariantRevisableFieldsGQL extends Apollo.Query<FactorVariantRevisableFieldsQuery, FactorVariantRevisableFieldsQueryVariables> {
    document = FactorVariantRevisableFieldsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SuggestFactorVariantRevisionDocument = gql`
    mutation SuggestFactorVariantRevision($input: SuggestFactorVariantRevisionInput!) {
  suggestFactorVariantRevision(input: $input) {
    clientMutationId
    variant {
      id
    }
    results {
      id
      fieldName
      newlyCreated
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SuggestFactorVariantRevisionGQL extends Apollo.Mutation<SuggestFactorVariantRevisionMutation, SuggestFactorVariantRevisionMutationVariables> {
    document = SuggestFactorVariantRevisionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
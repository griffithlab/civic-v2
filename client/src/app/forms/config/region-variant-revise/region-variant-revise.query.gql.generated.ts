/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type RegionVariantRevisableFieldsQueryVariables = Types.Exact<{
  variantId: Types.Scalars['Int']['input'];
}>;


export type RegionVariantRevisableFieldsQuery = { __typename: 'Query', variant?:
    | { __typename: 'FactorVariant', id: number }
    | { __typename: 'FusionVariant', id: number }
    | { __typename: 'GeneVariant', id: number }
    | { __typename: 'RegionVariant', id: number, variantAliases: Array<string>, variantTypes: Array<{ __typename: 'VariantType', id: number, name: string, soid: string }> }
    | { __typename: 'Variant', id: number }
   | undefined };

export type RevisableRegionVariantFieldsFragment = { __typename: 'RegionVariant', variantAliases: Array<string>, variantTypes: Array<{ __typename: 'VariantType', id: number, name: string, soid: string }> };

export type SuggestRegionVariantRevisionMutationVariables = Types.Exact<{
  input: Types.SuggestRegionVariantRevisionInput;
}>;


export type SuggestRegionVariantRevisionMutation = { __typename: 'Mutation', suggestRegionVariantRevision?: { __typename: 'SuggestRegionVariantRevisionPayload', clientMutationId?: string | undefined, variant: { __typename: 'RegionVariant', id: number }, results: Array<{ __typename: 'RevisionResult', id: number, fieldName: string, newlyCreated: boolean }> } | undefined };

export const RevisableRegionVariantFieldsFragmentDoc = gql`
    fragment RevisableRegionVariantFields on RegionVariant {
  variantAliases
  variantTypes {
    id
    name
    soid
  }
}
    `;
export const RegionVariantRevisableFieldsDocument = gql`
    query RegionVariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    id
    ... on RegionVariant {
      ...RevisableRegionVariantFields
    }
  }
}
    ${RevisableRegionVariantFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RegionVariantRevisableFieldsGQL extends Apollo.Query<RegionVariantRevisableFieldsQuery, RegionVariantRevisableFieldsQueryVariables> {
    document = RegionVariantRevisableFieldsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SuggestRegionVariantRevisionDocument = gql`
    mutation SuggestRegionVariantRevision($input: SuggestRegionVariantRevisionInput!) {
  suggestRegionVariantRevision(input: $input) {
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
  export class SuggestRegionVariantRevisionGQL extends Apollo.Mutation<SuggestRegionVariantRevisionMutation, SuggestRegionVariantRevisionMutationVariables> {
    document = SuggestRegionVariantRevisionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
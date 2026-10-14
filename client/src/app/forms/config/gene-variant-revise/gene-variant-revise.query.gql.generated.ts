/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GeneVariantRevisableFieldsQueryVariables = Types.Exact<{
  variantId: Types.Scalars['Int']['input'];
}>;


export type GeneVariantRevisableFieldsQuery = { __typename: 'Query', variant?:
    | { __typename: 'FactorVariant', id: number }
    | { __typename: 'FusionVariant', id: number }
    | { __typename: 'GeneVariant', id: number, name: string, variantAliases: Array<string>, alleleRegistryId?: string | undefined, clinvarIds: Array<string>, hgvsDescriptions: Array<string>, feature: { __typename: 'Feature', id: number, name: string }, variantTypes: Array<{ __typename: 'VariantType', id: number, name: string, soid: string }>, coordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined }
    | { __typename: 'RegionVariant', id: number }
    | { __typename: 'Variant', id: number }
   | undefined };

export type RevisableGeneVariantFieldsFragment = { __typename: 'GeneVariant', name: string, variantAliases: Array<string>, alleleRegistryId?: string | undefined, clinvarIds: Array<string>, hgvsDescriptions: Array<string>, feature: { __typename: 'Feature', id: number, name: string }, variantTypes: Array<{ __typename: 'VariantType', id: number, name: string, soid: string }>, coordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined };

export type CoordinateFieldsFragment = { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType };

export type SuggestGeneVariantRevisionMutationVariables = Types.Exact<{
  input: Types.SuggestGeneVariantRevisionInput;
}>;


export type SuggestGeneVariantRevisionMutation = { __typename: 'Mutation', suggestGeneVariantRevision?: { __typename: 'SuggestGeneVariantRevisionPayload', clientMutationId?: string | undefined, variant: { __typename: 'GeneVariant', id: number }, results: Array<{ __typename: 'RevisionResult', id: number, fieldName: string, newlyCreated: boolean }> } | undefined };

export const CoordinateFieldsFragmentDoc = gql`
    fragment CoordinateFields on VariantCoordinate {
  referenceBuild
  ensemblVersion
  chromosome
  representativeTranscript
  start
  stop
  referenceBases
  variantBases
  coordinateType
}
    `;
export const RevisableGeneVariantFieldsFragmentDoc = gql`
    fragment RevisableGeneVariantFields on GeneVariant {
  name
  feature {
    id
    name
  }
  variantAliases
  alleleRegistryId
  clinvarIds
  hgvsDescriptions
  variantTypes {
    id
    name
    soid
  }
  coordinates {
    ...CoordinateFields
  }
}
    ${CoordinateFieldsFragmentDoc}`;
export const GeneVariantRevisableFieldsDocument = gql`
    query GeneVariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    id
    ... on GeneVariant {
      ...RevisableGeneVariantFields
    }
  }
}
    ${RevisableGeneVariantFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GeneVariantRevisableFieldsGQL extends Apollo.Query<GeneVariantRevisableFieldsQuery, GeneVariantRevisableFieldsQueryVariables> {
    document = GeneVariantRevisableFieldsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SuggestGeneVariantRevisionDocument = gql`
    mutation SuggestGeneVariantRevision($input: SuggestGeneVariantRevisionInput!) {
  suggestGeneVariantRevision(input: $input) {
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
  export class SuggestGeneVariantRevisionGQL extends Apollo.Mutation<SuggestGeneVariantRevisionMutation, SuggestGeneVariantRevisionMutationVariables> {
    document = SuggestGeneVariantRevisionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
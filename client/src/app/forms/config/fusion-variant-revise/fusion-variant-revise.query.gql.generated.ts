/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { FeatureInstanceRefFragmentDoc } from '../../../graphql/feature-instance.fragments.gql.generated';
import { ExonCoordinateFieldsFragmentDoc } from '../../../components/variants/coordinates-card/coordinates-card.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type FusionVariantRevisableFieldsQueryVariables = Types.Exact<{
  variantId: Types.Scalars['Int']['input'];
}>;


export type FusionVariantRevisableFieldsQuery = { __typename: 'Query', variant?:
    | { __typename: 'FactorVariant', id: number }
    | { __typename: 'FusionVariant', id: number, name: string, variantAliases: Array<string>, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, featureInstance:
          | { __typename: 'Factor', id: number }
          | { __typename: 'Fusion', fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus, id: number }
          | { __typename: 'Gene', id: number }
          | { __typename: 'Region', id: number }
         }, variantTypes: Array<{ __typename: 'VariantType', id: number, name: string, soid: string }>, fivePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined }
    | { __typename: 'GeneVariant', id: number }
    | { __typename: 'RegionVariant', id: number }
    | { __typename: 'Variant', id: number }
   | undefined };

export type RevisableFusionVariantFieldsFragment = { __typename: 'FusionVariant', name: string, variantAliases: Array<string>, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, featureInstance:
      | { __typename: 'Factor', id: number }
      | { __typename: 'Fusion', fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus, id: number }
      | { __typename: 'Gene', id: number }
      | { __typename: 'Region', id: number }
     }, variantTypes: Array<{ __typename: 'VariantType', id: number, name: string, soid: string }>, fivePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined };

export type SuggestFusionVariantRevisionMutationVariables = Types.Exact<{
  input: Types.SuggestFusionVariantRevisionInput;
}>;


export type SuggestFusionVariantRevisionMutation = { __typename: 'Mutation', suggestFusionVariantRevision?: { __typename: 'SuggestFusionVariantRevisionPayload', clientMutationId?: string | undefined, variant: { __typename: 'FusionVariant', id: number }, results: Array<{ __typename: 'RevisionResult', id: number, fieldName: string, newlyCreated: boolean }> } | undefined };

export const RevisableFusionVariantFieldsFragmentDoc = gql`
    fragment RevisableFusionVariantFields on FusionVariant {
  name
  feature {
    id
    name
    link
    deprecated
    flagged
    featureInstance {
      ...FeatureInstanceRef
      ... on Fusion {
        fivePrimePartnerStatus
        threePrimePartnerStatus
      }
    }
  }
  variantAliases
  variantTypes {
    id
    name
    soid
  }
  fivePrimeEndExonCoordinates {
    ...ExonCoordinateFields
  }
  threePrimeStartExonCoordinates {
    ...ExonCoordinateFields
  }
}
    ${FeatureInstanceRefFragmentDoc}
${ExonCoordinateFieldsFragmentDoc}`;
export const FusionVariantRevisableFieldsDocument = gql`
    query FusionVariantRevisableFields($variantId: Int!) {
  variant(id: $variantId) {
    id
    ... on FusionVariant {
      ...RevisableFusionVariantFields
    }
  }
}
    ${RevisableFusionVariantFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FusionVariantRevisableFieldsGQL extends Apollo.Query<FusionVariantRevisableFieldsQuery, FusionVariantRevisableFieldsQueryVariables> {
    document = FusionVariantRevisableFieldsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SuggestFusionVariantRevisionDocument = gql`
    mutation SuggestFusionVariantRevision($input: SuggestFusionVariantRevisionInput!) {
  suggestFusionVariantRevision(input: $input) {
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
  export class SuggestFusionVariantRevisionGQL extends Apollo.Mutation<SuggestFusionVariantRevisionMutation, SuggestFusionVariantRevisionMutationVariables> {
    document = SuggestFusionVariantRevisionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { CoordinateFieldsFragmentDoc } from '../../../forms/config/gene-variant-revise/gene-variant-revise.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type CoordinatesCardQueryVariables = Types.Exact<{
  variantId: Types.Scalars['Int']['input'];
}>;


export type CoordinatesCardQuery = { __typename: 'Query', variant?:
    | { __typename: 'FactorVariant', id: number, name: string }
    | { __typename: 'FusionVariant', id: number, name: string, fivePrimeCoordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, threePrimeCoordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, fivePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, fivePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined }
    | { __typename: 'GeneVariant', id: number, name: string, coordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined }
    | { __typename: 'RegionVariant', id: number, name: string }
    | { __typename: 'Variant', id: number, name: string }
   | undefined };

export type CoordinatesCardFields_FactorVariant_Fragment = { __typename: 'FactorVariant', id: number, name: string };

export type CoordinatesCardFields_FusionVariant_Fragment = { __typename: 'FusionVariant', id: number, name: string, fivePrimeCoordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, threePrimeCoordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, fivePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, fivePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined };

export type CoordinatesCardFields_GeneVariant_Fragment = { __typename: 'GeneVariant', id: number, name: string, coordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined };

export type CoordinatesCardFields_RegionVariant_Fragment = { __typename: 'RegionVariant', id: number, name: string };

export type CoordinatesCardFields_Variant_Fragment = { __typename: 'Variant', id: number, name: string };

export type CoordinatesCardFieldsFragment =
  | CoordinatesCardFields_FactorVariant_Fragment
  | CoordinatesCardFields_FusionVariant_Fragment
  | CoordinatesCardFields_GeneVariant_Fragment
  | CoordinatesCardFields_RegionVariant_Fragment
  | CoordinatesCardFields_Variant_Fragment
;

export type ExonCoordinateFieldsFragment = { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType };

export const ExonCoordinateFieldsFragmentDoc = gql`
    fragment ExonCoordinateFields on ExonCoordinate {
  referenceBuild
  ensemblVersion
  chromosome
  representativeTranscript
  start
  stop
  exon
  exonOffset
  exonOffsetDirection
  ensemblId
  strand
  coordinateType
}
    `;
export const CoordinatesCardFieldsFragmentDoc = gql`
    fragment CoordinatesCardFields on VariantInterface {
  id
  name
  ... on GeneVariant {
    coordinates {
      ...CoordinateFields
    }
  }
  ... on FusionVariant {
    fivePrimeCoordinates {
      ...CoordinateFields
    }
    threePrimeCoordinates {
      ...CoordinateFields
    }
    fivePrimeStartExonCoordinates {
      ...ExonCoordinateFields
    }
    fivePrimeEndExonCoordinates {
      ...ExonCoordinateFields
    }
    threePrimeStartExonCoordinates {
      ...ExonCoordinateFields
    }
    threePrimeEndExonCoordinates {
      ...ExonCoordinateFields
    }
  }
}
    ${CoordinateFieldsFragmentDoc}
${ExonCoordinateFieldsFragmentDoc}`;
export const CoordinatesCardDocument = gql`
    query CoordinatesCard($variantId: Int!) {
  variant(id: $variantId) {
    ...CoordinatesCardFields
  }
}
    ${CoordinatesCardFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CoordinatesCardGQL extends Apollo.Query<CoordinatesCardQuery, CoordinatesCardQueryVariables> {
    document = CoordinatesCardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
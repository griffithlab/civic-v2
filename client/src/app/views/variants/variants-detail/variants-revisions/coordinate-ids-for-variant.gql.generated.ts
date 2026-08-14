/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type CoordinateIdsForVariantQueryVariables = Types.Exact<{
  variantId: Types.Scalars['Int']['input'];
}>;


export type CoordinateIdsForVariantQuery = { __typename: 'Query', variant?:
    | { __typename: 'FactorVariant', openRevisionCount: number }
    | { __typename: 'FusionVariant', openRevisionCount: number, fivePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', openRevisionCount: number, id: number } | undefined, threePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', openRevisionCount: number, id: number } | undefined }
    | { __typename: 'GeneVariant', openRevisionCount: number, coordinates?: { __typename: 'VariantCoordinate', openRevisionCount: number, id: number } | undefined }
    | { __typename: 'RegionVariant', openRevisionCount: number }
    | { __typename: 'Variant', openRevisionCount: number }
   | undefined };

export type VariantCoordinateIds_FactorVariant_Fragment = { __typename: 'FactorVariant', openRevisionCount: number };

export type VariantCoordinateIds_FusionVariant_Fragment = { __typename: 'FusionVariant', openRevisionCount: number, fivePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', openRevisionCount: number, id: number } | undefined, threePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', openRevisionCount: number, id: number } | undefined };

export type VariantCoordinateIds_GeneVariant_Fragment = { __typename: 'GeneVariant', openRevisionCount: number, coordinates?: { __typename: 'VariantCoordinate', openRevisionCount: number, id: number } | undefined };

export type VariantCoordinateIds_RegionVariant_Fragment = { __typename: 'RegionVariant', openRevisionCount: number };

export type VariantCoordinateIds_Variant_Fragment = { __typename: 'Variant', openRevisionCount: number };

export type VariantCoordinateIdsFragment =
  | VariantCoordinateIds_FactorVariant_Fragment
  | VariantCoordinateIds_FusionVariant_Fragment
  | VariantCoordinateIds_GeneVariant_Fragment
  | VariantCoordinateIds_RegionVariant_Fragment
  | VariantCoordinateIds_Variant_Fragment
;

export const VariantCoordinateIdsFragmentDoc = gql`
    fragment VariantCoordinateIds on VariantInterface {
  __typename
  openRevisionCount
  ... on GeneVariant {
    coordinates {
      openRevisionCount
      id
    }
  }
  ... on FusionVariant {
    fivePrimeEndExonCoordinates {
      openRevisionCount
      id
    }
    threePrimeStartExonCoordinates {
      openRevisionCount
      id
    }
  }
}
    `;
export const CoordinateIdsForVariantDocument = gql`
    query CoordinateIdsForVariant($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantCoordinateIds
  }
}
    ${VariantCoordinateIdsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CoordinateIdsForVariantGQL extends Apollo.Query<CoordinateIdsForVariantQuery, CoordinateIdsForVariantQueryVariables> {
    document = CoordinateIdsForVariantDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
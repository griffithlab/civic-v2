/* eslint-disable */
import * as Types from '../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
export type FeatureInstanceRef_Factor_Fragment = { __typename: 'Factor', id: number };

export type FeatureInstanceRef_Fusion_Fragment = { __typename: 'Fusion', id: number };

export type FeatureInstanceRef_Gene_Fragment = { __typename: 'Gene', id: number };

export type FeatureInstanceRef_Region_Fragment = { __typename: 'Region', id: number };

export type FeatureInstanceRefFragment =
  | FeatureInstanceRef_Factor_Fragment
  | FeatureInstanceRef_Fusion_Fragment
  | FeatureInstanceRef_Gene_Fragment
  | FeatureInstanceRef_Region_Fragment
;

export const FeatureInstanceRefFragmentDoc = gql`
    fragment FeatureInstanceRef on FeatureInstance {
  __typename
  ... on Gene {
    id
  }
  ... on Factor {
    id
  }
  ... on Fusion {
    id
  }
  ... on Region {
    id
  }
}
    `;
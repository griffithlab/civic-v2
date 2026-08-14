/* eslint-disable */
import * as Types from '../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
export type LinkableDiseaseFragment = { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean };

export type LinkableVariant_FactorVariant_Fragment = { __typename: 'FactorVariant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export type LinkableVariant_FusionVariant_Fragment = { __typename: 'FusionVariant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export type LinkableVariant_GeneVariant_Fragment = { __typename: 'GeneVariant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export type LinkableVariant_RegionVariant_Fragment = { __typename: 'RegionVariant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export type LinkableVariant_Variant_Fragment = { __typename: 'Variant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export type LinkableVariantFragment =
  | LinkableVariant_FactorVariant_Fragment
  | LinkableVariant_FusionVariant_Fragment
  | LinkableVariant_GeneVariant_Fragment
  | LinkableVariant_RegionVariant_Fragment
  | LinkableVariant_Variant_Fragment
;

export const LinkableDiseaseFragmentDoc = gql`
    fragment LinkableDisease on Disease {
  id
  name
  link
  deprecated
}
    `;
export const LinkableVariantFragmentDoc = gql`
    fragment LinkableVariant on VariantInterface {
  id
  name
  link
  flagged
  deprecated
}
    `;
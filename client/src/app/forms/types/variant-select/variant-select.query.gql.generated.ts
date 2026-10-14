/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type VariantSelectTypeaheadQueryVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  featureId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type VariantSelectTypeaheadQuery = { __typename: 'Query', variantsTypeahead: Array<{ __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }> };

export type VariantSelectTagQueryVariables = Types.Exact<{
  variantId: Types.Scalars['Int']['input'];
}>;


export type VariantSelectTagQuery = { __typename: 'Query', variant?:
    | { __typename: 'FactorVariant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
    | { __typename: 'FusionVariant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
    | { __typename: 'GeneVariant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
    | { __typename: 'RegionVariant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
    | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
   | undefined };

export type VariantSelectTypeaheadFields_FactorVariant_Fragment = { __typename: 'FactorVariant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } };

export type VariantSelectTypeaheadFields_FusionVariant_Fragment = { __typename: 'FusionVariant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } };

export type VariantSelectTypeaheadFields_GeneVariant_Fragment = { __typename: 'GeneVariant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } };

export type VariantSelectTypeaheadFields_RegionVariant_Fragment = { __typename: 'RegionVariant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } };

export type VariantSelectTypeaheadFields_Variant_Fragment = { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } };

export type VariantSelectTypeaheadFieldsFragment =
  | VariantSelectTypeaheadFields_FactorVariant_Fragment
  | VariantSelectTypeaheadFields_FusionVariant_Fragment
  | VariantSelectTypeaheadFields_GeneVariant_Fragment
  | VariantSelectTypeaheadFields_RegionVariant_Fragment
  | VariantSelectTypeaheadFields_Variant_Fragment
;

export const VariantSelectTypeaheadFieldsFragmentDoc = gql`
    fragment VariantSelectTypeaheadFields on VariantInterface {
  id
  name
  link
  deprecated
  variantAliases
  singleVariantMolecularProfileId
  singleVariantMolecularProfile {
    id
    name
    link
    molecularProfileAliases
  }
}
    `;
export const VariantSelectTypeaheadDocument = gql`
    query VariantSelectTypeahead($name: String!, $featureId: Int) {
  variantsTypeahead(queryTerm: $name, featureId: $featureId) {
    ...VariantSelectTypeaheadFields
  }
}
    ${VariantSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantSelectTypeaheadGQL extends Apollo.Query<VariantSelectTypeaheadQuery, VariantSelectTypeaheadQueryVariables> {
    document = VariantSelectTypeaheadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const VariantSelectTagDocument = gql`
    query VariantSelectTag($variantId: Int!) {
  variant(id: $variantId) {
    ... on Variant {
      ...VariantSelectTypeaheadFields
    }
    ... on GeneVariant {
      ...VariantSelectTypeaheadFields
    }
    ... on FactorVariant {
      ...VariantSelectTypeaheadFields
    }
    ... on FusionVariant {
      ...VariantSelectTypeaheadFields
    }
    ... on RegionVariant {
      ...VariantSelectTypeaheadFields
    }
  }
}
    ${VariantSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantSelectTagGQL extends Apollo.Query<VariantSelectTagQuery, VariantSelectTagQueryVariables> {
    document = VariantSelectTagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
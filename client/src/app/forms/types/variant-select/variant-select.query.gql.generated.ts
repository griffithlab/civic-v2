/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { LinkableVariantFragmentDoc } from '../../../tags/linkable.fragments.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type VariantSelectTypeaheadQueryVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  featureId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type VariantSelectTypeaheadQuery = { __typename: 'Query', variantsTypeahead: Array<{ __typename: 'Variant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }> };

export type VariantSelectTagQueryVariables = Types.Exact<{
  variantId: Types.Scalars['Int']['input'];
}>;


export type VariantSelectTagQuery = { __typename: 'Query', variant?:
    | { __typename: 'FactorVariant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
    | { __typename: 'FusionVariant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
    | { __typename: 'GeneVariant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
    | { __typename: 'RegionVariant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
    | { __typename: 'Variant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
   | undefined };

export type VariantSelectTypeaheadFields_FactorVariant_Fragment = { __typename: 'FactorVariant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } };

export type VariantSelectTypeaheadFields_FusionVariant_Fragment = { __typename: 'FusionVariant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } };

export type VariantSelectTypeaheadFields_GeneVariant_Fragment = { __typename: 'GeneVariant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } };

export type VariantSelectTypeaheadFields_RegionVariant_Fragment = { __typename: 'RegionVariant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } };

export type VariantSelectTypeaheadFields_Variant_Fragment = { __typename: 'Variant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } };

export type VariantSelectTypeaheadFieldsFragment =
  | VariantSelectTypeaheadFields_FactorVariant_Fragment
  | VariantSelectTypeaheadFields_FusionVariant_Fragment
  | VariantSelectTypeaheadFields_GeneVariant_Fragment
  | VariantSelectTypeaheadFields_RegionVariant_Fragment
  | VariantSelectTypeaheadFields_Variant_Fragment
;

export const VariantSelectTypeaheadFieldsFragmentDoc = gql`
    fragment VariantSelectTypeaheadFields on VariantInterface {
  ...LinkableVariant
  variantAliases
  singleVariantMolecularProfileId
  singleVariantMolecularProfile {
    id
    name
    link
    molecularProfileAliases
  }
}
    ${LinkableVariantFragmentDoc}`;
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
    ...VariantSelectTypeaheadFields
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
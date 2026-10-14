/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { VariantSelectTypeaheadFieldsFragmentDoc } from '../variant-select.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SelectOrCreateRegionVariantMutationVariables = Types.Exact<{
  organizationId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  featureId: Types.Scalars['Int']['input'];
  name: Types.RegionVariantName;
}>;


export type SelectOrCreateRegionVariantMutation = { __typename: 'Mutation', createRegionVariant?: { __typename: 'CreateRegionVariantPayload', clientMutationId?: string | undefined, new: boolean, variant:
      | { __typename: 'FactorVariant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
      | { __typename: 'FusionVariant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
      | { __typename: 'GeneVariant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
      | { __typename: 'RegionVariant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
      | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
     } | undefined };

export type CreateRegionVariantFieldsFragment = { __typename: 'CreateRegionVariantPayload', clientMutationId?: string | undefined, new: boolean, variant:
    | { __typename: 'FactorVariant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
    | { __typename: 'FusionVariant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
    | { __typename: 'GeneVariant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
    | { __typename: 'RegionVariant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
    | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
   };

export const CreateRegionVariantFieldsFragmentDoc = gql`
    fragment CreateRegionVariantFields on CreateRegionVariantPayload {
  clientMutationId
  new
  variant {
    ...VariantSelectTypeaheadFields
  }
}
    ${VariantSelectTypeaheadFieldsFragmentDoc}`;
export const SelectOrCreateRegionVariantDocument = gql`
    mutation SelectOrCreateRegionVariant($organizationId: Int, $featureId: Int!, $name: RegionVariantName!) {
  createRegionVariant(
    input: {organizationId: $organizationId, featureId: $featureId, name: $name}
  ) {
    ...CreateRegionVariantFields
  }
}
    ${CreateRegionVariantFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SelectOrCreateRegionVariantGQL extends Apollo.Mutation<SelectOrCreateRegionVariantMutation, SelectOrCreateRegionVariantMutationVariables> {
    document = SelectOrCreateRegionVariantDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
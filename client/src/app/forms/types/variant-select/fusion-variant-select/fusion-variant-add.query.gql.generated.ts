/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { VariantSelectTypeaheadFieldsFragmentDoc } from '../variant-select.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SelectOrCreateFusionVariantMutationVariables = Types.Exact<{
  organizationId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  featureId: Types.Scalars['Int']['input'];
  coordinates: Types.FusionVariantInput;
}>;


export type SelectOrCreateFusionVariantMutation = { __typename: 'Mutation', createFusionVariant?: { __typename: 'CreateFusionVariantPayload', clientMutationId?: string | undefined, new: boolean, variant:
      | { __typename: 'FactorVariant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
      | { __typename: 'FusionVariant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
      | { __typename: 'GeneVariant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
      | { __typename: 'RegionVariant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
      | { __typename: 'Variant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
     } | undefined };

export type CreateFusionVariantFieldsFragment = { __typename: 'CreateFusionVariantPayload', clientMutationId?: string | undefined, new: boolean, variant:
    | { __typename: 'FactorVariant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
    | { __typename: 'FusionVariant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
    | { __typename: 'GeneVariant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
    | { __typename: 'RegionVariant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
    | { __typename: 'Variant', variantAliases: Array<string>, singleVariantMolecularProfileId: number, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } }
   };

export const CreateFusionVariantFieldsFragmentDoc = gql`
    fragment CreateFusionVariantFields on CreateFusionVariantPayload {
  clientMutationId
  new
  variant {
    ...VariantSelectTypeaheadFields
  }
}
    ${VariantSelectTypeaheadFieldsFragmentDoc}`;
export const SelectOrCreateFusionVariantDocument = gql`
    mutation SelectOrCreateFusionVariant($organizationId: Int, $featureId: Int!, $coordinates: FusionVariantInput!) {
  createFusionVariant(
    input: {organizationId: $organizationId, featureId: $featureId, coordinates: $coordinates}
  ) {
    ...CreateFusionVariantFields
  }
}
    ${CreateFusionVariantFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SelectOrCreateFusionVariantGQL extends Apollo.Mutation<SelectOrCreateFusionVariantMutation, SelectOrCreateFusionVariantMutationVariables> {
    document = SelectOrCreateFusionVariantDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
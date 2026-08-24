/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type VariantGroupSubmittableFieldsQueryVariables = Types.Exact<{
  variantGroupId: Types.Scalars['Int']['input'];
}>;


export type VariantGroupSubmittableFieldsQuery = { __typename: 'Query', variantGroup?: { __typename: 'VariantGroup', id: number, name: string, description: string, variants: { __typename: 'VariantInterfaceConnection', nodes: Array<
        | { __typename: 'FactorVariant', id: number, name: string, link: string, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string } }
        | { __typename: 'FusionVariant', id: number, name: string, link: string, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string } }
        | { __typename: 'GeneVariant', id: number, name: string, link: string, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string } }
        | { __typename: 'RegionVariant', id: number, name: string, link: string, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string } }
        | { __typename: 'Variant', id: number, name: string, link: string, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string } }
      > }, sources: Array<{ __typename: 'Source', id: number, link: string, citation?: string | undefined, sourceType: Types.SourceSource }> } | undefined };

export type SubmittableVariantGroupFieldsFragment = { __typename: 'VariantGroup', id: number, name: string, description: string, variants: { __typename: 'VariantInterfaceConnection', nodes: Array<
      | { __typename: 'FactorVariant', id: number, name: string, link: string, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string } }
      | { __typename: 'FusionVariant', id: number, name: string, link: string, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string } }
      | { __typename: 'GeneVariant', id: number, name: string, link: string, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string } }
      | { __typename: 'RegionVariant', id: number, name: string, link: string, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string } }
      | { __typename: 'Variant', id: number, name: string, link: string, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string } }
    > }, sources: Array<{ __typename: 'Source', id: number, link: string, citation?: string | undefined, sourceType: Types.SourceSource }> };

export type SubmitVariantGroupMutationVariables = Types.Exact<{
  input: Types.SubmitVariantGroupInput;
}>;


export type SubmitVariantGroupMutation = { __typename: 'Mutation', submitVariantGroup?: { __typename: 'SubmitVariantGroupPayload', clientMutationId?: string | undefined, variantGroup: { __typename: 'VariantGroup', id: number } } | undefined };

export const SubmittableVariantGroupFieldsFragmentDoc = gql`
    fragment SubmittableVariantGroupFields on VariantGroup {
  id
  name
  description
  variants(first: 50) {
    nodes {
      id
      name
      link
      singleVariantMolecularProfile {
        id
        name
        link
      }
    }
  }
  sources {
    id
    link
    citation
    sourceType
  }
}
    `;
export const VariantGroupSubmittableFieldsDocument = gql`
    query VariantGroupSubmittableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...SubmittableVariantGroupFields
  }
}
    ${SubmittableVariantGroupFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantGroupSubmittableFieldsGQL extends Apollo.Query<VariantGroupSubmittableFieldsQuery, VariantGroupSubmittableFieldsQueryVariables> {
    document = VariantGroupSubmittableFieldsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SubmitVariantGroupDocument = gql`
    mutation SubmitVariantGroup($input: SubmitVariantGroupInput!) {
  submitVariantGroup(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SubmitVariantGroupGQL extends Apollo.Mutation<SubmitVariantGroupMutation, SubmitVariantGroupMutationVariables> {
    document = SubmitVariantGroupDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
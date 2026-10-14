/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { VariantSelectTypeaheadFieldsFragmentDoc } from '../variant-select.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type QuickAddVariantMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  featureId: Types.Scalars['Int']['input'];
  organizationId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type QuickAddVariantMutation = { __typename: 'Mutation', createVariant?: { __typename: 'CreateVariantPayload', clientMutationId?: string | undefined, new: boolean, variant: { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } } } | undefined };

export type QuickAddVariantFieldsFragment = { __typename: 'CreateVariantPayload', clientMutationId?: string | undefined, new: boolean, variant: { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, variantAliases: Array<string>, singleVariantMolecularProfileId: number, singleVariantMolecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string> } } };

export const QuickAddVariantFieldsFragmentDoc = gql`
    fragment QuickAddVariantFields on CreateVariantPayload {
  clientMutationId
  new
  variant {
    ...VariantSelectTypeaheadFields
  }
}
    ${VariantSelectTypeaheadFieldsFragmentDoc}`;
export const QuickAddVariantDocument = gql`
    mutation QuickAddVariant($name: String!, $featureId: Int!, $organizationId: Int) {
  createVariant(
    input: {name: $name, featureId: $featureId, organizationId: $organizationId}
  ) {
    ...QuickAddVariantFields
  }
}
    ${QuickAddVariantFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QuickAddVariantGQL extends Apollo.Mutation<QuickAddVariantMutation, QuickAddVariantMutationVariables> {
    document = QuickAddVariantDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
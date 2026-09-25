/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeprecateVariantMutationVariables = Types.Exact<{
  variantId: Types.Scalars['Int']['input'];
  deprecationReason: Types.VariantDeprecationReason;
  comment: Types.Scalars['String']['input'];
  organizationId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type DeprecateVariantMutation = { __typename: 'Mutation', deprecateVariant?: { __typename: 'DeprecateVariantPayload', newlyDeprecatedMolecularProfiles?: Array<{ __typename: 'MolecularProfile', id: number }> | undefined, variant?:
      | { __typename: 'FactorVariant', id: number, name: string }
      | { __typename: 'FusionVariant', id: number, name: string }
      | { __typename: 'GeneVariant', id: number, name: string }
      | { __typename: 'RegionVariant', id: number, name: string }
      | { __typename: 'Variant', id: number, name: string }
     | undefined } | undefined };

export type MolecularProfilesForVariantQueryVariables = Types.Exact<{
  variantId: Types.Scalars['Int']['input'];
}>;


export type MolecularProfilesForVariantQuery = { __typename: 'Query', molecularProfiles: { __typename: 'MolecularProfileConnection', nodes: Array<{ __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, evidenceCountsByStatus: { __typename: 'EvidenceItemsByStatus', submittedCount: number, acceptedCount: number } }> } };

export const DeprecateVariantDocument = gql`
    mutation DeprecateVariant($variantId: Int!, $deprecationReason: VariantDeprecationReason!, $comment: String!, $organizationId: Int) {
  deprecateVariant(
    input: {variantId: $variantId, deprecationReason: $deprecationReason, comment: $comment, organizationId: $organizationId}
  ) {
    newlyDeprecatedMolecularProfiles {
      id
    }
    variant {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeprecateVariantGQL extends Apollo.Mutation<DeprecateVariantMutation, DeprecateVariantMutationVariables> {
    document = DeprecateVariantDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MolecularProfilesForVariantDocument = gql`
    query MolecularProfilesForVariant($variantId: Int!) {
  molecularProfiles(variantId: $variantId, first: 50) {
    nodes {
      id
      name
      link
      evidenceCountsByStatus {
        submittedCount
        acceptedCount
      }
      deprecated
      flagged
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class MolecularProfilesForVariantGQL extends Apollo.Query<MolecularProfilesForVariantQuery, MolecularProfilesForVariantQueryVariables> {
    document = MolecularProfilesForVariantDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
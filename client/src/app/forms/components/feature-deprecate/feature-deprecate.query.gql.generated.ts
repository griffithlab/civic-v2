/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeprecateFeatureMutationVariables = Types.Exact<{
  featureId: Types.Scalars['Int']['input'];
  deprecationReason: Types.FeatureDeprecationReason;
  comment: Types.Scalars['String']['input'];
  organizationId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type DeprecateFeatureMutation = { __typename: 'Mutation', deprecateFeature?: { __typename: 'DeprecateFeaturePayload', feature?: { __typename: 'Feature', id: number, name: string } | undefined } | undefined };

export type VariantsForFeatureQueryVariables = Types.Exact<{
  featureId: Types.Scalars['Int']['input'];
}>;


export type VariantsForFeatureQuery = { __typename: 'Query', variants: { __typename: 'VariantInterfaceConnection', nodes: Array<
      | { __typename: 'FactorVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      | { __typename: 'FusionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      | { __typename: 'GeneVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      | { __typename: 'RegionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
    > } };

export const DeprecateFeatureDocument = gql`
    mutation DeprecateFeature($featureId: Int!, $deprecationReason: FeatureDeprecationReason!, $comment: String!, $organizationId: Int) {
  deprecateFeature(
    input: {featureId: $featureId, deprecationReason: $deprecationReason, comment: $comment, organizationId: $organizationId}
  ) {
    feature {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeprecateFeatureGQL extends Apollo.Mutation<DeprecateFeatureMutation, DeprecateFeatureMutationVariables> {
    document = DeprecateFeatureDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const VariantsForFeatureDocument = gql`
    query VariantsForFeature($featureId: Int!) {
  variants(featureId: $featureId, first: 50) {
    nodes {
      id
      name
      link
      deprecated
      flagged
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantsForFeatureGQL extends Apollo.Query<VariantsForFeatureQuery, VariantsForFeatureQueryVariables> {
    document = VariantsForFeatureDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type VariantsMenuQueryVariables = Types.Exact<{
  featureId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  variantName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  variantTypeIds?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  hasNoVariantType?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortBy?: Types.InputMaybe<Types.VariantMenuSort>;
}>;


export type VariantsMenuQuery = { __typename: 'Query', variants: { __typename: 'VariantInterfaceConnection', totalCount: number, pageInfo: { __typename: 'PageInfo', startCursor?: string | undefined, endCursor?: string | undefined, hasPreviousPage: boolean, hasNextPage: boolean }, edges: Array<{ __typename: 'VariantInterfaceEdge', cursor: string, node?:
        | { __typename: 'FactorVariant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean }
        | { __typename: 'FusionVariant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean }
        | { __typename: 'GeneVariant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean }
        | { __typename: 'RegionVariant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean }
        | { __typename: 'Variant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean }
       | undefined }> } };

export type VariantTypesForFeatureQueryVariables = Types.Exact<{
  featureId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type VariantTypesForFeatureQuery = { __typename: 'Query', variantTypes: { __typename: 'BrowseVariantTypeConnection', edges: Array<{ __typename: 'BrowseVariantTypeEdge', node?: { __typename: 'BrowseVariantType', id: number, name: string, link: string } | undefined }> } };

export type MenuVariantTypeFragment = { __typename: 'BrowseVariantType', id: number, name: string, link: string };

export type MenuVariant_FactorVariant_Fragment = { __typename: 'FactorVariant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export type MenuVariant_FusionVariant_Fragment = { __typename: 'FusionVariant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export type MenuVariant_GeneVariant_Fragment = { __typename: 'GeneVariant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export type MenuVariant_RegionVariant_Fragment = { __typename: 'RegionVariant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export type MenuVariant_Variant_Fragment = { __typename: 'Variant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export type MenuVariantFragment =
  | MenuVariant_FactorVariant_Fragment
  | MenuVariant_FusionVariant_Fragment
  | MenuVariant_GeneVariant_Fragment
  | MenuVariant_RegionVariant_Fragment
  | MenuVariant_Variant_Fragment
;

export const MenuVariantTypeFragmentDoc = gql`
    fragment menuVariantType on BrowseVariantType {
  id
  name
  link
}
    `;
export const MenuVariantFragmentDoc = gql`
    fragment menuVariant on VariantInterface {
  id
  name
  link
  flagged
  deprecated
}
    `;
export const VariantsMenuDocument = gql`
    query VariantsMenu($featureId: Int, $variantName: String, $variantTypeIds: [Int!], $hasNoVariantType: Boolean, $first: Int, $last: Int, $before: String, $after: String, $sortBy: VariantMenuSort) {
  variants(
    featureId: $featureId
    name: $variantName
    variantTypeIds: $variantTypeIds
    hasNoVariantType: $hasNoVariantType
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    edges {
      cursor
      node {
        ...menuVariant
      }
    }
  }
}
    ${MenuVariantFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantsMenuGQL extends Apollo.Query<VariantsMenuQuery, VariantsMenuQueryVariables> {
    document = VariantsMenuDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const VariantTypesForFeatureDocument = gql`
    query VariantTypesForFeature($featureId: Int) {
  variantTypes(featureId: $featureId, first: 50) {
    edges {
      node {
        ...menuVariantType
      }
    }
  }
}
    ${MenuVariantTypeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantTypesForFeatureGQL extends Apollo.Query<VariantTypesForFeatureQuery, VariantTypesForFeatureQueryVariables> {
    document = VariantTypesForFeatureDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
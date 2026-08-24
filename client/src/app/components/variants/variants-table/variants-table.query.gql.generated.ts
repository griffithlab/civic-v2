/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type BrowseVariantsQueryVariables = Types.Exact<{
  ids?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  variantName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  featureName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  diseaseName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  therapyName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  variantAlias?: Types.InputMaybe<Types.Scalars['String']['input']>;
  variantTypeId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  variantGroupId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  variantTypeName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  hasNoVariantType?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  category?: Types.InputMaybe<Types.VariantCategories>;
  sortBy?: Types.InputMaybe<Types.VariantsSort>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type BrowseVariantsQuery = { __typename: 'Query', browseVariants: { __typename: 'BrowseVariantConnection', totalCount: number, filteredCount: number, pageCount: number, lastUpdated: any, pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, startCursor?: string | undefined, hasPreviousPage: boolean }, edges: Array<{ __typename: 'BrowseVariantEdge', cursor: string, node?: { __typename: 'BrowseVariant', id: number, name: string, link: string, featureId: number, featureName: string, featureLink: string, category: Types.VariantCategories, evidenceItemCount: number, featureDeprecated: boolean, featureFlagged: boolean, deprecated: boolean, flagged: boolean, diseases: Array<{ __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean }>, therapies: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }>, aliases: Array<{ __typename: 'VariantAlias', name: string }>, variantTypes: Array<{ __typename: 'LinkableVariantType', id: number, name: string, link: string }> } | undefined }> } };

export type BrowseVariantsFieldsFragment = { __typename: 'BrowseVariant', id: number, name: string, link: string, featureId: number, featureName: string, featureLink: string, category: Types.VariantCategories, evidenceItemCount: number, featureDeprecated: boolean, featureFlagged: boolean, deprecated: boolean, flagged: boolean, diseases: Array<{ __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean }>, therapies: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }>, aliases: Array<{ __typename: 'VariantAlias', name: string }>, variantTypes: Array<{ __typename: 'LinkableVariantType', id: number, name: string, link: string }> };

export const BrowseVariantsFieldsFragmentDoc = gql`
    fragment BrowseVariantsFields on BrowseVariant {
  id
  name
  link
  featureId
  featureName
  featureLink
  category
  evidenceItemCount
  featureDeprecated
  featureFlagged
  diseases {
    id
    name
    link
    deprecated
  }
  therapies {
    id
    name
    link
    deprecated
  }
  aliases {
    name
  }
  variantTypes {
    id
    name
    link
  }
  deprecated
  flagged
}
    `;
export const BrowseVariantsDocument = gql`
    query BrowseVariants($ids: [Int!], $variantName: String, $featureName: String, $diseaseName: String, $therapyName: String, $variantAlias: String, $variantTypeId: Int, $variantGroupId: Int, $variantTypeName: String, $hasNoVariantType: Boolean, $category: VariantCategories, $sortBy: VariantsSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseVariants(
    ids: $ids
    variantName: $variantName
    featureName: $featureName
    diseaseName: $diseaseName
    therapyName: $therapyName
    variantAlias: $variantAlias
    variantTypeId: $variantTypeId
    variantGroupId: $variantGroupId
    variantTypeName: $variantTypeName
    hasNoVariantType: $hasNoVariantType
    category: $category
    sortBy: $sortBy
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    edges {
      cursor
      node {
        ...BrowseVariantsFields
      }
    }
    totalCount
    filteredCount
    pageCount
    lastUpdated
  }
}
    ${BrowseVariantsFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class BrowseVariantsGQL extends Apollo.Query<BrowseVariantsQuery, BrowseVariantsQueryVariables> {
    document = BrowseVariantsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
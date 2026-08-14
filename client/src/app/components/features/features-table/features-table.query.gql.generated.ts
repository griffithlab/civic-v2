/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type BrowseFeaturesQueryVariables = Types.Exact<{
  ids?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  featureName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  featureFullName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  therapyName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  featureAlias?: Types.InputMaybe<Types.Scalars['String']['input']>;
  diseaseName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  featureType?: Types.InputMaybe<Types.FeatureInstanceTypes>;
  sortBy?: Types.InputMaybe<Types.FeaturesSort>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type BrowseFeaturesQuery = { __typename: 'Query', browseFeatures: { __typename: 'BrowseFeatureConnection', lastUpdated: any, totalCount: number, filteredCount: number, pageCount: number, edges: Array<{ __typename: 'BrowseFeatureEdge', cursor: string, node?: { __typename: 'BrowseFeature', id: number, name: string, fullName?: string | undefined, link: string, deprecated: boolean, flagged: boolean, featureAliases?: Array<string> | undefined, variantCount: number, evidenceItemCount: number, assertionCount: number, molecularProfileCount: number, featureInstanceType: Types.FeatureInstanceTypes, diseases?: Array<{ __typename: 'Disease', name: string, id: number, link: string, deprecated: boolean }> | undefined, therapies?: Array<{ __typename: 'Therapy', name: string, id: number, link: string, deprecated: boolean }> | undefined } | undefined }>, pageInfo: { __typename: 'PageInfo', startCursor?: string | undefined, endCursor?: string | undefined, hasPreviousPage: boolean, hasNextPage: boolean } } };

export type BrowseFeaturesFieldsFragment = { __typename: 'BrowseFeature', id: number, name: string, fullName?: string | undefined, link: string, deprecated: boolean, flagged: boolean, featureAliases?: Array<string> | undefined, variantCount: number, evidenceItemCount: number, assertionCount: number, molecularProfileCount: number, featureInstanceType: Types.FeatureInstanceTypes, diseases?: Array<{ __typename: 'Disease', name: string, id: number, link: string, deprecated: boolean }> | undefined, therapies?: Array<{ __typename: 'Therapy', name: string, id: number, link: string, deprecated: boolean }> | undefined };

export const BrowseFeaturesFieldsFragmentDoc = gql`
    fragment BrowseFeaturesFields on BrowseFeature {
  id
  name
  fullName
  link
  deprecated
  flagged
  featureAliases
  diseases {
    name
    id
    link
    deprecated
  }
  therapies {
    name
    id
    link
    deprecated
  }
  variantCount
  evidenceItemCount
  assertionCount
  molecularProfileCount
  featureInstanceType
}
    `;
export const BrowseFeaturesDocument = gql`
    query BrowseFeatures($ids: [Int!], $featureName: String, $featureFullName: String, $therapyName: String, $featureAlias: String, $diseaseName: String, $featureType: FeatureInstanceTypes, $sortBy: FeaturesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseFeatures(
    ids: $ids
    featureName: $featureName
    featureFullName: $featureFullName
    therapyName: $therapyName
    featureAlias: $featureAlias
    diseaseName: $diseaseName
    featureType: $featureType
    sortBy: $sortBy
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    edges {
      cursor
      node {
        ...BrowseFeaturesFields
      }
    }
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    lastUpdated
    totalCount
    filteredCount
    pageCount
  }
}
    ${BrowseFeaturesFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class BrowseFeaturesGQL extends Apollo.Query<BrowseFeaturesQuery, BrowseFeaturesQueryVariables> {
    document = BrowseFeaturesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
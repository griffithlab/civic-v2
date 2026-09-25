/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DiseaseBrowseQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortBy?: Types.InputMaybe<Types.DiseasesSort>;
  name?: Types.InputMaybe<Types.Scalars['String']['input']>;
  doid?: Types.InputMaybe<Types.Scalars['String']['input']>;
  ids?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  diseaseAlias?: Types.InputMaybe<Types.Scalars['String']['input']>;
  featureName?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type DiseaseBrowseQuery = { __typename: 'Query', browseDiseases: { __typename: 'BrowseDiseaseConnection', lastUpdated: any, totalCount: number, filteredCount: number, pageCount: number, pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined }, edges: Array<{ __typename: 'BrowseDiseaseEdge', cursor: string, node?: { __typename: 'BrowseDisease', id: number, name: string, doid?: string | undefined, diseaseUrl?: string | undefined, assertionCount: number, evidenceItemCount: number, variantCount: number, featureCount: number, link: string, deprecated: boolean, diseaseAliases?: Array<string> | undefined, features: Array<{ __typename: 'LinkableFeature', id: number, name: string, link: string }> } | undefined }> } };

export type BrowseDiseaseRowFieldsFragment = { __typename: 'BrowseDisease', id: number, name: string, doid?: string | undefined, diseaseUrl?: string | undefined, assertionCount: number, evidenceItemCount: number, variantCount: number, featureCount: number, link: string, deprecated: boolean, diseaseAliases?: Array<string> | undefined, features: Array<{ __typename: 'LinkableFeature', id: number, name: string, link: string }> };

export const BrowseDiseaseRowFieldsFragmentDoc = gql`
    fragment BrowseDiseaseRowFields on BrowseDisease {
  id
  name
  doid
  diseaseUrl
  features {
    id
    name
    link
  }
  assertionCount
  evidenceItemCount
  variantCount
  featureCount
  link
  deprecated
  diseaseAliases
}
    `;
export const DiseaseBrowseDocument = gql`
    query DiseaseBrowse($first: Int, $last: Int, $before: String, $after: String, $sortBy: DiseasesSort, $name: String, $doid: String, $ids: [Int!], $diseaseAlias: String, $featureName: String) {
  browseDiseases(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    name: $name
    doid: $doid
    ids: $ids
    diseaseAlias: $diseaseAlias
    featureName: $featureName
  ) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    lastUpdated
    totalCount
    filteredCount
    pageCount
    edges {
      cursor
      node {
        ...BrowseDiseaseRowFields
      }
    }
  }
}
    ${BrowseDiseaseRowFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class DiseaseBrowseGQL extends Apollo.Query<DiseaseBrowseQuery, DiseaseBrowseQueryVariables> {
    document = DiseaseBrowseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
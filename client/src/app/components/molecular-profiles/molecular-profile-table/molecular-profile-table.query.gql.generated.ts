/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type BrowseMolecularProfilesQueryVariables = Types.Exact<{
  ids?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  molecularProfileName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  variantName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  variantId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  featureName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  diseaseName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  therapyName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  molecularProfileAlias?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortBy?: Types.InputMaybe<Types.MolecularProfilesSort>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type BrowseMolecularProfilesQuery = { __typename: 'Query', browseMolecularProfiles: { __typename: 'BrowseMolecularProfileConnection', lastUpdated: any, filteredCount: number, pageCount: number, pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, startCursor?: string | undefined, hasPreviousPage: boolean }, edges: Array<{ __typename: 'BrowseMolecularProfileEdge', cursor: string, node?: { __typename: 'BrowseMolecularProfile', id: number, name: string, evidenceItemCount: number, molecularProfileScore: number, assertionCount: number, variantCount: number, link: string, deprecated: boolean, aliases: Array<{ __typename: 'MolecularProfileAlias', name: string }>, variants: Array<{ __typename: 'LinkableVariant', id: number, name: string, link: string, matchText?: string | undefined, feature?: { __typename: 'LinkableFeature', id: number, link: string, name: string } | undefined }>, therapies: Array<{ __typename: 'LinkableTherapy', id: number, name: string, link: string, deprecated: boolean }>, diseases: Array<{ __typename: 'LinkableDisease', id: number, name: string, link: string, deprecated: boolean }> } | undefined }> } };

export type BrowseMolecularProfilesFieldsFragment = { __typename: 'BrowseMolecularProfile', id: number, name: string, evidenceItemCount: number, molecularProfileScore: number, assertionCount: number, variantCount: number, link: string, deprecated: boolean, aliases: Array<{ __typename: 'MolecularProfileAlias', name: string }>, variants: Array<{ __typename: 'LinkableVariant', id: number, name: string, link: string, matchText?: string | undefined, feature?: { __typename: 'LinkableFeature', id: number, link: string, name: string } | undefined }>, therapies: Array<{ __typename: 'LinkableTherapy', id: number, name: string, link: string, deprecated: boolean }>, diseases: Array<{ __typename: 'LinkableDisease', id: number, name: string, link: string, deprecated: boolean }> };

export const BrowseMolecularProfilesFieldsFragmentDoc = gql`
    fragment BrowseMolecularProfilesFields on BrowseMolecularProfile {
  id
  name
  evidenceItemCount
  molecularProfileScore
  assertionCount
  variantCount
  aliases {
    name
  }
  variants {
    id
    name
    link
    matchText
    feature {
      id
      link
      name
    }
  }
  therapies {
    id
    name
    link
    deprecated
  }
  diseases {
    id
    name
    link
    deprecated
  }
  link
  deprecated
}
    `;
export const BrowseMolecularProfilesDocument = gql`
    query BrowseMolecularProfiles($ids: [Int!], $molecularProfileName: String, $variantName: String, $variantId: Int, $featureName: String, $diseaseName: String, $therapyName: String, $molecularProfileAlias: String, $sortBy: MolecularProfilesSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseMolecularProfiles(
    ids: $ids
    molecularProfileName: $molecularProfileName
    variantName: $variantName
    variantId: $variantId
    featureName: $featureName
    diseaseName: $diseaseName
    therapyName: $therapyName
    molecularProfileAlias: $molecularProfileAlias
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
        ...BrowseMolecularProfilesFields
      }
    }
    lastUpdated
    filteredCount
    pageCount
  }
}
    ${BrowseMolecularProfilesFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class BrowseMolecularProfilesGQL extends Apollo.Query<BrowseMolecularProfilesQuery, BrowseMolecularProfilesQueryVariables> {
    document = BrowseMolecularProfilesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
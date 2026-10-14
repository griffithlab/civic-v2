/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type TherapiesBrowseQueryVariables = Types.Exact<{
  ids?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  name?: Types.InputMaybe<Types.Scalars['String']['input']>;
  ncitId?: Types.InputMaybe<Types.Scalars['String']['input']>;
  therapyAlias?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortBy?: Types.InputMaybe<Types.TherapySort>;
}>;


export type TherapiesBrowseQuery = { __typename: 'Query', browseTherapies: { __typename: 'BrowseTherapyConnection', totalCount: number, filteredCount: number, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined, endCursor?: string | undefined }, edges: Array<{ __typename: 'BrowseTherapyEdge', cursor: string, node?: { __typename: 'BrowseTherapy', id: number, name: string, ncitId?: string | undefined, therapyUrl?: string | undefined, assertionCount: number, evidenceCount: number, link: string, deprecated: boolean, therapyAliases?: Array<string> | undefined } | undefined }> } };

export type TherapyBrowseTableRowFieldsFragment = { __typename: 'BrowseTherapy', id: number, name: string, ncitId?: string | undefined, therapyUrl?: string | undefined, assertionCount: number, evidenceCount: number, link: string, deprecated: boolean, therapyAliases?: Array<string> | undefined };

export const TherapyBrowseTableRowFieldsFragmentDoc = gql`
    fragment TherapyBrowseTableRowFields on BrowseTherapy {
  id
  name
  ncitId
  therapyUrl
  assertionCount
  evidenceCount
  link
  deprecated
  therapyAliases
}
    `;
export const TherapiesBrowseDocument = gql`
    query TherapiesBrowse($ids: [Int!], $first: Int, $last: Int, $before: String, $after: String, $name: String, $ncitId: String, $therapyAlias: String, $sortBy: TherapySort) {
  browseTherapies(
    ids: $ids
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    ncitId: $ncitId
    therapyAlias: $therapyAlias
    sortBy: $sortBy
  ) {
    totalCount
    filteredCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...TherapyBrowseTableRowFields
      }
    }
  }
}
    ${TherapyBrowseTableRowFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TherapiesBrowseGQL extends Apollo.Query<TherapiesBrowseQuery, TherapiesBrowseQueryVariables> {
    document = TherapiesBrowseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
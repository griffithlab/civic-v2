/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ClinicalTrialsBrowseQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  name?: Types.InputMaybe<Types.Scalars['String']['input']>;
  nctId?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortBy?: Types.InputMaybe<Types.ClinicalTrialSort>;
}>;


export type ClinicalTrialsBrowseQuery = { __typename: 'Query', clinicalTrials: { __typename: 'BrowseClinicalTrialConnection', totalCount: number, filteredCount: number, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined, endCursor?: string | undefined }, edges: Array<{ __typename: 'BrowseClinicalTrialEdge', cursor: string, node?: { __typename: 'BrowseClinicalTrial', id: number, name: string, nctId?: string | undefined, evidenceCount: number, sourceCount: number, link: string } | undefined }> } };

export type BrowseClinicalTrialsRowFieldsFragment = { __typename: 'BrowseClinicalTrial', id: number, name: string, nctId?: string | undefined, evidenceCount: number, sourceCount: number, link: string };

export const BrowseClinicalTrialsRowFieldsFragmentDoc = gql`
    fragment BrowseClinicalTrialsRowFields on BrowseClinicalTrial {
  id
  name
  nctId
  evidenceCount
  sourceCount
  link
}
    `;
export const ClinicalTrialsBrowseDocument = gql`
    query ClinicalTrialsBrowse($first: Int, $last: Int, $before: String, $after: String, $name: String, $nctId: String, $sortBy: ClinicalTrialSort) {
  clinicalTrials(
    first: $first
    last: $last
    before: $before
    after: $after
    name: $name
    nctId: $nctId
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
        ...BrowseClinicalTrialsRowFields
      }
    }
  }
}
    ${BrowseClinicalTrialsRowFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ClinicalTrialsBrowseGQL extends Apollo.Query<ClinicalTrialsBrowseQuery, ClinicalTrialsBrowseQueryVariables> {
    document = ClinicalTrialsBrowseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ClinicalTrialPopoverQueryVariables = Types.Exact<{
  clinicalTrialId: Types.Scalars['Int']['input'];
}>;


export type ClinicalTrialPopoverQuery = { __typename: 'Query', clinicalTrials: { __typename: 'BrowseClinicalTrialConnection', edges: Array<{ __typename: 'BrowseClinicalTrialEdge', node?: { __typename: 'BrowseClinicalTrial', id: number, name: string, nctId?: string | undefined, url?: string | undefined, sourceCount: number, evidenceCount: number } | undefined }> } };

export type ClinicalTrialPopoverFragment = { __typename: 'BrowseClinicalTrial', id: number, name: string, nctId?: string | undefined, url?: string | undefined, sourceCount: number, evidenceCount: number };

export const ClinicalTrialPopoverFragmentDoc = gql`
    fragment clinicalTrialPopover on BrowseClinicalTrial {
  id
  name
  nctId
  url
  sourceCount
  evidenceCount
}
    `;
export const ClinicalTrialPopoverDocument = gql`
    query ClinicalTrialPopover($clinicalTrialId: Int!) {
  clinicalTrials(id: $clinicalTrialId) {
    edges {
      node {
        ...clinicalTrialPopover
      }
    }
  }
}
    ${ClinicalTrialPopoverFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ClinicalTrialPopoverGQL extends Apollo.Query<ClinicalTrialPopoverQuery, ClinicalTrialPopoverQueryVariables> {
    document = ClinicalTrialPopoverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ClinicalTrialSummaryQueryVariables = Types.Exact<{
  clinicalTrialId: Types.Scalars['Int']['input'];
}>;


export type ClinicalTrialSummaryQuery = { __typename: 'Query', clinicalTrial?: { __typename: 'ClinicalTrial', id: number, name: string, nctId: string, description: string, url?: string | undefined, link: string } | undefined };

export const ClinicalTrialSummaryDocument = gql`
    query ClinicalTrialSummary($clinicalTrialId: Int!) {
  clinicalTrial(id: $clinicalTrialId) {
    id
    name
    nctId
    description
    url
    link
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ClinicalTrialSummaryGQL extends Apollo.Query<ClinicalTrialSummaryQuery, ClinicalTrialSummaryQueryVariables> {
    document = ClinicalTrialSummaryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ClinicalTrialDetailQueryVariables = Types.Exact<{
  clinicalTrialId: Types.Scalars['Int']['input'];
}>;


export type ClinicalTrialDetailQuery = { __typename: 'Query', clinicalTrial?: { __typename: 'ClinicalTrial', id: number, name: string, nctId: string, description: string, url?: string | undefined, link: string } | undefined };

export const ClinicalTrialDetailDocument = gql`
    query ClinicalTrialDetail($clinicalTrialId: Int!) {
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
  export class ClinicalTrialDetailGQL extends Apollo.Query<ClinicalTrialDetailQuery, ClinicalTrialDetailQueryVariables> {
    document = ClinicalTrialDetailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
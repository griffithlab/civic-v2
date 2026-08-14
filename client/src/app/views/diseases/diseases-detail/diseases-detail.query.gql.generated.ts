/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DiseaseDetailQueryVariables = Types.Exact<{
  diseaseId: Types.Scalars['Int']['input'];
}>;


export type DiseaseDetailQuery = { __typename: 'Query', disease?: { __typename: 'Disease', id: number, name: string, doid?: string | undefined, diseaseUrl?: string | undefined, displayName: string, diseaseAliases: Array<string>, link: string, deprecated: boolean } | undefined };

export const DiseaseDetailDocument = gql`
    query DiseaseDetail($diseaseId: Int!) {
  disease(id: $diseaseId) {
    id
    name
    doid
    diseaseUrl
    displayName
    diseaseAliases
    link
    deprecated
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DiseaseDetailGQL extends Apollo.Query<DiseaseDetailQuery, DiseaseDetailQueryVariables> {
    document = DiseaseDetailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type PhenotypeDetailQueryVariables = Types.Exact<{
  phenotypeId: Types.Scalars['Int']['input'];
}>;


export type PhenotypeDetailQuery = { __typename: 'Query', phenotype?: { __typename: 'Phenotype', id: number, name: string, description?: string | undefined, hpoId: string, url: string, link: string } | undefined };

export const PhenotypeDetailDocument = gql`
    query PhenotypeDetail($phenotypeId: Int!) {
  phenotype(id: $phenotypeId) {
    id
    name
    description
    hpoId
    url
    link
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PhenotypeDetailGQL extends Apollo.Query<PhenotypeDetailQuery, PhenotypeDetailQueryVariables> {
    document = PhenotypeDetailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
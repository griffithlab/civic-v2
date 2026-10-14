/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type PhenotypePopoverQueryVariables = Types.Exact<{
  phenotypeId: Types.Scalars['Int']['input'];
}>;


export type PhenotypePopoverQuery = { __typename: 'Query', phenotypePopover?: { __typename: 'PhenotypePopover', id: number, name: string, url: string, hpoId: string, assertionCount: number, evidenceItemCount: number, molecularProfileCount: number, link: string } | undefined };

export const PhenotypePopoverDocument = gql`
    query PhenotypePopover($phenotypeId: Int!) {
  phenotypePopover(id: $phenotypeId) {
    id
    name
    url
    hpoId
    assertionCount
    evidenceItemCount
    molecularProfileCount
    link
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PhenotypePopoverGQL extends Apollo.Query<PhenotypePopoverQuery, PhenotypePopoverQueryVariables> {
    document = PhenotypePopoverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
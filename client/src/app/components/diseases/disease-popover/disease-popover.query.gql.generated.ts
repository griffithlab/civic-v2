/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DiseasePopoverQueryVariables = Types.Exact<{
  diseaseId: Types.Scalars['Int']['input'];
}>;


export type DiseasePopoverQuery = { __typename: 'Query', diseasePopover?: { __typename: 'DiseasePopover', id: number, name: string, displayName: string, doid?: string | undefined, diseaseUrl?: string | undefined, diseaseAliases: Array<string>, assertionCount: number, evidenceItemCount: number, molecularProfileCount: number, link: string, deprecated: boolean } | undefined };

export const DiseasePopoverDocument = gql`
    query DiseasePopover($diseaseId: Int!) {
  diseasePopover(id: $diseaseId) {
    id
    name
    displayName
    doid
    diseaseUrl
    diseaseAliases
    assertionCount
    evidenceItemCount
    molecularProfileCount
    link
    deprecated
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DiseasePopoverGQL extends Apollo.Query<DiseasePopoverQuery, DiseasePopoverQueryVariables> {
    document = DiseasePopoverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
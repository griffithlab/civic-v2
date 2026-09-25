/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type TherapyPopoverQueryVariables = Types.Exact<{
  therapyId: Types.Scalars['Int']['input'];
}>;


export type TherapyPopoverQuery = { __typename: 'Query', therapyPopover?: { __typename: 'TherapyPopover', id: number, name: string, therapyUrl?: string | undefined, ncitId?: string | undefined, therapyAliases: Array<string>, assertionCount: number, evidenceItemCount: number, molecularProfileCount: number, link: string, deprecated: boolean } | undefined };

export const TherapyPopoverDocument = gql`
    query TherapyPopover($therapyId: Int!) {
  therapyPopover(id: $therapyId) {
    id
    name
    therapyUrl
    ncitId
    therapyAliases
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
  export class TherapyPopoverGQL extends Apollo.Query<TherapyPopoverQuery, TherapyPopoverQueryVariables> {
    document = TherapyPopoverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
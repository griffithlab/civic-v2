/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type TherapyDetailQueryVariables = Types.Exact<{
  therapyId: Types.Scalars['Int']['input'];
}>;


export type TherapyDetailQuery = { __typename: 'Query', therapy?: { __typename: 'Therapy', id: number, name: string, ncitId?: string | undefined, therapyUrl?: string | undefined, therapyAliases: Array<string>, link: string, deprecated: boolean } | undefined };

export const TherapyDetailDocument = gql`
    query TherapyDetail($therapyId: Int!) {
  therapy(id: $therapyId) {
    id
    name
    ncitId
    therapyUrl
    therapyAliases
    link
    deprecated
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TherapyDetailGQL extends Apollo.Query<TherapyDetailQuery, TherapyDetailQueryVariables> {
    document = TherapyDetailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
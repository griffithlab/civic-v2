/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type VariantTypeDetailQueryVariables = Types.Exact<{
  variantTypeId: Types.Scalars['Int']['input'];
}>;


export type VariantTypeDetailQuery = { __typename: 'Query', variantType?: { __typename: 'VariantType', id: number, name: string, soid: string, description: string, url?: string | undefined, link: string } | undefined };

export const VariantTypeDetailDocument = gql`
    query VariantTypeDetail($variantTypeId: Int!) {
  variantType(id: $variantTypeId) {
    id
    name
    soid
    description
    url
    link
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantTypeDetailGQL extends Apollo.Query<VariantTypeDetailQuery, VariantTypeDetailQueryVariables> {
    document = VariantTypeDetailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
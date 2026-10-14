/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type VariantTypePopoverQueryVariables = Types.Exact<{
  variantTypeId: Types.Scalars['Int']['input'];
}>;


export type VariantTypePopoverQuery = { __typename: 'Query', variantTypePopover?: { __typename: 'VariantTypePopover', id: number, name: string, url?: string | undefined, soid: string, variantCount: number } | undefined };

export type VariantTypePopoverFragment = { __typename: 'VariantTypePopover', id: number, name: string, url?: string | undefined, soid: string, variantCount: number };

export const VariantTypePopoverFragmentDoc = gql`
    fragment variantTypePopover on VariantTypePopover {
  id
  name
  url
  soid
  variantCount
}
    `;
export const VariantTypePopoverDocument = gql`
    query VariantTypePopover($variantTypeId: Int!) {
  variantTypePopover(id: $variantTypeId) {
    ...variantTypePopover
  }
}
    ${VariantTypePopoverFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantTypePopoverGQL extends Apollo.Query<VariantTypePopoverQuery, VariantTypePopoverQueryVariables> {
    document = VariantTypePopoverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
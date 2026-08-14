/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type VariantGroupDetailQueryVariables = Types.Exact<{
  variantGroupId: Types.Scalars['Int']['input'];
}>;


export type VariantGroupDetailQuery = { __typename: 'Query', variantGroup?: { __typename: 'VariantGroup', id: number, name: string, variants: { __typename: 'VariantInterfaceConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number } } | undefined };

export type VariantGroupDetailFieldsFragment = { __typename: 'VariantGroup', id: number, name: string, variants: { __typename: 'VariantInterfaceConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number } };

export const VariantGroupDetailFieldsFragmentDoc = gql`
    fragment VariantGroupDetailFields on VariantGroup {
  id
  name
  variants {
    totalCount
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    `;
export const VariantGroupDetailDocument = gql`
    query VariantGroupDetail($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupDetailFields
  }
}
    ${VariantGroupDetailFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantGroupDetailGQL extends Apollo.Query<VariantGroupDetailQuery, VariantGroupDetailQueryVariables> {
    document = VariantGroupDetailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
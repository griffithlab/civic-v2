/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type VariantGroupsSummaryQueryVariables = Types.Exact<{
  variantGroupId: Types.Scalars['Int']['input'];
}>;


export type VariantGroupsSummaryQuery = { __typename: 'Query', variantGroup?: { __typename: 'VariantGroup', id: number, name: string, description: string, sources: Array<{ __typename: 'Source', id: number, link: string, citation?: string | undefined, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> } | undefined };

export type VariantGroupSummaryFieldsFragment = { __typename: 'VariantGroup', id: number, name: string, description: string, sources: Array<{ __typename: 'Source', id: number, link: string, citation?: string | undefined, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> };

export const VariantGroupSummaryFieldsFragmentDoc = gql`
    fragment VariantGroupSummaryFields on VariantGroup {
  id
  name
  description
  sources {
    id
    link
    citation
    sourceUrl
    displayType
    sourceType
    deprecated
  }
}
    `;
export const VariantGroupsSummaryDocument = gql`
    query VariantGroupsSummary($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupSummaryFields
  }
}
    ${VariantGroupSummaryFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantGroupsSummaryGQL extends Apollo.Query<VariantGroupsSummaryQuery, VariantGroupsSummaryQueryVariables> {
    document = VariantGroupsSummaryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
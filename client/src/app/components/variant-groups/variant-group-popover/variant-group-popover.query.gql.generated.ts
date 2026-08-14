/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type VariantGroupPopoverQueryVariables = Types.Exact<{
  variantGroupId: Types.Scalars['Int']['input'];
}>;


export type VariantGroupPopoverQuery = { __typename: 'Query', variantGroup?: { __typename: 'VariantGroup', id: number, name: string, description: string, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number }, variants: { __typename: 'VariantInterfaceConnection', edges: Array<{ __typename: 'VariantInterfaceEdge', node?:
          | { __typename: 'FactorVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
          | { __typename: 'FusionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
          | { __typename: 'GeneVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
          | { __typename: 'RegionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
          | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
         | undefined }> }, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, sourceType: Types.SourceSource, link: string, deprecated: boolean }> } | undefined };

export type VariantGroupPopoverFieldsFragment = { __typename: 'VariantGroup', id: number, name: string, description: string, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number }, variants: { __typename: 'VariantInterfaceConnection', edges: Array<{ __typename: 'VariantInterfaceEdge', node?:
        | { __typename: 'FactorVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
        | { __typename: 'FusionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
        | { __typename: 'GeneVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
        | { __typename: 'RegionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
        | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
       | undefined }> }, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, sourceType: Types.SourceSource, link: string, deprecated: boolean }> };

export const VariantGroupPopoverFieldsFragmentDoc = gql`
    fragment variantGroupPopoverFields on VariantGroup {
  id
  name
  description
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  flags(state: OPEN) {
    totalCount
  }
  variants {
    edges {
      node {
        id
        name
        link
        deprecated
        flagged
        feature {
          id
          name
          link
          deprecated
          flagged
        }
      }
    }
  }
  sources {
    id
    citation
    sourceType
    link
    deprecated
  }
}
    `;
export const VariantGroupPopoverDocument = gql`
    query VariantGroupPopover($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...variantGroupPopoverFields
  }
}
    ${VariantGroupPopoverFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantGroupPopoverGQL extends Apollo.Query<VariantGroupPopoverQuery, VariantGroupPopoverQueryVariables> {
    document = VariantGroupPopoverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
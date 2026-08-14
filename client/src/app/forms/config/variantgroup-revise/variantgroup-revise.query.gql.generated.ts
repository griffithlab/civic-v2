/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type VariantGroupRevisableFieldsQueryVariables = Types.Exact<{
  variantGroupId: Types.Scalars['Int']['input'];
}>;


export type VariantGroupRevisableFieldsQuery = { __typename: 'Query', variantGroup?: { __typename: 'VariantGroup', id: number, name: string, description: string, variants: { __typename: 'VariantInterfaceConnection', totalCount: number, edges: Array<{ __typename: 'VariantInterfaceEdge', cursor: string, node?:
          | { __typename: 'FactorVariant', id: number, name: string, link: string }
          | { __typename: 'FusionVariant', id: number, name: string, link: string }
          | { __typename: 'GeneVariant', id: number, name: string, link: string }
          | { __typename: 'RegionVariant', id: number, name: string, link: string }
          | { __typename: 'Variant', id: number, name: string, link: string }
         | undefined }>, nodes: Array<
        | { __typename: 'FactorVariant', id: number, name: string, link: string }
        | { __typename: 'FusionVariant', id: number, name: string, link: string }
        | { __typename: 'GeneVariant', id: number, name: string, link: string }
        | { __typename: 'RegionVariant', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
      > }, sources: Array<{ __typename: 'Source', id: number, name: string, link: string }> } | undefined };

export type VariantGroupRevisableFieldsFragment = { __typename: 'VariantGroup', id: number, name: string, description: string, variants: { __typename: 'VariantInterfaceConnection', totalCount: number, edges: Array<{ __typename: 'VariantInterfaceEdge', cursor: string, node?:
        | { __typename: 'FactorVariant', id: number, name: string, link: string }
        | { __typename: 'FusionVariant', id: number, name: string, link: string }
        | { __typename: 'GeneVariant', id: number, name: string, link: string }
        | { __typename: 'RegionVariant', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
       | undefined }>, nodes: Array<
      | { __typename: 'FactorVariant', id: number, name: string, link: string }
      | { __typename: 'FusionVariant', id: number, name: string, link: string }
      | { __typename: 'GeneVariant', id: number, name: string, link: string }
      | { __typename: 'RegionVariant', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
    > }, sources: Array<{ __typename: 'Source', id: number, name: string, link: string }> };

export type SuggestVariantGroupRevisionMutationVariables = Types.Exact<{
  input: Types.SuggestVariantGroupRevisionInput;
}>;


export type SuggestVariantGroupRevisionMutation = { __typename: 'Mutation', suggestVariantGroupRevision?: { __typename: 'SuggestVariantGroupRevisionPayload', clientMutationId?: string | undefined, variantGroup: { __typename: 'VariantGroup', id: number }, results: Array<{ __typename: 'RevisionResult', newlyCreated: boolean, id: number, fieldName: string }> } | undefined };

export const VariantGroupRevisableFieldsFragmentDoc = gql`
    fragment VariantGroupRevisableFields on VariantGroup {
  id
  name
  description
  variants {
    totalCount
    edges {
      cursor
      node {
        id
        name
        link
      }
    }
    nodes {
      id
      name
      link
    }
  }
  sources {
    id
    name
    link
  }
}
    `;
export const VariantGroupRevisableFieldsDocument = gql`
    query VariantGroupRevisableFields($variantGroupId: Int!) {
  variantGroup(id: $variantGroupId) {
    ...VariantGroupRevisableFields
  }
}
    ${VariantGroupRevisableFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantGroupRevisableFieldsGQL extends Apollo.Query<VariantGroupRevisableFieldsQuery, VariantGroupRevisableFieldsQueryVariables> {
    document = VariantGroupRevisableFieldsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SuggestVariantGroupRevisionDocument = gql`
    mutation SuggestVariantGroupRevision($input: SuggestVariantGroupRevisionInput!) {
  suggestVariantGroupRevision(input: $input) {
    clientMutationId
    variantGroup {
      id
    }
    results {
      newlyCreated
      id
      fieldName
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SuggestVariantGroupRevisionGQL extends Apollo.Mutation<SuggestVariantGroupRevisionMutation, SuggestVariantGroupRevisionMutationVariables> {
    document = SuggestVariantGroupRevisionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
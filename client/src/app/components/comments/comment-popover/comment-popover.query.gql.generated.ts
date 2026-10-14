/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type CommentPopoverQueryVariables = Types.Exact<{
  commentId: Types.Scalars['Int']['input'];
}>;


export type CommentPopoverQuery = { __typename: 'Query', comment?: { __typename: 'Comment', id: number, name: string, createdAt: any, title?: string | undefined, comment: string, deleted: boolean, deletedAt?: any | undefined, commenter: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, commentable:
      | { __typename: 'Assertion', flagged: boolean, status: Types.EvidenceStatus, id: number, name: string, link: string }
      | { __typename: 'EvidenceItem', flagged: boolean, status: Types.EvidenceStatus, id: number, name: string, link: string }
      | { __typename: 'Factor', id: number, name: string, link: string }
      | { __typename: 'FactorVariant', id: number, name: string, link: string }
      | { __typename: 'Feature', deprecated: boolean, flagged: boolean, id: number, name: string, link: string }
      | { __typename: 'Flag', id: number, name: string, link: string }
      | { __typename: 'Fusion', id: number, name: string, link: string }
      | { __typename: 'FusionVariant', id: number, name: string, link: string }
      | { __typename: 'Gene', id: number, name: string, link: string }
      | { __typename: 'GeneVariant', id: number, name: string, link: string }
      | { __typename: 'MolecularProfile', id: number, name: string, link: string }
      | { __typename: 'Region', id: number, name: string, link: string }
      | { __typename: 'RegionVariant', id: number, name: string, link: string }
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'Source', deprecated: boolean, sourceType: Types.SourceSource, id: number, name: string, link: string }
      | { __typename: 'SourcePopover', id: number, name: string, link: string }
      | { __typename: 'Variant', deprecated: boolean, flagged: boolean, id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
      | { __typename: 'VariantGroup', id: number, name: string, link: string }
     } | undefined };

export type CommentPopoverFragment = { __typename: 'Comment', id: number, name: string, createdAt: any, title?: string | undefined, comment: string, deleted: boolean, deletedAt?: any | undefined, commenter: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, commentable:
    | { __typename: 'Assertion', flagged: boolean, status: Types.EvidenceStatus, id: number, name: string, link: string }
    | { __typename: 'EvidenceItem', flagged: boolean, status: Types.EvidenceStatus, id: number, name: string, link: string }
    | { __typename: 'Factor', id: number, name: string, link: string }
    | { __typename: 'FactorVariant', id: number, name: string, link: string }
    | { __typename: 'Feature', deprecated: boolean, flagged: boolean, id: number, name: string, link: string }
    | { __typename: 'Flag', id: number, name: string, link: string }
    | { __typename: 'Fusion', id: number, name: string, link: string }
    | { __typename: 'FusionVariant', id: number, name: string, link: string }
    | { __typename: 'Gene', id: number, name: string, link: string }
    | { __typename: 'GeneVariant', id: number, name: string, link: string }
    | { __typename: 'MolecularProfile', id: number, name: string, link: string }
    | { __typename: 'Region', id: number, name: string, link: string }
    | { __typename: 'RegionVariant', id: number, name: string, link: string }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'Source', deprecated: boolean, sourceType: Types.SourceSource, id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'Variant', deprecated: boolean, flagged: boolean, id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export const CommentPopoverFragmentDoc = gql`
    fragment commentPopover on Comment {
  id
  name
  createdAt
  title
  comment
  deleted
  deletedAt
  commenter {
    id
    displayName
    role
  }
  commentable {
    id
    name
    link
    ... on Variant {
      deprecated
      feature {
        id
        name
        link
        deprecated
        flagged
      }
      flagged
    }
    ... on Feature {
      deprecated
      flagged
    }
    ... on Source {
      deprecated
      sourceType
    }
    ... on Assertion {
      flagged
      status
    }
    ... on EvidenceItem {
      flagged
      status
    }
    __typename
  }
}
    `;
export const CommentPopoverDocument = gql`
    query CommentPopover($commentId: Int!) {
  comment(id: $commentId) {
    ...commentPopover
  }
}
    ${CommentPopoverFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CommentPopoverGQL extends Apollo.Query<CommentPopoverQuery, CommentPopoverQueryVariables> {
    document = CommentPopoverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type CommentsBrowseQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  ids?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  sortBy?: Types.InputMaybe<Types.DateSort>;
  originatingUserId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type CommentsBrowseQuery = { __typename: 'Query', comments: { __typename: 'CommentConnection', totalCount: number, pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, startCursor?: string | undefined, hasPreviousPage: boolean }, edges: Array<{ __typename: 'CommentEdge', cursor: string, node?: { __typename: 'Comment', id: number, name: string, link: string, comment: string, createdAt: any, commenter: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, commentable:
          | { __typename: 'Assertion', id: number, name: string, link: string }
          | { __typename: 'EvidenceItem', id: number, name: string, link: string }
          | { __typename: 'Factor' }
          | { __typename: 'FactorVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
          | { __typename: 'Feature', id: number, name: string, link: string }
          | { __typename: 'Flag', id: number, name: string, link: string }
          | { __typename: 'Fusion' }
          | { __typename: 'FusionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
          | { __typename: 'Gene' }
          | { __typename: 'GeneVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
          | { __typename: 'MolecularProfile', id: number, name: string, link: string }
          | { __typename: 'Region' }
          | { __typename: 'RegionVariant' }
          | { __typename: 'Revision', id: number, name: string, link: string }
          | { __typename: 'Source', id: number, name: string, link: string }
          | { __typename: 'SourcePopover' }
          | { __typename: 'Variant' }
          | { __typename: 'VariantGroup', id: number, name: string, link: string }
         } | undefined }> } };

export type CommentBrowseFieldsFragment = { __typename: 'Comment', id: number, name: string, link: string, comment: string, createdAt: any, commenter: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, commentable:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'EvidenceItem', id: number, name: string, link: string }
    | { __typename: 'Factor' }
    | { __typename: 'FactorVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Feature', id: number, name: string, link: string }
    | { __typename: 'Flag', id: number, name: string, link: string }
    | { __typename: 'Fusion' }
    | { __typename: 'FusionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Gene' }
    | { __typename: 'GeneVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'MolecularProfile', id: number, name: string, link: string }
    | { __typename: 'Region' }
    | { __typename: 'RegionVariant' }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover' }
    | { __typename: 'Variant' }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export const CommentBrowseFieldsFragmentDoc = gql`
    fragment CommentBrowseFields on Comment {
  id
  name
  link
  comment
  createdAt
  commenter {
    id
    displayName
    role
  }
  commentable {
    ... on Assertion {
      id
      name
      link
    }
    ... on EvidenceItem {
      id
      name
      link
    }
    ... on Feature {
      id
      name
      link
    }
    ... on Flag {
      id
      name
      link
    }
    ... on GeneVariant {
      id
      name
      link
      feature {
        id
        name
        link
      }
    }
    ... on FactorVariant {
      id
      name
      link
      feature {
        id
        name
        link
      }
    }
    ... on FusionVariant {
      id
      name
      link
      feature {
        id
        name
        link
      }
    }
    ... on MolecularProfile {
      id
      name
      link
    }
    ... on Revision {
      id
      name
      link
    }
    ... on Source {
      id
      name
      link
    }
    ... on VariantGroup {
      id
      name
      link
    }
  }
}
    `;
export const CommentsBrowseDocument = gql`
    query CommentsBrowse($first: Int, $last: Int, $before: String, $after: String, $ids: [Int!], $sortBy: DateSort, $originatingUserId: Int) {
  comments(
    first: $first
    last: $last
    before: $before
    after: $after
    ids: $ids
    sortBy: $sortBy
    originatingUserId: $originatingUserId
  ) {
    totalCount
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    edges {
      cursor
      node {
        ...CommentBrowseFields
      }
    }
  }
}
    ${CommentBrowseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CommentsBrowseGQL extends Apollo.Query<CommentsBrowseQuery, CommentsBrowseQueryVariables> {
    document = CommentsBrowseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { ParsedCommentFragmentFragmentDoc } from '../../comments/comment-list/comment-list.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type FlagListQueryVariables = Types.Exact<{
  flaggable?: Types.InputMaybe<Types.FlaggableInput>;
  flaggingUserId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  resolvingUserId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  state?: Types.InputMaybe<Types.FlagState>;
  sortBy?: Types.InputMaybe<Types.DateSort>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type FlagListQuery = { __typename: 'Query', flags: { __typename: 'FlagConnection', totalCount: number, unfilteredCountForSubject?: number | undefined, pageInfo: { __typename: 'PageInfo', startCursor?: string | undefined, endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean }, uniqueFlaggingUsers: Array<{ __typename: 'User', username: string, id: number, profileImagePath?: string | undefined }>, uniqueResolvingUsers?: Array<{ __typename: 'User', username: string, id: number, profileImagePath?: string | undefined }> | undefined, edges: Array<{ __typename: 'FlagEdge', node?: { __typename: 'Flag', id: number, state: Types.FlagState, flaggable:
          | { __typename: 'Assertion', id: number, name: string, link: string }
          | { __typename: 'BrowseFeature', id: number, name: string, link: string }
          | { __typename: 'EvidenceItem', id: number, name: string, link: string }
          | { __typename: 'Factor', id: number, name: string, link: string }
          | { __typename: 'FactorVariant', id: number, name: string, link: string }
          | { __typename: 'Feature', deprecated: boolean, id: number, name: string, link: string }
          | { __typename: 'Fusion', id: number, name: string, link: string }
          | { __typename: 'FusionVariant', id: number, name: string, link: string }
          | { __typename: 'Gene', id: number, name: string, link: string }
          | { __typename: 'GeneVariant', id: number, name: string, link: string }
          | { __typename: 'MolecularProfile', deprecated: boolean, id: number, name: string, link: string }
          | { __typename: 'Region', id: number, name: string, link: string }
          | { __typename: 'RegionVariant', id: number, name: string, link: string }
          | { __typename: 'Variant', deprecated: boolean, id: number, name: string, link: string }
          | { __typename: 'VariantGroup', id: number, name: string, link: string }
        , openActivity: { __typename: 'FlagEntityActivity', id: number, createdAt: any, parsedNote: Array<
            | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTextSegment', text: string }
            | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
          >, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } }, resolutionActivity?: { __typename: 'ResolveFlagActivity', id: number, createdAt: any, parsedNote: Array<
            | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTextSegment', text: string }
            | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
          >, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined } | undefined }> } };

export type FlagListFragment = { __typename: 'FlagConnection', totalCount: number, unfilteredCountForSubject?: number | undefined, pageInfo: { __typename: 'PageInfo', startCursor?: string | undefined, endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean }, uniqueFlaggingUsers: Array<{ __typename: 'User', username: string, id: number, profileImagePath?: string | undefined }>, uniqueResolvingUsers?: Array<{ __typename: 'User', username: string, id: number, profileImagePath?: string | undefined }> | undefined, edges: Array<{ __typename: 'FlagEdge', node?: { __typename: 'Flag', id: number, state: Types.FlagState, flaggable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'BrowseFeature', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
        | { __typename: 'Factor', id: number, name: string, link: string }
        | { __typename: 'FactorVariant', id: number, name: string, link: string }
        | { __typename: 'Feature', deprecated: boolean, id: number, name: string, link: string }
        | { __typename: 'Fusion', id: number, name: string, link: string }
        | { __typename: 'FusionVariant', id: number, name: string, link: string }
        | { __typename: 'Gene', id: number, name: string, link: string }
        | { __typename: 'GeneVariant', id: number, name: string, link: string }
        | { __typename: 'MolecularProfile', deprecated: boolean, id: number, name: string, link: string }
        | { __typename: 'Region', id: number, name: string, link: string }
        | { __typename: 'RegionVariant', id: number, name: string, link: string }
        | { __typename: 'Variant', deprecated: boolean, id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
      , openActivity: { __typename: 'FlagEntityActivity', id: number, createdAt: any, parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        >, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } }, resolutionActivity?: { __typename: 'ResolveFlagActivity', id: number, createdAt: any, parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        >, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined } | undefined }> };

export type FlagFragment = { __typename: 'Flag', id: number, state: Types.FlagState, flaggable:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'BrowseFeature', id: number, name: string, link: string }
    | { __typename: 'EvidenceItem', id: number, name: string, link: string }
    | { __typename: 'Factor', id: number, name: string, link: string }
    | { __typename: 'FactorVariant', id: number, name: string, link: string }
    | { __typename: 'Feature', deprecated: boolean, id: number, name: string, link: string }
    | { __typename: 'Fusion', id: number, name: string, link: string }
    | { __typename: 'FusionVariant', id: number, name: string, link: string }
    | { __typename: 'Gene', id: number, name: string, link: string }
    | { __typename: 'GeneVariant', id: number, name: string, link: string }
    | { __typename: 'MolecularProfile', deprecated: boolean, id: number, name: string, link: string }
    | { __typename: 'Region', id: number, name: string, link: string }
    | { __typename: 'RegionVariant', id: number, name: string, link: string }
    | { __typename: 'Variant', deprecated: boolean, id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
  , openActivity: { __typename: 'FlagEntityActivity', id: number, createdAt: any, parsedNote: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    >, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } }, resolutionActivity?: { __typename: 'ResolveFlagActivity', id: number, createdAt: any, parsedNote: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    >, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined };

export const FlagFragmentDoc = gql`
    fragment flag on Flag {
  id
  state
  flaggable {
    id
    name
    link
    ... on Variant {
      deprecated
    }
    ... on Feature {
      deprecated
    }
    ... on MolecularProfile {
      deprecated
    }
  }
  openActivity {
    id
    createdAt
    parsedNote {
      ...parsedCommentFragment
    }
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  resolutionActivity {
    id
    createdAt
    parsedNote {
      ...parsedCommentFragment
    }
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
}
    ${ParsedCommentFragmentFragmentDoc}`;
export const FlagListFragmentDoc = gql`
    fragment flagList on FlagConnection {
  pageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
  }
  totalCount
  unfilteredCountForSubject
  uniqueFlaggingUsers {
    username
    id
    profileImagePath(size: 32)
  }
  uniqueResolvingUsers {
    username
    id
    profileImagePath(size: 32)
  }
  edges {
    node {
      ...flag
    }
  }
}
    ${FlagFragmentDoc}`;
export const FlagListDocument = gql`
    query FlagList($flaggable: FlaggableInput, $flaggingUserId: Int, $resolvingUserId: Int, $state: FlagState, $sortBy: DateSort, $first: Int, $last: Int, $before: String, $after: String) {
  flags(
    flaggable: $flaggable
    flaggingUserId: $flaggingUserId
    resolvingUserId: $resolvingUserId
    state: $state
    sortBy: $sortBy
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    ...flagList
  }
}
    ${FlagListFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FlagListGQL extends Apollo.Query<FlagListQuery, FlagListQueryVariables> {
    document = FlagListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
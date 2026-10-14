/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { ParsedCommentFragmentFragmentDoc } from '../../../components/comments/comment-list/comment-list.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type PreviewCommentQueryVariables = Types.Exact<{
  commentText: Types.Scalars['String']['input'];
}>;


export type PreviewCommentQuery = { __typename: 'Query', previewCommentText: Array<
    | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTextSegment', text: string }
    | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
  > };

export type UserTypeaheadQueryVariables = Types.Exact<{
  queryTerm: Types.Scalars['String']['input'];
}>;


export type UserTypeaheadQuery = { __typename: 'Query', userTypeahead: Array<{ __typename: 'User', username: string }> };

export type EntityTypeaheadQueryVariables = Types.Exact<{
  queryTerm: Types.Scalars['String']['input'];
}>;


export type EntityTypeaheadQuery = { __typename: 'Query', entityTypeahead: Array<{ __typename: 'CommentTagSegment', entityId: number, tagType: Types.TaggableEntity, displayName: string }> };

export const PreviewCommentDocument = gql`
    query previewComment($commentText: String!) {
  previewCommentText(commentText: $commentText) {
    ...parsedCommentFragment
  }
}
    ${ParsedCommentFragmentFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PreviewCommentGQL extends Apollo.Query<PreviewCommentQuery, PreviewCommentQueryVariables> {
    document = PreviewCommentDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserTypeaheadDocument = gql`
    query userTypeahead($queryTerm: String!) {
  userTypeahead(queryTerm: $queryTerm) {
    username
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserTypeaheadGQL extends Apollo.Query<UserTypeaheadQuery, UserTypeaheadQueryVariables> {
    document = UserTypeaheadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EntityTypeaheadDocument = gql`
    query entityTypeahead($queryTerm: String!) {
  entityTypeahead(queryTerm: $queryTerm) {
    entityId
    tagType
    displayName
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EntityTypeaheadGQL extends Apollo.Query<EntityTypeaheadQuery, EntityTypeaheadQueryVariables> {
    document = EntityTypeaheadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
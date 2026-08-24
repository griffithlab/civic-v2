/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type CommentListQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  originatingUserId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  mentionedUserId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  mentionedRole?: Types.InputMaybe<Types.UserRole>;
  mentionedEntity?: Types.InputMaybe<Types.TaggableEntityInput>;
  subject?: Types.InputMaybe<Types.CommentableInput>;
  sortBy?: Types.InputMaybe<Types.DateSort>;
}>;


export type CommentListQuery = { __typename: 'Query', comments: { __typename: 'CommentConnection', totalCount: number, unfilteredCountForSubject?: number | undefined, pageInfo: { __typename: 'PageInfo', startCursor?: string | undefined, endCursor?: string | undefined, hasPreviousPage: boolean, hasNextPage: boolean }, uniqueCommenters: Array<{ __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }>, mentionedUsers: Array<{ __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }>, mentionedRoles: Array<{ __typename: 'CommentTagSegment', displayName: string, entityId: number, tagType: Types.TaggableEntity, link: string }>, mentionedEntities: Array<{ __typename: 'CommentTagSegment', displayName: string, entityId: number, tagType: Types.TaggableEntity, link: string }>, edges: Array<{ __typename: 'CommentEdge', cursor: string, node?: { __typename: 'Comment', id: number, title?: string | undefined, comment: string, createdAt: any, deleted: boolean, deletedAt?: any | undefined, commenter: { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }, parsedComment: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        > } | undefined }> } };

export type CommentListNodeFragment = { __typename: 'Comment', id: number, title?: string | undefined, comment: string, createdAt: any, deleted: boolean, deletedAt?: any | undefined, commenter: { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }, parsedComment: Array<
    | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTextSegment', text: string }
    | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
  > };

export type CommenterFieldsFragment = { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> };

export type ParsedCommentFragment_CommentTagSegment_Fragment = { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined };

export type ParsedCommentFragment_CommentTagSegmentDeprecated_Fragment = { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined };

export type ParsedCommentFragment_CommentTagSegmentFlagged_Fragment = { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined };

export type ParsedCommentFragment_CommentTagSegmentFlaggedAndDeprecated_Fragment = { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined };

export type ParsedCommentFragment_CommentTagSegmentFlaggedAndWithStatus_Fragment = { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined };

export type ParsedCommentFragment_CommentTextSegment_Fragment = { __typename: 'CommentTextSegment', text: string };

export type ParsedCommentFragment_User_Fragment = { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> };

export type ParsedCommentFragmentFragment =
  | ParsedCommentFragment_CommentTagSegment_Fragment
  | ParsedCommentFragment_CommentTagSegmentDeprecated_Fragment
  | ParsedCommentFragment_CommentTagSegmentFlagged_Fragment
  | ParsedCommentFragment_CommentTagSegmentFlaggedAndDeprecated_Fragment
  | ParsedCommentFragment_CommentTagSegmentFlaggedAndWithStatus_Fragment
  | ParsedCommentFragment_CommentTextSegment_Fragment
  | ParsedCommentFragment_User_Fragment
;

export const CommenterFieldsFragmentDoc = gql`
    fragment commenterFields on User {
  id
  username
  displayName
  name
  role
  profileImagePath(size: 32)
  organizations {
    id
    name
    profileImagePath(size: 32)
  }
}
    `;
export const ParsedCommentFragmentFragmentDoc = gql`
    fragment parsedCommentFragment on CommentBodySegment {
  __typename
  ... on CommentTagSegment {
    entityId
    displayName
    tagType
    link
    revisionSetId
    feature {
      id
      name
      link
      deprecated
      flagged
    }
    __typename
  }
  ... on CommentTagSegmentFlagged {
    entityId
    displayName
    tagType
    flagged
    link
    revisionSetId
    feature {
      id
      name
      link
      deprecated
      flagged
    }
    __typename
  }
  ... on CommentTagSegmentFlaggedAndWithStatus {
    entityId
    displayName
    tagType
    status
    flagged
    link
    revisionSetId
    feature {
      id
      name
      link
      deprecated
      flagged
    }
    __typename
  }
  ... on CommentTagSegmentFlaggedAndDeprecated {
    entityId
    displayName
    tagType
    flagged
    deprecated
    link
    revisionSetId
    feature {
      id
      name
      link
      deprecated
      flagged
    }
    __typename
  }
  ... on CommentTagSegmentDeprecated {
    entityId
    displayName
    tagType
    deprecated
    link
    revisionSetId
    feature {
      id
      name
      link
      deprecated
      flagged
    }
    __typename
  }
  ... on CommentTextSegment {
    text
  }
  ... on User {
    ...commenterFields
  }
}
    ${CommenterFieldsFragmentDoc}`;
export const CommentListNodeFragmentDoc = gql`
    fragment commentListNode on Comment {
  id
  title
  comment
  createdAt
  deleted
  deletedAt
  commenter {
    ...commenterFields
  }
  parsedComment {
    ...parsedCommentFragment
  }
}
    ${CommenterFieldsFragmentDoc}
${ParsedCommentFragmentFragmentDoc}`;
export const CommentListDocument = gql`
    query CommentList($first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $mentionedUserId: Int, $mentionedRole: UserRole, $mentionedEntity: TaggableEntityInput, $subject: CommentableInput, $sortBy: DateSort) {
  comments(
    first: $first
    last: $last
    before: $before
    after: $after
    originatingUserId: $originatingUserId
    mentionedUserId: $mentionedUserId
    mentionedRole: $mentionedRole
    mentionedEntity: $mentionedEntity
    subject: $subject
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    uniqueCommenters {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
    mentionedUsers {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
    mentionedRoles {
      displayName
      entityId
      tagType
      link
    }
    mentionedEntities {
      displayName
      entityId
      tagType
      link
    }
    unfilteredCountForSubject
    edges {
      cursor
      node {
        ...commentListNode
      }
    }
  }
}
    ${CommentListNodeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CommentListGQL extends Apollo.Query<CommentListQuery, CommentListQueryVariables> {
    document = CommentListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
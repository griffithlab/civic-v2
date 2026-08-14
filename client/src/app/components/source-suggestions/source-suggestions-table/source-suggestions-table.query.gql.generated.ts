/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { ParsedCommentFragmentFragmentDoc } from '../../comments/comment-list/comment-list.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type BrowseSourceSuggestionsQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortBy?: Types.InputMaybe<Types.SourceSuggestionsSort>;
  sourceType?: Types.InputMaybe<Types.SourceSource>;
  citationId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  sourceId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  molecularProfileName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  diseaseName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  comment?: Types.InputMaybe<Types.Scalars['String']['input']>;
  submitter?: Types.InputMaybe<Types.Scalars['String']['input']>;
  citation?: Types.InputMaybe<Types.Scalars['String']['input']>;
  submitterId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  status?: Types.InputMaybe<Types.SourceSuggestionStatus>;
}>;


export type BrowseSourceSuggestionsQuery = { __typename: 'Query', sourceSuggestions: { __typename: 'SourceSuggestionConnection', totalCount: number, filteredCount: number, pageCount: number, pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, startCursor?: string | undefined, hasPreviousPage: boolean }, edges: Array<{ __typename: 'SourceSuggestionEdge', cursor: string, node?: { __typename: 'SourceSuggestion', id: number, status: Types.SourceSuggestionStatus, reason?: string | undefined, createdAt: any, molecularProfile?: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean } | undefined, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, source?: { __typename: 'Source', link: string, id: number, citation?: string | undefined, citationId: string, sourceType: Types.SourceSource, sourceUrl?: string | undefined, displayType: string, deprecated: boolean } | undefined, user?: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } | undefined, creationActivity: { __typename: 'SuggestSourceActivity', parsedNote: Array<
            | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTextSegment', text: string }
            | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
          > }, lastStatusUpdateActivity?: { __typename: 'UpdateSourceSuggestionStatusActivity', parsedNote: Array<
            | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTextSegment', text: string }
            | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
          > } | undefined } | undefined }> } };

export type BrowseSourceSuggestionRowFieldsFragment = { __typename: 'SourceSuggestion', id: number, status: Types.SourceSuggestionStatus, reason?: string | undefined, createdAt: any, molecularProfile?: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean } | undefined, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, source?: { __typename: 'Source', link: string, id: number, citation?: string | undefined, citationId: string, sourceType: Types.SourceSource, sourceUrl?: string | undefined, displayType: string, deprecated: boolean } | undefined, user?: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } | undefined, creationActivity: { __typename: 'SuggestSourceActivity', parsedNote: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    > }, lastStatusUpdateActivity?: { __typename: 'UpdateSourceSuggestionStatusActivity', parsedNote: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    > } | undefined };

export type UpdateSourceSuggestionStatusMutationVariables = Types.Exact<{
  input: Types.UpdateSourceSuggestionStatusInput;
}>;


export type UpdateSourceSuggestionStatusMutation = { __typename: 'Mutation', updateSourceSuggestionStatus?: { __typename: 'UpdateSourceSuggestionStatusPayload', sourceSuggestion: { __typename: 'SourceSuggestion', id: number, status: Types.SourceSuggestionStatus } } | undefined };

export const BrowseSourceSuggestionRowFieldsFragmentDoc = gql`
    fragment BrowseSourceSuggestionRowFields on SourceSuggestion {
  id
  molecularProfile {
    id
    name
    link
    deprecated
  }
  disease {
    id
    name
    link
    deprecated
  }
  source {
    link
    id
    citation
    citationId
    sourceType
    sourceUrl
    displayType
    deprecated
  }
  user {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  creationActivity {
    parsedNote {
      ...parsedCommentFragment
    }
  }
  lastStatusUpdateActivity {
    parsedNote {
      ...parsedCommentFragment
    }
  }
  status
  reason
  createdAt
}
    ${ParsedCommentFragmentFragmentDoc}`;
export const BrowseSourceSuggestionsDocument = gql`
    query BrowseSourceSuggestions($first: Int, $last: Int, $before: String, $after: String, $sortBy: SourceSuggestionsSort, $sourceType: SourceSource, $citationId: Int, $sourceId: Int, $molecularProfileName: String, $diseaseName: String, $comment: String, $submitter: String, $citation: String, $submitterId: Int, $status: SourceSuggestionStatus) {
  sourceSuggestions(
    first: $first
    last: $last
    before: $before
    after: $after
    sortBy: $sortBy
    sourceType: $sourceType
    citationId: $citationId
    sourceId: $sourceId
    molecularProfileName: $molecularProfileName
    diseaseName: $diseaseName
    comment: $comment
    submitter: $submitter
    citation: $citation
    submitterId: $submitterId
    status: $status
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    totalCount
    filteredCount
    pageCount
    edges {
      cursor
      node {
        ...BrowseSourceSuggestionRowFields
      }
    }
  }
}
    ${BrowseSourceSuggestionRowFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class BrowseSourceSuggestionsGQL extends Apollo.Query<BrowseSourceSuggestionsQuery, BrowseSourceSuggestionsQueryVariables> {
    document = BrowseSourceSuggestionsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpdateSourceSuggestionStatusDocument = gql`
    mutation UpdateSourceSuggestionStatus($input: UpdateSourceSuggestionStatusInput!) {
  updateSourceSuggestionStatus(input: $input) {
    sourceSuggestion {
      id
      status
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateSourceSuggestionStatusGQL extends Apollo.Mutation<UpdateSourceSuggestionStatusMutation, UpdateSourceSuggestionStatusMutationVariables> {
    document = UpdateSourceSuggestionStatusDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
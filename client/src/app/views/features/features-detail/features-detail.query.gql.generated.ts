/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { ParsedCommentFragmentFragmentDoc } from '../../../components/comments/comment-list/comment-list.query.gql.generated';
import { FeatureInstanceRefFragmentDoc } from '../../../graphql/feature-instance.fragments.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type FeatureDetailQueryVariables = Types.Exact<{
  featureId: Types.Scalars['Int']['input'];
}>;


export type FeatureDetailQuery = { __typename: 'Query', feature?: { __typename: 'Feature', id: number, name: string, fullName?: string | undefined, deprecated: boolean, deprecationReason?: Types.FeatureDeprecationReason | undefined, deprecationActivity?: { __typename: 'DeprecateFeatureActivity', parsedNote: Array<
        | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTextSegment', text: string }
        | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
      > } | undefined, featureInstance:
      | { __typename: 'Factor', id: number }
      | { __typename: 'Fusion', id: number }
      | { __typename: 'Gene', id: number }
      | { __typename: 'Region', id: number }
    , flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number } } | undefined };

export type FeatureDetailFieldsFragment = { __typename: 'Feature', id: number, name: string, fullName?: string | undefined, deprecated: boolean, deprecationReason?: Types.FeatureDeprecationReason | undefined, deprecationActivity?: { __typename: 'DeprecateFeatureActivity', parsedNote: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    > } | undefined, featureInstance:
    | { __typename: 'Factor', id: number }
    | { __typename: 'Fusion', id: number }
    | { __typename: 'Gene', id: number }
    | { __typename: 'Region', id: number }
  , flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number } };

export const FeatureDetailFieldsFragmentDoc = gql`
    fragment FeatureDetailFields on Feature {
  id
  name
  fullName
  deprecated
  deprecationReason
  deprecationActivity {
    parsedNote {
      ...parsedCommentFragment
    }
  }
  featureInstance {
    ...FeatureInstanceRef
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
    ${ParsedCommentFragmentFragmentDoc}
${FeatureInstanceRefFragmentDoc}`;
export const FeatureDetailDocument = gql`
    query FeatureDetail($featureId: Int!) {
  feature(id: $featureId) {
    ...FeatureDetailFields
  }
}
    ${FeatureDetailFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FeatureDetailGQL extends Apollo.Query<FeatureDetailQuery, FeatureDetailQueryVariables> {
    document = FeatureDetailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
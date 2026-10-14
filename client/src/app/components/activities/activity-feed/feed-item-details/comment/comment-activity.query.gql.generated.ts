/* eslint-disable */
import * as Types from '../../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { CommentListNodeFragmentDoc } from '../../../../comments/comment-list/comment-list.query.gql.generated';
import { ActivityFeedItemEventsFragmentDoc, ActivityFeedItemBaseFragmentDoc } from '../../activity-feed.fragments.gql.generated';
export type CommentActivityDetailFragment = { __typename: 'CommentActivity', id: number, verbiage: string, createdAt: any, comment: { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, title?: string | undefined, comment: string, createdAt: any, commentable:
      | { __typename: 'Assertion', id: number, name: string, link: string }
      | { __typename: 'EvidenceItem', id: number, name: string, link: string }
      | { __typename: 'Factor', id: number, name: string, link: string }
      | { __typename: 'FactorVariant', id: number, name: string, link: string }
      | { __typename: 'Feature', id: number, name: string, link: string }
      | { __typename: 'Flag', id: number, name: string, link: string }
      | { __typename: 'Fusion', id: number, name: string, link: string }
      | { __typename: 'FusionVariant', id: number, name: string, link: string }
      | { __typename: 'Gene', id: number, name: string, link: string }
      | { __typename: 'GeneVariant', id: number, name: string, link: string }
      | { __typename: 'MolecularProfile', id: number, name: string, link: string }
      | { __typename: 'Region', id: number, name: string, link: string }
      | { __typename: 'RegionVariant', id: number, name: string, link: string }
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'Source', id: number, name: string, link: string }
      | { __typename: 'SourcePopover', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
      | { __typename: 'VariantGroup', id: number, name: string, link: string }
    , commenter: { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }, parsedComment: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    > }, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
        | { __typename: 'Factor', id: number, name: string, link: string }
        | { __typename: 'FactorVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Feature', id: number, name: string, link: string }
        | { __typename: 'Flag', id: number, name: string, link: string }
        | { __typename: 'Fusion', id: number, name: string, link: string }
        | { __typename: 'FusionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Gene', id: number, name: string, link: string }
        | { __typename: 'GeneVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'MolecularProfile', id: number, name: string, link: string }
        | { __typename: 'Region', id: number, name: string, link: string }
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
    | { __typename: 'EvidenceItem', id: number, name: string, link: string }
    | { __typename: 'ExonCoordinate', id: number, name: string, link: string }
    | { __typename: 'Factor', id: number, name: string, link: string }
    | { __typename: 'FactorVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Feature', id: number, name: string, link: string }
    | { __typename: 'Flag', id: number, name: string, link: string }
    | { __typename: 'Fusion', id: number, name: string, link: string }
    | { __typename: 'FusionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Gene', id: number, name: string, link: string }
    | { __typename: 'GeneVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'MolecularProfile', id: number, name: string, link: string }
    | { __typename: 'Region', id: number, name: string, link: string }
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
  , events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
      | { __typename: 'Assertion', id: number, name: string, link: string }
      | { __typename: 'Comment', id: number, name: string, link: string }
      | { __typename: 'EvidenceItem', id: number, name: string, link: string }
      | { __typename: 'Factor', id: number, name: string, link: string }
      | { __typename: 'FactorVariant', id: number, name: string, link: string }
      | { __typename: 'Feature', id: number, name: string, link: string }
      | { __typename: 'Flag', id: number, name: string, link: string }
      | { __typename: 'Fusion', id: number, name: string, link: string }
      | { __typename: 'FusionVariant', id: number, name: string, link: string }
      | { __typename: 'Gene', id: number, name: string, link: string }
      | { __typename: 'GeneVariant', id: number, name: string, link: string }
      | { __typename: 'MolecularProfile', id: number, name: string, link: string }
      | { __typename: 'Region', id: number, name: string, link: string }
      | { __typename: 'RegionVariant', id: number, name: string, link: string }
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export const CommentActivityDetailFragmentDoc = gql`
    fragment CommentActivityDetail on CommentActivity {
  comment {
    deleted
    deletedAt
    ...commentListNode
    commentable {
      id
      name
      link
    }
  }
  ...ActivityFeedItemBase
  ...ActivityFeedItemEvents
}
    ${CommentListNodeFragmentDoc}
${ActivityFeedItemBaseFragmentDoc}
${ActivityFeedItemEventsFragmentDoc}`;
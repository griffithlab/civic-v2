/* eslint-disable */
import * as Types from '../../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { ParsedCommentFragmentFragmentDoc } from '../../../../comments/comment-list/comment-list.query.gql.generated';
import { ActivityFeedItemEventsFragmentDoc, ActivityFeedItemBaseFragmentDoc, RevisionActivityDetailFragmentDoc } from '../../activity-feed.fragments.gql.generated';
export type RejectRevisionsActivityDetailFragment = { __typename: 'RejectRevisionsActivity', id: number, verbiage: string, createdAt: any, parsedNote: Array<
    | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTextSegment', text: string }
    | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
  >, revisions: Array<{ __typename: 'Revision', id: number, name: string, status: Types.RevisionStatus, currentValue?: any | undefined, suggestedValue?: any | undefined, fieldName: string, link: string, createdAt: any, linkoutData: { __typename: 'LinkoutData', name: string, diffValue:
        | { __typename: 'ObjectFieldDiff', currentObjects: Array<{ __typename: 'ModeratedObjectField', id: number, displayName?: string | undefined, displayType?: string | undefined, entityType: string, link?: string | undefined, deleted: boolean, deprecated?: boolean | undefined, flagged?: boolean | undefined, feature?: { __typename: 'LinkableFeature', link: string, id: number, name: string, deprecated: boolean, flagged: boolean } | undefined }>, addedObjects: Array<{ __typename: 'ModeratedObjectField', id: number, displayName?: string | undefined, displayType?: string | undefined, entityType: string, link?: string | undefined, deleted: boolean, deprecated?: boolean | undefined, flagged?: boolean | undefined, feature?: { __typename: 'LinkableFeature', link: string, id: number, name: string, deprecated: boolean, flagged: boolean } | undefined }>, removedObjects: Array<{ __typename: 'ModeratedObjectField', id: number, displayName?: string | undefined, displayType?: string | undefined, entityType: string, link?: string | undefined, deleted: boolean, deprecated?: boolean | undefined, flagged?: boolean | undefined, feature?: { __typename: 'LinkableFeature', link: string, id: number, name: string, deprecated: boolean, flagged: boolean } | undefined }>, keptObjects: Array<{ __typename: 'ModeratedObjectField', id: number, displayName?: string | undefined, displayType?: string | undefined, entityType: string, link?: string | undefined, deleted: boolean, deprecated?: boolean | undefined, flagged?: boolean | undefined, feature?: { __typename: 'LinkableFeature', link: string, id: number, name: string, deprecated: boolean, flagged: boolean } | undefined }>, suggestedObjects: Array<{ __typename: 'ModeratedObjectField', id: number, displayName?: string | undefined, displayType?: string | undefined, entityType: string, link?: string | undefined, deleted: boolean, deprecated?: boolean | undefined, flagged?: boolean | undefined, feature?: { __typename: 'LinkableFeature', link: string, id: number, name: string, deprecated: boolean, flagged: boolean } | undefined }> }
        | { __typename: 'ScalarFieldDiff', left: string, right: string }
       }, subject:
      | { __typename: 'Assertion' }
      | { __typename: 'Comment' }
      | { __typename: 'EvidenceItem' }
      | { __typename: 'ExonCoordinate', coordinateType: Types.ExonCoordinateType }
      | { __typename: 'Factor' }
      | { __typename: 'FactorVariant' }
      | { __typename: 'Feature' }
      | { __typename: 'Flag' }
      | { __typename: 'Fusion' }
      | { __typename: 'FusionVariant' }
      | { __typename: 'Gene' }
      | { __typename: 'GeneVariant' }
      | { __typename: 'MolecularProfile' }
      | { __typename: 'Region' }
      | { __typename: 'RegionVariant' }
      | { __typename: 'Revision' }
      | { __typename: 'RevisionSet' }
      | { __typename: 'Source' }
      | { __typename: 'SourcePopover' }
      | { __typename: 'SourceSuggestion' }
      | { __typename: 'Variant' }
      | { __typename: 'VariantCoordinate' }
      | { __typename: 'VariantGroup' }
     }>, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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

export const RejectRevisionsActivityDetailFragmentDoc = gql`
    fragment RejectRevisionsActivityDetail on RejectRevisionsActivity {
  parsedNote {
    ...parsedCommentFragment
  }
  revisions {
    ...RevisionActivityDetail
  }
  ...ActivityFeedItemBase
  ...ActivityFeedItemEvents
}
    ${ParsedCommentFragmentFragmentDoc}
${RevisionActivityDetailFragmentDoc}
${ActivityFeedItemBaseFragmentDoc}
${ActivityFeedItemEventsFragmentDoc}`;
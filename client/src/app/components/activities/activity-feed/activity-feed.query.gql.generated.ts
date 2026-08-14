/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { ActivityFeedItemBaseFragmentDoc } from './activity-feed.fragments.gql.generated';
import { AcceptRevisionsActivityDetailFragmentDoc } from './feed-item-details/accept-revisions/accept-revisions-activity.query.gql.generated';
import { CommentActivityDetailFragmentDoc } from './feed-item-details/comment/comment-activity.query.gql.generated';
import { CreateComplexMolecularProfileActivityDetailFragmentDoc } from './feed-item-details/create-molecular-profile/create-mp-activity.query.gql.generated';
import { CreateVariantActivityDetailFragmentDoc } from './feed-item-details/create-variant/create-variant-activity.query.gql.generated';
import { DeleteCommentActivityDetailFragmentDoc } from './feed-item-details/delete-comment/delete-comment-activity.query.gql.generated';
import { DeprecateComplexMolecularProfileActivityDetailFragmentDoc } from './feed-item-details/deprecate-molecular-profile/deprecate-mp-activity.query.gql.generated';
import { DeprecateVariantActivityDetailFragmentDoc } from './feed-item-details/deprecate-variant/deprecate-variant-activity.query.gql.generated';
import { DeprecateFeatureActivityDetailFragmentDoc } from './feed-item-details/deprecate-feature/deprecate-feature-activity.query.gql.generated';
import { FlagEntityActivityDetailFragmentDoc } from './feed-item-details/flag-entity/flag-entity-activity.query.gql.generated';
import { ModerateAssertionActivityDetailFragmentDoc } from './feed-item-details/moderate-assertion/moderate-assertion-activity.query.gql.generated';
import { ModerateEvidenceItemActivityDetailFragmentDoc } from './feed-item-details/moderate-evidence/moderate-evidence-activity.query.gql.generated';
import { RejectRevisionsActivityDetailFragmentDoc } from './feed-item-details/reject-revisions/reject-revisions-activity.query.gql.generated';
import { ResolveFlagActivityDetailFragmentDoc } from './feed-item-details/resolve-flag/resolve-flag-activity.query.gql.generated';
import { SubmitAssertionActivityDetailFragmentDoc } from './feed-item-details/submit-assertion/submit-assertion-activity.query.gql.generated';
import { SubmitEvidenceItemActivityDetailFragmentDoc } from './feed-item-details/submit-evidence/submit-evidence-activity.query.gql.generated';
import { SuggestRevisionSetActivityDetailFragmentDoc } from './feed-item-details/suggest-revisions/suggest-revisions-activity.query.gql.generated';
import { SuggestSourceActivityDetailFragmentDoc } from './feed-item-details/suggest-source/suggest-source-activity.query.gql.generated';
import { UpdateSourceSuggestionStatusActivityDetailFragmentDoc } from './feed-item-details/update-source-suggestion/update-source-suggestion-activity.query.gql.generated';
import { ApproveAssertionActivityDetailFragmentDoc } from './feed-item-details/approve-assertion/approve-assertion-activity.query.gql.generated';
import { RevokeApprovalActivityDetailFragmentDoc } from './feed-item-details/revoke-approval/revoke-approval-activity.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ActivityFeedQueryVariables = Types.Exact<{
  subject?: Types.InputMaybe<Array<Types.SubscribableQueryInput> | Types.SubscribableQueryInput>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  organizationId?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  includeSubgroups: Types.Scalars['Boolean']['input'];
  userId?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  activityType?: Types.InputMaybe<Array<Types.ActivityTypeInput> | Types.ActivityTypeInput>;
  subjectType?: Types.InputMaybe<Array<Types.ActivitySubjectInput> | Types.ActivitySubjectInput>;
  linkedApprovalId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  includeAutomatedEvents?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  includeConnection?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  includePageInfo?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  mode?: Types.InputMaybe<Types.EventFeedMode>;
  showFilters: Types.Scalars['Boolean']['input'];
  requestDetails: Types.Scalars['Boolean']['input'];
  occurredAfter?: Types.InputMaybe<Types.Scalars['ISO8601DateTime']['input']>;
  occurredBefore?: Types.InputMaybe<Types.Scalars['ISO8601DateTime']['input']>;
  sortBy?: Types.InputMaybe<Types.DateSort>;
}>;


export type ActivityFeedQuery = { __typename: 'Query', activities: { __typename: 'ActivityInterfaceConnection', activityTypes?: Array<Types.ActivityTypeInput>, subjectTypes?: Array<Types.ActivitySubjectInput>, pageCount: number, totalCount: number, unfilteredCount: number, uniqueParticipants?: Array<{ __typename: 'User', id: number, displayName: string, role: Types.UserRole }>, participatingOrganizations?: Array<{ __typename: 'Organization', id: number, name: string }>, edges: Array<{ __typename: 'ActivityInterfaceEdge', cursor: string, node?:
        | { __typename: 'AcceptRevisionsActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
          , parsedNote: Array<
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
             }>, supersededRevisions: Array<{ __typename: 'Revision', id: number, link: string, name: string, fieldName: string, createdAt: any, creationActivity?: { __typename: 'SuggestRevisionSetActivity', user: { __typename: 'User', displayName: string, profileImagePath?: string | undefined, id: number, role: Types.UserRole } } | undefined }>, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'ApproveAssertionActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'CommentActivity', id: number, verbiage: string, createdAt: any, comment: { __typename: 'Comment', id: number, name: string, link: string, deleted: boolean, deletedAt?: any | undefined, title?: string | undefined, comment: string, createdAt: any, commentable:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'CreateComplexMolecularProfileActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'CreateFeatureActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
           }
        | { __typename: 'CreateVariantActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'DeleteCommentActivity', id: number, verbiage: string, createdAt: any, comment: { __typename: 'Comment', id: number, name: string, link: string, deleted: boolean, deletedAt?: any | undefined, title?: string | undefined, comment: string, createdAt: any, commenter: { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }, parsedComment: Array<
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'DeprecateComplexMolecularProfileActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
          , parsedNote: Array<
            | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTextSegment', text: string }
            | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
          >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'DeprecateFeatureActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
          , parsedNote: Array<
            | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTextSegment', text: string }
            | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
          >, molecularProfiles: Array<{ __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }>, variants: Array<
            | { __typename: 'FactorVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
            | { __typename: 'FusionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
            | { __typename: 'GeneVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
            | { __typename: 'RegionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
            | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
          >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'DeprecateVariantActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
          , parsedNote: Array<
            | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTextSegment', text: string }
            | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
          >, molecularProfiles: Array<{ __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }>, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'FlagEntityActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
          , parsedNote: Array<
            | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTextSegment', text: string }
            | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
          >, flag: { __typename: 'Flag', id: number, link: string, name: string }, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'ModerateAssertionActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
          , parsedNote: Array<
            | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTextSegment', text: string }
            | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
          >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'ModerateEvidenceItemActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
          , parsedNote: Array<
            | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTextSegment', text: string }
            | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
          >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'RejectRevisionsActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
          , parsedNote: Array<
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
             }>, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'ResolveFlagActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
          , parsedNote: Array<
            | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTextSegment', text: string }
            | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
          >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'RevokeApprovalActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
          , parsedNote: Array<
            | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTextSegment', text: string }
            | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
          >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'SubmitAssertionActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
          , parsedNote: Array<
            | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTextSegment', text: string }
            | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
          >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'SubmitEvidenceItemActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
          , parsedNote: Array<
            | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTextSegment', text: string }
            | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
          >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'SuggestRevisionSetActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
          , parsedNote: Array<
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
             }>, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'SuggestSourceActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
          , parsedNote: Array<
            | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTextSegment', text: string }
            | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
          >, sourceSuggestion: { __typename: 'SourceSuggestion', id: number, status: Types.SourceSuggestionStatus, source?: { __typename: 'Source', id: number, name: string, link: string, deprecated: boolean } | undefined, molecularProfile?: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean } | undefined, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined }, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
        | { __typename: 'UpdateSourceSuggestionStatusActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
          , parsedNote: Array<
            | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTextSegment', text: string }
            | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
          >, sourceSuggestion: { __typename: 'SourceSuggestion', status: Types.SourceSuggestionStatus, source?: { __typename: 'Source', id: number, name: string, link: string, deprecated: boolean } | undefined, molecularProfile?: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean } | undefined, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined }, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
       | undefined }>, pageInfo: { __typename: 'PageInfo', startCursor?: string | undefined, endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean } } };

export type ActivitiesPageInfoFieldsFragment = { __typename: 'ActivityInterfaceConnection', pageCount: number, totalCount: number, unfilteredCount: number, pageInfo: { __typename: 'PageInfo', startCursor?: string | undefined, endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean } };

export type ActivitiesConnectionFieldsFragment = { __typename: 'ActivityInterfaceConnection', activityTypes?: Array<Types.ActivityTypeInput>, subjectTypes?: Array<Types.ActivitySubjectInput>, uniqueParticipants?: Array<{ __typename: 'User', id: number, displayName: string, role: Types.UserRole }>, participatingOrganizations?: Array<{ __typename: 'Organization', id: number, name: string }>, edges: Array<{ __typename: 'ActivityInterfaceEdge', cursor: string, node?:
      | { __typename: 'AcceptRevisionsActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
        , parsedNote: Array<
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
           }>, supersededRevisions: Array<{ __typename: 'Revision', id: number, link: string, name: string, fieldName: string, createdAt: any, creationActivity?: { __typename: 'SuggestRevisionSetActivity', user: { __typename: 'User', displayName: string, profileImagePath?: string | undefined, id: number, role: Types.UserRole } } | undefined }>, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'ApproveAssertionActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'CommentActivity', id: number, verbiage: string, createdAt: any, comment: { __typename: 'Comment', id: number, name: string, link: string, deleted: boolean, deletedAt?: any | undefined, title?: string | undefined, comment: string, createdAt: any, commentable:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'CreateComplexMolecularProfileActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'CreateFeatureActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
         }
      | { __typename: 'CreateVariantActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'DeleteCommentActivity', id: number, verbiage: string, createdAt: any, comment: { __typename: 'Comment', id: number, name: string, link: string, deleted: boolean, deletedAt?: any | undefined, title?: string | undefined, comment: string, createdAt: any, commenter: { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }, parsedComment: Array<
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'DeprecateComplexMolecularProfileActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
        , parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'DeprecateFeatureActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
        , parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        >, molecularProfiles: Array<{ __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }>, variants: Array<
          | { __typename: 'FactorVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
          | { __typename: 'FusionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
          | { __typename: 'GeneVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
          | { __typename: 'RegionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
          | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
        >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'DeprecateVariantActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
        , parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        >, molecularProfiles: Array<{ __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }>, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'FlagEntityActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
        , parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        >, flag: { __typename: 'Flag', id: number, link: string, name: string }, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'ModerateAssertionActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
        , parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'ModerateEvidenceItemActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
        , parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'RejectRevisionsActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
        , parsedNote: Array<
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
           }>, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'ResolveFlagActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
        , parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'RevokeApprovalActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
        , parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'SubmitAssertionActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
        , parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'SubmitEvidenceItemActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
        , parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'SuggestRevisionSetActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
        , parsedNote: Array<
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
           }>, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'SuggestSourceActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
        , parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        >, sourceSuggestion: { __typename: 'SourceSuggestion', id: number, status: Types.SourceSuggestionStatus, source?: { __typename: 'Source', id: number, name: string, link: string, deprecated: boolean } | undefined, molecularProfile?: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean } | undefined, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined }, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
      | { __typename: 'UpdateSourceSuggestionStatusActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
        , parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        >, sourceSuggestion: { __typename: 'SourceSuggestion', status: Types.SourceSuggestionStatus, source?: { __typename: 'Source', id: number, name: string, link: string, deprecated: boolean } | undefined, molecularProfile?: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean } | undefined, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined }, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> }
     | undefined }> };

export type ActivityFeedItem_AcceptRevisionsActivity_Fragment = { __typename: 'AcceptRevisionsActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
  , parsedNote: Array<
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
     }>, supersededRevisions: Array<{ __typename: 'Revision', id: number, link: string, name: string, fieldName: string, createdAt: any, creationActivity?: { __typename: 'SuggestRevisionSetActivity', user: { __typename: 'User', displayName: string, profileImagePath?: string | undefined, id: number, role: Types.UserRole } } | undefined }>, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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

export type ActivityFeedItem_ApproveAssertionActivity_Fragment = { __typename: 'ApproveAssertionActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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

export type ActivityFeedItem_CommentActivity_Fragment = { __typename: 'CommentActivity', id: number, verbiage: string, createdAt: any, comment: { __typename: 'Comment', id: number, name: string, link: string, deleted: boolean, deletedAt?: any | undefined, title?: string | undefined, comment: string, createdAt: any, commentable:
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

export type ActivityFeedItem_CreateComplexMolecularProfileActivity_Fragment = { __typename: 'CreateComplexMolecularProfileActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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

export type ActivityFeedItem_CreateFeatureActivity_Fragment = { __typename: 'CreateFeatureActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
   };

export type ActivityFeedItem_CreateVariantActivity_Fragment = { __typename: 'CreateVariantActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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

export type ActivityFeedItem_DeleteCommentActivity_Fragment = { __typename: 'DeleteCommentActivity', id: number, verbiage: string, createdAt: any, comment: { __typename: 'Comment', id: number, name: string, link: string, deleted: boolean, deletedAt?: any | undefined, title?: string | undefined, comment: string, createdAt: any, commenter: { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }, parsedComment: Array<
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

export type ActivityFeedItem_DeprecateComplexMolecularProfileActivity_Fragment = { __typename: 'DeprecateComplexMolecularProfileActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
  , parsedNote: Array<
    | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTextSegment', text: string }
    | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
  >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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

export type ActivityFeedItem_DeprecateFeatureActivity_Fragment = { __typename: 'DeprecateFeatureActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
  , parsedNote: Array<
    | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTextSegment', text: string }
    | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
  >, molecularProfiles: Array<{ __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }>, variants: Array<
    | { __typename: 'FactorVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
    | { __typename: 'FusionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
    | { __typename: 'GeneVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
    | { __typename: 'RegionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
    | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
  >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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

export type ActivityFeedItem_DeprecateVariantActivity_Fragment = { __typename: 'DeprecateVariantActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
  , parsedNote: Array<
    | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTextSegment', text: string }
    | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
  >, molecularProfiles: Array<{ __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }>, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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

export type ActivityFeedItem_FlagEntityActivity_Fragment = { __typename: 'FlagEntityActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
  , parsedNote: Array<
    | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTextSegment', text: string }
    | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
  >, flag: { __typename: 'Flag', id: number, link: string, name: string }, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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

export type ActivityFeedItem_ModerateAssertionActivity_Fragment = { __typename: 'ModerateAssertionActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
  , parsedNote: Array<
    | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTextSegment', text: string }
    | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
  >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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

export type ActivityFeedItem_ModerateEvidenceItemActivity_Fragment = { __typename: 'ModerateEvidenceItemActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
  , parsedNote: Array<
    | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTextSegment', text: string }
    | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
  >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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

export type ActivityFeedItem_RejectRevisionsActivity_Fragment = { __typename: 'RejectRevisionsActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
  , parsedNote: Array<
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
     }>, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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

export type ActivityFeedItem_ResolveFlagActivity_Fragment = { __typename: 'ResolveFlagActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
  , parsedNote: Array<
    | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTextSegment', text: string }
    | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
  >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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

export type ActivityFeedItem_RevokeApprovalActivity_Fragment = { __typename: 'RevokeApprovalActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
  , parsedNote: Array<
    | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTextSegment', text: string }
    | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
  >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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

export type ActivityFeedItem_SubmitAssertionActivity_Fragment = { __typename: 'SubmitAssertionActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
  , parsedNote: Array<
    | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTextSegment', text: string }
    | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
  >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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

export type ActivityFeedItem_SubmitEvidenceItemActivity_Fragment = { __typename: 'SubmitEvidenceItemActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
  , parsedNote: Array<
    | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTextSegment', text: string }
    | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
  >, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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

export type ActivityFeedItem_SuggestRevisionSetActivity_Fragment = { __typename: 'SuggestRevisionSetActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
  , parsedNote: Array<
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
     }>, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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

export type ActivityFeedItem_SuggestSourceActivity_Fragment = { __typename: 'SuggestSourceActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
  , parsedNote: Array<
    | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTextSegment', text: string }
    | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
  >, sourceSuggestion: { __typename: 'SourceSuggestion', id: number, status: Types.SourceSuggestionStatus, source?: { __typename: 'Source', id: number, name: string, link: string, deprecated: boolean } | undefined, molecularProfile?: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean } | undefined, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined }, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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

export type ActivityFeedItem_UpdateSourceSuggestionStatusActivity_Fragment = { __typename: 'UpdateSourceSuggestionStatusActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
  , parsedNote: Array<
    | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
    | { __typename: 'CommentTextSegment', text: string }
    | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
  >, sourceSuggestion: { __typename: 'SourceSuggestion', status: Types.SourceSuggestionStatus, source?: { __typename: 'Source', id: number, name: string, link: string, deprecated: boolean } | undefined, molecularProfile?: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean } | undefined, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined }, events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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

export type ActivityFeedItemFragment =
  | ActivityFeedItem_AcceptRevisionsActivity_Fragment
  | ActivityFeedItem_ApproveAssertionActivity_Fragment
  | ActivityFeedItem_CommentActivity_Fragment
  | ActivityFeedItem_CreateComplexMolecularProfileActivity_Fragment
  | ActivityFeedItem_CreateFeatureActivity_Fragment
  | ActivityFeedItem_CreateVariantActivity_Fragment
  | ActivityFeedItem_DeleteCommentActivity_Fragment
  | ActivityFeedItem_DeprecateComplexMolecularProfileActivity_Fragment
  | ActivityFeedItem_DeprecateFeatureActivity_Fragment
  | ActivityFeedItem_DeprecateVariantActivity_Fragment
  | ActivityFeedItem_FlagEntityActivity_Fragment
  | ActivityFeedItem_ModerateAssertionActivity_Fragment
  | ActivityFeedItem_ModerateEvidenceItemActivity_Fragment
  | ActivityFeedItem_RejectRevisionsActivity_Fragment
  | ActivityFeedItem_ResolveFlagActivity_Fragment
  | ActivityFeedItem_RevokeApprovalActivity_Fragment
  | ActivityFeedItem_SubmitAssertionActivity_Fragment
  | ActivityFeedItem_SubmitEvidenceItemActivity_Fragment
  | ActivityFeedItem_SuggestRevisionSetActivity_Fragment
  | ActivityFeedItem_SuggestSourceActivity_Fragment
  | ActivityFeedItem_UpdateSourceSuggestionStatusActivity_Fragment
;

export const ActivitiesPageInfoFieldsFragmentDoc = gql`
    fragment ActivitiesPageInfoFields on ActivityInterfaceConnection {
  pageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
  }
  pageCount
  totalCount
  unfilteredCount
}
    `;
export const ActivityFeedItemFragmentDoc = gql`
    fragment ActivityFeedItem on ActivityInterface {
  ...ActivityFeedItemBase
  ...AcceptRevisionsActivityDetail @include(if: $requestDetails)
  ...CommentActivityDetail @include(if: $requestDetails)
  ...CreateComplexMolecularProfileActivityDetail @include(if: $requestDetails)
  ...CreateVariantActivityDetail @include(if: $requestDetails)
  ...DeleteCommentActivityDetail @include(if: $requestDetails)
  ...DeprecateComplexMolecularProfileActivityDetail @include(if: $requestDetails)
  ...DeprecateVariantActivityDetail @include(if: $requestDetails)
  ...DeprecateFeatureActivityDetail @include(if: $requestDetails)
  ...FlagEntityActivityDetail @include(if: $requestDetails)
  ...ModerateAssertionActivityDetail @include(if: $requestDetails)
  ...ModerateEvidenceItemActivityDetail @include(if: $requestDetails)
  ...RejectRevisionsActivityDetail @include(if: $requestDetails)
  ...ResolveFlagActivityDetail @include(if: $requestDetails)
  ...SubmitAssertionActivityDetail @include(if: $requestDetails)
  ...SubmitEvidenceItemActivityDetail @include(if: $requestDetails)
  ...SuggestRevisionSetActivityDetail @include(if: $requestDetails)
  ...SuggestSourceActivityDetail @include(if: $requestDetails)
  ...UpdateSourceSuggestionStatusActivityDetail @include(if: $requestDetails)
  ...ApproveAssertionActivityDetail @include(if: $requestDetails)
  ...RevokeApprovalActivityDetail @include(if: $requestDetails)
}
    ${ActivityFeedItemBaseFragmentDoc}
${AcceptRevisionsActivityDetailFragmentDoc}
${CommentActivityDetailFragmentDoc}
${CreateComplexMolecularProfileActivityDetailFragmentDoc}
${CreateVariantActivityDetailFragmentDoc}
${DeleteCommentActivityDetailFragmentDoc}
${DeprecateComplexMolecularProfileActivityDetailFragmentDoc}
${DeprecateVariantActivityDetailFragmentDoc}
${DeprecateFeatureActivityDetailFragmentDoc}
${FlagEntityActivityDetailFragmentDoc}
${ModerateAssertionActivityDetailFragmentDoc}
${ModerateEvidenceItemActivityDetailFragmentDoc}
${RejectRevisionsActivityDetailFragmentDoc}
${ResolveFlagActivityDetailFragmentDoc}
${SubmitAssertionActivityDetailFragmentDoc}
${SubmitEvidenceItemActivityDetailFragmentDoc}
${SuggestRevisionSetActivityDetailFragmentDoc}
${SuggestSourceActivityDetailFragmentDoc}
${UpdateSourceSuggestionStatusActivityDetailFragmentDoc}
${ApproveAssertionActivityDetailFragmentDoc}
${RevokeApprovalActivityDetailFragmentDoc}`;
export const ActivitiesConnectionFieldsFragmentDoc = gql`
    fragment ActivitiesConnectionFields on ActivityInterfaceConnection {
  activityTypes @include(if: $showFilters)
  uniqueParticipants @include(if: $showFilters) {
    id
    displayName
    role
  }
  subjectTypes @include(if: $showFilters)
  participatingOrganizations @include(if: $showFilters) {
    id
    name
  }
  edges {
    cursor
    node {
      ...ActivityFeedItem
    }
  }
}
    ${ActivityFeedItemFragmentDoc}`;
export const ActivityFeedDocument = gql`
    query ActivityFeed($subject: [SubscribableQueryInput!], $first: Int, $last: Int, $before: String, $after: String, $organizationId: [Int!], $includeSubgroups: Boolean!, $userId: [Int!], $activityType: [ActivityTypeInput!], $subjectType: [ActivitySubjectInput!], $linkedApprovalId: Int, $includeAutomatedEvents: Boolean, $includeConnection: Boolean = true, $includePageInfo: Boolean = true, $mode: EventFeedMode, $showFilters: Boolean!, $requestDetails: Boolean!, $occurredAfter: ISO8601DateTime, $occurredBefore: ISO8601DateTime, $sortBy: DateSort) {
  activities(
    subject: $subject
    first: $first
    last: $last
    before: $before
    after: $after
    userId: $userId
    linkedApprovalId: $linkedApprovalId
    includeAutomatedEvents: $includeAutomatedEvents
    organization: {ids: $organizationId, includeSubgroups: $includeSubgroups}
    activityType: $activityType
    subjectType: $subjectType
    mode: $mode
    occurredAfter: $occurredAfter
    occurredBefore: $occurredBefore
    sortBy: $sortBy
  ) {
    ...ActivitiesConnectionFields @include(if: $includeConnection)
    ...ActivitiesPageInfoFields @include(if: $includePageInfo)
  }
}
    ${ActivitiesConnectionFieldsFragmentDoc}
${ActivitiesPageInfoFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ActivityFeedGQL extends Apollo.Query<ActivityFeedQuery, ActivityFeedQueryVariables> {
    document = ActivityFeedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
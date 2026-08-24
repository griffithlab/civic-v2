/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { RevokeApprovalActivityDetailFragmentDoc } from '../../activities/activity-feed/feed-item-details/revoke-approval/revoke-approval-activity.query.gql.generated';
import { ApproveAssertionActivityDetailFragmentDoc } from '../../activities/activity-feed/feed-item-details/approve-assertion/approve-assertion-activity.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ApprovalListQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  assertionId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  sortBy?: Types.InputMaybe<Types.DateSort>;
}>;


export type ApprovalListQuery = { __typename: 'Query', approvals: { __typename: 'ApprovalConnection', totalCount: number, pageInfo: { __typename: 'PageInfo', startCursor?: string | undefined, endCursor?: string | undefined, hasPreviousPage: boolean, hasNextPage: boolean }, nodes: Array<{ __typename: 'Approval', id: number, status: Types.ApprovalStatus, lastReviewed: any, updatedAt: any, clinvarAccession?: string | undefined, clinvarAccessionVisible?: boolean | undefined, assertion: { __typename: 'Assertion', id: number, name: string, status: Types.EvidenceStatus, flags: { __typename: 'FlagConnection', totalCount: number } }, organization: { __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined, isApprovedVcep: boolean, isClinvarSubmitter: boolean }, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, revocationActivity?: { __typename: 'RevokeApprovalActivity', note?: string | undefined, id: number, verbiage: string, createdAt: any, parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        >, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> } | undefined, approvalActivity: { __typename: 'ApproveAssertionActivity', note?: string | undefined, id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> } }> } };

export type ApprovalListNodeFragment = { __typename: 'Approval', id: number, status: Types.ApprovalStatus, lastReviewed: any, updatedAt: any, clinvarAccession?: string | undefined, clinvarAccessionVisible?: boolean | undefined, assertion: { __typename: 'Assertion', id: number, name: string, status: Types.EvidenceStatus, flags: { __typename: 'FlagConnection', totalCount: number } }, organization: { __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined, isApprovedVcep: boolean, isClinvarSubmitter: boolean }, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, revocationActivity?: { __typename: 'RevokeApprovalActivity', note?: string | undefined, id: number, verbiage: string, createdAt: any, parsedNote: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    >, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
       | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> } | undefined, approvalActivity: { __typename: 'ApproveAssertionActivity', note?: string | undefined, id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
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
       | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> } };

export const ApprovalListNodeFragmentDoc = gql`
    fragment approvalListNode on Approval {
  id
  status
  lastReviewed
  updatedAt
  assertion {
    id
    name
    status
    flags(state: OPEN) {
      totalCount
    }
  }
  organization {
    id
    name
    profileImagePath(size: 64)
    isApprovedVcep
    isClinvarSubmitter
  }
  clinvarAccession
  clinvarAccessionVisible
  user {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  revocationActivity {
    ...RevokeApprovalActivityDetail
    note
  }
  approvalActivity {
    ...ApproveAssertionActivityDetail
    note
  }
}
    ${RevokeApprovalActivityDetailFragmentDoc}
${ApproveAssertionActivityDetailFragmentDoc}`;
export const ApprovalListDocument = gql`
    query ApprovalList($first: Int, $last: Int, $before: String, $after: String, $assertionId: Int, $sortBy: DateSort) {
  approvals(
    first: $first
    last: $last
    before: $before
    after: $after
    approvedAssertionId: $assertionId
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    nodes {
      ...approvalListNode
    }
  }
}
    ${ApprovalListNodeFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ApprovalListGQL extends Apollo.Query<ApprovalListQuery, ApprovalListQueryVariables> {
    document = ApprovalListDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
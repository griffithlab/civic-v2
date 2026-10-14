/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { ApprovalListNodeFragmentDoc } from '../../../components/approvals/approval-list/approval-list.query.gql.generated';
import { CommenterFieldsFragmentDoc, ParsedCommentFragmentFragmentDoc } from '../../../components/comments/comment-list/comment-list.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type AssertionDetailQueryVariables = Types.Exact<{
  assertionId: Types.Scalars['Int']['input'];
}>;


export type AssertionDetailQuery = { __typename: 'Query', assertion?: { __typename: 'Assertion', id: number, name: string, status: Types.EvidenceStatus, submissionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number } } | undefined, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, approvals: { __typename: 'ApprovalConnection', totalCount: number, nodes: Array<{ __typename: 'Approval', id: number, status: Types.ApprovalStatus, lastReviewed: any, updatedAt: any, clinvarAccession?: string | undefined, clinvarAccessionVisible?: boolean | undefined, assertion: { __typename: 'Assertion', id: number, name: string, status: Types.EvidenceStatus, flags: { __typename: 'FlagConnection', totalCount: number } }, organization: { __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined, isApprovedVcep: boolean, isClinvarSubmitter: boolean }, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, revocationActivity?: { __typename: 'RevokeApprovalActivity', note?: string | undefined, id: number, verbiage: string, createdAt: any, parsedNote: Array<
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> } }> }, submissionActivity: { __typename: 'SubmitAssertionActivity', createdAt: any, parsedNote: Array<
        | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTextSegment', text: string }
        | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
      >, user: { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> } } } | undefined };

export type AssertionDetailFieldsFragment = { __typename: 'Assertion', id: number, name: string, status: Types.EvidenceStatus, submissionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number } } | undefined, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, approvals: { __typename: 'ApprovalConnection', totalCount: number, nodes: Array<{ __typename: 'Approval', id: number, status: Types.ApprovalStatus, lastReviewed: any, updatedAt: any, clinvarAccession?: string | undefined, clinvarAccessionVisible?: boolean | undefined, assertion: { __typename: 'Assertion', id: number, name: string, status: Types.EvidenceStatus, flags: { __typename: 'FlagConnection', totalCount: number } }, organization: { __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined, isApprovedVcep: boolean, isClinvarSubmitter: boolean }, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, revocationActivity?: { __typename: 'RevokeApprovalActivity', note?: string | undefined, id: number, verbiage: string, createdAt: any, parsedNote: Array<
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
           | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> } }> }, submissionActivity: { __typename: 'SubmitAssertionActivity', createdAt: any, parsedNote: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    >, user: { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> } } };

export type AssertionSubmissionActivityFragment = { __typename: 'Assertion', submissionActivity: { __typename: 'SubmitAssertionActivity', createdAt: any, parsedNote: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    >, user: { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> } } };

export const AssertionSubmissionActivityFragmentDoc = gql`
    fragment assertionSubmissionActivity on Assertion {
  submissionActivity {
    createdAt
    parsedNote {
      ...parsedCommentFragment
    }
    user {
      ...commenterFields
    }
  }
}
    ${ParsedCommentFragmentFragmentDoc}
${CommenterFieldsFragmentDoc}`;
export const AssertionDetailFieldsFragmentDoc = gql`
    fragment AssertionDetailFields on Assertion {
  id
  name
  status
  submissionEvent {
    originatingUser {
      id
    }
  }
  molecularProfile {
    id
    name
    link
    deprecated
    flagged
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
  approvals {
    totalCount
    nodes {
      ...approvalListNode
    }
  }
  ...assertionSubmissionActivity
}
    ${ApprovalListNodeFragmentDoc}
${AssertionSubmissionActivityFragmentDoc}`;
export const AssertionDetailDocument = gql`
    query AssertionDetail($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionDetailFields
  }
}
    ${AssertionDetailFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AssertionDetailGQL extends Apollo.Query<AssertionDetailQuery, AssertionDetailQueryVariables> {
    document = AssertionDetailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
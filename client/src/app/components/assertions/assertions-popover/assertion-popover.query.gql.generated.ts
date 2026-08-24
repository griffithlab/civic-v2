/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { MolecularProfileParsedNameFragmentDoc } from '../../../views/molecular-profiles/molecular-profiles-detail/molecular-profiles-summary/molecular-profiles-summary.query.gql.generated';
import { ApprovalListNodeFragmentDoc } from '../../approvals/approval-list/approval-list.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type AssertionPopoverQueryVariables = Types.Exact<{
  assertionId: Types.Scalars['Int']['input'];
}>;


export type AssertionPopoverQuery = { __typename: 'Query', assertion?: { __typename: 'Assertion', id: number, name: string, status: Types.EvidenceStatus, summary: string, description: string, assertionType: Types.AssertionType, assertionDirection: Types.AssertionDirection, significance: Types.AssertionSignificance, variantOrigin: Types.VariantOrigin, ampLevel?: Types.AmpLevel | undefined, nccnGuidelineVersion?: string | undefined, regulatoryApproval?: boolean | undefined, fdaCompanionTest?: boolean | undefined, therapyInteractionType?: Types.TherapyInteraction | undefined, acmgCodes: Array<{ __typename: 'AcmgCode', code: string, description: string }>, clingenCodes: Array<{ __typename: 'ClingenCode', code: string, description: string }>, nccnGuideline?: { __typename: 'NccnGuideline', id: number, name: string } | undefined, therapies: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }>, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, phenotypes: Array<{ __typename: 'Phenotype', id: number, name: string, link: string }>, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, parsedName: Array<
        | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
        | { __typename: 'MolecularProfileTextSegment', text: string }
        | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      > }, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, approvals: { __typename: 'ApprovalConnection', totalCount: number, nodes: Array<{ __typename: 'Approval', id: number, status: Types.ApprovalStatus, lastReviewed: any, updatedAt: any, clinvarAccession?: string | undefined, clinvarAccessionVisible?: boolean | undefined, assertion: { __typename: 'Assertion', id: number, name: string, status: Types.EvidenceStatus, flags: { __typename: 'FlagConnection', totalCount: number } }, organization: { __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined, isApprovedVcep: boolean, isClinvarSubmitter: boolean }, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, revocationActivity?: { __typename: 'RevokeApprovalActivity', note?: string | undefined, id: number, verbiage: string, createdAt: any, parsedNote: Array<
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
             | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> } }> } } | undefined };

export type AssertionPopoverFragment = { __typename: 'Assertion', id: number, name: string, status: Types.EvidenceStatus, summary: string, description: string, assertionType: Types.AssertionType, assertionDirection: Types.AssertionDirection, significance: Types.AssertionSignificance, variantOrigin: Types.VariantOrigin, ampLevel?: Types.AmpLevel | undefined, nccnGuidelineVersion?: string | undefined, regulatoryApproval?: boolean | undefined, fdaCompanionTest?: boolean | undefined, therapyInteractionType?: Types.TherapyInteraction | undefined, acmgCodes: Array<{ __typename: 'AcmgCode', code: string, description: string }>, clingenCodes: Array<{ __typename: 'ClingenCode', code: string, description: string }>, nccnGuideline?: { __typename: 'NccnGuideline', id: number, name: string } | undefined, therapies: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }>, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, phenotypes: Array<{ __typename: 'Phenotype', id: number, name: string, link: string }>, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, parsedName: Array<
      | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      | { __typename: 'MolecularProfileTextSegment', text: string }
      | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
    > }, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, approvals: { __typename: 'ApprovalConnection', totalCount: number, nodes: Array<{ __typename: 'Approval', id: number, status: Types.ApprovalStatus, lastReviewed: any, updatedAt: any, clinvarAccession?: string | undefined, clinvarAccessionVisible?: boolean | undefined, assertion: { __typename: 'Assertion', id: number, name: string, status: Types.EvidenceStatus, flags: { __typename: 'FlagConnection', totalCount: number } }, organization: { __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined, isApprovedVcep: boolean, isClinvarSubmitter: boolean }, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, revocationActivity?: { __typename: 'RevokeApprovalActivity', note?: string | undefined, id: number, verbiage: string, createdAt: any, parsedNote: Array<
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

export const AssertionPopoverFragmentDoc = gql`
    fragment assertionPopover on Assertion {
  id
  name
  status
  summary
  description
  assertionType
  assertionDirection
  significance
  variantOrigin
  ampLevel
  acmgCodes {
    code
    description
  }
  clingenCodes {
    code
    description
  }
  nccnGuideline {
    id
    name
  }
  nccnGuidelineVersion
  regulatoryApproval
  fdaCompanionTest
  therapies {
    id
    name
    link
    deprecated
  }
  therapyInteractionType
  disease {
    id
    name
    link
    deprecated
  }
  phenotypes {
    id
    name
    link
  }
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
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
  approvals(status: ACTIVE) {
    totalCount
    nodes {
      ...approvalListNode
    }
  }
}
    ${MolecularProfileParsedNameFragmentDoc}
${ApprovalListNodeFragmentDoc}`;
export const AssertionPopoverDocument = gql`
    query AssertionPopover($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...assertionPopover
  }
}
    ${AssertionPopoverFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AssertionPopoverGQL extends Apollo.Query<AssertionPopoverQuery, AssertionPopoverQueryVariables> {
    document = AssertionPopoverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
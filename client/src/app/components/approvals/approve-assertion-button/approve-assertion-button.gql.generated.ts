/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { AssertionSummaryFieldsFragmentDoc } from '../../../views/assertions/assertions-detail/assertions-summary/assertions-summary.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ApproveAssertionMutationVariables = Types.Exact<{
  input: Types.ApproveAssertionInput;
}>;


export type ApproveAssertionMutation = { __typename: 'Mutation', approveAssertion?: { __typename: 'ApproveAssertionPayload', assertion: { __typename: 'Assertion', id: number, name: string, summary: string, description: string, descriptionReplaceEidWithSource: string, descriptionWithNames: string, descriptionWithNamesReplaceEidWithSource: string, status: Types.EvidenceStatus, variantOrigin: Types.VariantOrigin, assertionType: Types.AssertionType, assertionDirection: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, ampLevel?: Types.AmpLevel | undefined, nccnGuidelineVersion?: string | undefined, regulatoryApproval?: boolean | undefined, regulatoryApprovalLastUpdated?: any | undefined, fdaCompanionTest?: boolean | undefined, fdaCompanionTestLastUpdated?: any | undefined, descriptionWithTags: Array<
        | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTextSegment', text: string }
        | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
      >, descriptionWithTagsReplaceEidWithSource: Array<
        | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTextSegment', text: string }
        | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
      >, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, parsedName: Array<
          | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
          | { __typename: 'MolecularProfileTextSegment', text: string }
          | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
        > }, therapies: Array<{ __typename: 'Therapy', ncitId?: string | undefined, name: string, link: string, id: number, deprecated: boolean }>, phenotypes: Array<{ __typename: 'Phenotype', id: number, name: string, link: string }>, acmgCodes: Array<{ __typename: 'AcmgCode', code: string, description: string }>, clingenCodes: Array<{ __typename: 'ClingenCode', id: number, code: string, description: string }>, nccnGuideline?: { __typename: 'NccnGuideline', id: number, name: string } | undefined, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, acceptanceEvent?: { __typename: 'Event', createdAt: any, originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, submissionEvent?: { __typename: 'Event', createdAt: any, originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, rejectionEvent?: { __typename: 'Event', createdAt: any, originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, activeApprovals: { __typename: 'ApprovalConnection', totalCount: number, nodes: Array<{ __typename: 'Approval', id: number, status: Types.ApprovalStatus, lastReviewed: any, clinvarAccession?: string | undefined, clinvarAccessionVisible?: boolean | undefined, organization: { __typename: 'Organization', id: number, name: string, isApprovedVcep: boolean, isClinvarSubmitter: boolean } }> }, requiresReviewApprovals: { __typename: 'ApprovalConnection', totalCount: number, nodes: Array<{ __typename: 'Approval', id: number, status: Types.ApprovalStatus, lastReviewed: any, clinvarAccession?: string | undefined, clinvarAccessionVisible?: boolean | undefined, organization: { __typename: 'Organization', id: number, name: string, isApprovedVcep: boolean, isClinvarSubmitter: boolean } }> }, submissionActivity: { __typename: 'SubmitAssertionActivity', createdAt: any, parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        >, user: { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> } } } } | undefined };

export type RevokeApprovalMutationVariables = Types.Exact<{
  input: Types.RevokeApprovalInput;
}>;


export type RevokeApprovalMutation = { __typename: 'Mutation', revokeApproval?: { __typename: 'RevokeApprovalPayload', assertion: { __typename: 'Assertion', id: number, name: string, summary: string, description: string, descriptionReplaceEidWithSource: string, descriptionWithNames: string, descriptionWithNamesReplaceEidWithSource: string, status: Types.EvidenceStatus, variantOrigin: Types.VariantOrigin, assertionType: Types.AssertionType, assertionDirection: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, ampLevel?: Types.AmpLevel | undefined, nccnGuidelineVersion?: string | undefined, regulatoryApproval?: boolean | undefined, regulatoryApprovalLastUpdated?: any | undefined, fdaCompanionTest?: boolean | undefined, fdaCompanionTestLastUpdated?: any | undefined, descriptionWithTags: Array<
        | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTextSegment', text: string }
        | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
      >, descriptionWithTagsReplaceEidWithSource: Array<
        | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTextSegment', text: string }
        | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
      >, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, parsedName: Array<
          | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
          | { __typename: 'MolecularProfileTextSegment', text: string }
          | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
        > }, therapies: Array<{ __typename: 'Therapy', ncitId?: string | undefined, name: string, link: string, id: number, deprecated: boolean }>, phenotypes: Array<{ __typename: 'Phenotype', id: number, name: string, link: string }>, acmgCodes: Array<{ __typename: 'AcmgCode', code: string, description: string }>, clingenCodes: Array<{ __typename: 'ClingenCode', id: number, code: string, description: string }>, nccnGuideline?: { __typename: 'NccnGuideline', id: number, name: string } | undefined, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, acceptanceEvent?: { __typename: 'Event', createdAt: any, originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, submissionEvent?: { __typename: 'Event', createdAt: any, originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, rejectionEvent?: { __typename: 'Event', createdAt: any, originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, activeApprovals: { __typename: 'ApprovalConnection', totalCount: number, nodes: Array<{ __typename: 'Approval', id: number, status: Types.ApprovalStatus, lastReviewed: any, clinvarAccession?: string | undefined, clinvarAccessionVisible?: boolean | undefined, organization: { __typename: 'Organization', id: number, name: string, isApprovedVcep: boolean, isClinvarSubmitter: boolean } }> }, requiresReviewApprovals: { __typename: 'ApprovalConnection', totalCount: number, nodes: Array<{ __typename: 'Approval', id: number, status: Types.ApprovalStatus, lastReviewed: any, clinvarAccession?: string | undefined, clinvarAccessionVisible?: boolean | undefined, organization: { __typename: 'Organization', id: number, name: string, isApprovedVcep: boolean, isClinvarSubmitter: boolean } }> }, submissionActivity: { __typename: 'SubmitAssertionActivity', createdAt: any, parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        >, user: { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> } } } } | undefined };

export const ApproveAssertionDocument = gql`
    mutation ApproveAssertion($input: ApproveAssertionInput!) {
  approveAssertion(input: $input) {
    assertion {
      ...AssertionSummaryFields
    }
  }
}
    ${AssertionSummaryFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ApproveAssertionGQL extends Apollo.Mutation<ApproveAssertionMutation, ApproveAssertionMutationVariables> {
    document = ApproveAssertionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const RevokeApprovalDocument = gql`
    mutation RevokeApproval($input: RevokeApprovalInput!) {
  revokeApproval(input: $input) {
    assertion {
      ...AssertionSummaryFields
    }
  }
}
    ${AssertionSummaryFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RevokeApprovalGQL extends Apollo.Mutation<RevokeApprovalMutation, RevokeApprovalMutationVariables> {
    document = RevokeApprovalDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
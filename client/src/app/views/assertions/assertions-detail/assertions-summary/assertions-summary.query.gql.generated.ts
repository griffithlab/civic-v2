/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { ParsedCommentFragmentFragmentDoc } from '../../../../components/comments/comment-list/comment-list.query.gql.generated';
import { MolecularProfileParsedNameFragmentDoc } from '../../../molecular-profiles/molecular-profiles-detail/molecular-profiles-summary/molecular-profiles-summary.query.gql.generated';
import { AssertionSubmissionActivityFragmentDoc } from '../assertions-detail.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type AssertionSummaryQueryVariables = Types.Exact<{
  assertionId: Types.Scalars['Int']['input'];
}>;


export type AssertionSummaryQuery = { __typename: 'Query', assertion?: { __typename: 'Assertion', id: number, name: string, summary: string, description: string, descriptionReplaceEidWithSource: string, descriptionWithNames: string, descriptionWithNamesReplaceEidWithSource: string, status: Types.EvidenceStatus, variantOrigin: Types.VariantOrigin, assertionType: Types.AssertionType, assertionDirection: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, ampLevel?: Types.AmpLevel | undefined, nccnGuidelineVersion?: string | undefined, regulatoryApproval?: boolean | undefined, regulatoryApprovalLastUpdated?: any | undefined, fdaCompanionTest?: boolean | undefined, fdaCompanionTestLastUpdated?: any | undefined, descriptionWithTags: Array<
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
      >, user: { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> } } } | undefined };

export type AssertionSummaryFieldsFragment = { __typename: 'Assertion', id: number, name: string, summary: string, description: string, descriptionReplaceEidWithSource: string, descriptionWithNames: string, descriptionWithNamesReplaceEidWithSource: string, status: Types.EvidenceStatus, variantOrigin: Types.VariantOrigin, assertionType: Types.AssertionType, assertionDirection: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, ampLevel?: Types.AmpLevel | undefined, nccnGuidelineVersion?: string | undefined, regulatoryApproval?: boolean | undefined, regulatoryApprovalLastUpdated?: any | undefined, fdaCompanionTest?: boolean | undefined, fdaCompanionTestLastUpdated?: any | undefined, descriptionWithTags: Array<
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
    >, user: { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> } } };

export const AssertionSummaryFieldsFragmentDoc = gql`
    fragment AssertionSummaryFields on Assertion {
  id
  name
  summary
  description
  descriptionReplaceEidWithSource
  descriptionWithTags {
    ...parsedCommentFragment
  }
  descriptionWithNames
  descriptionWithTagsReplaceEidWithSource {
    ...parsedCommentFragment
  }
  descriptionWithNamesReplaceEidWithSource
  status
  variantOrigin
  disease {
    id
    name
    link
    deprecated
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
  assertionType
  assertionDirection
  significance
  therapies {
    ncitId
    name
    link
    id
    deprecated
  }
  phenotypes {
    id
    name
    link
  }
  therapyInteractionType
  ampLevel
  acmgCodes {
    code
    description
  }
  clingenCodes {
    id
    code
    description
  }
  nccnGuideline {
    id
    name
  }
  nccnGuidelineVersion
  regulatoryApproval
  regulatoryApprovalLastUpdated
  fdaCompanionTest
  fdaCompanionTestLastUpdated
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  acceptanceEvent {
    createdAt
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  ...assertionSubmissionActivity
  submissionEvent {
    createdAt
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  rejectionEvent {
    createdAt
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  activeApprovals: approvals(status: ACTIVE) {
    totalCount
    nodes {
      id
      status
      organization {
        id
        name
        isApprovedVcep
        isClinvarSubmitter
      }
      lastReviewed
      clinvarAccession
      clinvarAccessionVisible
    }
  }
  requiresReviewApprovals: approvals(status: REQUIRES_REVIEW) {
    totalCount
    nodes {
      id
      status
      organization {
        id
        name
        isApprovedVcep
        isClinvarSubmitter
      }
      lastReviewed
      clinvarAccession
      clinvarAccessionVisible
    }
  }
}
    ${ParsedCommentFragmentFragmentDoc}
${MolecularProfileParsedNameFragmentDoc}
${AssertionSubmissionActivityFragmentDoc}`;
export const AssertionSummaryDocument = gql`
    query AssertionSummary($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...AssertionSummaryFields
  }
}
    ${AssertionSummaryFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AssertionSummaryGQL extends Apollo.Query<AssertionSummaryQuery, AssertionSummaryQueryVariables> {
    document = AssertionSummaryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
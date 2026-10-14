/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { ParsedCommentFragmentFragmentDoc } from '../../../../components/comments/comment-list/comment-list.query.gql.generated';
import { NcitDetailsFragmentDoc, DetailedClinicalSignificanceCountsFragmentDoc } from '../../../features/features-detail/features-summary/features-summary.query.gql.generated';
import { CoordinateFieldsFragmentDoc } from '../../../../forms/config/gene-variant-revise/gene-variant-revise.query.gql.generated';
import { ExonCoordinateFieldsFragmentDoc } from '../../../../components/variants/coordinates-card/coordinates-card.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type VariantSummaryQueryVariables = Types.Exact<{
  variantId: Types.Scalars['Int']['input'];
}>;


export type VariantSummaryQuery = { __typename: 'Query', variant?:
    | { __typename: 'FactorVariant', id: number, name: string, variantAliases: Array<string>, ncitId?: string | undefined, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, lastSubmittedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, lastAcceptedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, creationActivity?: { __typename: 'CreateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        > } | undefined, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, ncitDetails?: { __typename: 'NcitDetails', synonyms: Array<{ __typename: 'NcitSynonym', name: string, source: string }>, definitions: Array<{ __typename: 'NcitDefinition', definition: string, source: string }> } | undefined }
    | { __typename: 'FusionVariant', id: number, name: string, variantAliases: Array<string>, viccCompliantName: string, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, lastSubmittedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, lastAcceptedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, creationActivity?: { __typename: 'CreateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        > } | undefined, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, fusion: { __typename: 'Fusion', fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus, fivePrimeGene?: { __typename: 'Gene', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined, threePrimeGene?: { __typename: 'Gene', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }, fivePrimeCoordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, threePrimeCoordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, fivePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, fivePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined }
    | { __typename: 'GeneVariant', id: number, name: string, variantAliases: Array<string>, alleleRegistryId?: string | undefined, openCravatUrl?: string | undefined, maneSelectTranscript?: string | undefined, hgvsDescriptions: Array<string>, clinvarIds: Array<string>, openCravatAnnotations?: any | undefined, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, lastSubmittedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, lastAcceptedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, creationActivity?: { __typename: 'CreateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        > } | undefined, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, coordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, myVariantInfo?: { __typename: 'MyVariantInfo', myVariantInfoId: string, caddConsequence: Array<string>, caddDetail: Array<string>, caddScore?: number | undefined, caddPhred?: number | undefined, clinvarClinicalSignificance: Array<string>, clinvarHgvsCoding: Array<string>, clinvarHgvsGenomic: Array<string>, clinvarHgvsNonCoding: Array<string>, clinvarHgvsProtein: Array<string>, clinvarId?: number | undefined, clinvarOmim?: string | undefined, cosmicId?: string | undefined, dbnsfpInterproDomain: Array<string>, dbsnpRsid?: string | undefined, eglClass?: string | undefined, eglHgvs: Array<string>, eglProtein?: string | undefined, eglTranscript?: string | undefined, exacAlleleCount?: number | undefined, exacAlleleFrequency?: number | undefined, exacAlleleNumber?: number | undefined, fathmmMklPrediction?: string | undefined, fathmmMklScore?: number | undefined, fathmmPrediction: Array<string>, fathmmScore: Array<number>, fitconsScore?: number | undefined, gerp?: number | undefined, gnomadExomeAlleleCount?: number | undefined, gnomadExomeAlleleFrequency?: number | undefined, gnomadExomeAlleleNumber?: number | undefined, gnomadExomeFilter?: string | undefined, gnomadGenomeAlleleCount?: number | undefined, gnomadGenomeAlleleFrequency?: number | undefined, gnomadGenomeAlleleNumber?: number | undefined, gnomadGenomeFilter?: string | undefined, lrtPrediction?: string | undefined, lrtScore?: number | undefined, metalrPrediction?: string | undefined, metalrScore?: number | undefined, metasvmPrediction?: string | undefined, metasvmScore?: number | undefined, mutationassessorPrediction: Array<string>, mutationassessorScore: Array<number>, mutationtasterPrediction: Array<string>, mutationtasterScore: Array<number>, phastcons100way?: number | undefined, phastcons30way?: number | undefined, phyloP100way?: number | undefined, phyloP30way?: number | undefined, polyphen2HdivPrediction: Array<string>, polyphen2HdivScore: Array<number>, polyphen2HvarPrediction: Array<string>, polyphen2HvarScore: Array<number>, proveanPrediction: Array<string>, proveanScore: Array<number>, revelScore?: Array<number> | undefined, siftPrediction: Array<string>, siftScore: Array<number>, siphy?: number | undefined, snpeffSnpEffect: Array<string>, snpeffSnpImpact: Array<string> } | undefined }
    | { __typename: 'RegionVariant', id: number, name: string, variantAliases: Array<string>, iscnName?: string | undefined, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, lastSubmittedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, lastAcceptedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, creationActivity?: { __typename: 'CreateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        > } | undefined, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }> }
    | { __typename: 'Variant', id: number, name: string, variantAliases: Array<string>, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, lastSubmittedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, lastAcceptedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, creationActivity?: { __typename: 'CreateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, parsedNote: Array<
          | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
          | { __typename: 'CommentTextSegment', text: string }
          | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
        > } | undefined, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }> }
   | undefined };

export type VariantSummaryFields_FactorVariant_Fragment = { __typename: 'FactorVariant', id: number, name: string, variantAliases: Array<string>, ncitId?: string | undefined, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, lastSubmittedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, lastAcceptedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, creationActivity?: { __typename: 'CreateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, parsedNote: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    > } | undefined, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, ncitDetails?: { __typename: 'NcitDetails', synonyms: Array<{ __typename: 'NcitSynonym', name: string, source: string }>, definitions: Array<{ __typename: 'NcitDefinition', definition: string, source: string }> } | undefined };

export type VariantSummaryFields_FusionVariant_Fragment = { __typename: 'FusionVariant', id: number, name: string, variantAliases: Array<string>, viccCompliantName: string, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, lastSubmittedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, lastAcceptedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, creationActivity?: { __typename: 'CreateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, parsedNote: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    > } | undefined, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, fusion: { __typename: 'Fusion', fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus, fivePrimeGene?: { __typename: 'Gene', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined, threePrimeGene?: { __typename: 'Gene', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }, fivePrimeCoordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, threePrimeCoordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, fivePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, fivePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined };

export type VariantSummaryFields_GeneVariant_Fragment = { __typename: 'GeneVariant', id: number, name: string, variantAliases: Array<string>, alleleRegistryId?: string | undefined, openCravatUrl?: string | undefined, maneSelectTranscript?: string | undefined, hgvsDescriptions: Array<string>, clinvarIds: Array<string>, openCravatAnnotations?: any | undefined, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, lastSubmittedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, lastAcceptedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, creationActivity?: { __typename: 'CreateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, parsedNote: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    > } | undefined, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, coordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, myVariantInfo?: { __typename: 'MyVariantInfo', myVariantInfoId: string, caddConsequence: Array<string>, caddDetail: Array<string>, caddScore?: number | undefined, caddPhred?: number | undefined, clinvarClinicalSignificance: Array<string>, clinvarHgvsCoding: Array<string>, clinvarHgvsGenomic: Array<string>, clinvarHgvsNonCoding: Array<string>, clinvarHgvsProtein: Array<string>, clinvarId?: number | undefined, clinvarOmim?: string | undefined, cosmicId?: string | undefined, dbnsfpInterproDomain: Array<string>, dbsnpRsid?: string | undefined, eglClass?: string | undefined, eglHgvs: Array<string>, eglProtein?: string | undefined, eglTranscript?: string | undefined, exacAlleleCount?: number | undefined, exacAlleleFrequency?: number | undefined, exacAlleleNumber?: number | undefined, fathmmMklPrediction?: string | undefined, fathmmMklScore?: number | undefined, fathmmPrediction: Array<string>, fathmmScore: Array<number>, fitconsScore?: number | undefined, gerp?: number | undefined, gnomadExomeAlleleCount?: number | undefined, gnomadExomeAlleleFrequency?: number | undefined, gnomadExomeAlleleNumber?: number | undefined, gnomadExomeFilter?: string | undefined, gnomadGenomeAlleleCount?: number | undefined, gnomadGenomeAlleleFrequency?: number | undefined, gnomadGenomeAlleleNumber?: number | undefined, gnomadGenomeFilter?: string | undefined, lrtPrediction?: string | undefined, lrtScore?: number | undefined, metalrPrediction?: string | undefined, metalrScore?: number | undefined, metasvmPrediction?: string | undefined, metasvmScore?: number | undefined, mutationassessorPrediction: Array<string>, mutationassessorScore: Array<number>, mutationtasterPrediction: Array<string>, mutationtasterScore: Array<number>, phastcons100way?: number | undefined, phastcons30way?: number | undefined, phyloP100way?: number | undefined, phyloP30way?: number | undefined, polyphen2HdivPrediction: Array<string>, polyphen2HdivScore: Array<number>, polyphen2HvarPrediction: Array<string>, polyphen2HvarScore: Array<number>, proveanPrediction: Array<string>, proveanScore: Array<number>, revelScore?: Array<number> | undefined, siftPrediction: Array<string>, siftScore: Array<number>, siphy?: number | undefined, snpeffSnpEffect: Array<string>, snpeffSnpImpact: Array<string> } | undefined };

export type VariantSummaryFields_RegionVariant_Fragment = { __typename: 'RegionVariant', id: number, name: string, variantAliases: Array<string>, iscnName?: string | undefined, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, lastSubmittedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, lastAcceptedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, creationActivity?: { __typename: 'CreateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, parsedNote: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    > } | undefined, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }> };

export type VariantSummaryFields_Variant_Fragment = { __typename: 'Variant', id: number, name: string, variantAliases: Array<string>, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, lastSubmittedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, lastAcceptedRevisionEvent?: { __typename: 'Event', originatingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, creationActivity?: { __typename: 'CreateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, parsedNote: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    > } | undefined, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }> };

export type VariantSummaryFieldsFragment =
  | VariantSummaryFields_FactorVariant_Fragment
  | VariantSummaryFields_FusionVariant_Fragment
  | VariantSummaryFields_GeneVariant_Fragment
  | VariantSummaryFields_RegionVariant_Fragment
  | VariantSummaryFields_Variant_Fragment
;

export type FactorVariantSummaryFieldsFragment = { __typename: 'FactorVariant', ncitId?: string | undefined, ncitDetails?: { __typename: 'NcitDetails', synonyms: Array<{ __typename: 'NcitSynonym', name: string, source: string }>, definitions: Array<{ __typename: 'NcitDefinition', definition: string, source: string }> } | undefined };

export type RegionVariantSummaryFieldsFragment = { __typename: 'RegionVariant', iscnName?: string | undefined };

export type GeneVariantSummaryFieldsFragment = { __typename: 'GeneVariant', alleleRegistryId?: string | undefined, openCravatUrl?: string | undefined, maneSelectTranscript?: string | undefined, hgvsDescriptions: Array<string>, clinvarIds: Array<string>, openCravatAnnotations?: any | undefined, coordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, myVariantInfo?: { __typename: 'MyVariantInfo', myVariantInfoId: string, caddConsequence: Array<string>, caddDetail: Array<string>, caddScore?: number | undefined, caddPhred?: number | undefined, clinvarClinicalSignificance: Array<string>, clinvarHgvsCoding: Array<string>, clinvarHgvsGenomic: Array<string>, clinvarHgvsNonCoding: Array<string>, clinvarHgvsProtein: Array<string>, clinvarId?: number | undefined, clinvarOmim?: string | undefined, cosmicId?: string | undefined, dbnsfpInterproDomain: Array<string>, dbsnpRsid?: string | undefined, eglClass?: string | undefined, eglHgvs: Array<string>, eglProtein?: string | undefined, eglTranscript?: string | undefined, exacAlleleCount?: number | undefined, exacAlleleFrequency?: number | undefined, exacAlleleNumber?: number | undefined, fathmmMklPrediction?: string | undefined, fathmmMklScore?: number | undefined, fathmmPrediction: Array<string>, fathmmScore: Array<number>, fitconsScore?: number | undefined, gerp?: number | undefined, gnomadExomeAlleleCount?: number | undefined, gnomadExomeAlleleFrequency?: number | undefined, gnomadExomeAlleleNumber?: number | undefined, gnomadExomeFilter?: string | undefined, gnomadGenomeAlleleCount?: number | undefined, gnomadGenomeAlleleFrequency?: number | undefined, gnomadGenomeAlleleNumber?: number | undefined, gnomadGenomeFilter?: string | undefined, lrtPrediction?: string | undefined, lrtScore?: number | undefined, metalrPrediction?: string | undefined, metalrScore?: number | undefined, metasvmPrediction?: string | undefined, metasvmScore?: number | undefined, mutationassessorPrediction: Array<string>, mutationassessorScore: Array<number>, mutationtasterPrediction: Array<string>, mutationtasterScore: Array<number>, phastcons100way?: number | undefined, phastcons30way?: number | undefined, phyloP100way?: number | undefined, phyloP30way?: number | undefined, polyphen2HdivPrediction: Array<string>, polyphen2HdivScore: Array<number>, polyphen2HvarPrediction: Array<string>, polyphen2HvarScore: Array<number>, proveanPrediction: Array<string>, proveanScore: Array<number>, revelScore?: Array<number> | undefined, siftPrediction: Array<string>, siftScore: Array<number>, siphy?: number | undefined, snpeffSnpEffect: Array<string>, snpeffSnpImpact: Array<string> } | undefined };

export type FusionVariantSummaryFieldsFragment = { __typename: 'FusionVariant', viccCompliantName: string, fusion: { __typename: 'Fusion', fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus, fivePrimeGene?: { __typename: 'Gene', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined, threePrimeGene?: { __typename: 'Gene', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }, fivePrimeCoordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, threePrimeCoordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, fivePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, fivePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined };

export type MyVariantInfoFieldsFragment = { __typename: 'MyVariantInfo', myVariantInfoId: string, caddConsequence: Array<string>, caddDetail: Array<string>, caddScore?: number | undefined, caddPhred?: number | undefined, clinvarClinicalSignificance: Array<string>, clinvarHgvsCoding: Array<string>, clinvarHgvsGenomic: Array<string>, clinvarHgvsNonCoding: Array<string>, clinvarHgvsProtein: Array<string>, clinvarId?: number | undefined, clinvarOmim?: string | undefined, cosmicId?: string | undefined, dbnsfpInterproDomain: Array<string>, dbsnpRsid?: string | undefined, eglClass?: string | undefined, eglHgvs: Array<string>, eglProtein?: string | undefined, eglTranscript?: string | undefined, exacAlleleCount?: number | undefined, exacAlleleFrequency?: number | undefined, exacAlleleNumber?: number | undefined, fathmmMklPrediction?: string | undefined, fathmmMklScore?: number | undefined, fathmmPrediction: Array<string>, fathmmScore: Array<number>, fitconsScore?: number | undefined, gerp?: number | undefined, gnomadExomeAlleleCount?: number | undefined, gnomadExomeAlleleFrequency?: number | undefined, gnomadExomeAlleleNumber?: number | undefined, gnomadExomeFilter?: string | undefined, gnomadGenomeAlleleCount?: number | undefined, gnomadGenomeAlleleFrequency?: number | undefined, gnomadGenomeAlleleNumber?: number | undefined, gnomadGenomeFilter?: string | undefined, lrtPrediction?: string | undefined, lrtScore?: number | undefined, metalrPrediction?: string | undefined, metalrScore?: number | undefined, metasvmPrediction?: string | undefined, metasvmScore?: number | undefined, mutationassessorPrediction: Array<string>, mutationassessorScore: Array<number>, mutationtasterPrediction: Array<string>, mutationtasterScore: Array<number>, phastcons100way?: number | undefined, phastcons30way?: number | undefined, phyloP100way?: number | undefined, phyloP30way?: number | undefined, polyphen2HdivPrediction: Array<string>, polyphen2HdivScore: Array<number>, polyphen2HvarPrediction: Array<string>, polyphen2HvarScore: Array<number>, proveanPrediction: Array<string>, proveanScore: Array<number>, revelScore?: Array<number> | undefined, siftPrediction: Array<string>, siftScore: Array<number>, siphy?: number | undefined, snpeffSnpEffect: Array<string>, snpeffSnpImpact: Array<string> };

export const MyVariantInfoFieldsFragmentDoc = gql`
    fragment MyVariantInfoFields on MyVariantInfo {
  myVariantInfoId
  caddConsequence
  caddDetail
  caddScore
  caddPhred
  clinvarClinicalSignificance
  clinvarHgvsCoding
  clinvarHgvsGenomic
  clinvarHgvsNonCoding
  clinvarHgvsProtein
  clinvarId
  clinvarOmim
  cosmicId
  dbnsfpInterproDomain
  dbsnpRsid
  eglClass
  eglHgvs
  eglProtein
  eglTranscript
  exacAlleleCount
  exacAlleleFrequency
  exacAlleleNumber
  fathmmMklPrediction
  fathmmMklScore
  fathmmPrediction
  fathmmScore
  fitconsScore
  gerp
  gnomadExomeAlleleCount
  gnomadExomeAlleleFrequency
  gnomadExomeAlleleNumber
  gnomadExomeFilter
  gnomadGenomeAlleleCount
  gnomadGenomeAlleleFrequency
  gnomadGenomeAlleleNumber
  gnomadGenomeFilter
  lrtPrediction
  lrtScore
  metalrPrediction
  metalrScore
  metasvmPrediction
  metasvmScore
  mutationassessorPrediction
  mutationassessorScore
  mutationtasterPrediction
  mutationtasterScore
  phastcons100way
  phastcons30way
  phyloP100way
  phyloP30way
  polyphen2HdivPrediction
  polyphen2HdivScore
  polyphen2HvarPrediction
  polyphen2HvarScore
  proveanPrediction
  proveanScore
  revelScore
  siftPrediction
  siftScore
  siphy
  snpeffSnpEffect
  snpeffSnpImpact
}
    `;
export const GeneVariantSummaryFieldsFragmentDoc = gql`
    fragment GeneVariantSummaryFields on GeneVariant {
  alleleRegistryId
  openCravatUrl
  maneSelectTranscript
  hgvsDescriptions
  clinvarIds
  coordinates {
    ...CoordinateFields
  }
  myVariantInfo {
    ...MyVariantInfoFields
  }
  openCravatAnnotations
}
    ${CoordinateFieldsFragmentDoc}
${MyVariantInfoFieldsFragmentDoc}`;
export const FactorVariantSummaryFieldsFragmentDoc = gql`
    fragment FactorVariantSummaryFields on FactorVariant {
  ncitId
  ncitDetails {
    ...NcitDetails
  }
}
    ${NcitDetailsFragmentDoc}`;
export const FusionVariantSummaryFieldsFragmentDoc = gql`
    fragment FusionVariantSummaryFields on FusionVariant {
  viccCompliantName
  fusion {
    fivePrimePartnerStatus
    fivePrimeGene {
      id
      name
      link
      deprecated
      flagged
    }
    threePrimePartnerStatus
    threePrimeGene {
      id
      name
      link
      deprecated
      flagged
    }
  }
  fivePrimeCoordinates {
    ...CoordinateFields
  }
  threePrimeCoordinates {
    ...CoordinateFields
  }
  fivePrimeStartExonCoordinates {
    ...ExonCoordinateFields
  }
  fivePrimeEndExonCoordinates {
    ...ExonCoordinateFields
  }
  threePrimeStartExonCoordinates {
    ...ExonCoordinateFields
  }
  threePrimeEndExonCoordinates {
    ...ExonCoordinateFields
  }
}
    ${CoordinateFieldsFragmentDoc}
${ExonCoordinateFieldsFragmentDoc}`;
export const RegionVariantSummaryFieldsFragmentDoc = gql`
    fragment RegionVariantSummaryFields on RegionVariant {
  iscnName
}
    `;
export const VariantSummaryFieldsFragmentDoc = gql`
    fragment VariantSummaryFields on VariantInterface {
  id
  name
  feature {
    __typename
    id
    name
    link
    deprecated
    flagged
  }
  variantAliases
  variantTypes {
    id
    link
    soid
    name
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
  lastSubmittedRevisionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  lastAcceptedRevisionEvent {
    originatingUser {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  creationActivity {
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
    createdAt
  }
  deprecationActivity {
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
    createdAt
    parsedNote {
      ...parsedCommentFragment
    }
  }
  detailedClinicalSignificanceCounts {
    ...DetailedClinicalSignificanceCounts
  }
  ... on GeneVariant {
    ...GeneVariantSummaryFields
  }
  ... on FactorVariant {
    ...FactorVariantSummaryFields
  }
  ... on FusionVariant {
    ...FusionVariantSummaryFields
  }
  ... on RegionVariant {
    ...RegionVariantSummaryFields
  }
}
    ${ParsedCommentFragmentFragmentDoc}
${DetailedClinicalSignificanceCountsFragmentDoc}
${GeneVariantSummaryFieldsFragmentDoc}
${FactorVariantSummaryFieldsFragmentDoc}
${FusionVariantSummaryFieldsFragmentDoc}
${RegionVariantSummaryFieldsFragmentDoc}`;
export const VariantSummaryDocument = gql`
    query VariantSummary($variantId: Int!) {
  variant(id: $variantId) {
    ...VariantSummaryFields
  }
}
    ${VariantSummaryFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantSummaryGQL extends Apollo.Query<VariantSummaryQuery, VariantSummaryQueryVariables> {
    document = VariantSummaryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
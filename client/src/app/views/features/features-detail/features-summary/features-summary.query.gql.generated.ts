/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { FeatureInstanceRefFragmentDoc } from '../../../../graphql/feature-instance.fragments.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type FeaturesSummaryQueryVariables = Types.Exact<{
  featureId: Types.Scalars['Int']['input'];
}>;


export type FeaturesSummaryQuery = { __typename: 'Query', feature?: { __typename: 'Feature', id: number, name: string, fullName?: string | undefined, link: string, deprecated: boolean, flagged: boolean, featureInstance:
      | { __typename: 'Factor', id: number, name: string, description?: string | undefined, featureAliases: Array<string>, ncitId?: string | undefined, deprecated: boolean, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }>, ncitDetails?: { __typename: 'NcitDetails', synonyms: Array<{ __typename: 'NcitSynonym', name: string, source: string }>, definitions: Array<{ __typename: 'NcitDefinition', definition: string, source: string }> } | undefined, stats: { __typename: 'FeatureStats', evidenceItemCount: number }, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, creationActivity?: { __typename: 'CreateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined }
      | { __typename: 'Fusion', id: number, description?: string | undefined, featureAliases: Array<string>, name: string, fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }>, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, fivePrimeGene?: { __typename: 'Gene', id: number, description?: string | undefined, featureAliases: Array<string>, entrezId: number, deprecated: boolean, flagged: boolean, name: string, link: string, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> } | undefined, threePrimeGene?: { __typename: 'Gene', id: number, description?: string | undefined, featureAliases: Array<string>, entrezId: number, deprecated: boolean, flagged: boolean, name: string, link: string, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> } | undefined, fusionsKnownPartnerGenes: Array<{ __typename: 'FusionKnownPartnerGene', gene: { __typename: 'Gene', id: number, description?: string | undefined, featureAliases: Array<string>, entrezId: number, deprecated: boolean, flagged: boolean, name: string, link: string, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> }, knownPartnerSpecificFusion?: { __typename: 'Fusion', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, stats: { __typename: 'FeatureStats', variantCount: number, molecularProfileCount: number, evidenceItemCount: number, assertionCount: number }, clinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, count: number, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }> } | undefined }>, knownPartnerGenes: Array<{ __typename: 'Gene', id: number, description?: string | undefined, featureAliases: Array<string>, entrezId: number, deprecated: boolean, flagged: boolean, name: string, link: string, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> }>, creationActivity?: { __typename: 'CreateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined }
      | { __typename: 'Gene', myGeneInfoDetails?: any | undefined, id: number, description?: string | undefined, featureAliases: Array<string>, entrezId: number, deprecated: boolean, flagged: boolean, name: string, link: string, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> }
      | { __typename: 'Region', id: number, name: string, description?: string | undefined, featureAliases: Array<string>, deprecated: boolean, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }>, cytogeneticRegions?: Array<{ __typename: 'CytogeneticRegion', name: string, chromosome: string, band?: string | undefined, cytogeneticCoordinates: Array<{ __typename: 'CytogeneticCoordinate', referenceBuild: Types.ReferenceBuild, chromosome: string, start: number, stop: number }> }> | undefined, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, creationActivity?: { __typename: 'CreateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined }
     } | undefined };

export type FeatureSummaryFieldsFragment = { __typename: 'Feature', id: number, name: string, fullName?: string | undefined, link: string, deprecated: boolean, flagged: boolean, featureInstance:
    | { __typename: 'Factor', id: number, name: string, description?: string | undefined, featureAliases: Array<string>, ncitId?: string | undefined, deprecated: boolean, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }>, ncitDetails?: { __typename: 'NcitDetails', synonyms: Array<{ __typename: 'NcitSynonym', name: string, source: string }>, definitions: Array<{ __typename: 'NcitDefinition', definition: string, source: string }> } | undefined, stats: { __typename: 'FeatureStats', evidenceItemCount: number }, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, creationActivity?: { __typename: 'CreateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined }
    | { __typename: 'Fusion', id: number, description?: string | undefined, featureAliases: Array<string>, name: string, fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }>, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, fivePrimeGene?: { __typename: 'Gene', id: number, description?: string | undefined, featureAliases: Array<string>, entrezId: number, deprecated: boolean, flagged: boolean, name: string, link: string, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> } | undefined, threePrimeGene?: { __typename: 'Gene', id: number, description?: string | undefined, featureAliases: Array<string>, entrezId: number, deprecated: boolean, flagged: boolean, name: string, link: string, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> } | undefined, fusionsKnownPartnerGenes: Array<{ __typename: 'FusionKnownPartnerGene', gene: { __typename: 'Gene', id: number, description?: string | undefined, featureAliases: Array<string>, entrezId: number, deprecated: boolean, flagged: boolean, name: string, link: string, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> }, knownPartnerSpecificFusion?: { __typename: 'Fusion', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, stats: { __typename: 'FeatureStats', variantCount: number, molecularProfileCount: number, evidenceItemCount: number, assertionCount: number }, clinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, count: number, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }> } | undefined }>, knownPartnerGenes: Array<{ __typename: 'Gene', id: number, description?: string | undefined, featureAliases: Array<string>, entrezId: number, deprecated: boolean, flagged: boolean, name: string, link: string, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> }>, creationActivity?: { __typename: 'CreateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined }
    | { __typename: 'Gene', myGeneInfoDetails?: any | undefined, id: number, description?: string | undefined, featureAliases: Array<string>, entrezId: number, deprecated: boolean, flagged: boolean, name: string, link: string, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> }
    | { __typename: 'Region', id: number, name: string, description?: string | undefined, featureAliases: Array<string>, deprecated: boolean, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }>, cytogeneticRegions?: Array<{ __typename: 'CytogeneticRegion', name: string, chromosome: string, band?: string | undefined, cytogeneticCoordinates: Array<{ __typename: 'CytogeneticCoordinate', referenceBuild: Types.ReferenceBuild, chromosome: string, start: number, stop: number }> }> | undefined, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, creationActivity?: { __typename: 'CreateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined }
   };

export type RegionSummaryFieldsFragment = { __typename: 'Region', id: number, name: string, description?: string | undefined, featureAliases: Array<string>, deprecated: boolean, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }>, cytogeneticRegions?: Array<{ __typename: 'CytogeneticRegion', name: string, chromosome: string, band?: string | undefined, cytogeneticCoordinates: Array<{ __typename: 'CytogeneticCoordinate', referenceBuild: Types.ReferenceBuild, chromosome: string, start: number, stop: number }> }> | undefined, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, creationActivity?: { __typename: 'CreateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined };

export type FusionSummaryFieldsFragment = { __typename: 'Fusion', id: number, description?: string | undefined, featureAliases: Array<string>, name: string, fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }>, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, fivePrimeGene?: { __typename: 'Gene', id: number, description?: string | undefined, featureAliases: Array<string>, entrezId: number, deprecated: boolean, flagged: boolean, name: string, link: string, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> } | undefined, threePrimeGene?: { __typename: 'Gene', id: number, description?: string | undefined, featureAliases: Array<string>, entrezId: number, deprecated: boolean, flagged: boolean, name: string, link: string, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> } | undefined, fusionsKnownPartnerGenes: Array<{ __typename: 'FusionKnownPartnerGene', gene: { __typename: 'Gene', id: number, description?: string | undefined, featureAliases: Array<string>, entrezId: number, deprecated: boolean, flagged: boolean, name: string, link: string, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> }, knownPartnerSpecificFusion?: { __typename: 'Fusion', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, stats: { __typename: 'FeatureStats', variantCount: number, molecularProfileCount: number, evidenceItemCount: number, assertionCount: number }, clinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, count: number, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }> } | undefined }>, knownPartnerGenes: Array<{ __typename: 'Gene', id: number, description?: string | undefined, featureAliases: Array<string>, entrezId: number, deprecated: boolean, flagged: boolean, name: string, link: string, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> }>, creationActivity?: { __typename: 'CreateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined };

export type GeneBaseFieldsFragment = { __typename: 'Gene', id: number, description?: string | undefined, featureAliases: Array<string>, entrezId: number, deprecated: boolean, flagged: boolean, name: string, link: string, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> };

export type GeneSummaryFieldsFragment = { __typename: 'Gene', myGeneInfoDetails?: any | undefined, id: number, description?: string | undefined, featureAliases: Array<string>, entrezId: number, deprecated: boolean, flagged: boolean, name: string, link: string, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }> };

export type FactorSummaryFieldsFragment = { __typename: 'Factor', id: number, name: string, description?: string | undefined, featureAliases: Array<string>, ncitId?: string | undefined, deprecated: boolean, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceUrl?: string | undefined, displayType: string, sourceType: Types.SourceSource, deprecated: boolean }>, ncitDetails?: { __typename: 'NcitDetails', synonyms: Array<{ __typename: 'NcitSynonym', name: string, source: string }>, definitions: Array<{ __typename: 'NcitDefinition', definition: string, source: string }> } | undefined, stats: { __typename: 'FeatureStats', evidenceItemCount: number }, detailedClinicalSignificanceCounts: Array<{ __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> }>, creationActivity?: { __typename: 'CreateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, deprecationActivity?: { __typename: 'DeprecateFeatureActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined };

export type NcitDetailsFragment = { __typename: 'NcitDetails', synonyms: Array<{ __typename: 'NcitSynonym', name: string, source: string }>, definitions: Array<{ __typename: 'NcitDefinition', definition: string, source: string }> };

export type DetailedClinicalSignificanceCountsFragment = { __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, count: number, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies?: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> | undefined, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> };

export type ClinicalSignificanceCountsFragment = { __typename: 'ClinicalSignificanceCounts', type: Types.AssertionType, direction: Types.AssertionDirection, significance: Types.AssertionSignificance, count: number, assertions: Array<{ __typename: 'Assertion', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean }> };

export const GeneBaseFieldsFragmentDoc = gql`
    fragment GeneBaseFields on Gene {
  id
  description
  featureAliases
  entrezId
  deprecated
  flagged
  name
  link
  sources {
    id
    citation
    link
    sourceUrl
    displayType
    sourceType
    deprecated
  }
}
    `;
export const DetailedClinicalSignificanceCountsFragmentDoc = gql`
    fragment DetailedClinicalSignificanceCounts on ClinicalSignificanceCounts {
  type
  direction
  significance
  disease {
    id
    name
    link
    deprecated
  }
  therapies {
    id
    name
    link
    deprecated
  }
  therapyInteractionType
  assertions {
    id
    name
    link
    status
    flagged
  }
  count
}
    `;
export const GeneSummaryFieldsFragmentDoc = gql`
    fragment GeneSummaryFields on Gene {
  ...GeneBaseFields
  myGeneInfoDetails
  detailedClinicalSignificanceCounts {
    ...DetailedClinicalSignificanceCounts
  }
}
    ${GeneBaseFieldsFragmentDoc}
${DetailedClinicalSignificanceCountsFragmentDoc}`;
export const NcitDetailsFragmentDoc = gql`
    fragment NcitDetails on NcitDetails {
  synonyms {
    name
    source
  }
  definitions {
    definition
    source
  }
}
    `;
export const FactorSummaryFieldsFragmentDoc = gql`
    fragment FactorSummaryFields on Factor {
  id
  name
  description
  featureAliases
  ncitId
  deprecated
  sources {
    id
    citation
    link
    sourceUrl
    displayType
    sourceType
    deprecated
  }
  ncitDetails {
    ...NcitDetails
  }
  stats {
    evidenceItemCount
  }
  detailedClinicalSignificanceCounts {
    ...DetailedClinicalSignificanceCounts
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
  }
}
    ${NcitDetailsFragmentDoc}
${DetailedClinicalSignificanceCountsFragmentDoc}`;
export const ClinicalSignificanceCountsFragmentDoc = gql`
    fragment ClinicalSignificanceCounts on ClinicalSignificanceCounts {
  type
  direction
  significance
  assertions {
    id
    name
    link
    status
    flagged
  }
  count
}
    `;
export const FusionSummaryFieldsFragmentDoc = gql`
    fragment FusionSummaryFields on Fusion {
  id
  description
  featureAliases
  name
  sources {
    id
    citation
    link
    sourceUrl
    displayType
    sourceType
    deprecated
  }
  detailedClinicalSignificanceCounts {
    ...DetailedClinicalSignificanceCounts
  }
  fivePrimeGene {
    ...GeneBaseFields
  }
  threePrimeGene {
    ...GeneBaseFields
  }
  fivePrimePartnerStatus
  threePrimePartnerStatus
  fusionsKnownPartnerGenes {
    gene {
      ...GeneBaseFields
    }
    knownPartnerSpecificFusion {
      id
      name
      link
      deprecated
      flagged
      stats {
        variantCount
        molecularProfileCount
        evidenceItemCount
        assertionCount
      }
      clinicalSignificanceCounts {
        ...ClinicalSignificanceCounts
      }
    }
  }
  knownPartnerGenes {
    ...GeneBaseFields
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
  }
}
    ${DetailedClinicalSignificanceCountsFragmentDoc}
${GeneBaseFieldsFragmentDoc}
${ClinicalSignificanceCountsFragmentDoc}`;
export const RegionSummaryFieldsFragmentDoc = gql`
    fragment RegionSummaryFields on Region {
  id
  name
  description
  featureAliases
  deprecated
  sources {
    id
    citation
    link
    sourceUrl
    displayType
    sourceType
    deprecated
  }
  cytogeneticRegions {
    name
    chromosome
    band
    cytogeneticCoordinates {
      referenceBuild
      chromosome
      start
      stop
    }
  }
  detailedClinicalSignificanceCounts {
    ...DetailedClinicalSignificanceCounts
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
  }
}
    ${DetailedClinicalSignificanceCountsFragmentDoc}`;
export const FeatureSummaryFieldsFragmentDoc = gql`
    fragment FeatureSummaryFields on Feature {
  id
  name
  fullName
  link
  deprecated
  flagged
  featureInstance {
    ...FeatureInstanceRef
    ... on Gene {
      ...GeneSummaryFields
    }
    ... on Factor {
      ...FactorSummaryFields
    }
    ... on Fusion {
      ...FusionSummaryFields
    }
    ... on Region {
      ...RegionSummaryFields
    }
  }
}
    ${FeatureInstanceRefFragmentDoc}
${GeneSummaryFieldsFragmentDoc}
${FactorSummaryFieldsFragmentDoc}
${FusionSummaryFieldsFragmentDoc}
${RegionSummaryFieldsFragmentDoc}`;
export const FeaturesSummaryDocument = gql`
    query FeaturesSummary($featureId: Int!) {
  feature(id: $featureId) {
    ...FeatureSummaryFields
  }
}
    ${FeatureSummaryFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FeaturesSummaryGQL extends Apollo.Query<FeaturesSummaryQuery, FeaturesSummaryQueryVariables> {
    document = FeaturesSummaryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
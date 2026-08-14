/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { ParsedCommentFragmentFragmentDoc } from '../../../../components/comments/comment-list/comment-list.query.gql.generated';
import { RegionVariantSummaryFieldsFragmentDoc, FusionVariantSummaryFieldsFragmentDoc, FactorVariantSummaryFieldsFragmentDoc, GeneVariantSummaryFieldsFragmentDoc } from '../../../variants/variants-detail/variants-summary/variants-summary.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type MolecularProfileSummaryQueryVariables = Types.Exact<{
  mpId: Types.Scalars['Int']['input'];
}>;


export type MolecularProfileSummaryQuery = { __typename: 'Query', molecularProfile?: { __typename: 'MolecularProfile', id: number, name: string, description?: string | undefined, molecularProfileAliases: Array<string>, molecularProfileScore: number, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceType: Types.SourceSource, deprecated: boolean }>, variants: Array<
      | { __typename: 'FactorVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, variantAliases: Array<string>, ncitId?: string | undefined, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number, nodes: Array<{ __typename: 'MolecularProfile', id: number, link: string, name: string, deprecated: boolean, flagged: boolean }> }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, ncitDetails?: { __typename: 'NcitDetails', synonyms: Array<{ __typename: 'NcitSynonym', name: string, source: string }>, definitions: Array<{ __typename: 'NcitDefinition', definition: string, source: string }> } | undefined }
      | { __typename: 'FusionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, variantAliases: Array<string>, viccCompliantName: string, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number, nodes: Array<{ __typename: 'MolecularProfile', id: number, link: string, name: string, deprecated: boolean, flagged: boolean }> }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, fusion: { __typename: 'Fusion', fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus, fivePrimeGene?: { __typename: 'Gene', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined, threePrimeGene?: { __typename: 'Gene', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }, fivePrimeCoordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, threePrimeCoordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, fivePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, fivePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined }
      | { __typename: 'GeneVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, variantAliases: Array<string>, alleleRegistryId?: string | undefined, openCravatUrl?: string | undefined, maneSelectTranscript?: string | undefined, hgvsDescriptions: Array<string>, clinvarIds: Array<string>, openCravatAnnotations?: any | undefined, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number, nodes: Array<{ __typename: 'MolecularProfile', id: number, link: string, name: string, deprecated: boolean, flagged: boolean }> }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, coordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, myVariantInfo?: { __typename: 'MyVariantInfo', myVariantInfoId: string, caddConsequence: Array<string>, caddDetail: Array<string>, caddScore?: number | undefined, caddPhred?: number | undefined, clinvarClinicalSignificance: Array<string>, clinvarHgvsCoding: Array<string>, clinvarHgvsGenomic: Array<string>, clinvarHgvsNonCoding: Array<string>, clinvarHgvsProtein: Array<string>, clinvarId?: number | undefined, clinvarOmim?: string | undefined, cosmicId?: string | undefined, dbnsfpInterproDomain: Array<string>, dbsnpRsid?: string | undefined, eglClass?: string | undefined, eglHgvs: Array<string>, eglProtein?: string | undefined, eglTranscript?: string | undefined, exacAlleleCount?: number | undefined, exacAlleleFrequency?: number | undefined, exacAlleleNumber?: number | undefined, fathmmMklPrediction?: string | undefined, fathmmMklScore?: number | undefined, fathmmPrediction: Array<string>, fathmmScore: Array<number>, fitconsScore?: number | undefined, gerp?: number | undefined, gnomadExomeAlleleCount?: number | undefined, gnomadExomeAlleleFrequency?: number | undefined, gnomadExomeAlleleNumber?: number | undefined, gnomadExomeFilter?: string | undefined, gnomadGenomeAlleleCount?: number | undefined, gnomadGenomeAlleleFrequency?: number | undefined, gnomadGenomeAlleleNumber?: number | undefined, gnomadGenomeFilter?: string | undefined, lrtPrediction?: string | undefined, lrtScore?: number | undefined, metalrPrediction?: string | undefined, metalrScore?: number | undefined, metasvmPrediction?: string | undefined, metasvmScore?: number | undefined, mutationassessorPrediction: Array<string>, mutationassessorScore: Array<number>, mutationtasterPrediction: Array<string>, mutationtasterScore: Array<number>, phastcons100way?: number | undefined, phastcons30way?: number | undefined, phyloP100way?: number | undefined, phyloP30way?: number | undefined, polyphen2HdivPrediction: Array<string>, polyphen2HdivScore: Array<number>, polyphen2HvarPrediction: Array<string>, polyphen2HvarScore: Array<number>, proveanPrediction: Array<string>, proveanScore: Array<number>, revelScore?: Array<number> | undefined, siftPrediction: Array<string>, siftScore: Array<number>, siphy?: number | undefined, snpeffSnpEffect: Array<string>, snpeffSnpImpact: Array<string> } | undefined }
      | { __typename: 'RegionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, variantAliases: Array<string>, iscnName?: string | undefined, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number, nodes: Array<{ __typename: 'MolecularProfile', id: number, link: string, name: string, deprecated: boolean, flagged: boolean }> }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }> }
      | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, variantAliases: Array<string>, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number, nodes: Array<{ __typename: 'MolecularProfile', id: number, link: string, name: string, deprecated: boolean, flagged: boolean }> }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }> }
    >, parsedName: Array<
      | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      | { __typename: 'MolecularProfileTextSegment', text: string }
      | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
    >, complexMolecularProfileCreationActivity?: { __typename: 'CreateComplexMolecularProfileActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, variantDeprecationActivity?: { __typename: 'DeprecateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, complexMolecularProfileDeprecationActivity?: { __typename: 'DeprecateComplexMolecularProfileActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, parsedNote: Array<
        | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTextSegment', text: string }
        | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
      > } | undefined } | undefined };

export type MolecularProfileSummaryFieldsFragment = { __typename: 'MolecularProfile', id: number, name: string, description?: string | undefined, molecularProfileAliases: Array<string>, molecularProfileScore: number, sources: Array<{ __typename: 'Source', id: number, citation?: string | undefined, link: string, sourceType: Types.SourceSource, deprecated: boolean }>, variants: Array<
    | { __typename: 'FactorVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, variantAliases: Array<string>, ncitId?: string | undefined, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number, nodes: Array<{ __typename: 'MolecularProfile', id: number, link: string, name: string, deprecated: boolean, flagged: boolean }> }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, ncitDetails?: { __typename: 'NcitDetails', synonyms: Array<{ __typename: 'NcitSynonym', name: string, source: string }>, definitions: Array<{ __typename: 'NcitDefinition', definition: string, source: string }> } | undefined }
    | { __typename: 'FusionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, variantAliases: Array<string>, viccCompliantName: string, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number, nodes: Array<{ __typename: 'MolecularProfile', id: number, link: string, name: string, deprecated: boolean, flagged: boolean }> }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, fusion: { __typename: 'Fusion', fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus, fivePrimeGene?: { __typename: 'Gene', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined, threePrimeGene?: { __typename: 'Gene', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }, fivePrimeCoordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, threePrimeCoordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, fivePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, fivePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined }
    | { __typename: 'GeneVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, variantAliases: Array<string>, alleleRegistryId?: string | undefined, openCravatUrl?: string | undefined, maneSelectTranscript?: string | undefined, hgvsDescriptions: Array<string>, clinvarIds: Array<string>, openCravatAnnotations?: any | undefined, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number, nodes: Array<{ __typename: 'MolecularProfile', id: number, link: string, name: string, deprecated: boolean, flagged: boolean }> }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, coordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, myVariantInfo?: { __typename: 'MyVariantInfo', myVariantInfoId: string, caddConsequence: Array<string>, caddDetail: Array<string>, caddScore?: number | undefined, caddPhred?: number | undefined, clinvarClinicalSignificance: Array<string>, clinvarHgvsCoding: Array<string>, clinvarHgvsGenomic: Array<string>, clinvarHgvsNonCoding: Array<string>, clinvarHgvsProtein: Array<string>, clinvarId?: number | undefined, clinvarOmim?: string | undefined, cosmicId?: string | undefined, dbnsfpInterproDomain: Array<string>, dbsnpRsid?: string | undefined, eglClass?: string | undefined, eglHgvs: Array<string>, eglProtein?: string | undefined, eglTranscript?: string | undefined, exacAlleleCount?: number | undefined, exacAlleleFrequency?: number | undefined, exacAlleleNumber?: number | undefined, fathmmMklPrediction?: string | undefined, fathmmMklScore?: number | undefined, fathmmPrediction: Array<string>, fathmmScore: Array<number>, fitconsScore?: number | undefined, gerp?: number | undefined, gnomadExomeAlleleCount?: number | undefined, gnomadExomeAlleleFrequency?: number | undefined, gnomadExomeAlleleNumber?: number | undefined, gnomadExomeFilter?: string | undefined, gnomadGenomeAlleleCount?: number | undefined, gnomadGenomeAlleleFrequency?: number | undefined, gnomadGenomeAlleleNumber?: number | undefined, gnomadGenomeFilter?: string | undefined, lrtPrediction?: string | undefined, lrtScore?: number | undefined, metalrPrediction?: string | undefined, metalrScore?: number | undefined, metasvmPrediction?: string | undefined, metasvmScore?: number | undefined, mutationassessorPrediction: Array<string>, mutationassessorScore: Array<number>, mutationtasterPrediction: Array<string>, mutationtasterScore: Array<number>, phastcons100way?: number | undefined, phastcons30way?: number | undefined, phyloP100way?: number | undefined, phyloP30way?: number | undefined, polyphen2HdivPrediction: Array<string>, polyphen2HdivScore: Array<number>, polyphen2HvarPrediction: Array<string>, polyphen2HvarScore: Array<number>, proveanPrediction: Array<string>, proveanScore: Array<number>, revelScore?: Array<number> | undefined, siftPrediction: Array<string>, siftScore: Array<number>, siphy?: number | undefined, snpeffSnpEffect: Array<string>, snpeffSnpImpact: Array<string> } | undefined }
    | { __typename: 'RegionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, variantAliases: Array<string>, iscnName?: string | undefined, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number, nodes: Array<{ __typename: 'MolecularProfile', id: number, link: string, name: string, deprecated: boolean, flagged: boolean }> }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }> }
    | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, variantAliases: Array<string>, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number, nodes: Array<{ __typename: 'MolecularProfile', id: number, link: string, name: string, deprecated: boolean, flagged: boolean }> }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }> }
  >, parsedName: Array<
    | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
    | { __typename: 'MolecularProfileTextSegment', text: string }
    | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
  >, complexMolecularProfileCreationActivity?: { __typename: 'CreateComplexMolecularProfileActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, variantDeprecationActivity?: { __typename: 'DeprecateVariantActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined } } | undefined, complexMolecularProfileDeprecationActivity?: { __typename: 'DeprecateComplexMolecularProfileActivity', createdAt: any, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, parsedNote: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    > } | undefined };

export type MolecularProfileParsedName_Feature_Fragment = { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean };

export type MolecularProfileParsedName_MolecularProfileTextSegment_Fragment = { __typename: 'MolecularProfileTextSegment', text: string };

export type MolecularProfileParsedName_Variant_Fragment = { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean };

export type MolecularProfileParsedNameFragment =
  | MolecularProfileParsedName_Feature_Fragment
  | MolecularProfileParsedName_MolecularProfileTextSegment_Fragment
  | MolecularProfileParsedName_Variant_Fragment
;

export type VariantMolecularProfileCardFields_FactorVariant_Fragment = { __typename: 'FactorVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, variantAliases: Array<string>, ncitId?: string | undefined, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number, nodes: Array<{ __typename: 'MolecularProfile', id: number, link: string, name: string, deprecated: boolean, flagged: boolean }> }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, ncitDetails?: { __typename: 'NcitDetails', synonyms: Array<{ __typename: 'NcitSynonym', name: string, source: string }>, definitions: Array<{ __typename: 'NcitDefinition', definition: string, source: string }> } | undefined };

export type VariantMolecularProfileCardFields_FusionVariant_Fragment = { __typename: 'FusionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, variantAliases: Array<string>, viccCompliantName: string, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number, nodes: Array<{ __typename: 'MolecularProfile', id: number, link: string, name: string, deprecated: boolean, flagged: boolean }> }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, fusion: { __typename: 'Fusion', fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus, fivePrimeGene?: { __typename: 'Gene', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined, threePrimeGene?: { __typename: 'Gene', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }, fivePrimeCoordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, threePrimeCoordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, fivePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, fivePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeStartExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined, threePrimeEndExonCoordinates?: { __typename: 'ExonCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, exon?: number | undefined, exonOffset?: number | undefined, exonOffsetDirection?: Types.Direction | undefined, ensemblId?: string | undefined, strand?: Types.Direction | undefined, coordinateType: Types.ExonCoordinateType } | undefined };

export type VariantMolecularProfileCardFields_GeneVariant_Fragment = { __typename: 'GeneVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, variantAliases: Array<string>, alleleRegistryId?: string | undefined, openCravatUrl?: string | undefined, maneSelectTranscript?: string | undefined, hgvsDescriptions: Array<string>, clinvarIds: Array<string>, openCravatAnnotations?: any | undefined, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number, nodes: Array<{ __typename: 'MolecularProfile', id: number, link: string, name: string, deprecated: boolean, flagged: boolean }> }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }>, coordinates?: { __typename: 'VariantCoordinate', referenceBuild?: Types.ReferenceBuild | undefined, ensemblVersion?: number | undefined, chromosome?: string | undefined, representativeTranscript?: string | undefined, start?: number | undefined, stop?: number | undefined, referenceBases?: string | undefined, variantBases?: string | undefined, coordinateType: Types.VariantCoordinateType } | undefined, myVariantInfo?: { __typename: 'MyVariantInfo', myVariantInfoId: string, caddConsequence: Array<string>, caddDetail: Array<string>, caddScore?: number | undefined, caddPhred?: number | undefined, clinvarClinicalSignificance: Array<string>, clinvarHgvsCoding: Array<string>, clinvarHgvsGenomic: Array<string>, clinvarHgvsNonCoding: Array<string>, clinvarHgvsProtein: Array<string>, clinvarId?: number | undefined, clinvarOmim?: string | undefined, cosmicId?: string | undefined, dbnsfpInterproDomain: Array<string>, dbsnpRsid?: string | undefined, eglClass?: string | undefined, eglHgvs: Array<string>, eglProtein?: string | undefined, eglTranscript?: string | undefined, exacAlleleCount?: number | undefined, exacAlleleFrequency?: number | undefined, exacAlleleNumber?: number | undefined, fathmmMklPrediction?: string | undefined, fathmmMklScore?: number | undefined, fathmmPrediction: Array<string>, fathmmScore: Array<number>, fitconsScore?: number | undefined, gerp?: number | undefined, gnomadExomeAlleleCount?: number | undefined, gnomadExomeAlleleFrequency?: number | undefined, gnomadExomeAlleleNumber?: number | undefined, gnomadExomeFilter?: string | undefined, gnomadGenomeAlleleCount?: number | undefined, gnomadGenomeAlleleFrequency?: number | undefined, gnomadGenomeAlleleNumber?: number | undefined, gnomadGenomeFilter?: string | undefined, lrtPrediction?: string | undefined, lrtScore?: number | undefined, metalrPrediction?: string | undefined, metalrScore?: number | undefined, metasvmPrediction?: string | undefined, metasvmScore?: number | undefined, mutationassessorPrediction: Array<string>, mutationassessorScore: Array<number>, mutationtasterPrediction: Array<string>, mutationtasterScore: Array<number>, phastcons100way?: number | undefined, phastcons30way?: number | undefined, phyloP100way?: number | undefined, phyloP30way?: number | undefined, polyphen2HdivPrediction: Array<string>, polyphen2HdivScore: Array<number>, polyphen2HvarPrediction: Array<string>, polyphen2HvarScore: Array<number>, proveanPrediction: Array<string>, proveanScore: Array<number>, revelScore?: Array<number> | undefined, siftPrediction: Array<string>, siftScore: Array<number>, siphy?: number | undefined, snpeffSnpEffect: Array<string>, snpeffSnpImpact: Array<string> } | undefined };

export type VariantMolecularProfileCardFields_RegionVariant_Fragment = { __typename: 'RegionVariant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, variantAliases: Array<string>, iscnName?: string | undefined, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number, nodes: Array<{ __typename: 'MolecularProfile', id: number, link: string, name: string, deprecated: boolean, flagged: boolean }> }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }> };

export type VariantMolecularProfileCardFields_Variant_Fragment = { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, variantAliases: Array<string>, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }, molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number, nodes: Array<{ __typename: 'MolecularProfile', id: number, link: string, name: string, deprecated: boolean, flagged: boolean }> }, variantTypes: Array<{ __typename: 'VariantType', id: number, link: string, soid: string, name: string }> };

export type VariantMolecularProfileCardFieldsFragment =
  | VariantMolecularProfileCardFields_FactorVariant_Fragment
  | VariantMolecularProfileCardFields_FusionVariant_Fragment
  | VariantMolecularProfileCardFields_GeneVariant_Fragment
  | VariantMolecularProfileCardFields_RegionVariant_Fragment
  | VariantMolecularProfileCardFields_Variant_Fragment
;

export const VariantMolecularProfileCardFieldsFragmentDoc = gql`
    fragment VariantMolecularProfileCardFields on VariantInterface {
  id
  name
  link
  deprecated
  flagged
  feature {
    id
    name
    link
    deprecated
    flagged
  }
  molecularProfiles(first: 3) {
    totalCount
    nodes {
      id
      link
      name
      deprecated
      flagged
    }
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
  variantAliases
  variantTypes {
    id
    link
    soid
    name
  }
}
    ${GeneVariantSummaryFieldsFragmentDoc}
${FactorVariantSummaryFieldsFragmentDoc}
${FusionVariantSummaryFieldsFragmentDoc}
${RegionVariantSummaryFieldsFragmentDoc}`;
export const MolecularProfileParsedNameFragmentDoc = gql`
    fragment MolecularProfileParsedName on MolecularProfileSegment {
  __typename
  ... on MolecularProfileTextSegment {
    text
  }
  ... on Feature {
    id
    name
    link
    deprecated
    flagged
  }
  ... on Variant {
    id
    name
    link
    deprecated
    flagged
  }
}
    `;
export const MolecularProfileSummaryFieldsFragmentDoc = gql`
    fragment MolecularProfileSummaryFields on MolecularProfile {
  id
  name
  description
  molecularProfileAliases
  molecularProfileScore
  sources {
    id
    citation
    link
    sourceType
    deprecated
  }
  variants {
    ...VariantMolecularProfileCardFields
  }
  parsedName {
    ...MolecularProfileParsedName
  }
  complexMolecularProfileCreationActivity {
    createdAt
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  variantDeprecationActivity {
    createdAt
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
  }
  complexMolecularProfileDeprecationActivity {
    createdAt
    user {
      id
      displayName
      role
      profileImagePath(size: 32)
    }
    parsedNote {
      ...parsedCommentFragment
    }
  }
}
    ${VariantMolecularProfileCardFieldsFragmentDoc}
${MolecularProfileParsedNameFragmentDoc}
${ParsedCommentFragmentFragmentDoc}`;
export const MolecularProfileSummaryDocument = gql`
    query MolecularProfileSummary($mpId: Int!) {
  molecularProfile(id: $mpId) {
    ...MolecularProfileSummaryFields
  }
}
    ${MolecularProfileSummaryFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MolecularProfileSummaryGQL extends Apollo.Query<MolecularProfileSummaryQuery, MolecularProfileSummaryQueryVariables> {
    document = MolecularProfileSummaryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
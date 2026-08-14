/* eslint-disable */
import * as Types from '../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
export type LinkableAcmgCodeFragment = { __typename: 'AcmgCode', id: number, name: string, tooltip: string };

export type LinkableAssertionFragment = { __typename: 'Assertion', id: number, name: string, link: string, flagged: boolean, status: Types.EvidenceStatus };

export type LinkableClingenCodeFragment = { __typename: 'ClingenCode', id: number, name: string, tooltip: string };

export type LinkableCytogeneticRegionFragment = { __typename: 'CytogeneticRegion', id: number, name: string };

export type LinkableDiseaseFragment = { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean };

export type LinkableEvidenceItemFragment = { __typename: 'EvidenceItem', id: number, name: string, link: string, flagged: boolean, status: Types.EvidenceStatus };

export type LinkableFeatureFragment = { __typename: 'Feature', id: number, name: string, link: string, flagged: boolean, deprecated: boolean, featureType: Types.FeatureInstanceTypes };

export type LinkableGeneFragment = { __typename: 'Gene', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export type LinkableMolecularProfileFragment = { __typename: 'MolecularProfile', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export type LinkableNccnGuidelineFragment = { __typename: 'NccnGuideline', id: number, name: string };

export type LinkablePhenotypeFragment = { __typename: 'Phenotype', id: number, name: string, link: string };

export type LinkableSourceFragment = { __typename: 'Source', id: number, name: string, link: string, deprecated: boolean, citation?: string | undefined, sourceType: Types.SourceSource };

export type LinkableTherapyFragment = { __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean };

export type LinkableVariant_FactorVariant_Fragment = { __typename: 'FactorVariant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export type LinkableVariant_FusionVariant_Fragment = { __typename: 'FusionVariant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export type LinkableVariant_GeneVariant_Fragment = { __typename: 'GeneVariant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export type LinkableVariant_RegionVariant_Fragment = { __typename: 'RegionVariant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export type LinkableVariant_Variant_Fragment = { __typename: 'Variant', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export type LinkableVariantFragment =
  | LinkableVariant_FactorVariant_Fragment
  | LinkableVariant_FusionVariant_Fragment
  | LinkableVariant_GeneVariant_Fragment
  | LinkableVariant_RegionVariant_Fragment
  | LinkableVariant_Variant_Fragment
;

export type LinkableVariantTypeFragment = { __typename: 'VariantType', id: number, name: string, link: string };

export const LinkableAcmgCodeFragmentDoc = gql`
    fragment LinkableAcmgCode on AcmgCode {
  id
  name
  tooltip
}
    `;
export const LinkableAssertionFragmentDoc = gql`
    fragment LinkableAssertion on Assertion {
  id
  name
  link
  flagged
  status
}
    `;
export const LinkableClingenCodeFragmentDoc = gql`
    fragment LinkableClingenCode on ClingenCode {
  id
  name
  tooltip
}
    `;
export const LinkableCytogeneticRegionFragmentDoc = gql`
    fragment LinkableCytogeneticRegion on CytogeneticRegion {
  id
  name
}
    `;
export const LinkableDiseaseFragmentDoc = gql`
    fragment LinkableDisease on Disease {
  id
  name
  link
  deprecated
}
    `;
export const LinkableEvidenceItemFragmentDoc = gql`
    fragment LinkableEvidenceItem on EvidenceItem {
  id
  name
  link
  flagged
  status
}
    `;
export const LinkableFeatureFragmentDoc = gql`
    fragment LinkableFeature on Feature {
  id
  name
  link
  flagged
  deprecated
  featureType
}
    `;
export const LinkableGeneFragmentDoc = gql`
    fragment LinkableGene on Gene {
  id
  name
  link
  flagged
  deprecated
}
    `;
export const LinkableMolecularProfileFragmentDoc = gql`
    fragment LinkableMolecularProfile on MolecularProfile {
  id
  name
  link
  flagged
  deprecated
}
    `;
export const LinkableNccnGuidelineFragmentDoc = gql`
    fragment LinkableNccnGuideline on NccnGuideline {
  id
  name
}
    `;
export const LinkablePhenotypeFragmentDoc = gql`
    fragment LinkablePhenotype on Phenotype {
  id
  name
  link
}
    `;
export const LinkableSourceFragmentDoc = gql`
    fragment LinkableSource on Source {
  id
  name
  link
  deprecated
  citation
  sourceType
}
    `;
export const LinkableTherapyFragmentDoc = gql`
    fragment LinkableTherapy on Therapy {
  id
  name
  link
  deprecated
}
    `;
export const LinkableVariantFragmentDoc = gql`
    fragment LinkableVariant on VariantInterface {
  id
  name
  link
  flagged
  deprecated
}
    `;
export const LinkableVariantTypeFragmentDoc = gql`
    fragment LinkableVariantType on VariantType {
  id
  name
  link
}
    `;
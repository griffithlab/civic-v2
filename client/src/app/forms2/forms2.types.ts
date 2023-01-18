import {
  AssertionClinicalSignificance,
  AssertionDirection,
  AssertionType,
  TherapyInteraction,
  EvidenceClinicalSignificance,
  EvidenceDirection,
  EvidenceLevel,
  EvidenceType,
  Maybe,
  SourceSource,
  VariantOrigin,
} from '@app/generated/civic.apollo'

export type CvcInputEnum =
  | EvidenceClinicalSignificance
  | EvidenceDirection
  | EvidenceType
  | AssertionClinicalSignificance
  | AssertionDirection
  | AssertionType
  | VariantOrigin
  | SourceSource
  | EvidenceLevel
  | TherapyInteraction

export type CvcFieldModelValue = Maybe<
  string | number | boolean | string[] | number[]
>

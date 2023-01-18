import {
  AssertionSignificance,
  AssertionDirection,
  AssertionType,
  TherapyInteraction,
  EvidenceSignificance,
  EvidenceDirection,
  EvidenceLevel,
  EvidenceType,
  Maybe,
  SourceSource,
  VariantOrigin,
} from '@app/generated/civic.apollo'

export type CvcInputEnum =
  | EvidenceSignificance
  | EvidenceDirection
  | EvidenceType
  | AssertionSignificance
  | AssertionDirection
  | AssertionType
  | VariantOrigin
  | SourceSource
  | EvidenceLevel
  | TherapyInteraction

export type CvcFieldModelValue = Maybe<
  string | number | boolean | string[] | number[]
>

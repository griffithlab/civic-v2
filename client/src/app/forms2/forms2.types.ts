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
  AmpLevel,
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
  | AmpLevel

export type CvcFieldModelValue = Maybe<
  string | number | boolean | string[] | number[]
>

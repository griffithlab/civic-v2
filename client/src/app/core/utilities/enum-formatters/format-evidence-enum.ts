import {
  AmpLevel,
  AssertionDirection,
  AssertionSignificance,
  AssertionType,
  EvidenceDirection,
  EvidenceLevel,
  EvidenceSignificance,
  EvidenceStatus,
  EvidenceType,
  ReferenceBuild,
  SourceSource,
  TherapyInteraction,
  VariantOrigin,
} from '@app/generated/civic.apollo'

export type InputEnum =
  | EvidenceSignificance
  | EvidenceDirection
  | EvidenceStatus
  | EvidenceType
  | AssertionSignificance
  | AssertionDirection
  | AssertionType
  | VariantOrigin
  | SourceSource
  | EvidenceLevel
  | TherapyInteraction
  | AmpLevel
  | ReferenceBuild

export function formatEvidenceEnum(value: InputEnum): string {
  if (typeof value === 'number' || typeof value === 'boolean') return value
  let str: string[]
  if (value === 'NA') {
    str = ['Not Applicable']
  } else if (value === 'SENSITIVITYRESPONSE') {
    str = ['Sensitivity', '/', 'Response']
  } else {
    str = value.toLowerCase().replace(/_/g, ' ').split(' ')
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
    }
  }
  return str.join(' ')
}

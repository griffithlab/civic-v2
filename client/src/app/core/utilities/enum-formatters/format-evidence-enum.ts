import {
  AssertionSignificance,
  AssertionDirection,
  AssertionType,
  EvidenceSignificance,
  EvidenceDirection,
  EvidenceLevel,
  EvidenceType,
  SourceSource,
  TherapyInteraction,
  VariantOrigin,
} from '@app/generated/civic.apollo';

export type InputEnum =
  | EvidenceSignificance
  | EvidenceDirection
  | EvidenceType
  | AssertionSignificance
  | AssertionDirection
  | AssertionType
  | VariantOrigin
  | SourceSource
  | EvidenceLevel
  | TherapyInteraction;

export function formatEvidenceEnum(value: InputEnum): string {
  let str: string[];
  if (value === 'NA') {
    str = ['N/A'];
  } else if (value === 'SENSITIVITYRESPONSE') {
    str = ['Sensitivity', '/', 'Response'];
  } else {
    str = value.toLowerCase().replace(/_/g, ' ').split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
  }
  return str.join(' ');
}

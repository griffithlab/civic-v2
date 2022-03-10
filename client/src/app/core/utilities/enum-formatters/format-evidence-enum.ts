import {
  AssertionClinicalSignificance,
  AssertionDirection,
  AssertionType,
  EvidenceClinicalSignificance,
  EvidenceDirection,
  EvidenceType,
  VariantOrigin,
} from '@app/generated/civic.apollo';

export type InputEnum =
  | EvidenceClinicalSignificance
  | EvidenceDirection
  | EvidenceType
  | AssertionClinicalSignificance
  | AssertionDirection
  | AssertionType
  | VariantOrigin;

export function formatEvidenceEnum(value: InputEnum): string {
  let str: string[]
  if (value === 'NA') {
    str = ['N/A']
  } else if (value === 'SENSITIVITYRESPONSE') {
    str = ['Sensitivity', '/', 'Response']
  } else if (value === 'GERMLINE_OR_SOMATIC') {
    str = ['Germline', 'or', 'Somatic']
  } else {
    str = value.toLowerCase()
      .replace(/_/g, ' ')
      .split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
  }
  return str.join(' ');
}

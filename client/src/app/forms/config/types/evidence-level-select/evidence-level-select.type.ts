import { EvidenceLevel } from '@app/generated/civic.apollo';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/models';
import { $enum } from 'ts-enum-util';

const labels = new Map<EvidenceLevel, string>([
  [EvidenceLevel.A, 'A - Validated association'],
  [EvidenceLevel.B, 'B - Clinical evidence'],
  [EvidenceLevel.C, 'C - Case study'],
  [EvidenceLevel.D, 'D - Preclinical evidence'],
  [EvidenceLevel.E, 'E - Inferential association'],
]);

const descriptions = new Map<EvidenceLevel, string>([
  [EvidenceLevel.A, 'Evidence shows consensus association in human medicine'],
  [EvidenceLevel.B, 'Evidence supports association using clinical trial or other primary patient data'],
  [EvidenceLevel.C, 'Evidence supports association using individual case reports from clinical journals'],
  [EvidenceLevel.D, 'Evidence supports association using in vivo or in vitro models'],
  [EvidenceLevel.E, 'Evidential association is inferential or indirect'],
])

export const evidenceLevelSelectTypeOption: TypeOption = {
  name: 'evidence-level-select',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'Evidence Level',
      placeholder: 'None specified',
      helpText: 'Type of study performed to produce the evidence statement',
      options: $enum(EvidenceLevel)
        .map((val) => {
          return { value: val, label: labels.get(val) }
        }),
      labels: labels,
      descriptions: descriptions
    },
    expressionProperties: {
      'templateOptions.optionText': (m: any, st: any, ffc?: FormlyFieldConfig) => {
        return descriptions.get(m.evidenceLevel)
      }
    }
  }
};

import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { EvidenceType } from '@app/generated/civic.apollo';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import { $enum } from 'ts-enum-util';

export const evidenceTypeSelectTypeOption: TypeOption = {
  name: 'evidence-type-select',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'Evidence Type',
      placeholder: 'Not specified',
      helpText: 'Type of clinical outcome associated with the evidence statement.',
      options: $enum(EvidenceType)
        .map((value, key) => {
          return { value: value, label: formatEvidenceEnum(value) }
        })
    }
  }
};

import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { VariantOrigin } from '@app/generated/civic.apollo';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import { $enum } from 'ts-enum-util';

export const variantOriginSelectorTypeOption: TypeOption = {
  name: 'variant-origin-selector',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'Variant Origin',
      placeholder: 'None specified',
      helpText: 'Origin of variant',
      options: $enum(VariantOrigin)
        .map((value, key) => {
          return { value: value, label: formatEvidenceEnum(value) }
        })
    }
  }
};

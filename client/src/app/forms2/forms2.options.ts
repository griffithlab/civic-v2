import { ConfigOption } from '@ngx-formly/core';
import { defaultMessages, defaultValidators } from './validators/default.validator';

export const CvcFormlyConfig2: ConfigOption = {
  extras: { immutable: false},
  validationMessages: defaultMessages,
  validators: defaultValidators,
}

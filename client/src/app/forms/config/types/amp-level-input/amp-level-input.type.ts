import { TypeOption, ValidationMessageOption, ValidatorOption } from '@ngx-formly/core/lib/services/formly.config';

export const ampLevelInputTypeOption: TypeOption = {
  name: 'amp-level-input',
  extends: 'input',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'AMP Level',
      placeholder: 'None specified',
    }
  }

}

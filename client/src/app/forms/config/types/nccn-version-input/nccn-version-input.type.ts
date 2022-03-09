import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';

export const nccnVersionInputTypeOption: TypeOption = {
  name: 'nccn-version-input',
  extends: 'input',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'NCCN Guideline Version',
      placeholder: 'None specified',
    }
  }
}

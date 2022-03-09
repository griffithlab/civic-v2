import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';

export const nccnGuidelineInputTypeOption: TypeOption = {
  name: 'nccn-guideline-input',
  extends: 'input',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'NCCN Guideline',
      placeholder: 'None specified',
    }
  }
}

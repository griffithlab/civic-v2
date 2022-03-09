import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';

export const fdaApprovalCheckboxTypeOption: TypeOption = {
  name: 'fda-approval-checkbox',
  extends: 'checkbox',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'FDA Regulatory Approval?',
    },
    defaultValue: false
  }
}

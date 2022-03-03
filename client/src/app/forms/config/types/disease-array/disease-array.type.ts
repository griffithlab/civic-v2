import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';

export const diseaseArrayTypeOption: TypeOption = {
  name: 'disease-array',
  extends: 'multi-field',
  defaultOptions: {
    templateOptions: {
      label: 'Disease',
      helpText: 'Please enter a disease name. If you are unable to locate the disease in the dropdown, please check the \'Could not find disease\' checkbox below and enter the disease in the field that appears.',
      required: true,
      addText: 'Add a Disease',
      minLength: 1,
      maxCount: 1,
    },
    fieldArray: {
      type: 'cvc-disease-input',
      templateOptions: {}
    },
  }
}

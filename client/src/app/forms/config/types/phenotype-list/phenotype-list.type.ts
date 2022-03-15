import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';

export const phenotypeListTypeOption: TypeOption = {
  name: 'phenotype-list',
  extends: 'field-list',
  defaultOptions: {
    templateOptions: {
      label: 'Phenotype',
      helpText: 'Please enter a phenotype name. If you are unable to locate the phenotype in the dropdown, please check the \'Could not find phenotype\' checkbox below and enter the phenotype in the field that appears.',
      required: false,
      addText: 'Add a Phenotype',
    },
    fieldArray: {
      type: 'phenotype-select-tag',
      templateOptions: {
        required: false
      }
    },
    defaultValue: [],
  }
}


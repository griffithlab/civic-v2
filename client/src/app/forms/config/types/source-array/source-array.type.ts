import { TypeOption } from '@ngx-formly/core/lib/models';

const requiredValidationMsgFn = (): string => {
  return 'A Source is required.'
};

export const sourceArrayTypeOption: TypeOption = {
  name: 'source-array',
  extends: 'field-list',
  defaultOptions: {
    templateOptions: {
      label: 'Source',
      helpText: 'CIViC accepts PubMed or ASCO Abstracts sources. Please provide the source of the support for your evidence here.',
      required: false,
      addText: 'Specify a Source',
    },
    fieldArray: {
      type: 'source-input',
      templateOptions: {
        required: false
      }
    },
    defaultValue: [],
    validation: {
      messages: {
        required: requiredValidationMsgFn
      },
    },
  }
}

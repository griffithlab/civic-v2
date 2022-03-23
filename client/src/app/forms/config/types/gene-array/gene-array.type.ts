import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';

const requiredValidationMsgFn = (): string => {
  return 'Evidence requires that a Gene be specified.';
};

export const geneArrayTypeOption: TypeOption = {
  name: 'gene-array',
  extends: 'multi-field',
  wrappers: ['form-card'],
  defaultOptions: {
    templateOptions: {
      label: 'Gene',
      helpText: 'Entrez Gene name (e.g. BRAF). Gene name must be known to the Entrez database.',
      required: false,
      addText: 'Specify a Gene',
    },
    fieldArray: {
      type: 'cvc-gene-input',
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

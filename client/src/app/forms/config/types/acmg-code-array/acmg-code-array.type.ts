import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';

export const acmgCodeArrayType: TypeOption = {
  name: 'acmg-code-array',
  extends: 'multi-field',
  defaultOptions: {
    templateOptions: {
      label: 'ACMG/AMP Code(s)',
      helpText: 'If applicable, please provide the <a href="http://www.ncbi.nlm.nih.gov/pubmed/27993330" target="_blank">AMP/ASCO/CAP somatic variant classification</a>.',
      required: false,
      addText: 'Add an ACMG/AMP Code',
    },
    fieldArray: {
      type: 'acmg-code-select',
      templateOptions: {}
    },
    defaultValue: [],
  }
}

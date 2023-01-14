import { AbstractControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/models';

const requiredValidationMsgFn = (): string => {
  return 'Evidence requires that a Variant be specified.';
};

export const variantArrayTypeOption: TypeOption = {
  name: 'variant-array',
  extends: 'multi-field',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'Variant',
      helpText: 'Description of the type of variant (e.g., V600E, BCR-ABL fusion, Loss-of-function, exon 12 mutations). Should be as specific as possible (i.e., specific amino acid changes).',
      required: false,
      addText: 'Specify a Variant',
    },
    fieldArray: {
      type: 'variant-input',
      templateOptions: {
        required: false
      },
      expressionProperties: {
        'templateOptions.allowCreate': (m: any, st: any, ffc?: FormlyFieldConfig) => {
          const existingSetting = ffc?.parent?.templateOptions?.allowCreate;
          if (existingSetting !== undefined) {
            return existingSetting;
          }
          return true;
        }
      }
    },
    hideExpression: (m: any, st: any, ffc?: FormlyFieldConfig) => {
      const geneCtrl: AbstractControl | null = ffc?.form ? ffc.form.get('gene') : null;      
      if(!geneCtrl || !geneCtrl.value || !geneCtrl.value[0]) {
        return true;
      }
      return false;
    },
    defaultValue: [],
    validation: {
      messages: {
        required: requiredValidationMsgFn
      },
    },
  }
}

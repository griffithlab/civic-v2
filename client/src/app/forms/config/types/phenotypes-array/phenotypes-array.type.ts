import { AbstractControl, FormArray, ValidationErrors } from '@angular/forms';
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';

const requiredValidationMsgFn = (err: any, ffc: FormlyFieldConfig): string => {
  const etCtrl: AbstractControl | null = ffc?.form ? ffc.form.get('evidenceType') : null;
  return etCtrl ? `${formatEvidenceEnum(etCtrl.value)} Evidence requires at least one phenotype to be specified.` : 'Phenotype is required.';
};

export const phenotypeArrayTypeOption: TypeOption = {
  name: 'phenotype-array',
  extends: 'multi-field',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'Phenotype',
      helpText: 'Please provide any <a href="https://hpo.jax.org/app/browse/term/HP:0000118" target="_blank">HPO phenotypes.</a>',
      required: false,
      addText: 'Add a Phenotype',
    },
    fieldArray: {
      type: 'phenotype-input',
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

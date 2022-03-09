import { AbstractControl, FormArray } from '@angular/forms';
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import { EntityState, EntityType } from '../../states/entity.state';

const requiredValidationMsgFn = (err: any, ffc: FormlyFieldConfig): string => {
  const etCtrl: AbstractControl | null = ffc?.form ? ffc.form.get('evidenceType') : null;
  return etCtrl && etCtrl.value ? `${formatEvidenceEnum(etCtrl.value)} Assertions requires at least one ACMG code to be specified.` : 'ACMG Code is required.';
};

export const acmgCodeArrayTypeOption: TypeOption = {
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
      templateOptions: {
        required: false
      }
    },
    defaultValue: [],
    validation: {
      messages: {
        required: requiredValidationMsgFn
      }
    },
    hooks: {
      onInit:(ffc?: FormlyFieldConfig) : void => {
        const to: FormlyTemplateOptions = ffc!.templateOptions!;
        // check for formState, populate with all options if not found
        const st: EntityState = ffc?.options?.formState;
        // find evidenceType formControl, subscribe to value changes to update options
        const etCtrl: AbstractControl | null = ffc?.form ? ffc.form.get('evidenceType') : null;
        if (!etCtrl) { return; } // no evidenceType FormControl found, cannot subscribe
        to.vcSub = etCtrl.valueChanges
          .subscribe((et: EntityType) => {
            const fc: FormArray = ffc!.formControl! as FormArray;
            if (!st.requiresAcmgCodes(et)) {
              to.hidden = true;
              to.required = false;
              // remove() rebuilds the field, so here we clear the array except for the
              // first element, then call remove() so the field is only rebuilt once
              if (ffc!.model.length > 0) {
                ffc!.model.splice(1);
                to.remove(0);
              }
            } else {
              to.hidden = false;
              to.required = true;
            }
          });
      }
    }
  }
}

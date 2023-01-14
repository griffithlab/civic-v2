import { AbstractControl, UntypedFormArray } from '@angular/forms';
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/models';
import { EntityState, EntityType } from '../../states/entity.state';

const requiredValidationMsgFn = (err: any, ffc: FormlyFieldConfig): string => {
  const etCtrl: AbstractControl | null = ffc?.form
    ? ffc.form.get('evidenceType')
    : null;
  return etCtrl && etCtrl.value
    ? `${formatEvidenceEnum(
        etCtrl.value
      )} Assertions require at least one ClinGen/CGC/VICC code to be specified.`
    : 'ClinGen/CGC/VICC Code is required.';
};

export const clingenCodeArrayTypeOption: TypeOption = {
  name: 'clingen-code-array',
  extends: 'multi-field',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'ClinGen/CGC/VICC Code Code(s)',
      required: false,
      addText: 'Add a ClinGen/CGC/VICC Code',
      helpText:
        'Refers to evidence Classifications from the Standards for the classification of pathogenicity of somatic variants in cancer (oncogenicity) in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Horak et. al. 2022.</a>',
    },
    fieldArray: {
      type: 'clingen-code-select',
      templateOptions: {
        required: false,
      },
    },
    defaultValue: [],
    validation: {
      messages: {
        required: requiredValidationMsgFn,
      },
    },
    hooks: {
      onInit: (ffc?: FormlyFieldConfig): void => {
        const to: FormlyTemplateOptions = ffc!.templateOptions!;
        // check for formState, populate with all options if not found
        const st: EntityState = ffc?.options?.formState;
        // find evidenceType formControl, subscribe to value changes to update options
        const etCtrl: AbstractControl | null = ffc?.form
          ? ffc.form.get('evidenceType')
          : null;
        if (!etCtrl) {
          return;
        } // no evidenceType FormControl found, cannot subscribe
        to.vcSub = etCtrl.valueChanges.subscribe((et: EntityType) => {
          const fc: UntypedFormArray = ffc!.formControl! as UntypedFormArray;
          if (!st.requiresClingenCodes(et)) {
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
      },
      onDestroy: (ffc?: FormlyFieldConfig): void => {
        const to: FormlyTemplateOptions = ffc!.templateOptions!;
        to.vcSub.unsubscribe();
      },
    },
  },
};

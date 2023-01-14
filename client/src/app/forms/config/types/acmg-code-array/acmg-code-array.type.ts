import { AbstractControl, UntypedFormArray } from '@angular/forms';
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { untilDestroyed } from '@ngneat/until-destroy';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/models';
import { isNonNulled } from 'rxjs-etc';
import { filter } from 'rxjs/operators';
import { EntityState, EntityType } from '../../states/entity.state';

const requiredValidationMsgFn = (err: any, ffc: FormlyFieldConfig): string => {
  const etCtrl: AbstractControl | null = ffc?.form
    ? ffc.form.get('evidenceType')
    : null;
  return etCtrl && etCtrl.value
    ? `${formatEvidenceEnum(
        etCtrl.value
      )} Assertions requires at least one ACMG code to be specified.`
    : 'ACMG Code is required.';
};

export const acmgCodeArrayTypeOption: TypeOption = {
  name: 'acmg-code-array',
  extends: 'multi-field',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'ACMG/AMP Code(s)',
      required: false,
      addText: 'Add an ACMG/AMP Code',
      helpText:
        'Refers to evidence criteria from the standards and guidelines for interpretation of sequence variants from ACMG/AMP in <a href="https://pubmed.ncbi.nlm.nih.gov/25741868/" target="_blank">Richards et. al. 2015</a>.',
    },
    fieldArray: {
      type: 'acmg-code-select',
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
      },
      onDestroy: (ffc?: FormlyFieldConfig): void => {
        const to: FormlyTemplateOptions = ffc!.templateOptions!;
        to.vcSub.unsubscribe();
      },
    },
  },
};

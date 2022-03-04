import { AbstractControl, FormArray, ValidationErrors } from '@angular/forms';
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { EvidenceType, Maybe } from '@app/generated/civic.apollo';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TypeOption, ValidationMessageOption, ValidatorOption } from '@ngx-formly/core/lib/services/formly.config';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EvidenceState } from '../../states/evidence.state';

const destroy$: Subject<boolean> = new Subject<boolean>();

const requiredValidationMsgFn = (err: any, ffc: FormlyFieldConfig): string => {
    const etCtrl: AbstractControl | null = ffc?.form ? ffc.form.get('evidenceType') : null;
    return etCtrl ? `${formatEvidenceEnum(etCtrl.value)} Evidence requires a disease to be specified.` : 'Disease is required.';
};

export const diseaseArrayTypeOption: TypeOption = {
  name: 'disease-array',
  extends: 'multi-field',
  defaultOptions: {
    templateOptions: {
      label: 'Disease',
      helpText: 'Please enter a disease name. If you are unable to locate the disease in the dropdown, please check the \'Could not find disease\' checkbox below and enter the disease in the field that appears.',
      required: false,
      addText: 'Add a Disease',
    },
    fieldArray: {
      type: 'cvc-disease-input',
      templateOptions: {}
    },
    validation: {
      messages: {
        required: requiredValidationMsgFn
      },
    },
    hooks: {
      onInit: (ffc: Maybe<FormlyFieldConfig>): void => {
        // check for formState, populate with all options if not found
        const st: EvidenceState = ffc?.options?.formState;
        // find evidenceType formControl, subscribe to value changes to update options
        const etCtrl: AbstractControl | null = ffc?.form ? ffc.form.get('evidenceType') : null;
        if (!etCtrl) { return; } // no evidenceType FormControl found, cannot subscribe
        etCtrl.valueChanges
          .pipe(takeUntil(destroy$))
          .subscribe((et: EvidenceType) => {
            const to = ffc!.templateOptions!;
            const fc: FormArray = ffc!.formControl! as FormArray;
            // clear disease array if evidence type omits disease
            // TODO: get multi-fields 'required' validatio working
            if (!st.requiresDisease(et)) {
              to.hidden = true;
              to.required = false;
              to.remove(0);
            } else {
              to.hidden = false;
              to.required = true;
            }
          });
      },
      onDestroy: (): void => {
        destroy$.next(true);
        destroy$.unsubscribe();
      }
    },
  }
}

export const diseaseRequiredValidator: ValidatorOption = {
  name: 'disease-required',
  validation: (c: AbstractControl, ffc: FormlyFieldConfig, opt: any): ValidationErrors | null => {
    console.log('disease-required validator.');
    return null;
    // const st: EvidenceState = ffc.options?.formState;
    // const cs: EvidenceClinicalSignificance = c.value;
    // if (!cs || !st) { return null; }
    // const et: EvidenceType = c.parent?.get('evidenceType')?.value;
    // if (!et) { return null; }
    // else {
    //   return st.isValidSignificanceOption(et, cs) ? null : { 'cs-option': et };
    // }
  },
};

export const diseaseRequiredValidationMessage: ValidationMessageOption = {
  name: 'disease-required',
  message: (et: EvidenceType, f: FormlyFieldConfig): string => {
    return `${formatEvidenceEnum(et)} Evidence requires a disease to be specified.`;
  }
};

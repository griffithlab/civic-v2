import { AbstractControl, FormArray } from '@angular/forms';
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { EvidenceType, Maybe } from '@app/generated/civic.apollo';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { EvidenceState } from '../../states/evidence.state';


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
    hooks: {
      onInit: (ffc: Maybe<FormlyFieldConfig>): void => {
        // check for formState, populate with all options if not found
        const st: EvidenceState = ffc?.options?.formState;
        // find evidenceType formControl, subscribe to value changes to update options
        const etCtrl: AbstractControl | null = ffc?.form ? ffc.form.get('evidenceType') : null;
        if (!etCtrl) { return; } // no evidenceType FormControl found, cannot subscribe
        const to = ffc!.templateOptions!;
        to.destroy$ = new Subject<boolean>();
        etCtrl.valueChanges
          .pipe(takeUntil(to.destroy$))
          .subscribe((et: EvidenceType) => {
            const fc: FormArray = ffc!.formControl! as FormArray;
            if (!st.requiresDisease(et)) {
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
      onDestroy: (ffc: Maybe<FormlyFieldConfig>): void => {
        const to = ffc!.templateOptions!;
        to.destroy$.next(true);
        to.destroy$.unsubscribe();
      }
    },
  }
}

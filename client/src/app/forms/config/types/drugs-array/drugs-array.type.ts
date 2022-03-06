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
  return etCtrl ? `${formatEvidenceEnum(etCtrl.value)} Evidence requires at least one drug to be specified.` : 'Drug is required.';
};

export const drugArrayTypeOption: TypeOption = {
  name: 'drug-array',
  extends: 'multi-field',
  defaultOptions: {
    templateOptions: {
      label: 'Drug',
      helpText: 'Please enter a drug name. If you are unable to locate the drug in the dropdown, please check the \'Could not find drug\' checkbox below and enter the drug in the field that appears.',
      required: false,
      addText: 'Add a Drug',
    },
    fieldArray: {
      type: 'cvc-drug-input',
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
        ffc!.formControl!.statusChanges.subscribe((s) => {
          console.log(`drug-array drug status: ${s}`)
        });
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
            if (!st.requiresDrug(et)) {
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
      onDestroy: (): void => {
        destroy$.next(true);
        destroy$.unsubscribe();
      }
    },
  }
}


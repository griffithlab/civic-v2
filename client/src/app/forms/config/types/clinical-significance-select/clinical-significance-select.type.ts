import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { EvidenceClinicalSignificance, EvidenceType } from '@app/generated/civic.apollo';
import { TypeOption, ValidationMessageOption, ValidatorOption } from '@ngx-formly/core/lib/services/formly.config';
import * as state from '@app/forms/config/states/evidence.state';
import { BehaviorSubject, Subject } from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { takeUntil } from 'rxjs/operators';
import { AbstractControl, ValidationErrors } from '@angular/forms';

type SelectOption = { [key: string | number]: string | number };

const getOptionsFromEnums = (e: EvidenceClinicalSignificance[]): SelectOption[] => {
  if (e.length === 0) { return []; }
  return e.map((value) => { return { value: value, label: formatEvidenceEnum(value) } })
};
const selectOptions$ = new BehaviorSubject<SelectOption[]>
  (getOptionsFromEnums(state.getAllSignificanceOptions()));
const destroy$: Subject<boolean> = new Subject<boolean>();

export const clinicalSignificanceSelectTypeOption: TypeOption = {
  name: 'clinical-significance-select',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'Clinical Signficance',
      helpText: 'The impact of the variant for predictive, prognostic, diagnostic, or functional evidence types. For predisposing and oncogenic evidence, impact is only applied at the assertion level and N/A should be selected here.',
      placeholder: 'Not specified',
      options: selectOptions$,
      destroy$: new Subject<boolean>(),
    },
    validators: {
      validation: ['cs-option']
    },
    hooks: {
      // using 'any' for fc arg here bc compiler complains about possible undefined
      // value for fc when the argument is properly typed:
      // onInit: (fc: FormlyFieldConfig): void => { ... }
      onInit: (ffc: any): void => {
        const etCtrl: AbstractControl | null = ffc.form ? ffc.form.get('evidenceType') : null;
        if (!etCtrl) { return; } // no evidenceType FormControl found
        etCtrl.valueChanges
          .pipe(takeUntil(destroy$))
          .subscribe((et: EvidenceType) => {
            selectOptions$.next(getOptionsFromEnums(state.getSignificanceOptions(et)));
            ffc.formControl.updateValueAndValidity();
          });
      },
      onDestroy: (): void => {
        destroy$.next(true);
        destroy$.unsubscribe();
      }
    },
  }

};

export const optionValidator: ValidatorOption = {
  name: 'cs-option',
  validation: (c: AbstractControl, ffc: FormlyFieldConfig, opt: any): ValidationErrors | null => {
    const cs: EvidenceClinicalSignificance = c.value;
    if (!cs) { return null; }
    const et: EvidenceType = c.parent?.get('evidenceType')?.value;
    if (!et) { return null; }
    else {
      return state.isValidSignificanceOption(et, cs) ? null : { 'cs-option': et };
    }
  },
};

export const optionValidationMessage: ValidationMessageOption = {
  name: 'cs-option',
  message: (et: EvidenceType, f: FormlyFieldConfig): string => {
    return `'${formatEvidenceEnum(f.formControl?.value)}' is not a valid Clinical Significance for ${formatEvidenceEnum(et)} Evidence.`;
  }
};

import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { EvidenceDirection, EvidenceType, Maybe } from '@app/generated/civic.apollo';
import { TypeOption, ValidationMessageOption, ValidatorOption } from '@ngx-formly/core/lib/services/formly.config';
import { Subject } from 'rxjs';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { takeUntil } from 'rxjs/operators';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { EvidenceState} from '@app/forms/config/states/evidence.state';
import { $enum } from 'ts-enum-util';

type SelectOption = { [key: string | number]: string | number };

const getOptionsFromEnums = (e: EvidenceDirection[]): SelectOption[] => {
  if (e.length === 0) { return []; }
  return e.map((value) => { return { value: value, label: formatEvidenceEnum(value) } })
};
const selectOptions$ = new Subject<SelectOption[]>();
const destroy$: Subject<boolean> = new Subject<boolean>();

export const evidenceDirectionSelectTypeOption: TypeOption = {
  name: 'evidence-direction-select',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'Evidence Direction',
      placeholder: 'None specified',
      helpText: 'An indicator of whether the evidence statement supports or refutes the clinical significance of an event. For predisposing and oncogenic evidence, directionality is only applied at the assertion level and N/A should be selected here.',
      options: selectOptions$,
      destroy$: new Subject<boolean>(),
    },
    validators: { validation: [ 'ed-option' ] },
    hooks: {
      onInit: (ffc: Maybe<FormlyFieldConfig>): void => {
        // check for formState, populate with all options if not found
        const st: EvidenceState = ffc?.options?.formState;
        if (!st) {
          const edOpts: EvidenceDirection[] = $enum(EvidenceDirection).getValues();
          selectOptions$.next(getOptionsFromEnums(edOpts))
        }
        // find evidenceType formControl, subscribe to value changes to update options
        const etCtrl: AbstractControl | null = ffc?.form ? ffc.form.get('evidenceType') : null;
        if (!etCtrl) { return; } // no evidenceType FormControl found, cannot subscribe
        etCtrl.valueChanges
          .pipe(takeUntil(destroy$))
          .subscribe((et: EvidenceType) => {
            selectOptions$.next(
              getOptionsFromEnums(st.getDirectionOptions(et))
            );
            ffc!.formControl!.updateValueAndValidity();
          });
      },
      onDestroy: (): void => {
        destroy$.next(true);
        destroy$.unsubscribe();
      }
    },

  }
};

export const edOptionValidator: ValidatorOption = {
  name: 'ed-option',
  validation: (c: AbstractControl, ffc: FormlyFieldConfig, opt: any): ValidationErrors | null => {
    const st: EvidenceState = ffc.options?.formState;
    const ed: EvidenceDirection = c.value;
    if (!ed || !st) { return null; }
    const et: EvidenceType = c.parent?.get('evidenceType')?.value;
    if (!et) { return null; }
    else {
      return st.isValidDirectionOption(et, ed) ? null : { 'ed-option': et };
    }
  },
};

export const edOptionValidationMessage: ValidationMessageOption = {
  name: 'ed-option',
  message: (et: EvidenceType, f: FormlyFieldConfig): string => {
    return `'${formatEvidenceEnum(f.formControl?.value)}' is not a valid Clinical Significance for ${formatEvidenceEnum(et)} Evidence.`;
  }
};

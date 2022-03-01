import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { EvidenceClinicalSignificance, EvidenceType } from '@app/generated/civic.apollo';
import { TypeOption, ValidationMessageOption, ValidatorOption } from '@ngx-formly/core/lib/services/formly.config';
import * as state from '@app/forms/config/states/evidence.state';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export type SelectOption = {
  [key: string | number]: string | number
}

@Component({
  selector: 'cvc-clinical-significance-select',
  templateUrl: './clinical-significance-select.type.html',
  styleUrls: ['./clinical-significance-select.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClinicalSignificanceSelectType extends FieldType {
  formControl!: FormControl;
  destroy$: Subject<boolean> = new Subject<boolean>();

  selectOptions$ = new BehaviorSubject<SelectOption[]>
    (this.getOptionsFromEnums(state.getAllSignificanceOptions()));

  defaultOptions = {
    templateOptions: {
      label: 'Clinical Signficance',
      helpText: 'The impact of the variant for predictive, prognostic, diagnostic, or functional evidence types. For predisposing and oncogenic evidence, impact is only applied at the assertion level and N/A should be selected here.',
      placeholder: 'Not specified',
      options: this.selectOptions$,
    },
    validators: {
      validation: ['cs-option']
    },
    hooks: {
      // using 'any' for fc arg here bc compiler complains about possible undefined
      // value for fc when the argument is properly typed:
      // onInit: (fc: FormlyFieldControl): void => { ... }
      onInit: (ffc: any): void => {
        const etCtrl: AbstractControl | null = ffc.form ? ffc.form.get('evidenceType') : null;
        if (!etCtrl) { return; } // no evidenceType FormControl found
        etCtrl.valueChanges
          .pipe(takeUntil(this.destroy$))
          .subscribe((et: EvidenceType) => {
            this.selectOptions$.next(this.getOptionsFromEnums(state.getSignificanceOptions(et)));
            ffc.formControl.updateValueAndValidity();
          });
      },
      onDestroy: (): void => {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
      }
    },
  }

  getOptionsFromEnums(e: EvidenceClinicalSignificance[]): SelectOption[] {
    if (e.length === 0) { return []; }
    return e.map((value) => { return { value: value, label: formatEvidenceEnum(value) } })
  }
}

export const optionValidator: ValidatorOption = {
  name: 'cs-option',
  validation: (c: AbstractControl, f: FormlyFieldConfig): ValidationErrors | null => {
    const cs: EvidenceClinicalSignificance = c.value;
    if(!cs) { return null; }
    const et: EvidenceType = c.parent?.get('evidenceType')?.value;
    if(!et) { return null; }
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

export const clinicalSignificanceSelectTypeOption: TypeOption = {
  name: 'clinical-significance-select',
  component: ClinicalSignificanceSelectType,
  wrappers: ['form-field'],
};

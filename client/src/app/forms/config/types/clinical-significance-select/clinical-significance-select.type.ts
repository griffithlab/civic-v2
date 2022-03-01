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
      options: this.selectOptions$
    },

    hooks: {
      // using 'any' for fc arg here bc compiler complains about possible undefined
      // value for fc when the argument is properly typed:
      // onInit: (fc: FormlyFieldControl): void => { ... }
      onInit: (fc: any): void => {
        const etCtrl: AbstractControl | null = fc.form ? fc.form.get('evidenceType') : null;
        if (!etCtrl) { return; } // no evidenceType FormControl found
        etCtrl.valueChanges
          .pipe(takeUntil(this.destroy$))
          .subscribe((et: EvidenceType) => {
            this.selectOptions$.next(this.getOptionsFromEnums(state.getSignificanceOptions(et)));
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

export const clinicalSignificanceOptionValidator: ValidatorOption = {
  name: 'clinical-significance-option',
  validation: (c: AbstractControl, f: FormlyFieldConfig): ValidationErrors | null => {
    if (c.value === undefined) {
      return null;
    } else {
      let versionNum = +c.value;
      if (versionNum < 76 || versionNum > 150) {
        return { 'ensembl-version': true };
      }
      return null;
    }
  },
};

export const clinicalSignificanceValidationMessage: ValidationMessageOption = {
  name: 'clinical-significance-option',
  message: (_err: any, f: FormlyFieldConfig): string => {
    return `${f.formControl?.value} is not a valid version of Ensembl. Must be an number between 76 and the latest version of Ensembl.`;
  }
}

export const clinicalSignificanceSelectTypeOption: TypeOption = {
  name: 'clinical-significance-select',
  component: ClinicalSignificanceSelectType,
  wrappers: ['form-field'],
};

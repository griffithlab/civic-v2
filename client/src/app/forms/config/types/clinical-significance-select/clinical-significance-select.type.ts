import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';
import { EvidenceClinicalSignificance, EvidenceType } from '@app/generated/civic.apollo';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import * as state from '@app/forms/config/states/evidence.state';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { AbstractControl, FormControl } from '@angular/forms';

export type SelectOption = {
  [key: string | number]: string | number
}

export const defaultOptions = new BehaviorSubject<SelectOption[]>
  (getOptionsFromEnums(state.getAllSignificanceOptions()));

@Component({
  selector: 'cvc-clinical-significance-select',
  templateUrl: './clinical-significance-select.type.html',
  styleUrls: ['./clinical-significance-select.type.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClinicalSignificanceSelectType extends FieldType {
  formControl!: FormControl;
  destroy$: Subject<boolean> = new Subject<boolean>();

  defaultOptions = {
    templateOptions: {
      label: 'Clinical Signficance',
      helpText: 'The impact of the variant for predictive, prognostic, diagnostic, or functional evidence types. For predisposing and oncogenic evidence, impact is only applied at the assertion level and N/A should be selected here.',
      placeholder: 'Not specified',
      options: new BehaviorSubject<SelectOption[]>
        (getOptionsFromEnums(state.getAllSignificanceOptions()))
    },

    hooks: {
      // using 'any' for fc arg here bc compiler complains about possible undefined
      // value for fc when the argument is properly typed:
      // onInit: (fc: FormlyFieldControl): void => { ... }
      onInit: (fc: any): void => {
        const etCtrl: AbstractControl | null = fc.form ? fc.form.get('evidenceType') : null;
        if (!etCtrl) { return; } // no evidenceType FormControl found
        const opt$ = this.defaultOptions?.templateOptions?.options;
        if (opt$) {
          etCtrl.valueChanges
            .pipe(takeUntil(this.destroy$))
            .subscribe((et: EvidenceType) => {
              opt$.next(getOptionsFromEnums(state.getSignificanceOptions(et)));
            });
        }
      },
      onDestroy: (): void => {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
      }
    },

  }
}

export function getOptionsFromEnums(e: EvidenceClinicalSignificance[]): SelectOption[] {
  if (e.length === 0) { return []; }
  return e.map((value) => { return { value: value, label: formatEvidenceEnum(value) } })
}

export const clinicalSignificanceSelectTypeOption: TypeOption = {
  name: 'clinical-significance-select',
  component: ClinicalSignificanceSelectType,
  wrappers: ['form-field'],
};

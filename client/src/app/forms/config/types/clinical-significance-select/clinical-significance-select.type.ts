import { TypeOption, ValidationMessageOption, ValidatorOption, } from '@ngx-formly/core/lib/models';
import { Subject } from 'rxjs';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { takeUntil } from 'rxjs/operators';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { EntityClinicalSignificance, EntityState, EntityType, SelectOption, SelectType } from '../../states/entity.state';
import { Maybe } from '@app/generated/civic.apollo';
import { formatEvidenceEnum } from '@app/core/utilities/enum-formatters/format-evidence-enum';

export const clinicalSignificanceSelectTypeOption: TypeOption = {
  name: 'clinical-significance-select',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'Clinical Signficance',
      helpText: 'The impact of the variant for predictive, prognostic, diagnostic, or functional evidence types. For predisposing and oncogenic evidence, impact is only applied at the assertion level and N/A should be selected here.',
      placeholder: 'None specified',
      options: new Subject<SelectOption[]>(),
    },
    validators: {
      validation: ['cs-option']
    },
    hooks: {
      onInit: (ffc: Maybe<FormlyFieldConfig>): void => {
        const to: FormlyTemplateOptions = ffc!.templateOptions!;
        const options = to.options as Subject<SelectOption[]>;
        const st: EntityState = ffc?.options?.formState;
        if (!st) { options.next([]) } // if no form state, empty options

        // find evidenceType formControl, subscribe to value changes to update options
        const etCtrl: AbstractControl | null = ffc?.form ? ffc.form.get('evidenceType') : null;
        if (!etCtrl) { return; } // no evidenceType FormControl found, cannot subscribe
        to.vcSub = etCtrl.valueChanges
          .subscribe((et: EntityType) => {
            options.next(st.getOptionsFromEnums(st.getSignificanceOptions(et)));
            ffc!.formControl!.updateValueAndValidity();
          });

      },
      onDestroy: (ffc: Maybe<FormlyFieldConfig>): void => {
        const to: FormlyTemplateOptions = ffc!.templateOptions!;
        to.vcSub.unsubscribe();
      }
    },
  }
};

export const csOptionValidator: ValidatorOption = {
  name: 'cs-option',
  validation: (c: AbstractControl, ffc: FormlyFieldConfig, opt: any): ValidationErrors | null => {
    const st: EntityState = ffc.options?.formState;
    const cs: EntityClinicalSignificance = c.value;
    if (!cs || !st) { return null; }
    const et: EntityType = c.parent?.get('evidenceType')?.value;
    if (!et) { return null; }
    else {
      return st.isValidSignificanceOption(et, cs) ? null : { 'cs-option': et };
    }
  },
};

export const csOptionValidationMessage: ValidationMessageOption = {
  name: 'cs-option',
  message: (et: EntityType, ffc: FormlyFieldConfig): string => {
    const st: EntityState = ffc.options!.formState!;
    return `'${formatEvidenceEnum(ffc.formControl?.value)}' is not a valid Clinical Significance for ${formatEvidenceEnum(et)} ${st.pluralNames.get(st.entityName)}.`;
  }
};

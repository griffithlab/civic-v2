import { TypeOption, } from '@ngx-formly/core/lib/services/formly.config';
import { Subject } from 'rxjs';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { takeUntil } from 'rxjs/operators';
import { AbstractControl } from '@angular/forms';
import { EntityState, EntityType, SelectOption, SelectType } from '../../states/entity.state';
import { Maybe } from '@app/generated/civic.apollo';

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
      destroy$: new Subject<boolean>(),
    },
    validators: {},
    validation: {},
    hooks: {
      onInit: (ffc: Maybe<FormlyFieldConfig>): void => {
        const to: FormlyTemplateOptions = ffc!.templateOptions!;
        const options: Subject<SelectOption[]> = to.option;
        const st: EntityState = ffc?.options?.formState;
        if(!st) {options.next([])} // if no form state, empty options

        // find evidenceType formControl, subscribe to value changes to update options
        const etCtrl: AbstractControl | null = ffc?.form ? ffc.form.get('evidenceType') : null;
        if (!etCtrl) { return; } // no evidenceType FormControl found, cannot subscribe
        etCtrl.valueChanges
          .pipe(takeUntil(to.destroy$))
          .subscribe((et: EntityType) => {
            options.next(st.getOptionsFromEnums(st.getSignificanceOptions(et)));
            ffc!.formControl!.updateValueAndValidity();
          });

        // attach option validators
        ffc!.validators = {
          validation: st.getOptionValidators(st.entityName, SelectType.CS)
        }
        //attach option validation messages
        ffc!.validation = {
          messages: st.getOptionValidationMessages(st.entityName, SelectType.CS)
        }
      },
      onDestroy: (ffc: Maybe<FormlyFieldConfig>): void => {
        const to: FormlyTemplateOptions = ffc!.templateOptions!;
        to.destroy$.next(true);
        to.destroy$.unsubscribe();
      }
    },
  }
};

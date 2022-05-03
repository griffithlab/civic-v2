import { AbstractControl } from '@angular/forms';
import { Maybe, NccnGuideline } from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';


export const nccnVersionInputTypeOption: TypeOption = {
  name: 'nccn-version-input',
  extends: 'input',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'NCCN Guideline Version',
      placeholder: 'None specified',
    },
    validators: ['format'],
    validation: {
      messages: {
        required: 'If you specify an NCCN Guideline it must have a version.',
      }
    },
    hideExpression:  (m: any, st: any, ffc?: FormlyFieldConfig) => {
      return !m.nccnGuideline;
    },
    hooks: {
      onInit: (ffc?: FormlyFieldConfig): void => {
        if(ffc) {
          const to: Maybe<FormlyTemplateOptions> = ffc.templateOptions;
          const nccnCtrl: AbstractControl | null = ffc?.form ? ffc.form.get('nccnGuideline') : null;
          if(!nccnCtrl) { return; }
          if(!to) { return; }
          to.ncSub = nccnCtrl.valueChanges
            .subscribe((guideline: Maybe<NccnGuideline>) => {
              if(guideline) {
                to.required = true
              } else {
                to.required = false
                ffc.model[ffc.key as string] = undefined
              }
            })
        }
      },
      onDestroy: (ffc?: FormlyFieldConfig): void =>  {
        if (ffc) {
          const to: Maybe<FormlyTemplateOptions> = ffc.templateOptions;
          to?.ncSub?.unsubscribe();

        }
      }
    }
  }
}

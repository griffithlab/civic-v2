import { AbstractControl } from '@angular/forms';
import { Maybe } from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import { EntityState, EntityType } from '../../states/entity.state';

export const fdaApprovalCheckboxTypeOption: TypeOption = {
  name: 'fda-approval-checkbox',
  extends: 'checkbox',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'FDA Regulatory Approval?',
    },
    hideExpression:  (m: any, st: any, ffc?: FormlyFieldConfig) => {
      const to: Maybe<FormlyTemplateOptions> = ffc?.templateOptions;
      if(to && to.hidden !==  undefined) {
        return to.hidden
      }
      return true
    },
    defaultValue: false,
    hooks: {
      onInit: (ffc?: FormlyFieldConfig): void => {
        if(ffc) {
          const to: Maybe<FormlyTemplateOptions> = ffc.templateOptions;
          const nccnCtrl: AbstractControl | null = ffc?.form ? ffc.form.get('evidenceType') : null;
          const st: EntityState = ffc?.options?.formState;
          if(!nccnCtrl) { return; }
          if(!to) { return; }
          to.ncSub = nccnCtrl.valueChanges
            .subscribe((et: Maybe<EntityType>) => {
              if(et && st.allowsFdaApproval(et)) {
                to.hidden = false
              } else {
                ffc.model[ffc.key as string] = false
                to.hidden = true
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
  },
}

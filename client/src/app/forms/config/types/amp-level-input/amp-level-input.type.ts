import { AbstractControl } from '@angular/forms';
import { AmpFormatPipe } from '@app/core/pipes/amp-format-pipe';
import { AmpLevel } from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/models';
import { $enum } from 'ts-enum-util';
import { EntityState, EntityType } from '../../states/entity.state';

const formatter = new AmpFormatPipe();

export const ampLevelInputTypeOption: TypeOption = {
  name: 'amp-level-input',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      placeholder: 'Please Select an AMP/ASCO/CAP Category',
      label: 'AMP/ASCO/CAP Category',
      helpText: 'If applicable, please provide the <a href="http://www.ncbi.nlm.nih.gov/pubmed/27993330" target="_blank">AMP/ASCO/CAP somatic variant classification</a>.',
      required: false,
      options: $enum(AmpLevel).map(value => {return {value: value, label: formatter.transform(value, 'verbose') }})
    },
    hideExpression: (_m: any, _s: any, ffc?: FormlyFieldConfig) => { return ffc?.templateOptions?.hidden || false; },
    hooks: {
      onInit:(ffc?: FormlyFieldConfig) : void => {
        const to: FormlyTemplateOptions = ffc!.templateOptions!;
        // check for formState, populate with all options if not found
        const st: EntityState = ffc?.options?.formState;
        // find evidenceType formControl, subscribe to value changes to update options
        const etCtrl: AbstractControl | null = ffc?.form ? ffc.form.get('evidenceType') : null;
        if (!etCtrl) { return; } // no evidenceType FormControl found, cannot subscribe
        to.vcSub = etCtrl.valueChanges
          .subscribe((et: EntityType) => {
            if (!st.requiresAmpLevel(et)) {
              to.hidden = true;
              to.required = false;
              ffc!.model[ffc!.key as string] = undefined
            } else {
              to.hidden = false;
              to.required = true;
            }
          });
      }
    }
  }

}

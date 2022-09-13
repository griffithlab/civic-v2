import { EvidenceType, Maybe } from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { FormlyValueChangeEvent } from '@ngx-formly/core/lib/components/formly.field.config';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import { Subject } from 'rxjs';
import { EntityState } from '../../states/entity.state';

const optionText: { [option: string]: string } = {
  "DIAGNOSTIC": "Evidence pertains to a variant's impact on patient diagnosis (cancer subtype).",
  "PREDICTIVE": "Evidence pertains to a variant's effect on therapeutic response.",
  "PROGNOSTIC": "Evidence pertains to a variant's impact on disease progression, severity, or patient survival.",
  "PREDISPOSING": "Evidence pertains to a germline variant's role in conferring susceptibility to disease (including pathogenicity evaluations).",
  "ONCOGENIC": 'Evidence pertains to a somatic variant\'s involvement in tumor pathogenesis as described by the Hallmarks of Cancer.',
  "FUNCTIONAL": 'Evidence pertains to a variant that alters biological function from the reference state.',
}

export const evidenceTypeSelectTypeOption: TypeOption = {
  name: 'evidence-type-select',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'Entity Type',
      placeholder: 'Not specified',
      options: [],
    },
    hooks: {
      onInit: (ffc: Maybe<FormlyFieldConfig>): void => {
        const to: Maybe<FormlyTemplateOptions> = ffc!.templateOptions!;
        const st: Maybe<EntityState> = ffc?.options?.formState;
        if(st) {
          to.label = `${st.entityName} Type`;
          to.helpText = `Type of clinical outcome associated with the ${st.entityName} statement.`,
          to.options = st.getOptionsFromEnums(st.getTypeOptions());
        } else {
          console.warn('entity-type-select requires a formState to populate select options.');
        }
      }
    },
    expressionProperties: {
      'templateOptions.optionText': (m: any, st: any, ffc?: FormlyFieldConfig) => {
        return optionText[m.evidenceType]
      }
    }
  },
};

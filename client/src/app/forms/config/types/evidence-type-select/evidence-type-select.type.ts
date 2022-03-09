import { Maybe } from '@app/generated/civic.apollo';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import { EntityState } from '../../states/entity.state';

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
    }
  },
};

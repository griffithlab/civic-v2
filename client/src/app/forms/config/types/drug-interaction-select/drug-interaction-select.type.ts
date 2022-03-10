import { DrugInteraction } from '@app/generated/civic.apollo';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { $enum } from 'ts-enum-util';

const requiredValidationMsgFn = (err: any, ffc: FormlyFieldConfig): string => {
  return 'Evidence with more than one drug must specify an interaction type.'
};

export const drugInteractionSelectTypeOption = {
  name: 'drug-interaction-select',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'Drug InteractionType',
      helpText: 'Indicate whether the drugs specified above are substitutes, or are used in sequential or combination treatments.',
      required: false,
      placeholder: 'Not specified',
      options: $enum(DrugInteraction)
        .map((value, key) => {
          return { value: value, label: key }
        }),
    },
    validation: {
      messages: {
        required: requiredValidationMsgFn
      },
    },
    hideExpression: (m: any, st: any, ffc?: FormlyFieldConfig) => {
      if (!m.drugs) { return false; }
      return !(m.drugs.length > 1);
    },
    expressionProperties: {
      'templateOptions.required': (m: any, st: any, ffc?: FormlyFieldConfig) => {
        if (!m.drugs) { return false; }
        return m.drugs.length > 1;
      }
    }

  }
}

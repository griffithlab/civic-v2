import { TherapyInteraction } from '@app/generated/civic.apollo';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { $enum } from 'ts-enum-util';

const requiredValidationMsgFn = (err: any, ffc: FormlyFieldConfig): string => {
  return 'Evidence with more than one therapy must specify an interaction type.'
};

const optionText: { [option: string]: string } = {
  'COMBINATION': 'The therapies listed were used as part of a combination therapy approach',
  'SEQUENTIAL': 'The therapies listed were used at separate timepoints in the same treatment plan',
  'SUBSTITUTES': 'The therapies listed are often considered to be of the same family, or behave similarly in a treatment setting'
}

export const therapyInteractionSelectTypeOption = {
  name: 'therapy-interaction-select',
  extends: 'select',
  wrappers: ['form-field'],
  defaultOptions: {
    templateOptions: {
      label: 'Therapy Interaction Type',
      helpText: 'Indicate whether the therapies specified above are substitutes, or are used in sequential or combination treatments.',
      required: false,
      placeholder: 'Not specified',
      options: $enum(TherapyInteraction)
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
      if (!m.therapies) { return false; }
      return !(m.therapies.length > 1);
    },
    expressionProperties: {
      'templateOptions.required': (m: any, st: any, ffc?: FormlyFieldConfig) => {
        if (!m.therapies) { return false; }
        return m.therapies.length > 1;
      },
      'templateOptions.optionText': (m: any, st: any, ffc?: FormlyFieldConfig) => {
        return optionText[m.therapyInteractionType]
      }
    }
  }
}

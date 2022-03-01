import { AbstractControl, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ConfigOption, ValidationMessageOption, ValidatorOption } from '@ngx-formly/core/lib/services/formly.config';
import { HasFocusExtension, } from './config/extensions/has-focus.extension';

export const defaultValidationMessages: ValidationMessageOption[] = [
  {
    name: 'required',
    message: 'This field is required.'
  },
  {
    name: 'minlength',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field has a minimum length of ${field.templateOptions?.minLength}.`;
    }
  },
  {
    name: 'maxlength',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field has a maximum length of ${field.templateOptions?.maxLength}.`;
    }
  },
  {
    name: 'min',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field has a minimum value of ${field.templateOptions?.min}.`;
    }
  },
  {
    name: 'max',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field has a maximum value of ${field.templateOptions?.max}.`;
    }
  },
  {
    name: 'pattern',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `This field's value must fit the pattern ${field.templateOptions?.pattern}.`;
    }
  },
  {
    name: 'integer',
    message: (_err: any, field: FormlyFieldConfig): string => {
      return `${field.formControl?.value} is not a valid integer. Must be either a number or empty`;
    }
  },

];

export const additionalValidators: ValidatorOption[] = [
  {
    name: 'integer',
    validation: (c: AbstractControl, f: FormlyFieldConfig): ValidationErrors | null => {
      if (c.value === '' || c.value === undefined) {
        return null;
      } else {
        return /^\d+$/.test(c.value) ? null : { 'integer': true }
      }
    },
  },
];

export const CvcFormlyConfig: ConfigOption = {
  types: [],
  extras: { immutable: true },
  validationMessages: defaultValidationMessages,
  validators: additionalValidators,
  extensions: [HasFocusExtension],
}

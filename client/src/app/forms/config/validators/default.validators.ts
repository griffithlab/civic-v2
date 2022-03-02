import { AbstractControl, ValidationErrors } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core/lib/core";
import { ValidationMessageOption, ValidatorOption } from "@ngx-formly/core/lib/services/formly.config";

export const defaultMessages: ValidationMessageOption[] = [
  {
    name: 'required',
    message: 'This field is required.'
  },
  {
    name: 'minlength',
    message: (_err: any, ffc: FormlyFieldConfig): string => {
      return `This field has a minimum length of ${ffc.templateOptions?.minLength}.`;
    }
  },
  {
    name: 'maxlength',
    message: (_err: any, ffc: FormlyFieldConfig): string => {
      return `This field has a maximum length of ${ffc.templateOptions?.maxLength}.`;
    }
  },
  {
    name: 'min',
    message: (_err: any, ffc: FormlyFieldConfig): string => {
      return `This field has a minimum value of ${ffc.templateOptions?.min}.`;
    }
  },
  {
    name: 'max',
    message: (_err: any, ffc: FormlyFieldConfig): string => {
      return `This field has a maximum value of ${ffc.templateOptions?.max}.`;
    }
  },
  {
    name: 'pattern',
    message: (_err: any, ffc: FormlyFieldConfig): string => {
      return `This field's value must fit the pattern ${ffc.templateOptions?.pattern}.`;
    }
  },
  {
    name: 'integer',
    message: (_err: any, ffc: FormlyFieldConfig): string => {
      return `Value must be an integer.`;
    }
  },

];

export const defaultValidators: ValidatorOption[] = [
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

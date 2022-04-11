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
  {
    name: 'nucleotide',
    message: (_err: any, ffc: FormlyFieldConfig): string => {
      return `Value must only contain A, C, T, G, and/or /.`;
    }
  },



];

export const defaultValidators: ValidatorOption[] = [
  {
    name: 'integer',
    validation: (fc: AbstractControl, ffc: FormlyFieldConfig): ValidationErrors | null => {
      if (Array.isArray(fc.value)) {
        for (var value of fc.value) {
          if (!(value === '' || value === undefined || value === null)) {
            if (!(/^\d+$/.test(value))) {
              return {'integer': true}
            }
          }
        }
        return null
      }
      else {
        if (fc.value === '' || fc.value === undefined || fc.value === null) {
          return null;
        } else {
          return /^\d+$/.test(fc.value) ? null : { 'integer': true }
        }
      }
    },
  },
  {
    name: 'nucleotide',
    validation: (fc: AbstractControl, ffc: FormlyFieldConfig): ValidationErrors | null => {
      if (fc.value === '' || fc.value === undefined || fc.value === null) {
        return null;
      } else {
        return /^[ACTG\/]+$/.test(fc.value) ? null : { 'nucleotide': true }
      }
    },
  }
];

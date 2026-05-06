import { AbstractControl, ValidationErrors } from '@angular/forms'
import { FormlyFieldConfig } from '@ngx-formly/core'

export const defaultMessages = [
  {
    name: 'required',
    message: 'This field is required.',
  },
  {
    name: 'minLength',
    message: (_err: any, ffc: FormlyFieldConfig): string => {
      return `This field has a minimum length of ${ffc.templateOptions?.minLength}.`
    },
  },
  {
    name: 'maxLength',
    message: (_err: any, ffc: FormlyFieldConfig): string => {
      return `This field has a maximum length of ${ffc.templateOptions?.maxLength}.`
    },
  },
  {
    name: 'min',
    message: (_err: any, ffc: FormlyFieldConfig): string => {
      return `This field has a minimum value of ${ffc.templateOptions?.min}.`
    },
  },
  {
    name: 'max',
    message: (_err: any, ffc: FormlyFieldConfig): string => {
      return `This field has a maximum value of ${ffc.templateOptions?.max}.`
    },
  },
  {
    name: 'pattern',
    message: (_err: any, ffc: FormlyFieldConfig): string => {
      return `This field's value must fit the pattern ${ffc.templateOptions?.pattern}.`
    },
  },
  {
    name: 'integer',
    message: (_err: any, ffc: FormlyFieldConfig): string => {
      return `Value must be an integer.`
    },
  },
  {
    name: 'nucleotide',
    message: (_err: any, ffc: FormlyFieldConfig): string => {
      return `Value must only contain A, C, T, G, and/or /.`
    },
  },
  {
    name: 'clinvar',
    message: (_err: any, ffc: FormlyFieldConfig): string => {
      return `Value must be an integer.`
    },
  },
]

export const defaultValidators = [
  {
    name: 'integer',
    validation: (
      fc: AbstractControl,
      ffc: FormlyFieldConfig
    ): ValidationErrors | null => {
      if (fc.value === '' || fc.value === undefined || fc.value === null) {
        return null
      } else {
        return /^\d+$/.test(fc.value) ? null : { integer: true }
      }
    },
  },
  {
    name: 'nucleotide',
    validation: (
      fc: AbstractControl,
      ffc: FormlyFieldConfig
    ): ValidationErrors | null => {
      if (fc.value === '' || fc.value === undefined || fc.value === null) {
        return null
      } else {
        return /^[ACTG\/]+$/.test(fc.value) ? null : { nucleotide: true }
      }
    },
  },
  {
    name: 'clinvar',
    validation: (
      fc: AbstractControl,
      ffc: FormlyFieldConfig
    ): ValidationErrors | null => {
      for (var value of fc.value) {
        if (!(value === '' || value === undefined || value === null)) {
          if (!/^\d+$/.test(value)) {
            return { clinvar: true }
          }
        }
      }
      return null
    },
  },
]

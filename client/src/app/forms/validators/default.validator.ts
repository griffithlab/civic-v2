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
  {
    name: 'evaluationConflictingCodes',
    message: (_err: any, ffc: FormlyFieldConfig): string => {
      return `Multiple met codes within an assessment group are mutually exclusive.`
    },
  },
  {
    name: 'evaluationCrossGroupConflictingCodes',
    message: (_err: any, ffc: FormlyFieldConfig): string => {
      const mutuallyExclusiveCodes = ffc.props?.extraInfo?.mutuallyExclusiveCodes
      const allCodes = ffc.parent?.parent?.parent?.parent?.fieldGroup?.flatMap((c) => c.fieldGroup)
      let codeCausingError = []
      if (allCodes) {
        for (const mutuallyExclusiveCode of mutuallyExclusiveCodes) {
          const exclusiveCode = allCodes.filter((c) => c && c.key == mutuallyExclusiveCode)
          if (exclusiveCode && exclusiveCode[0] && exclusiveCode[0].fieldGroup) {
            const field = exclusiveCode[0].fieldGroup[0].fieldGroup?.find((field) => field.key == 'evaluation')
            if (field && field.formControl?.value == 'MET') {
              codeCausingError.push(mutuallyExclusiveCode)
            }
          }
        }
      }
      return `Code is mutually exclusive with ${codeCausingError.join(', ')}.`
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
  {
    name: 'evaluationConflictingCodes',
    validation: (
      fc: AbstractControl,
      ffc: FormlyFieldConfig
    ): ValidationErrors | null => {
      if (fc.value == 'MET') {
        const criterium = ffc.parent?.parent?.key
        const otherCodesInGroup = ffc.parent?.parent?.parent?.fieldGroup?.filter((c) => c.key != criterium)
        if (otherCodesInGroup) {
          for (let otherCode of otherCodesInGroup) {
            if (otherCode.fieldGroup) {
              const field = otherCode.fieldGroup[0].fieldGroup?.find((field) => field.key == 'evaluation')
              if (field && field.formControl?.value == 'MET') {
                return { evaluationConflictingCodes : true}
              }
            }
          }
        }
      }
      return null
    },
  },
  {
    name: 'evaluationCrossGroupConflictingCodes',
    validation: (
      fc: AbstractControl,
      ffc: FormlyFieldConfig
    ): ValidationErrors | null => {
      if (fc.value == 'MET') {
        const mutuallyExclusiveCodes = ffc.props?.extraInfo?.mutuallyExclusiveCodes
        console.log(mutuallyExclusiveCodes)
        const allCodes = ffc.parent?.parent?.parent?.parent?.fieldGroup?.flatMap((c) => c.fieldGroup)
        if (allCodes) {
          for (const mutuallyExclusiveCode of mutuallyExclusiveCodes) {
            const exclusiveCode = allCodes.filter((c) => c && c.key == mutuallyExclusiveCode)
            if (exclusiveCode && exclusiveCode[0] && exclusiveCode[0].fieldGroup) {
              const field = exclusiveCode[0].fieldGroup[0].fieldGroup?.find((field) => field.key == 'evaluation')
              if (field && field.formControl?.value == 'MET') {
                return { evaluationCrossGroupConflictingCodes : true}
              }
            }
          }
        }
      }
      return null
    },
  },
]

import { CvcFormFieldExtraType } from '@app/forms/wrappers/form-field/form-field.wrapper'
import { FormlyFieldProps } from '@ngx-formly/core'

/** Singular/plural labels used to build placeholders and dropdown messages. */
export type CvcSelectEntityName = { singular: string; plural: string }

/** Props every entity-select field shares. */
export interface CvcEntitySelectFieldProps extends FormlyFieldProps {
  entityName: CvcSelectEntityName
  isMultiSelect: boolean
  tooltip?: string
  extraType?: CvcFormFieldExtraType
}

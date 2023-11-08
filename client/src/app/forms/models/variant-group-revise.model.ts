import { FormReviseBaseModel } from './form-revise-base.model'

export interface VariantGroupFields {
  description?: string
  variantIds?: number[]
  sourceIds?: number[]
  name?: string
}

export interface VariantGroupReviseModel extends FormReviseBaseModel {
  fields: VariantGroupFields
}

export const variantGroupReviseFieldsDefaults: VariantGroupFields = {
  description: undefined,
  variantIds: undefined,
  sourceIds: undefined,
  name: undefined,
}

export const variantGroupReviseFormInitialModel: VariantGroupReviseModel = {
  id: undefined,
  clientMutationId: undefined,
  fields: variantGroupReviseFieldsDefaults,
  comment: undefined,
  organizationId: undefined,
}

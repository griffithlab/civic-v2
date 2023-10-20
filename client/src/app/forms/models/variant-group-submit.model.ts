import { FormSubmitBaseModel } from './form-submit-base.model'

export interface VariantGroupFields {
  description?: string
  variantIds?: number[]
  sourceIds?: number[]
  name?: string
}

export interface VariantGroupSubmitModel extends FormSubmitBaseModel {
  fields: VariantGroupFields
}

export const variantGroupSubmitFieldsDefaults: VariantGroupFields = {
  description: undefined,
  variantIds: undefined,
  sourceIds: undefined,
  name: undefined,
}

export const variantGroupSubmitFormInitialModel: VariantGroupSubmitModel = {
  clientMutationId: undefined,
  fields: variantGroupSubmitFieldsDefaults,
  comment: undefined,
  organizationId: undefined,
}

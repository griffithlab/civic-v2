import { FormReviseBaseModel } from './form-revise-base.model'
import { RegionVariantFields } from './region-variant-fields.model'

export interface RegionVariantReviseModel extends FormReviseBaseModel {
  fields: RegionVariantFields
}

export const regionVariantReviseFieldsDefaults: RegionVariantFields = {
  aliases: undefined,
  variantTypeIds: undefined,
}

export const regionVariantReviseFormInitialModel: RegionVariantReviseModel = {
  id: undefined,
  clientMutationId: undefined,
  fields: regionVariantReviseFieldsDefaults,
  comment: undefined,
  organizationId: undefined,
}

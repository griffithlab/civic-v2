import { FormReviseBaseModel } from './form-revise-base.model'
import { FusionVariantFields } from './fusion-variant-fields.model'

export interface FusionVariantReviseModel extends FormReviseBaseModel {
  fields: FusionVariantFields
}

export const fusionVariantReviseFieldsDefaults: FusionVariantFields = {
  aliases: undefined,
  variantTypeIds: undefined,
}

export const fusionVariantReviseFormInitialModel: FusionVariantReviseModel = {
  id: undefined,
  clientMutationId: undefined,
  fields: fusionVariantReviseFieldsDefaults,
  comment: undefined,
  organizationId: undefined,
}

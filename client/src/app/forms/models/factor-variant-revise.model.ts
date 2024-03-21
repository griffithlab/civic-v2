import { FormReviseBaseModel } from './form-revise-base.model'
import { FactorVariantFields } from './factor-variant-fields.model'

export interface FactorVariantReviseModel extends FormReviseBaseModel {
  fields: FactorVariantFields
}

export const factorVariantReviseFieldsDefaults: FactorVariantFields = {
  name: undefined,
  aliases: undefined,
  variantTypeIds: undefined,
  featureId: undefined,
  ncitId: undefined,
}

export const factorVariantReviseFormInitialModel: FactorVariantReviseModel = {
  id: undefined,
  clientMutationId: undefined,
  fields: factorVariantReviseFieldsDefaults,
  comment: undefined,
  organizationId: undefined,
}

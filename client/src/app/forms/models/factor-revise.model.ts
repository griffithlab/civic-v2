import { FactorFields } from './factor-fields.model'
import { FormReviseBaseModel } from './form-revise-base.model'

export interface FactorReviseModel extends FormReviseBaseModel {
  fields: FactorFields
}

export const factorReviseFieldsDefaults: FactorFields = {
  description: undefined,
  sourceIds: undefined,
}

export const factorReviseFormInitialModel: FactorReviseModel = {
  id: undefined,
  clientMutationId: undefined,
  fields: factorReviseFieldsDefaults,
  comment: undefined,
  organizationId: undefined,
}

import { RegionFields } from './region-fields.model'
import { FormReviseBaseModel } from './form-revise-base.model'

export interface RegionReviseModel extends FormReviseBaseModel {
  fields: RegionFields
}

export const regionReviseFieldsDefaults: RegionFields = {
  description: undefined,
  sourceIds: undefined
}

export const regionReviseFormInitialModel: RegionReviseModel = {
  id: undefined,
  clientMutationId: undefined,
  fields: regionReviseFieldsDefaults,
  comment: undefined,
  organizationId: undefined
}
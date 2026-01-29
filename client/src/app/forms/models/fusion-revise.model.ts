import { FusionFields } from './fusion-fields.model'
import { FormReviseBaseModel } from './form-revise-base.model'

export interface FusionReviseModel extends FormReviseBaseModel {
  fields: FusionFields
}

export const fusionReviseFieldsDefaults: FusionFields = {
  description: undefined,
  sourceIds: undefined,
  knownPartnerGeneIds: undefined,
}

export const fusionReviseFormInitialModel: FusionReviseModel = {
  id: undefined,
  clientMutationId: undefined,
  fields: fusionReviseFieldsDefaults,
  comment: undefined,
  organizationId: undefined,
}

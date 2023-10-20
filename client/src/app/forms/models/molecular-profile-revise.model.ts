import { FormReviseBaseModel } from './form-revise-base.model'
import { MolecularProfileFields } from './molecular-profile-fields.model'

export interface MolecularProfileReviseModel extends FormReviseBaseModel {
  fields: MolecularProfileFields
}

export const molecularProfileReviseFieldsDefaults: MolecularProfileFields = {
  description: undefined,
  commonName: undefined,
  sourceIds: undefined,
  aliases: undefined
}

export const molecularProfileReviseFormInitialModel: MolecularProfileReviseModel = {
  id: undefined,
  clientMutationId: undefined,
  fields: molecularProfileReviseFieldsDefaults,
  comment: undefined,
  organizationId: undefined
}

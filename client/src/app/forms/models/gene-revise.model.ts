import { GeneFields } from './gene-fields.model'
import { FormReviseBaseModel } from './form-revise-base.model'

export interface GeneReviseModel extends FormReviseBaseModel {
  fields: GeneFields
}

export const geneReviseFieldsDefaults: GeneFields = {
  description: undefined,
  sourceIds: undefined
}

export const geneReviseFormInitialModel: GeneReviseModel = {
  id: undefined,
  clientMutationId: undefined,
  fields: geneReviseFieldsDefaults,
  comment: undefined,
  organizationId: undefined
}
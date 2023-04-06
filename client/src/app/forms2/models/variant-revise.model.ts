import { FormReviseBaseModel } from './form-revise-base.model'
import { VariantFields } from './variant-fields.model'

export interface VariantReviseModel extends FormReviseBaseModel {
  fields: VariantFields
}

export const variantReviseFieldsDefaults: VariantFields = {
  name: undefined,
  aliases: undefined,
  hgvsDescriptions: undefined,
  clinvarIds: undefined,
  variantTypeIds: undefined,
  referenceBuild: undefined,
  ensemblVersion: undefined,
  chromosome: undefined,
  start: undefined,
  stop: undefined,
  representativeTranscript: undefined,
  chromosome2: undefined,
  start2: undefined,
  stop2: undefined,
  representativeTranscript2: undefined,
  geneId: undefined,
  referenceBases: undefined,
  variantBases: undefined
}

export const variantReviseFormInitialModel: VariantReviseModel = {
  id: undefined,
  clientMutationId: undefined,
  fields: variantReviseFieldsDefaults,
  comment: undefined,
  organizationId: undefined
}
import { FormReviseBaseModel } from './form-revise-base.model'
import { GeneVariantFields } from './gene-variant-fields.model'

export interface GeneVariantReviseModel extends FormReviseBaseModel {
  fields: GeneVariantFields
}

export const geneVariantReviseFieldsDefaults: GeneVariantFields = {
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
  featureId: undefined,
  referenceBases: undefined,
  variantBases: undefined,
}

export const geneVariantReviseFormInitialModel: GeneVariantReviseModel = {
  id: undefined,
  clientMutationId: undefined,
  fields: geneVariantReviseFieldsDefaults,
  comment: undefined,
  organizationId: undefined,
}

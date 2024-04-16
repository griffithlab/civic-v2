import { EvidenceItemFields } from './evidence-fields.model'
import { FormReviseBaseModel } from './form-revise-base.model'

export interface EvidenceReviseModel extends FormReviseBaseModel {
  fields: EvidenceItemFields
}
export const evidenceItemReviseFieldsDefaults = <EvidenceItemFields>{
  // gene, variant included for initial input type development
  featureId: undefined, // debug
  variantId: undefined, // debug
  significance: undefined,
  description: undefined,
  diseaseId: undefined,
  drugIds: [],
  therapyInteractionType: undefined,
  evidenceDirection: undefined,
  evidenceLevel: undefined,
  evidenceType: undefined,
  molecularProfileId: undefined,
  phenotypeIds: [],
  rating: undefined,
  sourceId: undefined,
  variantOrigin: undefined,
}

export const evidenceReviseFormInitialModel: EvidenceReviseModel = {
  id: undefined,
  clientMutationId: undefined,
  fields: evidenceItemReviseFieldsDefaults,
  comment: undefined,
  organizationId: undefined,
}

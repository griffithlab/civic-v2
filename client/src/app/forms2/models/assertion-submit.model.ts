import { AssertionFields } from './assertion-fields.model'
import { FormSubmitBaseModel } from './form-submit-base.model'

export interface AssertionSubmitModel extends FormSubmitBaseModel {
  fields: AssertionFields
}

export const assertionSubmitFieldsDefaults = <AssertionFields>{
  // gene, variant drug, included for initial input type development
  geneId: undefined,
  variantId: undefined,
  drugId: undefined,
  acmgCodeIds: [],
  ampLevel: undefined,
  assertionDirection: undefined,
  assertionType: undefined,
  clingenCodeIds: [],
  significance: undefined,
  description: undefined,
  diseaseId: undefined,
  therapyIds: [],
  therapyInteractionType: undefined,
  evidenceItemIds: [],
  fdaCompanionTest: undefined,
  fdaRegulatoryApproval: undefined,
  molecularProfileId: undefined,
  nccnGuidelineId: undefined,
  nccnGuidelineVersion: undefined,
  phenotypeIds: [],
  summary: undefined,
  variantOrigin: undefined,
}

export const assertionSubmitFormInitialModel: AssertionSubmitModel = {
  clientMutationId: undefined,
  fields: assertionSubmitFieldsDefaults,
  comment: undefined,
  organizationId: undefined,
}

import { AssertionFields } from './assertion-fields.model'
import { FormReviseBaseModel } from './form-revise-base.model'

export interface AssertionReviseModel extends FormReviseBaseModel {
  fields: AssertionFields
}

export const assertionReviseFieldsDefaults = <AssertionFields>{
  molecularProfileId: undefined,
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
  nccnGuidelineId: undefined,
  nccnGuidelineVersion: undefined,
  phenotypeIds: [],
  summary: undefined,
  variantOrigin: undefined,
}

export const assertionReviseFormInitialModel: AssertionReviseModel = {
  id: undefined,
  clientMutationId: undefined,
  fields: assertionReviseFieldsDefaults,
  comment: undefined,
  organizationId: undefined,
}

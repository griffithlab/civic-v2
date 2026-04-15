import { AssertionFields } from './assertion-fields.model'
import { FormReviseBaseModel } from './form-revise-base.model'

export interface AssertionReviseModel extends FormReviseBaseModel {
  fields: AssertionFields
}

export const assertionReviseFieldsDefaults = <AssertionFields>{
  molecularProfileId: undefined,
  assertionDirection: undefined,
  assertionType: undefined,
  significance: undefined,
  specificationCriteriumIds: [],
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

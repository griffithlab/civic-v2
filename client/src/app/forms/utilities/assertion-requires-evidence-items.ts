import { AssertionFields } from '@app/forms/models/assertion-fields.model'
import { AssertionType } from '@app/generated/civic.apollo'

export function assertionRequiresEvidenceItems(
  model?: AssertionFields
): boolean {
  return model?.assertionType !== AssertionType.Oncogenic
}

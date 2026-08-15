import { MockGraphqlOperation } from '@app/testing/apollo-test.providers'
import { describeEntitySelectContract } from '@app/testing/select-field.harness'
import { describe } from 'vitest'
import { CvcNccnGuidelineSelectField } from './nccn-guideline-select.type'

// NccnGuideline has no link field; LinkableNccnGuideline is the whole shape
const guideline = (id: number, name: string) => ({
  __typename: 'NccnGuideline' as const,
  id,
  name,
})

const BREAST = guideline(31, 'Breast Cancer')
const COLON = guideline(32, 'Colon Cancer')

const respond = (op: MockGraphqlOperation) => {
  if (op.operationName === 'NccnGuidelineSelectTypeahead') {
    return { nccnGuidelinesTypeahead: [BREAST, COLON] }
  }
  if (op.operationName === 'NccnGuidelineSelectTag') {
    return {
      nccnGuideline: [BREAST, COLON].find((g) => g.id === op.variables.id),
    }
  }
  throw new Error(`unexpected operation ${op.operationName}`)
}

describe('CvcNccnGuidelineSelectField', () => {
  describeEntitySelectContract({
    fieldType: CvcNccnGuidelineSelectField,
    type: 'nccn-guideline-select',
    multiType: 'nccn-guideline-multi-select',
    key: 'nccnGuidelineId',
    typeaheadOp: 'NccnGuidelineSelectTypeahead',
    tagOp: 'NccnGuidelineSelectTag',
    respond,
    records: [BREAST, COLON],
    emptySearchVars: { name: '' },
    searchVars: (name) => ({ name }),
    tagVars: (id) => ({ id }),
    searchTerm: 'bre',
    hasQuickAdd: false,
  })
})

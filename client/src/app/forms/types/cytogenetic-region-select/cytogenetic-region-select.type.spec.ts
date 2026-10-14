import { MockGraphqlOperation } from '@app/testing/apollo-test.providers'
import { describeEntitySelectContract } from '@app/testing/select-field.harness'
import { describe } from 'vitest'
import { CvcCytogeneticRegionSelectField } from './cytogenetic-region-select.type'

// CytogeneticRegion has no link field; LinkableCytogeneticRegion is the
// whole shape
const region = (id: number, name: string) => ({
  __typename: 'CytogeneticRegion' as const,
  id,
  name,
})

const P13 = region(41, '1p13')
const Q22 = region(42, '9q22')

const respond = (op: MockGraphqlOperation) => {
  if (op.operationName === 'CytogeneticRegionSelectTypeahead') {
    return { cytogeneticRegionTypeahead: [P13, Q22] }
  }
  if (op.operationName === 'CytogeneticRegionSelectTag') {
    return {
      cytogeneticRegion: [P13, Q22].find(
        (r) => r.id === op.variables.cytogeneticRegionId
      ),
    }
  }
  throw new Error(`unexpected operation ${op.operationName}`)
}

describe('CvcCytogeneticRegionSelectField', () => {
  describeEntitySelectContract({
    fieldType: CvcCytogeneticRegionSelectField,
    type: 'cytogenetic-region-select',
    multiType: 'cytogenetic-region-multi-select',
    key: 'cytogeneticRegionId',
    typeaheadOp: 'CytogeneticRegionSelectTypeahead',
    tagOp: 'CytogeneticRegionSelectTag',
    respond,
    records: [P13, Q22],
    // this field's queries name their variables queryTerm and
    // cytogeneticRegionId rather than the usual name and id
    emptySearchVars: { queryTerm: '' },
    searchVars: (queryTerm) => ({ queryTerm }),
    tagVars: (cytogeneticRegionId) => ({ cytogeneticRegionId }),
    searchTerm: '1p1',
    hasQuickAdd: false,
  })
})

import { MockGraphqlOperation } from '@app/testing/apollo-test.providers'
import {
  createSelectFieldHarness,
  describeEntitySelectContract,
} from '@app/testing/select-field.harness'
import { describe, expect, it } from 'vitest'
import { CvcPhenotypeSelectField } from './phenotype-select.type'

const phenotype = (id: number, name: string, hpoId: string) => ({
  __typename: 'Phenotype' as const,
  id,
  name,
  link: `/phenotypes/${id}`,
  hpoId,
})

const SEIZURE = phenotype(11, 'Seizure', 'HP:0001250')
const ATAXIA = phenotype(12, 'Ataxia', 'HP:0001251')

const respond = (op: MockGraphqlOperation) => {
  if (op.operationName === 'PhenotypeSelectTypeahead') {
    return { phenotypeTypeahead: [SEIZURE, ATAXIA] }
  }
  if (op.operationName === 'PhenotypeSelectTag') {
    return {
      phenotype: [SEIZURE, ATAXIA].find((p) => p.id === op.variables.id),
    }
  }
  throw new Error(`unexpected operation ${op.operationName}`)
}

describe('CvcPhenotypeSelectField', () => {
  describeEntitySelectContract({
    fieldType: CvcPhenotypeSelectField,
    type: 'phenotype-select',
    multiType: 'phenotype-multi-select',
    key: 'phenotypeIds',
    typeaheadOp: 'PhenotypeSelectTypeahead',
    tagOp: 'PhenotypeSelectTag',
    respond,
    records: [SEIZURE, ATAXIA],
    emptySearchVars: { name: '' },
    searchVars: (name) => ({ name }),
    tagVars: (id) => ({ id }),
    searchTerm: 'sei',
    // phenotype has no quick-add form
    hasQuickAdd: false,
  })

  it('renders the HPO id alongside each option', async () => {
    const h = await createSelectFieldHarness({
      type: 'phenotype-select',
      key: 'phenotypeIds',
      respond,
    })
    h.openDropdown()
    await h.settle()
    const text = h
      .optionItems()
      .map((el) => el.textContent?.replace(/\s+/g, ' ').trim())
      .join('|')
    expect(text).toContain('HP:0001250')
    expect(text).toContain('HP:0001251')
    h.destroy()
  })
})

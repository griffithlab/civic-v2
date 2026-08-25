import { MockGraphqlOperation } from '@app/testing/apollo-test.providers'
import {
  createSelectFieldHarness,
  describeEntitySelectContract,
} from '@app/testing/select-field.harness'
import { describe, expect, it } from 'vitest'
import { CvcDiseaseSelectField } from './disease-select.type'

const disease = (id: number, name: string, doid: string) => ({
  __typename: 'Disease' as const,
  id,
  name,
  link: `/diseases/${id}`,
  deprecated: false,
  doid,
  diseaseAliases: [`${name} alias`],
})

const MELANOMA = disease(7, 'Melanoma', '1909')
const LEUKEMIA = disease(8, 'Leukemia', '1240')

const respond = (op: MockGraphqlOperation) => {
  if (op.operationName === 'DiseaseSelectTypeahead') {
    return { diseaseTypeahead: [MELANOMA, LEUKEMIA] }
  }
  if (op.operationName === 'DiseaseSelectTag') {
    return {
      disease: [MELANOMA, LEUKEMIA].find((d) => d.id === op.variables.id),
    }
  }
  throw new Error(`unexpected operation ${op.operationName}`)
}

describe('CvcDiseaseSelectField', () => {
  describeEntitySelectContract({
    fieldType: CvcDiseaseSelectField,
    type: 'disease-select',
    multiType: 'disease-multi-select',
    key: 'diseaseId',
    typeaheadOp: 'DiseaseSelectTypeahead',
    tagOp: 'DiseaseSelectTag',
    respond,
    records: [MELANOMA, LEUKEMIA],
    emptySearchVars: { name: '' },
    searchVars: (name) => ({ name }),
    tagVars: (id) => ({ id }),
    searchTerm: 'mel',
  })

  it('renders each option as a tag plus its DOID and alias metadata', async () => {
    const h = await createSelectFieldHarness({
      type: 'disease-select',
      key: 'diseaseId',
      respond,
    })
    h.openDropdown()
    await h.settle()
    const text = h
      .optionItems()
      .map((el) => el.textContent?.replace(/\s+/g, ' ').trim())
      .join('|')
    expect(text).toContain('1909')
    expect(text).toContain('Melanoma alias')
    h.destroy()
  })

  it('closes the dropdown after a quick-add', async () => {
    const h = await createSelectFieldHarness({
      type: 'disease-multi-select',
      key: 'diseaseId',
      respond,
      model: { diseaseId: [7] },
    })
    await h.settle()
    h.quickAdd(CvcDiseaseSelectField, 8)
    await h.settle()
    expect(h.field(CvcDiseaseSelectField).open()).toBe(false)
    h.destroy()
  })
})

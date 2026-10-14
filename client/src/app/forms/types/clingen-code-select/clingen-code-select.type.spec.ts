import { MockGraphqlOperation } from '@app/testing/apollo-test.providers'
import {
  createSelectFieldHarness,
  describeEntitySelectContract,
} from '@app/testing/select-field.harness'
import { describe, expect, it } from 'vitest'
import { CvcClingenCodeSelectField } from './clingen-code-select.type'

// ClingenCode has no link; code and name carry the same value server-side
const clingenCode = (
  id: number,
  code: string,
  description: string,
  exclusive = false
) => ({
  __typename: 'ClingenCode' as const,
  id,
  name: code,
  code,
  description,
  tooltip: `${code} tooltip`,
  exclusive,
})

const OM1 = clingenCode(5, 'OM1', 'Located in a critical site')
const OM2 = clingenCode(6, 'OM2', 'Functional study supports oncogenicity')
const NA = clingenCode(18, 'N/A', 'Not applicable', true)

const respond = (op: MockGraphqlOperation) => {
  if (op.operationName === 'ClingenCodeSelectTypeahead') {
    return { clingenCodesTypeahead: [OM1, OM2, NA] }
  }
  if (op.operationName === 'ClingenCodeSelectTag') {
    return {
      clingenCode: [OM1, OM2, NA].find((c) => c.id === op.variables.id),
    }
  }
  throw new Error(`unexpected operation ${op.operationName}`)
}

/** selects options by index from the open dropdown */
async function selectOptions(
  h: Awaited<ReturnType<typeof createSelectFieldHarness>>,
  indexes: number[]
) {
  for (const i of indexes) {
    h.openDropdown()
    await h.settle()
    h.optionItems()[i].click()
    await h.settle()
  }
}

describe('CvcClingenCodeSelectField', () => {
  describeEntitySelectContract({
    fieldType: CvcClingenCodeSelectField,
    type: 'clingen-code-select',
    multiType: 'clingen-code-multi-select',
    key: 'clingenCodeIds',
    typeaheadOp: 'ClingenCodeSelectTypeahead',
    tagOp: 'ClingenCodeSelectTag',
    respond,
    records: [OM1, OM2],
    // the typeahead also returns the exclusive N/A code
    optionCount: 3,
    // this query names its search variable code, not name
    emptySearchVars: { code: '' },
    searchVars: (code) => ({ code }),
    tagVars: (id) => ({ id }),
    searchTerm: 'OM1',
    hasQuickAdd: false,
  })

  it('renders each code with its description', async () => {
    const h = await createSelectFieldHarness({
      type: 'clingen-code-select',
      key: 'clingenCodeIds',
      respond,
    })
    h.openDropdown()
    await h.settle()
    const text = h
      .optionItems()
      .map((el) => el.textContent?.replace(/\s+/g, ' ').trim())
      .join('|')
    expect(text).toContain('OM1')
    expect(text).toContain('Located in a critical site')
    h.destroy()
  })

  it('keeps a selection of non-exclusive codes intact', async () => {
    const h = await createSelectFieldHarness({
      type: 'clingen-code-multi-select',
      key: 'clingenCodeIds',
      respond,
    })
    await selectOptions(h, [0, 1])
    expect(h.control().value).toEqual([OM1.id, OM2.id])
    expect(h.field(CvcClingenCodeSelectField).props.description).toBeUndefined()
    h.destroy()
  })

  it('collapses the selection to N/A when it is chosen alongside other codes', async () => {
    const h = await createSelectFieldHarness({
      type: 'clingen-code-multi-select',
      key: 'clingenCodeIds',
      respond,
    })
    await selectOptions(h, [0, 1, 2])

    expect(h.control().value).toEqual([NA.id])
    expect(h.field(CvcClingenCodeSelectField).props.description).toContain(
      'precludes selecting any other codes'
    )
    h.destroy()
  })

  it('keeps the notice while N/A remains the only selection', async () => {
    const h = await createSelectFieldHarness({
      type: 'clingen-code-multi-select',
      key: 'clingenCodeIds',
      respond,
    })
    await selectOptions(h, [2])
    expect(h.control().value).toEqual([NA.id])
    expect(h.field(CvcClingenCodeSelectField).props.description).toContain(
      'precludes selecting any other codes'
    )
    h.destroy()
  })

  it('withdraws the notice once N/A is deselected', async () => {
    const h = await createSelectFieldHarness({
      type: 'clingen-code-multi-select',
      key: 'clingenCodeIds',
      respond,
    })
    await selectOptions(h, [2])
    expect(h.field(CvcClingenCodeSelectField).props.description).toContain(
      'precludes'
    )

    h.control().setValue([])
    await h.settle()

    expect(h.field(CvcClingenCodeSelectField).props.description).toBeUndefined()
    h.destroy()
  })
})

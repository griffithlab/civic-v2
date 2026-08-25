import { MockGraphqlOperation } from '@app/testing/apollo-test.providers'
import {
  createSelectFieldHarness,
  describeEntitySelectContract,
} from '@app/testing/select-field.harness'
import { describe, expect, it } from 'vitest'
import { CvcVariantTypeSelectField } from './variant-type-select.type'

const variantType = (id: number, name: string, soid: string) => ({
  __typename: 'VariantType' as const,
  id,
  name,
  link: `/variant-types/${id}`,
  soid,
})

const MISSENSE = variantType(21, 'missense_variant', 'SO:0001583')
const NONSENSE = variantType(22, 'nonsense_variant', 'SO:0002054')

const respond = (op: MockGraphqlOperation) => {
  if (op.operationName === 'VariantTypeSelectTypeahead') {
    return { variantTypeTypeahead: [MISSENSE, NONSENSE] }
  }
  if (op.operationName === 'VariantTypeSelectTag') {
    return {
      variantType: [MISSENSE, NONSENSE].find((v) => v.id === op.variables.id),
    }
  }
  throw new Error(`unexpected operation ${op.operationName}`)
}

describe('CvcVariantTypeSelectField', () => {
  describeEntitySelectContract({
    fieldType: CvcVariantTypeSelectField,
    type: 'variant-type-select',
    multiType: 'variant-type-multi-select',
    key: 'variantTypeIds',
    typeaheadOp: 'VariantTypeSelectTypeahead',
    tagOp: 'VariantTypeSelectTag',
    respond,
    records: [MISSENSE, NONSENSE],
    emptySearchVars: { name: '' },
    searchVars: (name) => ({ name }),
    tagVars: (id) => ({ id }),
    searchTerm: 'mis',
    hasQuickAdd: false,
  })

  it('renders the sequence ontology id alongside each option', async () => {
    const h = await createSelectFieldHarness({
      type: 'variant-type-select',
      key: 'variantTypeIds',
      respond,
    })
    h.openDropdown()
    await h.settle()
    const text = h
      .optionItems()
      .map((el) => el.textContent?.replace(/\s+/g, ' ').trim())
      .join('|')
    expect(text).toContain('SO:0001583')
    expect(text).toContain('SO:0002054')
    h.destroy()
  })
})

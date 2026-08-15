import { FeatureInstanceTypes } from '@app/generated/civic.apollo.types'
import { MockGraphqlOperation } from '@app/testing/apollo-test.providers'
import {
  createSelectFieldHarness,
  describeEntitySelectContract,
} from '@app/testing/select-field.harness'
import { describe, expect, it } from 'vitest'
import { CvcFeatureSelectField } from './feature-select.type'

// the typeahead always returns __typename 'Feature'; the concrete
// Gene/Factor/Fusion/Region type is nested in featureInstance
const feature = (id: number, name: string, aliases: string[] = []) => ({
  __typename: 'Feature' as const,
  id,
  name,
  link: `/features/${id}`,
  flagged: false,
  deprecated: false,
  featureType: FeatureInstanceTypes.Gene,
  featureAliases: aliases,
  featureInstance: { __typename: 'Gene' as const, entrezId: 100 + id },
})

const BRAF = feature(21, 'BRAF', ['BRAF1', 'RAFB1'])
const KRAS = feature(22, 'KRAS')

const respond = (op: MockGraphqlOperation) => {
  if (op.operationName === 'FeatureSelectTypeahead') {
    return { featureTypeahead: [BRAF, KRAS] }
  }
  if (op.operationName === 'FeatureSelectTag') {
    return { feature: [BRAF, KRAS].find((f) => f.id === op.variables.featureId) }
  }
  throw new Error(`unexpected operation ${op.operationName}`)
}

const setup = (overrides = {}) =>
  createSelectFieldHarness({
    type: 'feature-select',
    key: 'featureId',
    respond,
    ...overrides,
  })

describe('CvcFeatureSelectField', () => {
  describeEntitySelectContract({
    fieldType: CvcFeatureSelectField,
    type: 'feature-select',
    multiType: 'feature-multi-select',
    key: 'featureId',
    typeaheadOp: 'FeatureSelectTypeahead',
    tagOp: 'FeatureSelectTag',
    respond,
    records: [BRAF, KRAS],
    emptySearchVars: {
      queryTerm: '',
      featureType: FeatureInstanceTypes.Gene,
    },
    searchVars: (queryTerm) => ({
      queryTerm,
      featureType: FeatureInstanceTypes.Gene,
    }),
    tagVars: (featureId) => ({ featureId }),
    searchTerm: 'bra',
  })

  it('scopes the typeahead to the chosen feature type', async () => {
    const h = await setup()
    h.field(CvcFeatureSelectField)['onFeatureTypeChange'](
      FeatureInstanceTypes.Factor
    )
    h.openDropdown()
    h.type('bra')
    await h.settle()

    expect(h.callsTo('FeatureSelectTypeahead').at(-1)!.variables).toEqual({
      queryTerm: 'bra',
      featureType: FeatureInstanceTypes.Factor,
    })
    h.destroy()
  })

  it('clears the selection when the feature type changes', async () => {
    const h = await setup({ model: { featureId: BRAF.id } })
    await h.settle()
    expect(h.control().value).toBe(BRAF.id)

    h.field(CvcFeatureSelectField)['onFeatureTypeChange'](
      FeatureInstanceTypes.Fusion
    )
    await h.settle()

    expect(h.control().value).toBeUndefined()
    h.destroy()
  })

  it('always offers the builder for Regions, match or no match', async () => {
    const h = await setup()
    const field = h.field(CvcFeatureSelectField)
    expect(field['showAddForm']('BRAF', [BRAF])).toBe(false)

    field['onFeatureTypeChange'](FeatureInstanceTypes.Region)
    await h.settle()

    expect(field.props.alwaysShowCreate).toBe(true)
    expect(field['showAddForm']('BRAF', [BRAF])).toBe(true)
    h.destroy()
  })

  it('withholds the add form until the name is long enough', async () => {
    const h = await setup()
    const field = h.field(CvcFeatureSelectField)
    expect(field['showAddForm']('br', [])).toBe(false)
    expect(field['showAddForm']('bra', [])).toBe(true)
    h.destroy()
  })

  it('reports whether a quick-added feature was newly created', async () => {
    const created: boolean[] = []
    const h = await setup({
      field: {
        props: {
          isNewlyCreatedCallback: (isNew: boolean) => created.push(isNew),
        },
      },
    })
    await h.settle()

    h.field(CvcFeatureSelectField)['onFeatureQuickAdd']({
      id: KRAS.id,
      new: true,
    })
    await h.settle()

    expect(created).toEqual([true])
    expect(h.control().value).toBe(KRAS.id)
    h.destroy()
  })

  it('notifies the form when the feature type changes', async () => {
    const seen: unknown[] = []
    const h = await setup({
      field: {
        props: { featureTypeCallback: (ft: unknown) => seen.push(ft) },
      },
    })
    await h.settle()
    h.field(CvcFeatureSelectField)['onFeatureTypeChange'](
      FeatureInstanceTypes.Fusion
    )
    await h.settle()

    expect(seen).toEqual([
      FeatureInstanceTypes.Gene,
      FeatureInstanceTypes.Fusion,
    ])
    h.destroy()
  })

  it('renders each option as a tag plus its aliases', async () => {
    const h = await setup()
    h.openDropdown()
    await h.settle()
    const text = h
      .optionItems()
      .map((el) => el.textContent?.replace(/\s+/g, ' ').trim())
      .join('|')
    expect(text).toContain('BRAF1, RAFB1')
    h.destroy()
  })
})

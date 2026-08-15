import { SourceSource } from '@app/generated/civic.apollo.types'
import { MockGraphqlOperation } from '@app/testing/apollo-test.providers'
import {
  createSelectFieldHarness,
  describeEntitySelectContract,
} from '@app/testing/select-field.harness'
import { describe, expect, it } from 'vitest'
import { CvcSourceSelectField } from './source-select.type'

// cvc-tag renders a Source as `citation ?? name`, so the two match here to
// keep the shared contract's name assertions meaningful
const source = (id: number, citationId: string, citation: string) => ({
  __typename: 'Source' as const,
  id,
  name: citation,
  link: `/sources/${id}`,
  deprecated: false,
  citation,
  citationId,
  sourceType: SourceSource.Pubmed,
})

const FIRST = source(11, '12345', 'Smith et al., 2019')
const SECOND = source(12, '12346', 'Jones et al., 2021')

const respond = (op: MockGraphqlOperation) => {
  if (op.operationName === 'SourceSelectTypeahead') {
    return { sourceTypeahead: [FIRST, SECOND] }
  }
  if (op.operationName === 'SourceSelectTag') {
    return { source: [FIRST, SECOND].find((s) => s.id === op.variables.id) }
  }
  throw new Error(`unexpected operation ${op.operationName}`)
}

describe('CvcSourceSelectField', () => {
  describeEntitySelectContract({
    fieldType: CvcSourceSelectField,
    type: 'source-select',
    multiType: 'source-multi-select',
    key: 'sourceId',
    typeaheadOp: 'SourceSelectTypeahead',
    tagOp: 'SourceSelectTag',
    respond,
    records: [FIRST, SECOND],
    minSearchStrLength: 2,
    emptySearchVars: {
      partialCitationId: '',
      sourceType: SourceSource.Pubmed,
    },
    searchVars: (partialCitationId) => ({
      partialCitationId,
      sourceType: SourceSource.Pubmed,
    }),
    tagVars: (id) => ({ id }),
    searchTerm: '123',
  })

  it('searches the source type the user picked', async () => {
    const h = await createSelectFieldHarness({
      type: 'source-select',
      key: 'sourceId',
      respond,
    })
    h.field(CvcSourceSelectField)['setSourceType'](SourceSource.Asco)
    h.openDropdown()
    h.type('123')
    await h.settle()

    expect(h.callsTo('SourceSelectTypeahead').at(-1)!.variables).toEqual({
      partialCitationId: '123',
      sourceType: SourceSource.Asco,
    })
    h.destroy()
  })

  // regression: formly initialises props.placeholder to '' rather than
  // leaving it undefined, so a `??` fallback silently produced an empty
  // placeholder on a field that supplies its own
  it('names the chosen source type in its placeholder', async () => {
    const h = await createSelectFieldHarness({
      type: 'source-select',
      key: 'sourceId',
      respond,
    })
    await h.settle()
    const field = h.field(CvcSourceSelectField)
    expect(field.props.placeholder).toBe('')
    expect(field['placeholder']()).toBe('Search PubMed Sources')

    field['setSourceType'](SourceSource.Asco)
    await h.settle()
    expect(field['placeholder']()).toBe('Search ASCO Sources')
    h.destroy()
  })

  it('renders each option as a tag plus its citation ID', async () => {
    const h = await createSelectFieldHarness({
      type: 'source-select',
      key: 'sourceId',
      respond,
    })
    h.openDropdown()
    h.type('123')
    await h.settle()

    const text = h
      .optionItems()
      .map((el) => el.textContent?.replace(/\s+/g, ' ').trim())
      .join('|')
    expect(text).toContain('12345')
    expect(text).toContain('Smith et al., 2019')
    h.destroy()
  })

  it('hides the source-type picker once a single select holds a value', async () => {
    const h = await createSelectFieldHarness({
      type: 'source-select',
      key: 'sourceId',
      respond,
      model: { sourceId: FIRST.id },
    })
    await h.settle()
    expect(h.field(CvcSourceSelectField)['showTypeSelect']()).toBe(false)
    h.destroy()
  })

  it('keeps the source-type picker in a multi-select', async () => {
    const h = await createSelectFieldHarness({
      type: 'source-multi-select',
      key: 'sourceId',
      respond,
      model: { sourceId: [FIRST.id] },
    })
    await h.settle()
    expect(h.field(CvcSourceSelectField)['showTypeSelect']()).toBe(true)
    h.destroy()
  })

  it('drops the help text once a Source is selected', async () => {
    const h = await createSelectFieldHarness({
      type: 'source-select',
      key: 'sourceId',
      respond,
      field: { props: { description: 'pick a source type first' } },
    })
    await h.settle()
    const field = h.field(CvcSourceSelectField)
    expect(field.props.description).toBe('pick a source type first')

    h.openDropdown()
    h.type('123')
    await h.settle()
    h.optionItems()[0].click()
    await h.settle()

    expect(field.props.description).toBeUndefined()
    h.destroy()
  })
})

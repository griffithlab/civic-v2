import { signal } from '@angular/core'
import { MockGraphqlOperation } from '@app/testing/apollo-test.providers'
import { createSelectFieldHarness } from '@app/testing/select-field.harness'
import { describe, expect, it } from 'vitest'
import { CvcMolecularProfileSelectField } from './molecular-profile-select.type'

const molecularProfile = (id: number, name: string, aliases: string[] = []) => ({
  __typename: 'MolecularProfile' as const,
  id,
  name,
  link: `/molecular-profiles/${id}`,
  flagged: false,
  deprecated: false,
  molecularProfileAliases: aliases,
})

const BRAF_V600E = molecularProfile(41, 'BRAF V600E', ['BRAF VAL600GLU'])
const KRAS_G12D = molecularProfile(42, 'KRAS G12D')

const respond = (op: MockGraphqlOperation) => {
  if (op.operationName === 'MolecularProfileSelectTypeahead') {
    return { molecularProfiles: { nodes: [BRAF_V600E, KRAS_G12D] } }
  }
  if (op.operationName === 'MolecularProfileSelectTag') {
    return {
      molecularProfile: [BRAF_V600E, KRAS_G12D].find(
        (mp) => mp.id === op.variables.molecularProfileId
      ),
    }
  }
  throw new Error(`unexpected operation ${op.operationName}`)
}

const setup = (overrides = {}) =>
  createSelectFieldHarness({
    type: 'molecular-profile-select',
    key: 'molecularProfileId',
    respond,
    ...overrides,
  })

/**
 * NOTE: this field deliberately does not use describeEntitySelectContract.
 * The shared contract drives every field through its dropdown, and an empty
 * molecular-profile-select has no dropdown to drive — it renders the MP
 * finder instead, and only swaps in the select once a profile has been
 * chosen. The behaviours the contract would cover are asserted below against
 * a field that already holds a value.
 */
describe('CvcMolecularProfileSelectField', () => {
  it('offers the finder while empty and the select once filled', async () => {
    const h = await setup()
    await h.settle()
    const field = h.field(CvcMolecularProfileSelectField)
    expect(field['showFinder']()).toBe(true)
    expect(field['showSelect']()).toBe(false)

    field['onMolecularProfileSelected'](BRAF_V600E as any)
    await h.settle()

    expect(h.control().value).toBe(BRAF_V600E.id)
    expect(field['showSelect']()).toBe(true)
    expect(field['showFinder']()).toBe(false)
    h.destroy()
  })

  it('fetches a prepopulated profile and renders it as a tag', async () => {
    const h = await setup({ model: { molecularProfileId: BRAF_V600E.id } })
    await h.settle()

    expect(h.callsTo('MolecularProfileSelectTag')).toHaveLength(1)
    expect(h.callsTo('MolecularProfileSelectTag')[0].variables).toEqual({
      molecularProfileId: BRAF_V600E.id,
    })
    expect(h.control().touched).toBe(true)
    expect(h.fixture.nativeElement.textContent).toContain('BRAF V600E')
    h.destroy()
  })

  it('searches profiles by name once the select is showing', async () => {
    const h = await setup({ model: { molecularProfileId: BRAF_V600E.id } })
    await h.settle()

    h.openDropdown()
    h.type('KRAS')
    await h.settle()

    expect(h.callsTo('MolecularProfileSelectTypeahead').at(-1)!.variables).toEqual(
      { name: 'KRAS' }
    )
    h.destroy()
  })

  it('renders each option as a tag plus its aliases', async () => {
    const h = await setup({ model: { molecularProfileId: KRAS_G12D.id } })
    await h.settle()

    h.openDropdown()
    h.type('BRA')
    await h.settle()

    const text = h
      .optionItems()
      .map((el) => el.textContent?.replace(/\s+/g, ' ').trim())
      .join('|')
    expect(text).toContain('BRAF VAL600GLU')
    h.destroy()
  })

  it('hides the finder while the expression editor is open', async () => {
    const h = await setup()
    await h.settle()
    const field = h.field(CvcMolecularProfileSelectField)
    expect(field['showFinder']()).toBe(true)

    field['toggleEditor']()
    await h.settle()

    expect(field['editorOpen']()).toBe(true)
    expect(field['showFinder']()).toBe(false)
    h.destroy()
  })

  it('closes the editor when it yields a profile', async () => {
    const h = await setup()
    await h.settle()
    const field = h.field(CvcMolecularProfileSelectField)
    field['toggleEditor']()
    await h.settle()

    field['onMolecularProfileSelected'](KRAS_G12D as any)
    await h.settle()

    expect(field['editorOpen']()).toBe(false)
    expect(h.control().value).toBe(KRAS_G12D.id)
    h.destroy()
  })

  it('marks the control touched when a profile is chosen', async () => {
    const h = await setup()
    await h.settle()
    h.field(CvcMolecularProfileSelectField)['onMolecularProfileSelected'](
      BRAF_V600E as any
    )
    await h.settle()
    expect(h.control().touched).toBe(true)
    h.destroy()
  })

  it('ignores an empty selection', async () => {
    const h = await setup()
    await h.settle()
    h.field(CvcMolecularProfileSelectField)['onMolecularProfileSelected'](
      undefined
    )
    await h.settle()
    expect(h.control().value).toBeUndefined()
    h.destroy()
  })

  it('publishes its value into the form state under its own key', async () => {
    const molecularProfileId = signal<number | undefined>(undefined)
    const h = await setup({
      formState: { fields: { molecularProfileId } },
    })
    await h.settle()

    h.field(CvcMolecularProfileSelectField)['onMolecularProfileSelected'](
      KRAS_G12D as any
    )
    await h.settle()

    expect(molecularProfileId()).toBe(KRAS_G12D.id)
    h.destroy()
  })

  it('drops the help text once a profile is selected', async () => {
    const h = await setup({
      field: { props: { description: 'pick a feature and variant' } },
    })
    await h.settle()
    const field = h.field(CvcMolecularProfileSelectField)
    expect(field.props.description).toBe('pick a feature and variant')

    field['onMolecularProfileSelected'](BRAF_V600E as any)
    await h.settle()

    expect(field.props.description).toBeUndefined()
    h.destroy()
  })
})

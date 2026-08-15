import { AmpLevel } from '@app/generated/civic.apollo.types'
import { createEnumFieldHarness } from '@app/testing/enum-field.harness'
import { BehaviorSubject } from 'rxjs'
import { describe, expect, it } from 'vitest'

const formState = (requiresAmpLevel = false) => ({
  entityName: 'Assertion',
  formMode: 'add' as const,
  fields: {
    ampLevel$: new BehaviorSubject<AmpLevel | undefined>(undefined),
  },
  enums: {},
  requires: { requiresAmpLevel$: new BehaviorSubject(requiresAmpLevel) },
})

const setup = (
  state: ReturnType<typeof formState>,
  model?: Record<string, any>
) =>
  createEnumFieldHarness({
    type: 'amp-category-select',
    key: 'ampLevel',
    formState: state,
    model,
  })

describe('CvcAmpCategorySelectField', () => {
  it('offers the tiers in curator order, with Not Applicable last', async () => {
    const h = await setup(formState(true))
    h.openDropdown()
    await h.settle()
    const labels = h
      .optionItems()
      .map((el) => el.textContent?.replace(/\s+/g, ' ').trim() ?? '')
    expect(labels).toHaveLength(7)
    expect(labels[0]).toContain('Tier I')
    expect(labels.at(-1)).toContain('Not Applicable')
    h.destroy()
  })

  it('prompts for an assertion type when no AMP level is required', async () => {
    const h = await setup(formState(false))
    await h.settle()
    expect(h.props().disabled).toBe(true)
    expect(h.props().required).toBe(false)
    expect(h.props().extraType).toBe('prompt')
    expect(h.props().description).toContain('Select an Assertion Type')
    h.destroy()
  })

  it('asks for a classification once one is required', async () => {
    const h = await setup(formState(true))
    await h.settle()
    expect(h.props().disabled).toBe(false)
    expect(h.props().required).toBe(true)
    expect(h.props().description).toContain('somatic variant classification')
    h.destroy()
  })

  it('replaces the classification prompt with the chosen tier copy', async () => {
    const h = await setup(formState(true), { ampLevel: AmpLevel.TierIii })
    await h.settle()
    expect(h.props().description).toContain('Somatic variants in cancer genes')
    expect(h.props().extraType).toBe('description')
    h.destroy()
  })

  // one effect owns description, extraType, required and disabled together —
  // the old field split them across two subscriptions whose descriptions
  // overwrote each other depending on which emitted last
  it('drops a value when the assertion type stops requiring one', async () => {
    const state = formState(true)
    const h = await setup(state, { ampLevel: AmpLevel.TierIii })
    await h.settle()
    expect(h.control().value).toBe(AmpLevel.TierIii)

    state.requires.requiresAmpLevel$.next(false)
    await h.settle()
    expect(h.control().value).toBeUndefined()
    expect(h.props().description).toContain('Select an Assertion Type')
    h.destroy()
  })
})

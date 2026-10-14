import { Maybe, TherapyInteraction } from '@app/generated/civic.apollo.types'
import { createEnumFieldHarness } from '@app/testing/enum-field.harness'
import { signal } from '@angular/core'
import { describe, expect, it } from 'vitest'

const INTERACTIONS = [
  TherapyInteraction.Combination,
  TherapyInteraction.Sequential,
  TherapyInteraction.Substitutes,
]

const formState = (therapyIds: Maybe<number[]> = []) => ({
  entityName: 'Evidence',
  formMode: 'add' as const,
  fields: {
    therapyIds: signal<Maybe<number[]>>(therapyIds),
    therapyInteractionType: signal<
      Maybe<TherapyInteraction>
    >(undefined),
  },
  enums: { interaction: signal(INTERACTIONS) },
  requires: {},
})

const setup = (
  state: ReturnType<typeof formState>,
  model?: Record<string, any>
) =>
  createEnumFieldHarness({
    type: 'interaction-select',
    key: 'therapyInteractionType',
    formState: state,
    model,
  })

describe('CvcInteractionSelectField', () => {
  it('takes its options from form state', async () => {
    const h = await setup(formState([1, 2]))
    h.openDropdown()
    await h.settle()
    expect(h.optionItems()).toHaveLength(INTERACTIONS.length)
    h.destroy()
  })

  it('explains itself when no therapy is selected', async () => {
    const h = await setup(formState([]))
    await h.settle()
    expect(h.props().disabled).toBe(true)
    expect(h.props().required).toBe(false)
    expect(h.props().description).toContain('no therapies are selected')
    h.destroy()
  })

  it('stays disabled for a single therapy', async () => {
    const h = await setup(formState([1]))
    await h.settle()
    expect(h.props().disabled).toBe(true)
    expect(h.props().description).toContain('single associated therapy')
    h.destroy()
  })

  it('becomes required once two therapies are selected', async () => {
    const state = formState([1])
    const h = await setup(state)
    state.fields.therapyIds.set([1, 2])
    await h.settle()

    expect(h.props().disabled).toBe(false)
    expect(h.props().required).toBe(true)
    h.destroy()
  })

  it('describes the chosen interaction', async () => {
    const h = await setup(formState([1, 2]), {
      therapyInteractionType: TherapyInteraction.Sequential,
    })
    await h.settle()
    expect(h.props().description).toContain('separate timepoints')
    expect(h.props().extraType).toBe('description')
    h.destroy()
  })

  // dropping to one therapy makes any interaction meaningless, so the value
  // goes with it rather than being submitted with a stale combination
  it('clears a value when the therapies fall below two', async () => {
    const state = formState([1, 2])
    const h = await setup(state, {
      therapyInteractionType: TherapyInteraction.Combination,
    })
    await h.settle()
    expect(h.control().value).toBe(TherapyInteraction.Combination)

    state.fields.therapyIds.set([1])
    await h.settle()
    expect(h.control().value).toBeUndefined()
    h.destroy()
  })
})

import {
  EvidenceSignificance,
  EvidenceType,
} from '@app/generated/civic.apollo.types'
import {
  createEnumFieldHarness,
  describeEnumSelectContract,
} from '@app/testing/enum-field.harness'
import { BehaviorSubject } from 'rxjs'
import { describe, expect, it } from 'vitest'
import { CvcSignificanceSelectField } from './significance-select.type'

const SIGNIFICANCES = [
  EvidenceSignificance.Sensitivityresponse,
  EvidenceSignificance.Resistance,
]

/**
 * The slice of BaseState this field actually reads. The real state class pulls
 * in the whole evidence/assertion validity map, which none of this exercises.
 */
const formState = (
  formMode: 'add' | 'revise' = 'add',
  entityType?: EvidenceType
) => ({
  entityName: 'Evidence',
  formMode,
  fields: {
    evidenceType$: new BehaviorSubject<EvidenceType | undefined>(entityType),
    significance$: new BehaviorSubject<EvidenceSignificance | undefined>(
      undefined
    ),
  },
  enums: {
    significance$: new BehaviorSubject(SIGNIFICANCES),
  },
  requires: {},
})

const setup = (
  state: ReturnType<typeof formState>,
  model?: Record<string, any>
) =>
  createEnumFieldHarness({
    type: 'significance-select',
    key: 'significance',
    formState: state,
    model,
  })

describe('CvcSignificanceSelectField', () => {
  // The field is disabled until an entity type exists, so the shared contract
  // needs one, and it runs in revise mode: an add form drops any value present
  // when the entity type first arrives, which is right for a real add form but
  // would defeat the contract's prepopulation cases.
  describeEnumSelectContract({
    fieldType: CvcSignificanceSelectField,
    type: 'significance-select',
    key: 'significance',
    values: SIGNIFICANCES,
    firstOptionText: 'Sensitivity / Response',
    formState: () => formState('revise', EvidenceType.Predictive),
  })

  it('prompts for an entity type before offering a significance', async () => {
    const h = await setup(formState())
    await h.settle()

    expect(h.props().disabled).toBe(true)
    expect(h.props().extraType).toBe('prompt')
    expect(h.props().description).toContain('Select Evidence Type')
    h.destroy()
  })

  it('enables itself once an entity type is chosen', async () => {
    const state = formState()
    const h = await setup(state)
    state.fields.evidenceType$.next(EvidenceType.Predictive)
    await h.settle()

    expect(h.props().disabled).toBe(false)
    expect(h.props().required).toBe(true)
    h.destroy()
  })

  it('describes the selection per entity type', async () => {
    const h = await setup(formState('revise', EvidenceType.Predictive), {
      significance: EvidenceSignificance.Resistance,
    })
    await h.settle()

    expect(h.props().description).toBe(
      'Associated with clinical or preclinical resistance to treatment'
    )
    expect(h.props().extraType).toBe('description')
    h.destroy()
  })

  it('drops a selection that outlives the entity type it belonged to', async () => {
    const state = formState('revise', EvidenceType.Predictive)
    const h = await setup(state, {
      significance: EvidenceSignificance.Resistance,
    })
    await h.settle()
    expect(h.control().value).toBe(EvidenceSignificance.Resistance)

    state.fields.evidenceType$.next(EvidenceType.Diagnostic)
    await h.settle()
    expect(h.control().value).toBeUndefined()
    h.destroy()
  })

  // the gate clears the field whenever the entity type changes, and the state
  // subject replays its current value the instant the field subscribes — so on
  // a revise form the replay would wipe the value the form had just loaded.
  // Delete the skip in connectEntityTypeGate and this fails.
  it('keeps a prepopulated value when a revise form replays its entity type', async () => {
    const h = await setup(formState('revise', EvidenceType.Predictive), {
      significance: EvidenceSignificance.Resistance,
    })
    await h.settle()

    expect(h.control().value).toBe(EvidenceSignificance.Resistance)
    h.destroy()
  })
})

import { EvidenceDirection, EvidenceType } from '@app/generated/civic.apollo.types'
import {
  createEnumFieldHarness,
  describeEnumSelectContract,
} from '@app/testing/enum-field.harness'
import { signal } from '@angular/core'
import { describe, expect, it } from 'vitest'
import { CvcDirectionSelectField } from './direction-select.type'

const DIRECTIONS = [
  EvidenceDirection.Supports,
  EvidenceDirection.DoesNotSupport,
]

const formState = (
  formMode: 'add' | 'revise' = 'add',
  entityType?: EvidenceType
) => ({
  entityName: 'Evidence',
  formMode,
  fields: {
    evidenceType: signal<EvidenceType | undefined>(entityType),
    evidenceDirection: signal<EvidenceDirection | undefined>(
      undefined
    ),
  },
  enums: { direction: signal(DIRECTIONS) },
  requires: {},
})

const setup = (
  state: ReturnType<typeof formState>,
  model?: Record<string, any>
) =>
  createEnumFieldHarness({
    type: 'direction-select',
    key: 'evidenceDirection',
    formState: state,
    model,
  })

describe('CvcDirectionSelectField', () => {
  // runs in revise mode for the same reason significance-select's does: an add
  // form legitimately drops a value present when the entity type first arrives
  describeEnumSelectContract({
    fieldType: CvcDirectionSelectField,
    type: 'direction-select',
    key: 'evidenceDirection',
    values: DIRECTIONS,
    firstOptionText: 'Supports',
    formState: () => formState('revise', EvidenceType.Diagnostic),
  })

  it('prompts for an entity type before offering a direction', async () => {
    const h = await setup(formState())
    await h.settle()
    expect(h.props().disabled).toBe(true)
    expect(h.props().extraType).toBe('prompt')
    expect(h.props().description).toContain('Select Evidence Type')
    h.destroy()
  })

  it('names the entity in its label and tooltip', async () => {
    const h = await setup(formState('revise', EvidenceType.Diagnostic))
    await h.settle()
    expect(h.props().label).toBe('Evidence Direction')
    expect(h.props().tooltip).toContain('Evidence statement supports or refutes')
    h.destroy()
  })

  // the browser pass showed this placeholder tracking the entity type:
  // "Select Diagnostic Evidence Direction"
  it('folds the entity type into its placeholder', async () => {
    const state = formState('revise', EvidenceType.Diagnostic)
    const h = await setup(state)
    await h.settle()
    expect(h.field(CvcDirectionSelectField)['placeholder']()).toBe(
      'Select Diagnostic Evidence Direction'
    )

    state.fields.evidenceType.set(EvidenceType.Predictive)
    await h.settle()
    expect(h.field(CvcDirectionSelectField)['placeholder']()).toBe(
      'Select Predictive Evidence Direction'
    )
    h.destroy()
  })

  /**
   * The regression this whole spec exists for. The description is looked up per
   * (entity name, entity type, direction), so it resolves only if the gate
   * reports the entity type immediately — including the value the state subject
   * replays on subscribe. Skip that replay for the *read* as well as the reset
   * and this returns undefined on every revise form, silently.
   */
  it('describes a prepopulated direction on a revise form', async () => {
    const h = await setup(formState('revise', EvidenceType.Diagnostic), {
      evidenceDirection: EvidenceDirection.Supports,
    })
    await h.settle()

    expect(h.control().value).toBe(EvidenceDirection.Supports)
    expect(h.props().description).toBe(
      "Experiment or study supports the variant's impact on the diagnosis of disease or subtype"
    )
    expect(h.props().extraType).toBe('description')
    h.destroy()
  })

  it('re-describes the same direction when the entity type changes', async () => {
    const state = formState('revise', EvidenceType.Diagnostic)
    const h = await setup(state, {
      evidenceDirection: EvidenceDirection.Supports,
    })
    await h.settle()
    expect(h.props().description).toContain('impact on the diagnosis')

    // a real type change clears the value, so the copy goes with it
    state.fields.evidenceType.set(EvidenceType.Predictive)
    await h.settle()
    expect(h.control().value).toBeUndefined()
    expect(h.props().description).toBeUndefined()
    h.destroy()
  })
})

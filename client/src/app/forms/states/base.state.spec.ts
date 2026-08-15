import { AssertionType, EvidenceType } from '@app/generated/civic.apollo.types'
import { describe, expect, it } from 'vitest'
import { AssertionState } from './assertion.state'
import { EvidenceState } from './evidence.state'

/**
 * The field specs all build their own form-state doubles, so none of them can
 * see a change to the real state. These cover the state itself.
 *
 * This file replaced one testing `formReady$`, a global "the form has finished
 * populating" barrier. It existed because the state was a map of
 * BehaviorSubjects, which replay to every new subscriber — so a field reacting
 * to a sibling's value received the initial `undefined` as though the user had
 * just cleared it, and wiped a value a revise form had only loaded. As signals
 * there is nothing to replay, and the derived values below are `computed`, so
 * they cannot disagree with the field they come from.
 */
describe('EvidenceState', () => {
  it('derives nothing until an evidence type is chosen', () => {
    const state = new EvidenceState()

    expect(state.fields.evidenceType()).toBeUndefined()
    expect(state.requires.requiresDisease()).toBe(false)
    expect(state.requires.requiresTherapy()).toBe(false)
    expect(state.enums.significance()).toEqual([])
    expect(state.enums.direction()).toEqual([])
  })

  it('derives requirements and options from the chosen type, with no push', () => {
    const state = new EvidenceState()

    state.fields.evidenceType.set(EvidenceType.Predictive)
    expect(state.requires.requiresDisease()).toBe(true)
    expect(state.requires.requiresTherapy()).toBe(true)
    expect(state.enums.significance().length).toBeGreaterThan(0)

    // Diagnostic needs a disease but no therapy — the derivation follows the
    // field rather than being re-pushed
    state.fields.evidenceType.set(EvidenceType.Diagnostic)
    expect(state.requires.requiresDisease()).toBe(true)
    expect(state.requires.requiresTherapy()).toBe(false)
  })

  it('falls back when the type is cleared rather than holding a stale value', () => {
    const state = new EvidenceState()
    state.fields.evidenceType.set(EvidenceType.Predictive)
    expect(state.requires.requiresTherapy()).toBe(true)

    state.fields.evidenceType.set(undefined)
    expect(state.requires.requiresTherapy()).toBe(false)
    expect(state.enums.significance()).toEqual([])
  })

  /**
   * The property the whole rework rests on: a reader that arrives late still
   * sees the current value. Under BehaviorSubjects a late subscriber got a
   * replay it could not distinguish from a change; under a plain Subject it got
   * nothing at all and silently never wired itself up.
   */
  it('reads current state whenever it is read, not only when it changed', () => {
    const state = new EvidenceState()
    state.fields.evidenceType.set(EvidenceType.Prognostic)
    state.fields.diseaseId.set(42)

    // a "field" constructed now, long after those writes
    expect(state.fields.diseaseId()).toBe(42)
    expect(state.requires.requiresDisease()).toBe(true)
  })
})

describe('AssertionState', () => {
  it('derives its own requirements from the assertion type', () => {
    const state = new AssertionState()

    expect(state.requires.allowsFdaApproval()).toBe(false)
    expect(state.requires.requiresAmpLevel()).toBe(false)

    state.fields.assertionType.set(AssertionType.Predictive)
    expect(state.requires.allowsFdaApproval()).toBe(true)
    expect(state.requires.requiresAmpLevel()).toBe(true)
  })
})

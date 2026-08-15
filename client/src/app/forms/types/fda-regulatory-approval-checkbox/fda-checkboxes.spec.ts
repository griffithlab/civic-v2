import { signal } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo.types'
import { createEnumFieldHarness } from '@app/testing/enum-field.harness'
import { describe, expect, it } from 'vitest'

/**
 * The two FDA checkboxes form a chain: regulatory approval follows the
 * assertion type, and the companion test follows regulatory approval. Each
 * clears its control when its predecessor is absent, which is why the ordering
 * below matters — a revise form must populate before either can react.
 */
const formState = (opts: {
  allowsFdaApproval?: boolean
  fdaRegulatoryApproval?: Maybe<boolean>
}) => ({
  entityName: 'Assertion',
  formMode: 'add' as const,
  fields: {
    fdaRegulatoryApproval: signal<Maybe<boolean>>(
      opts.fdaRegulatoryApproval
    ),
    fdaCompanionTest: signal<Maybe<boolean>>(undefined),
  },
  enums: {},
  requires: {
    allowsFdaApproval: signal<boolean>(
      opts.allowsFdaApproval ?? false
    ),
  },
})

describe('FDA regulatory approval checkbox', () => {
  const setup = (state: any, model?: Record<string, any>) =>
    createEnumFieldHarness({
      type: 'fda-regulatory-approval-checkbox',
      key: 'fdaRegulatoryApproval',
      formState: state,
      model,
    })

  it('is disabled and explains itself when the assertion type disallows approval', async () => {
    const h = await setup(formState({ allowsFdaApproval: false }))
    await h.settle()
    expect(h.props().disabled).toBe(true)
    expect(h.props().description).toBe(
      'FDA Regulatory Approval does not apply to this Assertion Type'
    )
    h.destroy()
  })

  // an unanswered checkbox on a type that allows approval means "no", not
  // "unspecified" — the server distinguishes the two
  it('defaults to an explicit false once approval is allowed', async () => {
    const h = await setup(formState({ allowsFdaApproval: true }))
    await h.settle()
    expect(h.props().disabled).toBe(false)
    expect(h.control().value).toBe(false)
    h.destroy()
  })

  it('keeps an existing answer rather than overwriting it with false', async () => {
    const h = await setup(formState({ allowsFdaApproval: true }), {
      fdaRegulatoryApproval: true,
    })
    await h.settle()
    expect(h.control().value).toBe(true)
    h.destroy()
  })

  it('clears its answer when the assertion type stops allowing approval', async () => {
    const state = formState({ allowsFdaApproval: true })
    const h = await setup(state, { fdaRegulatoryApproval: true })
    await h.settle()
    expect(h.control().value).toBe(true)

    state.requires.allowsFdaApproval.set(false)
    await h.settle()
    expect(h.control().value).toBeUndefined()
    h.destroy()
  })

  /**
   * Replaces a test of the old formReady$ barrier, which delayed attaching
   * until a global announcement arrived. That barrier had a silent failure mode
   * of its own: a field mounted after the announcement never attached at all,
   * because the announcement was an event and events do not wait. Reading the
   * state rather than subscribing to an event makes that impossible — whenever
   * the field attaches, it sees the current answer.
   */
  it('reads the current state whenever it attaches, however late', async () => {
    const state = formState({ allowsFdaApproval: false })
    // the form settles on its answer well before this field is mounted
    state.requires.allowsFdaApproval.set(true)

    const h = await setup(state)
    await h.settle()

    expect(h.props().disabled).toBe(false)
    expect(h.control().value).toBe(false)
    h.destroy()
  })
})

describe('FDA companion test checkbox', () => {
  const setup = (state: any, model?: Record<string, any>) =>
    createEnumFieldHarness({
      type: 'fda-companion-test-checkbox',
      key: 'fdaCompanionTest',
      formState: state,
      model,
    })

  it('is disabled until regulatory approval is claimed', async () => {
    const h = await setup(formState({ fdaRegulatoryApproval: false }))
    await h.settle()
    expect(h.props().disabled).toBe(true)
    expect(h.props().description).toBe(
      'FDA Companion Test only applies when Regulatory Approval is selected'
    )
    h.destroy()
  })

  it('enables and defaults to false once approval is claimed', async () => {
    const state = formState({ fdaRegulatoryApproval: false })
    const h = await setup(state)
    await h.settle()
    expect(h.props().disabled).toBe(true)

    state.fields.fdaRegulatoryApproval.set(true)
    await h.settle()
    expect(h.props().disabled).toBe(false)
    expect(h.control().value).toBe(false)
    h.destroy()
  })

  it('clears its answer when approval is withdrawn', async () => {
    const state = formState({ fdaRegulatoryApproval: true })
    const h = await setup(state, { fdaCompanionTest: true })
    await h.settle()
    expect(h.control().value).toBe(true)

    state.fields.fdaRegulatoryApproval.set(false)
    await h.settle()
    expect(h.control().value).toBeUndefined()
    h.destroy()
  })
})

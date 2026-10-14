import { Maybe } from '@app/generated/civic.apollo.types'
import { createEnumFieldHarness } from '@app/testing/enum-field.harness'
import { BehaviorSubject } from 'rxjs'
import { describe, expect, it } from 'vitest'

/**
 * The two FDA checkboxes form a chain: regulatory approval follows the
 * assertion type, and the companion test follows regulatory approval. Both
 * wait for formReady$ before attaching, so a revise form has populated its
 * model before either can clear it.
 */
const formState = (opts: {
  allowsFdaApproval?: boolean
  fdaRegulatoryApproval?: Maybe<boolean>
  formReady?: boolean
}) => ({
  entityName: 'Assertion',
  formMode: 'add' as const,
  formReady$: new BehaviorSubject<boolean>(opts.formReady ?? true),
  fields: {
    fdaRegulatoryApproval$: new BehaviorSubject<Maybe<boolean>>(
      opts.fdaRegulatoryApproval
    ),
    fdaCompanionTest$: new BehaviorSubject<Maybe<boolean>>(undefined),
  },
  enums: {},
  requires: {
    allowsFdaApproval$: new BehaviorSubject<boolean>(
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

    state.requires.allowsFdaApproval$.next(false)
    await h.settle()
    expect(h.control().value).toBeUndefined()
    h.destroy()
  })

  it('does not attach until the form announces it is ready', async () => {
    const state = formState({ allowsFdaApproval: false, formReady: false })
    const h = await setup(state, { fdaRegulatoryApproval: true })
    await h.settle()
    // still untouched: the gate has not run, so the model survives
    expect(h.control().value).toBe(true)

    state.formReady$.next(true)
    await h.settle()
    expect(h.control().value).toBeUndefined()
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

    state.fields.fdaRegulatoryApproval$.next(true)
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

    state.fields.fdaRegulatoryApproval$.next(false)
    await h.settle()
    expect(h.control().value).toBeUndefined()
    h.destroy()
  })
})

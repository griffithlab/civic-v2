import { filter, take } from 'rxjs/operators'
import { describe, expect, it } from 'vitest'
import { EvidenceState } from './evidence.state'

/**
 * The field specs all build their own form-state doubles, so none of them can
 * see a change to the real state's types. These pin the one property every
 * gated field depends on.
 *
 * formReady$ was a plain Subject, which drops its announcement for anyone who
 * subscribes afterwards — and a field that misses it never wires itself up,
 * silently. Four field types plus CvcTypeGatedSelectFieldBase (the base for
 * every type-gated select) gate on this.
 */
describe('BaseState formReady$', () => {
  it('starts unannounced', () => {
    expect(new EvidenceState().formReady$.value).toBe(false)
  })

  it('replays the announcement to a subscriber that arrives late', () => {
    const state = new EvidenceState()
    state.formReady$.next(true)

    let announced = false
    state.formReady$.subscribe((ready) => (announced = ready))

    expect(announced).toBe(true)
  })

  // exactly how every consumer listens: the seeded false must be filtered out,
  // so subscribing before the announcement still fires once, and only once
  it('fires a filter(Boolean)/take(1) consumer exactly once, whenever it subscribed', () => {
    const early = new EvidenceState()
    let earlyCount = 0
    early.formReady$
      .pipe(filter(Boolean), take(1))
      .subscribe(() => earlyCount++)

    expect(earlyCount).toBe(0) // seeded false is filtered, not counted
    early.formReady$.next(true)
    early.formReady$.next(true)
    expect(earlyCount).toBe(1)

    const late = new EvidenceState()
    late.formReady$.next(true)
    let lateCount = 0
    late.formReady$.pipe(filter(Boolean), take(1)).subscribe(() => lateCount++)

    expect(lateCount).toBe(1)
  })
})

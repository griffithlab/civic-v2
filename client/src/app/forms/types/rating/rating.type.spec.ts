import { createEnumFieldHarness } from '@app/testing/enum-field.harness'
import { describe, expect, it } from 'vitest'
import { CvcRatingField } from './rating.type'

const setup = (model?: Record<string, any>) =>
  createEnumFieldHarness({ type: 'rating', key: 'rating', model })

describe('CvcRatingField', () => {
  it('describes the current rating', async () => {
    const h = await setup({ rating: 5 })
    await h.settle()
    expect(h.props().description).toContain('Excellent')
    expect(h.props().extraType).toBe('description')
    h.destroy()
  })

  it('prompts when there is no rating', async () => {
    const h = await setup()
    await h.settle()
    expect(h.props().description).toBeUndefined()
    expect(h.props().extraType).toBe('prompt')
    h.destroy()
  })

  // nz-rate reports a cleared widget as 0, which is not a rating anyone means
  it('treats a zero from the star widget as no rating at all', async () => {
    const h = await setup({ rating: 3 })
    await h.settle()
    h.field(CvcRatingField)['onRatingChange'](0)
    await h.settle()
    expect(h.control().value).toBeUndefined()
    h.destroy()
  })

  // hoverText used to be pushed onto in ngAfterViewInit, which appended to the
  // array literal in defaultOptions — an array every rating field shares, so
  // it grew by five entries on each mount
  it('gives each instance its own hover text rather than growing a shared array', async () => {
    const h = await setup()
    await h.settle()
    const field = h.field(CvcRatingField)

    expect(h.props().hoverText).toHaveLength(5)
    expect(h.props().hoverText).not.toBe(field.defaultOptions!.props!.hoverText)
    h.destroy()
  })
})

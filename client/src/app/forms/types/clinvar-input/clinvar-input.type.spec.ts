import { ClinvarOptions } from '@app/forms/utilities/input-formatters'
import { createEnumFieldHarness } from '@app/testing/enum-field.harness'
import { describe, expect, it } from 'vitest'
import { CvcClinvarInputField } from './clinvar-input.type'

const setup = (model?: Record<string, any>) =>
  createEnumFieldHarness({
    type: 'clinvar-multi-input',
    key: 'clinvarIds',
    model,
  })

/**
 * "We looked and found none" and "this variant cannot have any" are answers,
 * and the API encodes both as sentinel entries in the same string list the IDs
 * live in. So the radio group and the tag input are two views of one control,
 * and these tests pin the encoding in both directions.
 */
describe('CvcClinvarInputField', () => {
  it('reads an unset value as no answer at all', async () => {
    const h = await setup()
    await h.settle()
    const field = h.field(CvcClinvarInputField)
    expect(field['existence']()).toBeUndefined()
    expect(field['showTagSelect']()).toBe(false)
    h.destroy()
  })

  it('reads the NONE FOUND sentinel and hides the ID input', async () => {
    const h = await setup({ clinvarIds: ['NONE FOUND'] })
    await h.settle()
    const field = h.field(CvcClinvarInputField)
    expect(field['existence']()).toBe(ClinvarOptions.NoneFound)
    expect(field['showTagSelect']()).toBe(false)
    h.destroy()
  })

  it('reads the NA sentinel and hides the ID input', async () => {
    const h = await setup({ clinvarIds: ['NA'] })
    await h.settle()
    const field = h.field(CvcClinvarInputField)
    expect(field['existence']()).toBe(ClinvarOptions.NotApplicable)
    expect(field['showTagSelect']()).toBe(false)
    h.destroy()
  })

  it('reads real ids as Found and shows the ID input', async () => {
    const h = await setup({ clinvarIds: ['12345', '67890'] })
    await h.settle()
    const field = h.field(CvcClinvarInputField)
    expect(field['existence']()).toBe(ClinvarOptions.Found)
    expect(field['showTagSelect']()).toBe(true)
    h.destroy()
  })

  it('writes each sentinel when the matching answer is picked', async () => {
    const h = await setup({ clinvarIds: ['12345'] })
    await h.settle()
    const field = h.field(CvcClinvarInputField)

    field['onExistenceChange'](ClinvarOptions.NoneFound)
    await h.settle()
    expect(h.control().value).toEqual(['NONE FOUND'])

    field['onExistenceChange'](ClinvarOptions.NotApplicable)
    await h.settle()
    expect(h.control().value).toEqual(['NA'])
    h.destroy()
  })

  // choosing Found has to clear the sentinel out of the way, or the first
  // typed ID would be submitted alongside "NA"
  it('clears a sentinel when the answer changes to Found', async () => {
    const h = await setup({ clinvarIds: ['NA'] })
    await h.settle()
    h.field(CvcClinvarInputField)['onExistenceChange'](ClinvarOptions.Found)
    await h.settle()

    expect(h.control().value).toEqual([])
    expect(h.field(CvcClinvarInputField)['showTagSelect']()).toBe(true)
    h.destroy()
  })

  it('leaves existing ids alone when Found is re-picked', async () => {
    const h = await setup({ clinvarIds: ['12345'] })
    await h.settle()
    h.field(CvcClinvarInputField)['onExistenceChange'](ClinvarOptions.Found)
    await h.settle()
    expect(h.control().value).toEqual(['12345'])
    h.destroy()
  })

  it('unsets the control when the answer is cleared', async () => {
    const h = await setup({ clinvarIds: ['NONE FOUND'] })
    await h.settle()
    h.field(CvcClinvarInputField)['onExistenceChange'](undefined)
    await h.settle()

    expect(h.control().value).toBeUndefined()
    expect(h.field(CvcClinvarInputField)['existence']()).toBeUndefined()
    h.destroy()
  })
})

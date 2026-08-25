import { VariantOrigin } from '@app/generated/civic.apollo.types'
import {
  createEnumFieldHarness,
  describeEnumSelectContract,
} from '@app/testing/enum-field.harness'
import { describe, expect, it } from 'vitest'
import { CvcOriginSelectField } from './origin-select.type'

describe('CvcOriginSelectField', () => {
  describeEnumSelectContract({
    fieldType: CvcOriginSelectField,
    type: 'origin-select',
    key: 'variantOrigin',
    values: [
      VariantOrigin.Somatic,
      VariantOrigin.RareGermline,
      VariantOrigin.CommonGermline,
      VariantOrigin.Combined,
      VariantOrigin.Mixed,
      VariantOrigin.Unknown,
      VariantOrigin.Na,
    ],
    firstOptionText: 'Somatic',
  })

  it('describes the selected origin and retracts it when cleared', async () => {
    const h = await createEnumFieldHarness({
      type: 'origin-select',
      key: 'variantOrigin',
      model: { variantOrigin: VariantOrigin.Somatic },
    })
    await h.settle()
    expect(h.props().description).toContain('found only in tumor cells')
    expect(h.props().extraType).toBe('description')

    h.control().setValue(undefined)
    await h.settle()
    expect(h.props().description).toBeUndefined()
    expect(h.props().extraType).toBeUndefined()
    h.destroy()
  })
})

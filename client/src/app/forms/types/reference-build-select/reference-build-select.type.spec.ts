import { ReferenceBuild } from '@app/generated/civic.apollo.types'
import {
  createEnumFieldHarness,
  describeEnumSelectContract,
} from '@app/testing/enum-field.harness'
import { describe, expect, it } from 'vitest'
import { CvcReferenceBuildSelectField } from './reference-build-select.type'

describe('CvcReferenceBuildSelectField', () => {
  describeEnumSelectContract({
    fieldType: CvcReferenceBuildSelectField,
    type: 'reference-build-select',
    key: 'referenceBuild',
    values: Object.values(ReferenceBuild),
  })

  it('offers every build in the schema enum, not a hand-kept list', async () => {
    const h = await createEnumFieldHarness({
      type: 'reference-build-select',
      key: 'referenceBuild',
    })
    const field = h.field(CvcReferenceBuildSelectField)
    expect(field['optionValues']()).toEqual(Object.values(ReferenceBuild))
    h.destroy()
  })
})

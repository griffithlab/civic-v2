import { EvidenceLevel } from '@app/generated/civic.apollo.types'
import {
  createEnumFieldHarness,
  describeEnumSelectContract,
} from '@app/testing/enum-field.harness'
import { describe, expect, it } from 'vitest'
import { CvcLevelSelectField } from './level-select.type'

describe('CvcLevelSelectField', () => {
  describeEnumSelectContract({
    fieldType: CvcLevelSelectField,
    type: 'level-select',
    key: 'evidenceLevel',
    values: Object.values(EvidenceLevel),
  })

  it('describes the selected level', async () => {
    const h = await createEnumFieldHarness({
      type: 'level-select',
      key: 'evidenceLevel',
      model: { evidenceLevel: EvidenceLevel.A },
    })
    await h.settle()
    expect(h.props().description).toBe(
      'Evidence shows consensus association in human medicine'
    )
    h.destroy()
  })
})

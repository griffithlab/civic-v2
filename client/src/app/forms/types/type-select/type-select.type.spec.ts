import { EvidenceType } from '@app/generated/civic.apollo.types'
import {
  createEnumFieldHarness,
  describeEnumSelectContract,
} from '@app/testing/enum-field.harness'
import { BehaviorSubject } from 'rxjs'
import { describe, expect, it } from 'vitest'
import { CvcEntityTypeSelectField } from './type-select.type'

const TYPES = [EvidenceType.Predictive, EvidenceType.Diagnostic]

const formState = () => ({
  entityName: 'Evidence',
  formMode: 'add' as const,
  fields: {
    evidenceType$: new BehaviorSubject<EvidenceType | undefined>(undefined),
  },
  enums: { entityType$: new BehaviorSubject(TYPES) },
  requires: {},
})

describe('CvcEntityTypeSelectField', () => {
  describeEnumSelectContract({
    fieldType: CvcEntityTypeSelectField,
    type: 'type-select',
    key: 'evidenceType',
    values: TYPES,
    firstOptionText: 'Predictive',
    formState,
  })

  it('names itself after the form state entity', async () => {
    const h = await createEnumFieldHarness({
      type: 'type-select',
      key: 'evidenceType',
      formState: formState(),
    })
    await h.settle()
    expect(h.props().label).toBe('Evidence Type')
    expect(h.props().placeholder).toBe('Select an Evidence Type')
    expect(h.props().tooltip).toContain('Evidence statement')
    h.destroy()
  })

  it('describes the selected type', async () => {
    const h = await createEnumFieldHarness({
      type: 'type-select',
      key: 'evidenceType',
      formState: formState(),
      model: { evidenceType: EvidenceType.Prognostic },
    })
    await h.settle()
    expect(h.props().description).toContain('disease progression')
    h.destroy()
  })
})

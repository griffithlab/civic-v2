import { MockGraphqlOperation } from '@app/testing/apollo-test.providers'
import {
  createSelectFieldHarness,
  describeEntitySelectContract,
} from '@app/testing/select-field.harness'
import { describe, expect, it } from 'vitest'
import { CvcEvidenceSelectField } from './evidence-select.type'

const evidenceItem = (id: number) => ({
  __typename: 'EvidenceItem' as const,
  id,
  name: `EID${id}`,
  link: `/evidence/${id}`,
  flagged: false,
  status: 'SUBMITTED',
  evidenceType: 'PREDICTIVE',
  evidenceDirection: 'SUPPORTS',
  evidenceLevel: 'B',
  evidenceRating: 3,
  significance: 'SENSITIVITYRESPONSE',
  variantOrigin: 'SOMATIC',
})

const FIRST = evidenceItem(11)
const SECOND = evidenceItem(12)

const respond = (op: MockGraphqlOperation) => {
  if (op.operationName === 'EvidenceSelectTypeahead') {
    return { evidenceItems: { nodes: [FIRST, SECOND] } }
  }
  if (op.operationName === 'EvidenceSelectTag') {
    return {
      evidenceItem: [FIRST, SECOND].find((e) => e.id === op.variables.eid),
    }
  }
  throw new Error(`unexpected operation ${op.operationName}`)
}

const setup = (overrides = {}) =>
  createSelectFieldHarness({
    type: 'evidence-select',
    key: 'evidenceItemIds',
    respond,
    ...overrides,
  })

describe('CvcEvidenceSelectField', () => {
  describeEntitySelectContract({
    fieldType: CvcEvidenceSelectField,
    type: 'evidence-select',
    multiType: 'evidence-multi-select',
    key: 'evidenceItemIds',
    typeaheadOp: 'EvidenceSelectTypeahead',
    tagOp: 'EvidenceSelectTag',
    respond,
    records: [FIRST, SECOND],
    minSearchStrLength: 1,
    hasQuickAdd: false,
    emptySearchVars: { eid: 0 },
    searchVars: () => ({ eid: 11 }),
    tagVars: (eid) => ({ eid }),
    searchTerm: '11',
  })

  it('accepts an EID with or without its prefix', async () => {
    const h = await setup()
    h.openDropdown()
    h.type('EID12')
    await h.settle()
    expect(h.callsTo('EvidenceSelectTypeahead').at(-1)!.variables).toEqual({
      eid: 12,
    })
    h.destroy()
  })

  it('searches for nothing when the term is not an EID', async () => {
    const h = await setup()
    h.openDropdown()
    h.type('melanoma')
    await h.settle()
    expect(h.callsTo('EvidenceSelectTypeahead').at(-1)!.variables).toEqual({
      eid: 0,
    })
    h.destroy()
  })

  it('replaces the selection when the manager emits, rather than appending', async () => {
    const h = await setup({
      type: 'evidence-multi-select',
      model: { evidenceItemIds: [FIRST.id] },
    })
    await h.settle()

    const field = h.field(CvcEvidenceSelectField)
    field['onManagerSelection']([SECOND.id])
    await h.settle()

    expect(h.control().value).toEqual([SECOND.id])
    h.destroy()
  })

  it('builds manager table settings from sibling field and requires state', async () => {
    const { BehaviorSubject } = await import('rxjs')
    const h = await setup({
      formState: {
        fields: {
          molecularProfileId$: new BehaviorSubject<number | undefined>(3),
          diseaseId$: new BehaviorSubject<number | undefined>(undefined),
          therapyIds$: new BehaviorSubject<number[] | undefined>(undefined),
        },
        requires: {
          requiresDisease$: new BehaviorSubject(true),
          requiresTherapy$: new BehaviorSubject(false),
        },
      },
    })
    await h.settle(200)

    const settings = h.field(CvcEvidenceSelectField)['tableSettings']()
    expect(settings).toBeDefined()
    expect(settings!.filters).toContainEqual({
      key: 'molecularProfile',
      value: 3,
    })
    expect(settings!.preferences).toContainEqual({
      value: 'disease',
      checked: true,
    })
    expect(settings!.preferences).toContainEqual({
      value: 'therapies',
      checked: false,
    })
    h.destroy()
  })

  it('leaves table settings undefined with no form state', async () => {
    const h = await setup()
    await h.settle()
    expect(h.field(CvcEvidenceSelectField)['tableSettings']()).toBeUndefined()
    h.destroy()
  })
})

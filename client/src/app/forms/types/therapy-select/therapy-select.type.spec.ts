import { MockGraphqlOperation } from '@app/testing/apollo-test.providers'
import {
  createSelectFieldHarness,
  describeEntitySelectContract,
} from '@app/testing/select-field.harness'
import { BehaviorSubject } from 'rxjs'
import { describe, expect, it } from 'vitest'
import { CvcTherapySelectField } from './therapy-select.type'

const therapy = (id: number, name: string, ncitId: string) => ({
  __typename: 'Therapy' as const,
  id,
  name,
  link: `/therapies/${id}`,
  deprecated: false,
  ncitId,
  therapyAliases: [`${name} alias`],
})

const IMATINIB = therapy(51, 'Imatinib', 'C1687')
const SUNITINIB = therapy(52, 'Sunitinib', 'C71622')

const respond = (op: MockGraphqlOperation) => {
  if (op.operationName === 'TherapySelectTypeahead') {
    return { therapyTypeahead: [IMATINIB, SUNITINIB] }
  }
  if (op.operationName === 'TherapySelectTag') {
    return {
      therapy: [IMATINIB, SUNITINIB].find((t) => t.id === op.variables.id),
    }
  }
  throw new Error(`unexpected operation ${op.operationName}`)
}

/** the slice of form state the type gate reads */
function gatedState(requiresTherapy: boolean, entityType?: string) {
  return {
    entityName: 'Evidence',
    formReady$: new BehaviorSubject(true),
    requires: {
      requiresTherapy$: new BehaviorSubject(requiresTherapy),
    },
    fields: {
      evidenceType$: new BehaviorSubject(entityType),
      therapyIds$: new BehaviorSubject(undefined),
    },
  }
}

describe('CvcTherapySelectField', () => {
  describeEntitySelectContract({
    fieldType: CvcTherapySelectField,
    type: 'therapy-select',
    multiType: 'therapy-multi-select',
    key: 'therapyIds',
    typeaheadOp: 'TherapySelectTypeahead',
    tagOp: 'TherapySelectTag',
    respond,
    records: [IMATINIB, SUNITINIB],
    emptySearchVars: { name: '' },
    searchVars: (name) => ({ name }),
    tagVars: (id) => ({ id }),
    searchTerm: 'ima',
  })

  it('renders the NCIt id and aliases alongside each option', async () => {
    const h = await createSelectFieldHarness({
      type: 'therapy-select',
      key: 'therapyIds',
      respond,
    })
    h.openDropdown()
    await h.settle()
    const text = h
      .optionItems()
      .map((el) => el.textContent?.replace(/\s+/g, ' ').trim())
      .join('|')
    expect(text).toContain('C1687')
    expect(text).toContain('Imatinib alias')
    h.destroy()
  })

  it('prompts for an entity type instead of a search box until one is chosen', async () => {
    const h = await createSelectFieldHarness({
      type: 'therapy-select',
      key: 'therapyIds',
      respond,
      formState: gatedState(false),
    })
    await h.settle()
    const props = h.field(CvcTherapySelectField).props
    expect(props.disabled).toBe(true)
    expect(props.required).toBe(false)
    expect(props.description).toContain('Select an Evidence Type')
    expect(props.extraType).toBe('prompt')
    h.destroy()
  })

  it('explains itself when the chosen entity type has no therapies', async () => {
    const h = await createSelectFieldHarness({
      type: 'therapy-select',
      key: 'therapyIds',
      respond,
      formState: gatedState(false, 'DIAGNOSTIC'),
    })
    await h.settle()
    const props = h.field(CvcTherapySelectField).props
    expect(props.disabled).toBe(true)
    expect(props.description).toContain('does not include associated therapies')
    h.destroy()
  })

  it('enables and becomes required once the type requires a therapy', async () => {
    const h = await createSelectFieldHarness({
      type: 'therapy-select',
      key: 'therapyIds',
      respond,
      formState: gatedState(true, 'PREDICTIVE'),
    })
    await h.settle()
    const props = h.field(CvcTherapySelectField).props
    expect(props.disabled).toBe(false)
    expect(props.required).toBe(true)
    expect(props.description).toBeUndefined()
    h.destroy()
  })

  it('drops a value that survives a change to a type with no therapies', async () => {
    const state = gatedState(true, 'PREDICTIVE')
    const h = await createSelectFieldHarness({
      type: 'therapy-multi-select',
      key: 'therapyIds',
      respond,
      model: { therapyIds: [51] },
      formState: state,
    })
    await h.settle()
    expect(h.control().value).toEqual([51])

    state.requires.requiresTherapy$.next(false)
    state.fields.evidenceType$.next('DIAGNOSTIC')
    await h.settle()

    expect(h.control().value).toBeUndefined()
    h.destroy()
  })
})

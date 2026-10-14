import { FeatureInstanceTypes } from '@app/generated/civic.apollo.types'
import { MockGraphqlOperation } from '@app/testing/apollo-test.providers'
import {
  createSelectFieldHarness,
  describeEntitySelectContract,
} from '@app/testing/select-field.harness'
import { BehaviorSubject } from 'rxjs'
import { describe, expect, it } from 'vitest'
import { CvcVariantSelectField } from './variant-select.type'

// the typeahead returns plain Variant; only the tag query resolves to a
// concrete typename, which is what makes this field polymorphic
const variant = (
  id: number,
  name: string,
  typename: 'Variant' | 'GeneVariant' | 'FusionVariant' = 'Variant',
  aliases: string[] = []
) => ({
  __typename: typename,
  id,
  name,
  link: `/variants/${id}`,
  flagged: false,
  deprecated: false,
  variantAliases: aliases,
  singleVariantMolecularProfileId: 900 + id,
  singleVariantMolecularProfile: {
    __typename: 'MolecularProfile' as const,
    id: 900 + id,
    name: `MP ${name}`,
    link: `/molecular-profiles/${900 + id}`,
    molecularProfileAliases: [],
  },
})

const V600E = variant(31, 'V600E', 'Variant', ['VAL600GLU'])
const V600K = variant(32, 'V600K')

const FEATURE = {
  __typename: 'Feature' as const,
  id: 5,
  name: 'BRAF',
  link: '/features/5',
  flagged: false,
  deprecated: false,
  featureType: FeatureInstanceTypes.Gene,
  featureAliases: [],
  featureInstance: { __typename: 'Gene' as const, entrezId: 673 },
}

const respond = (op: MockGraphqlOperation) => {
  if (op.operationName === 'VariantSelectTypeahead') {
    return { variantsTypeahead: [V600E, V600K] }
  }
  if (op.operationName === 'VariantSelectTag') {
    const found = [V600E, V600K].find((v) => v.id === op.variables.variantId)
    // the tag query resolves the concrete typename
    return { variant: found && { ...found, __typename: 'GeneVariant' } }
  }
  if (op.operationName === 'FeatureSelectTag') {
    return { feature: FEATURE }
  }
  throw new Error(`unexpected operation ${op.operationName}`)
}

// NOTE: no default for featureId — passing undefined explicitly must mean
// "no feature", which a default parameter would silently override
/** variant-select only wires itself up once the form reports it is ready */
const readyState = (featureId: number | undefined) => ({
  formReady$: new BehaviorSubject(true),
  fields: { featureId$: new BehaviorSubject<number | undefined>(featureId) },
})

const setup = (overrides = {}) =>
  createSelectFieldHarness({
    type: 'variant-select',
    key: 'variantId',
    respond,
    formState: readyState(FEATURE.id),
    ...overrides,
  })

describe('CvcVariantSelectField', () => {
  describeEntitySelectContract({
    fieldType: CvcVariantSelectField,
    type: 'variant-select',
    multiType: 'variant-multi-select',
    key: 'variantId',
    typeaheadOp: 'VariantSelectTypeahead',
    tagOp: 'VariantSelectTag',
    respond,
    records: [V600E, V600K],
    emptySearchVars: { name: '', featureId: FEATURE.id },
    searchVars: (name) => ({ name, featureId: FEATURE.id }),
    tagVars: (variantId) => ({ variantId }),
    searchTerm: 'v60',
    formState: () => readyState(FEATURE.id),
  })

  it('scopes the typeahead to the feature the form supplies', async () => {
    const h = await setup()
    h.openDropdown()
    await h.settle()
    expect(h.callsTo('VariantSelectTypeahead')[0].variables).toEqual({
      name: '',
      featureId: FEATURE.id,
    })
    h.destroy()
  })

  it('disables itself until a feature is chosen', async () => {
    const h = await setup({ formState: readyState(undefined) })
    await h.settle()
    const field = h.field(CvcVariantSelectField)
    expect(field['disabled']()).toBe(true)
    expect(field.props.description).toBe(
      'Select a Feature to search its Variants'
    )
    expect(field.props.extraType).toBe('prompt')
    h.destroy()
  })

  it('names the feature in its placeholder once one is chosen', async () => {
    const h = await setup()
    await h.settle()
    const field = h.field(CvcVariantSelectField)
    expect(field['disabled']()).toBe(false)
    expect(field.props.placeholder).toBe('Search BRAF Variants')
    h.destroy()
  })

  it('clears the selection when the feature is cleared', async () => {
    const featureId$ = new BehaviorSubject<number | undefined>(FEATURE.id)
    const h = await setup({
      formState: { formReady$: new BehaviorSubject(true), fields: { featureId$ } },
      model: { variantId: V600E.id },
    })
    await h.settle()
    expect(h.control().value).toBe(V600E.id)

    featureId$.next(undefined)
    await h.settle()

    expect(h.control().value).toBeUndefined()
    h.destroy()
  })

  it('does not clear a prepopulated value before the form is ready', async () => {
    const formReady$ = new BehaviorSubject(false)
    const h = await setup({
      formState: {
        formReady$,
        fields: { featureId$: new BehaviorSubject<number | undefined>(undefined) },
      },
      model: { variantId: V600E.id },
    })
    await h.settle()

    // featureId is empty, but the field must not react to it yet
    expect(h.control().value).toBe(V600E.id)
    h.destroy()
  })

  it('renders a selected variant under its concrete typename', async () => {
    const h = await setup({ model: { variantId: V600E.id } })
    await h.settle()
    const ref = h.field(CvcVariantSelectField)['refForId'](V600E.id)
    expect(ref).toEqual({ __typename: 'GeneVariant', id: V600E.id })
    h.destroy()
  })

  it('withholds the add form until the name is long enough', async () => {
    const h = await setup()
    const field = h.field(CvcVariantSelectField)
    expect(field['showAddForm']('V6', [])).toBe(false)
    expect(field['showAddForm']('V600', [])).toBe(true)
    expect(field['showAddForm']('V600E', [V600E])).toBe(false)
    h.destroy()
  })

  it('renders each option as a tag plus its aliases', async () => {
    const h = await setup()
    h.openDropdown()
    await h.settle()
    const text = h
      .optionItems()
      .map((el) => el.textContent?.replace(/\s+/g, ' ').trim())
      .join('|')
    expect(text).toContain('VAL600GLU')
    h.destroy()
  })
})

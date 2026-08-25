import { TestBed } from '@angular/core/testing'
import { provideMockApollo } from '@app/testing/apollo-test.providers'
import { Apollo } from 'apollo-angular'
import { describe, expect, it } from 'vitest'
import { readCachedVariant } from './cached-variant'
import { VariantSelectTypeaheadFieldsFragmentDoc } from './variant-select.query.gql.generated'

const variantData = (typename: string, id: number, name: string) => ({
  __typename: typename,
  id,
  name,
  link: `/variants/${id}`,
  flagged: false,
  deprecated: false,
  variantAliases: [],
  singleVariantMolecularProfileId: 900 + id,
  singleVariantMolecularProfile: {
    __typename: 'MolecularProfile',
    id: 900 + id,
    name: `MP ${name}`,
    link: `/molecular-profiles/${900 + id}`,
    molecularProfileAliases: [],
  },
})

function apolloWith(typename: string, id: number, name: string): Apollo {
  TestBed.resetTestingModule()
  TestBed.configureTestingModule({
    providers: [
      provideMockApollo(() => {
        throw new Error('no network expected')
      }),
    ],
  })
  const apollo = TestBed.inject(Apollo)
  apollo.client.writeFragment({
    id: `${typename}:${id}`,
    fragment: VariantSelectTypeaheadFieldsFragmentDoc,
    fragmentName: 'VariantSelectTypeaheadFields',
    data: variantData(typename, id, name),
  })
  return apollo
}

describe('readCachedVariant', () => {
  it('finds a variant under its concrete typename', () => {
    const apollo = apolloWith('GeneVariant', 31, 'V600E')
    expect(readCachedVariant(apollo, 31, 'GeneVariant')).toMatchObject({
      id: 31,
      name: 'V600E',
    })
  })

  it('falls back to other typenames when the preferred one misses', () => {
    // the caller guesses FactorVariant from the feature type, but the entity
    // was cached as a GeneVariant
    const apollo = apolloWith('GeneVariant', 31, 'V600E')
    expect(readCachedVariant(apollo, 31, 'FactorVariant')).toMatchObject({
      id: 31,
      name: 'V600E',
    })
  })

  it('finds a plain Variant with no preferred typename', () => {
    const apollo = apolloWith('Variant', 33, 'Generic')
    expect(readCachedVariant(apollo, 33)).toMatchObject({ id: 33 })
  })

  it('returns undefined when the variant is not cached', () => {
    const apollo = apolloWith('GeneVariant', 31, 'V600E')
    expect(readCachedVariant(apollo, 999, 'GeneVariant')).toBeUndefined()
  })

  it('returns undefined for a missing id', () => {
    const apollo = apolloWith('GeneVariant', 31, 'V600E')
    expect(readCachedVariant(apollo, undefined)).toBeUndefined()
  })
})

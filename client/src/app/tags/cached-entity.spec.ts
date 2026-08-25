import { TestBed } from '@angular/core/testing'
import { provideMockApollo } from '@app/testing/apollo-test.providers'
import { Apollo } from 'apollo-angular'
import { describe, expect, it, vi } from 'vitest'
import { readCachedEntity, readCachedEntityName } from './cached-entity'
import { LinkableDiseaseFragmentDoc } from './linkable.fragments.gql.generated'

const DISEASE = {
  __typename: 'Disease' as const,
  id: 7,
  name: 'Melanoma',
  link: '/diseases/7',
  deprecated: false,
}

function seededApollo(): Apollo {
  TestBed.configureTestingModule({
    providers: [
      provideMockApollo(() => {
        throw new Error('no network expected')
      }),
    ],
  })
  const apollo = TestBed.inject(Apollo)
  apollo.client.writeFragment({
    id: 'Disease:7',
    fragment: LinkableDiseaseFragmentDoc,
    data: DISEASE,
  })
  return apollo
}

describe('readCachedEntity', () => {
  it('reads an entity written under its Linkable fragment', () => {
    const apollo = seededApollo()
    expect(readCachedEntity(apollo, 'Disease', 7)).toMatchObject({
      id: 7,
      name: 'Melanoma',
    })
  })

  it('returns undefined for an id that is not cached', () => {
    const apollo = seededApollo()
    expect(readCachedEntity(apollo, 'Disease', 999)).toBeUndefined()
  })

  it('returns undefined for a typename with no tag spec', () => {
    const apollo = seededApollo()
    expect(readCachedEntity(apollo, 'NotAnEntity', 7)).toBeUndefined()
  })

  it('does not hit the network', () => {
    const apollo = seededApollo()
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(() => readCachedEntity(apollo, 'Disease', 999)).not.toThrow()
    spy.mockRestore()
  })
})

describe('readCachedEntityName', () => {
  it('returns the cached entity name', () => {
    expect(readCachedEntityName(seededApollo(), 'Disease', 7)).toBe('Melanoma')
  })

  it('returns undefined when the entity is absent', () => {
    expect(readCachedEntityName(seededApollo(), 'Disease', 999)).toBeUndefined()
  })
})

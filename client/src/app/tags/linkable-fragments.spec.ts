import { TestBed } from '@angular/core/testing'
import { provideSeededApollo } from '@app/testing/apollo-test.providers'
import { Apollo } from 'apollo-angular'
import { firstValueFrom } from 'rxjs'
import { filter } from 'rxjs/operators'
import { describe, expect, it } from 'vitest'
import {
  LinkableDiseaseFragmentDoc,
  LinkableVariantFragmentDoc,
} from './linkable.fragments.gql.generated'

// Spike B (plan Phase 0): verify Apollo.watchFragment resolves interface
// fragments for concrete typenames via possibleTypes, reacts to later cache
// writes, and reports cache misses as incomplete results.
describe('watchFragment over Linkable* fragments', () => {
  function setup(seed?: Parameters<typeof provideSeededApollo>[0]) {
    TestBed.configureTestingModule({ providers: [provideSeededApollo(seed)] })
    return TestBed.inject(Apollo)
  }

  it('resolves a concrete-type fragment from a seeded cache', async () => {
    const apollo = setup((cache) => {
      cache.writeFragment({
        fragment: LinkableDiseaseFragmentDoc,
        data: {
          __typename: 'Disease',
          id: 7,
          name: 'Melanoma',
          link: '/diseases/7',
          deprecated: false,
        },
      })
    })
    const result = await firstValueFrom(
      apollo.watchFragment({
        fragment: LinkableDiseaseFragmentDoc,
        from: { __typename: 'Disease', id: 7 },
      })
    )
    expect(result.complete).toBe(true)
    expect(result.data).toMatchObject({ name: 'Melanoma', link: '/diseases/7' })
  })

  it('resolves an interface fragment (on VariantInterface) for a concrete typename', async () => {
    const apollo = setup((cache) => {
      cache.writeFragment({
        fragment: LinkableVariantFragmentDoc,
        data: {
          __typename: 'GeneVariant',
          id: 12,
          name: 'V600E',
          link: '/variants/12',
          flagged: false,
          deprecated: false,
        },
      })
    })
    const result = await firstValueFrom(
      apollo.watchFragment({
        fragment: LinkableVariantFragmentDoc,
        from: { __typename: 'GeneVariant', id: 12 },
      })
    )
    expect(result.complete).toBe(true)
    expect(result.data).toMatchObject({ __typename: 'GeneVariant', name: 'V600E' })
  })

  it('reports a cache miss as incomplete rather than erroring', async () => {
    const apollo = setup()
    const result = await firstValueFrom(
      apollo.watchFragment({
        fragment: LinkableDiseaseFragmentDoc,
        from: { __typename: 'Disease', id: 999 },
      })
    )
    expect(result.complete).toBe(false)
  })

  // Regression target for the old one-shot readFragment + setTimeout(1000)
  // kludge in source-quick-add: later cache writes must reach subscribers.
  it('re-emits when the entity is written to the cache after subscription', async () => {
    const apollo = setup()
    const emissions = apollo.watchFragment({
      fragment: LinkableDiseaseFragmentDoc,
      from: { __typename: 'Disease', id: 42 },
    })
    const complete = firstValueFrom(emissions.pipe(filter((r) => r.complete)))
    apollo.client.writeFragment({
      fragment: LinkableDiseaseFragmentDoc,
      data: {
        __typename: 'Disease',
        id: 42,
        name: 'NSCLC',
        link: '/diseases/42',
        deprecated: false,
      },
    })
    const result = await complete
    expect(result.data).toMatchObject({ name: 'NSCLC' })
  })
})

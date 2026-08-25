import { ApolloLink } from '@apollo/client'
import { InMemoryCache } from '@apollo/client/cache'
import possibleTypesResult from '@app/generated/civic.possible-types'
import { CvcTypePolicies } from '@app/graphql/graphql.type-policies'
import { provideApollo } from 'apollo-angular'
import { Observable } from 'rxjs'

/**
 * Apollo providers for cache-oriented component tests (e.g. CvcTag /
 * watchFragment): a real InMemoryCache configured exactly like the app's
 * (possibleTypes + type policies), optionally pre-seeded, with a terminating
 * link that fails loudly if a test unexpectedly reaches the network.
 *
 * For typeahead/query tests, mock the network with ApolloTestingModule or a
 * custom link instead.
 */
export interface MockGraphqlOperation {
  operationName: string
  variables: Record<string, any>
}

/**
 * Apollo providers for tests that exercise queries: a real InMemoryCache plus a
 * link that answers each operation from `respond` and records it, so specs can
 * assert how many times (and with what variables) a field queried.
 */
export function provideMockApollo(
  respond: (operation: MockGraphqlOperation) => any,
  recorded?: MockGraphqlOperation[]
) {
  return provideApollo(() => ({
    link: new ApolloLink(
      (operation) =>
        new Observable((observer) => {
          const called: MockGraphqlOperation = {
            operationName: operation.operationName ?? '',
            variables: operation.variables as Record<string, any>,
          }
          recorded?.push(called)
          observer.next({ data: respond(called) })
          observer.complete()
        })
    ),
    cache: new InMemoryCache({
      possibleTypes: possibleTypesResult.possibleTypes,
      typePolicies: CvcTypePolicies,
    }),
  }))
}

export function provideSeededApollo(seed?: (cache: InMemoryCache) => void) {
  return provideApollo(() => {
    const cache = new InMemoryCache({
      possibleTypes: possibleTypesResult.possibleTypes,
      typePolicies: CvcTypePolicies,
    })
    seed?.(cache)
    return {
      link: new ApolloLink(
        (operation) =>
          new Observable((observer) => {
            observer.error(
              new Error(
                `Unexpected network operation in seeded-cache test: ${operation.operationName}`
              )
            )
          })
      ),
      cache,
    }
  })
}

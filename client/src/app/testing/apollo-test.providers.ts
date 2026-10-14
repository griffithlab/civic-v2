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

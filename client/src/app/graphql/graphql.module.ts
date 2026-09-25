import { TypePolicies } from '@apollo/client/cache'
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { CombinedGraphQLErrors } from '@apollo/client/errors'
import { LocalState } from '@apollo/client/local-state'
import result from '@app/generated/civic.possible-types'
import { provideApollo } from 'apollo-angular'
import { HttpBatchLink, HttpLink } from 'apollo-angular/http'
import { CvcTypePolicies } from './graphql.type-policies'
import { onError } from '@apollo/client/link/error'
import { inject } from '@angular/core'

const uri = '/api/graphql' // <-- URL of the GraphQL server

const typePolicies: TypePolicies = CvcTypePolicies

/**
 * Operations opt into batching with `context: { batch: true }` at the call
 * site. Opt-in keeps batches homogeneous: the cap bounds operation count, not
 * cost, so it only means something when every operation in a batch is cheap.
 * Opting in by context rather than by operation name avoids a naming
 * convention that drifts, and the client supplies names anyway.
 */
export const BATCHED = { batch: true } as const

export function createApollo(
  httpLink: HttpLink,
  batchLink: HttpBatchLink
): ApolloClient.Options {
  const http = httpLink.create({ uri: uri, withCredentials: true })

  // batchMax 25 covers the heaviest form measured (an assertion revise fires 25
  // tag lookups), so that form becomes one request. Exceeding it is not a
  // failure: Apollo dispatches a full batch and starts another, so 60 operations
  // become three requests. The server's cap is 100, anchored to the schema's
  // default_max_page_size.
  const batched = batchLink.create({
    uri: uri,
    withCredentials: true,
    batchInterval: 10,
    batchMax: 25,
  })

  const transport = ApolloLink.split(
    (operation) => operation.getContext()['batch'] === true,
    batched,
    http
  )

  const analyticsLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        'Civic-Client-Name': 'civic-frontend',
      },
    })
    return forward(operation)
  })
  const errorHandler = onError(({ error }) => {
    if (CombinedGraphQLErrors.is(error)) {
      console.error('GraphQL Error:', error.errors)
    } else {
      console.error('Network Error:', error)
    }
  })
  return {
    link: analyticsLink.concat(errorHandler).concat(transport),
    cache: new InMemoryCache({
      possibleTypes: result.possibleTypes,
      typePolicies: typePolicies,
    }),
    // @client fields need an explicit LocalState in AC4; the only one,
    // AdvancedSearchResult.formQuery, is computed by a type-policy read
    // function, so no resolvers
    localState: new LocalState(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        notifyOnNetworkStatusChange: true,
        // errorPolicy 'none' and returnPartialData false are AC4's defaults;
        // declaring them needs DeclareDefaultOptions module augmentation
      },
    },
  }
}

export const graphqlProvider = provideApollo(
  (
    httpLink: HttpLink = inject(HttpLink),
    batchLink: HttpBatchLink = inject(HttpBatchLink)
  ) => createApollo(httpLink, batchLink)
)

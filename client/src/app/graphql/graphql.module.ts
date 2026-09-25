import { TypePolicies } from '@apollo/client/cache'
import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { CombinedGraphQLErrors } from '@apollo/client/errors'
import { LocalState } from '@apollo/client/local-state'
import result from '@app/generated/civic.possible-types'
import { provideApollo } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { CvcTypePolicies } from './graphql.type-policies'
import { onError } from '@apollo/client/link/error'
import { inject } from '@angular/core'

const uri = '/api/graphql' // <-- URL of the GraphQL server

const typePolicies: TypePolicies = CvcTypePolicies

export function createApollo(httpLink: HttpLink): ApolloClient.Options {
  let http = httpLink.create({ uri: uri, withCredentials: true })

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
    link: analyticsLink.concat(errorHandler).concat(http),
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
  (httpLink: HttpLink = inject(HttpLink)) => createApollo(httpLink)
)

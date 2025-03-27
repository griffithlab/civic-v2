import { TypePolicies } from '@apollo/client/cache'
import {
  ApolloClientOptions,
  ApolloLink,
  InMemoryCache,
} from '@apollo/client/core'
import result from '@app/generated/civic.possible-types'
import { provideApollo } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { CvcTypePolicies } from './graphql.type-policies'
import { onError } from '@apollo/client/link/error'
import { inject } from '@angular/core'

const uri = '/api/graphql' // <-- URL of the GraphQL server

const typePolicies: TypePolicies = CvcTypePolicies

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  let http = httpLink.create({ uri: uri, withCredentials: true })

  const analyticsLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        'Civic-Client-Name': 'civic-frontend',
      },
    })
    return forward(operation)
  })
  const errorHandler = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) console.error('GraphQL Error:', graphQLErrors)
    if (networkError) {
      console.error('Network Error:', networkError)
    }
  })
  return {
    link: analyticsLink.concat(errorHandler).concat(http),
    cache: new InMemoryCache({
      possibleTypes: result.possibleTypes,
      typePolicies: typePolicies,
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first',
        errorPolicy: 'none',
        notifyOnNetworkStatusChange: true,
        returnPartialData: false,
      },
    },
  }
}

export const graphqlProvider = provideApollo(
  (httpLink: HttpLink = inject(HttpLink)) => createApollo(httpLink),
  {
    useInitialLoading: true,
  }
)

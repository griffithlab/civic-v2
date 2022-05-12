import { NgModule } from '@angular/core';
import { HttpLink } from 'apollo-angular/http';
import { ApolloModule, APOLLO_OPTIONS, APOLLO_FLAGS } from 'apollo-angular';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { PossibleTypesMap, TypePolicies } from '@apollo/client/cache';
import { CvcTypePolicies } from './graphql.type-policies';

import result from '@app/generated/civic.possible-types';

const uri = '/api/graphql'; // <-- add the URL of the GraphQL server here

const typePolicies: TypePolicies = CvcTypePolicies;

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {

  let http = httpLink.create({ uri: uri, withCredentials: true })

  const analyticsLink = new ApolloLink((operation, forward) => {
    operation.setContext({
      headers: {
        'Civic-Client-Name': 'civic-frontend'
      }
    })
    return forward(operation);
  })

  return {
    link: analyticsLink.concat(http),
    cache: new InMemoryCache({
      possibleTypes: result.possibleTypes,
      typePolicies: typePolicies
    }),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "cache-and-network",
        nextFetchPolicy: "cache-first",
        errorPolicy: 'all',
        notifyOnNetworkStatusChange: true,
        // returnPartialData: true
      },
    },
  };
}

@NgModule({
  imports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_FLAGS,
      useValue: {
        useInitialLoading: true, // enable it here
      },
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }

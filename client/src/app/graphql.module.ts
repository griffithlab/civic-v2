import { NgModule } from '@angular/core';
import { HttpLink } from 'apollo-angular/http';

import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { relayStylePagination } from '@apollo/client/utilities';
import { PossibleTypesMap, TypePolicies, TypePolicy } from '@apollo/client/cache';

import {
  default as result,
  IntrospectionResultData,
} from './generated/civic.possible-types';

const uri = '/api/graphql'; // <-- add the URL of the GraphQL server here

const typePolicies: TypePolicies = {
  Query: {
    fields: {
      genes: relayStylePagination(),
      comments: relayStylePagination(),
      revisions: relayStylePagination(),
      notifications: relayStylePagination(),
      events: relayStylePagination(),
      organizations: relayStylePagination(),
      users: relayStylePagination(),
    }
  }
};

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache({
      possibleTypes: introspectionToPossibleTypes(result),
      typePolicies: typePolicies
    }),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}

/**
 * Extracts `PossibleTypesMap` as accepted by `@apollo/client` from GraphQL introspection query result. From: https://github.com/apollographql/apollo-client/issues/6855
 */
const introspectionToPossibleTypes = (
  introspectionResultData: IntrospectionResultData
): PossibleTypesMap => {
  const possibleTypes: PossibleTypesMap = {};

  introspectionResultData.__schema.types.forEach((supertype) => {
    if (supertype.possibleTypes) {
      possibleTypes[supertype.name] = supertype.possibleTypes.map((subtype) => {
        return subtype.name;
      });
    }
  });

  return possibleTypes;
};

export default introspectionToPossibleTypes;

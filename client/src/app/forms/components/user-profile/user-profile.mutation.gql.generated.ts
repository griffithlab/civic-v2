/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type UpdateUserProfileMutationVariables = Types.Exact<{
  input: Types.EditUserInput;
}>;


export type UpdateUserProfileMutation = { __typename: 'Mutation', editUser?: { __typename: 'EditUserPayload', user: { __typename: 'User', id: number } } | undefined };

export type CountriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CountriesQuery = { __typename: 'Query', countries: Array<{ __typename: 'Country', id: number, name: string }> };

export const UpdateUserProfileDocument = gql`
    mutation UpdateUserProfile($input: EditUserInput!) {
  editUser(input: $input) {
    user {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUserProfileGQL extends Apollo.Mutation<UpdateUserProfileMutation, UpdateUserProfileMutationVariables> {
    document = UpdateUserProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CountriesDocument = gql`
    query Countries {
  countries {
    id
    name
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CountriesGQL extends Apollo.Query<CountriesQuery, CountriesQueryVariables> {
    document = CountriesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type FlagEntityMutationVariables = Types.Exact<{
  input: Types.FlagEntityInput;
}>;


export type FlagEntityMutation = { __typename: 'Mutation', flagEntity?: { __typename: 'FlagEntityPayload', flag?: { __typename: 'Flag', id: number } | undefined } | undefined };

export const FlagEntityDocument = gql`
    mutation FlagEntity($input: FlagEntityInput!) {
  flagEntity(input: $input) {
    flag {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FlagEntityGQL extends Apollo.Mutation<FlagEntityMutation, FlagEntityMutationVariables> {
    document = FlagEntityDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
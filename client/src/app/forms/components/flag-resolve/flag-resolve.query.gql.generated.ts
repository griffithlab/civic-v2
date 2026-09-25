/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ResolveFlagMutationVariables = Types.Exact<{
  input: Types.ResolveFlagInput;
}>;


export type ResolveFlagMutation = { __typename: 'Mutation', resolveFlag?: { __typename: 'ResolveFlagPayload', flag?: { __typename: 'Flag', id: number } | undefined } | undefined };

export const ResolveFlagDocument = gql`
    mutation ResolveFlag($input: ResolveFlagInput!) {
  resolveFlag(input: $input) {
    flag {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResolveFlagGQL extends Apollo.Mutation<ResolveFlagMutation, ResolveFlagMutationVariables> {
    document = ResolveFlagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
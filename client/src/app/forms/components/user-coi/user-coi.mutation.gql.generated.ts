/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type UpdateCoiMutationVariables = Types.Exact<{
  input: Types.UpdateCoiInput;
}>;


export type UpdateCoiMutation = { __typename: 'Mutation', updateCoi?: { __typename: 'UpdateCoiPayload', coiStatement: { __typename: 'Coi', coiPresent: boolean, coiStatus: Types.CoiStatus, createdAt?: any | undefined, id: number } } | undefined };

export const UpdateCoiDocument = gql`
    mutation UpdateCoi($input: UpdateCoiInput!) {
  updateCoi(input: $input) {
    coiStatement {
      coiPresent
      coiStatus
      createdAt
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateCoiGQL extends Apollo.Mutation<UpdateCoiMutation, UpdateCoiMutationVariables> {
    document = UpdateCoiDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
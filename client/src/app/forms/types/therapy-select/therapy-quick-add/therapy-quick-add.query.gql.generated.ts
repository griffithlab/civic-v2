/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { TherapySelectTypeaheadFieldsFragmentDoc } from '../therapy-select.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type QuickAddTherapyMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  ncitId?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type QuickAddTherapyMutation = { __typename: 'Mutation', addTherapy?: { __typename: 'AddTherapyPayload', new: boolean, therapy: { __typename: 'Therapy', ncitId?: string | undefined, therapyAliases: Array<string>, id: number, name: string, link: string, deprecated: boolean } } | undefined };

export type QuickAddTherapyFieldsFragment = { __typename: 'AddTherapyPayload', new: boolean, therapy: { __typename: 'Therapy', ncitId?: string | undefined, therapyAliases: Array<string>, id: number, name: string, link: string, deprecated: boolean } };

export const QuickAddTherapyFieldsFragmentDoc = gql`
    fragment QuickAddTherapyFields on AddTherapyPayload {
  new
  therapy {
    ...TherapySelectTypeaheadFields
  }
}
    ${TherapySelectTypeaheadFieldsFragmentDoc}`;
export const QuickAddTherapyDocument = gql`
    mutation QuickAddTherapy($name: String!, $ncitId: String) {
  addTherapy(input: {name: $name, ncitId: $ncitId}) {
    ...QuickAddTherapyFields
  }
}
    ${QuickAddTherapyFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QuickAddTherapyGQL extends Apollo.Mutation<QuickAddTherapyMutation, QuickAddTherapyMutationVariables> {
    document = QuickAddTherapyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
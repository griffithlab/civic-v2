/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { DiseaseSelectTypeaheadFieldsFragmentDoc } from '../disease-select.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type QuickAddDiseaseMutationVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  doid?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type QuickAddDiseaseMutation = { __typename: 'Mutation', addDisease?: { __typename: 'AddDiseasePayload', new: boolean, disease: { __typename: 'Disease', doid?: string | undefined, diseaseAliases: Array<string>, id: number, name: string, link: string, deprecated: boolean } } | undefined };

export type QuickAddDiseaseFieldsFragment = { __typename: 'AddDiseasePayload', new: boolean, disease: { __typename: 'Disease', doid?: string | undefined, diseaseAliases: Array<string>, id: number, name: string, link: string, deprecated: boolean } };

export const QuickAddDiseaseFieldsFragmentDoc = gql`
    fragment QuickAddDiseaseFields on AddDiseasePayload {
  new
  disease {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${DiseaseSelectTypeaheadFieldsFragmentDoc}`;
export const QuickAddDiseaseDocument = gql`
    mutation QuickAddDisease($name: String!, $doid: String) {
  addDisease(input: {name: $name, doid: $doid}) {
    ...QuickAddDiseaseFields
  }
}
    ${QuickAddDiseaseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class QuickAddDiseaseGQL extends Apollo.Mutation<QuickAddDiseaseMutation, QuickAddDiseaseMutationVariables> {
    document = QuickAddDiseaseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
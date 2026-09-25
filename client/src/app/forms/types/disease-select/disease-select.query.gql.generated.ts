/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DiseaseSelectTypeaheadQueryVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
}>;


export type DiseaseSelectTypeaheadQuery = { __typename: 'Query', diseaseTypeahead: Array<{ __typename: 'Disease', id: number, name: string, link: string, displayName: string, doid?: string | undefined, diseaseAliases: Array<string> }> };

export type DiseaseSelectTagQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type DiseaseSelectTagQuery = { __typename: 'Query', disease?: { __typename: 'Disease', id: number, name: string, link: string, displayName: string, doid?: string | undefined, diseaseAliases: Array<string> } | undefined };

export type DiseaseSelectTypeaheadFieldsFragment = { __typename: 'Disease', id: number, name: string, link: string, displayName: string, doid?: string | undefined, diseaseAliases: Array<string> };

export const DiseaseSelectTypeaheadFieldsFragmentDoc = gql`
    fragment DiseaseSelectTypeaheadFields on Disease {
  id
  name
  link
  displayName
  doid
  diseaseAliases
}
    `;
export const DiseaseSelectTypeaheadDocument = gql`
    query DiseaseSelectTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${DiseaseSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class DiseaseSelectTypeaheadGQL extends Apollo.Query<DiseaseSelectTypeaheadQuery, DiseaseSelectTypeaheadQueryVariables> {
    document = DiseaseSelectTypeaheadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DiseaseSelectTagDocument = gql`
    query DiseaseSelectTag($id: Int!) {
  disease(id: $id) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${DiseaseSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class DiseaseSelectTagGQL extends Apollo.Query<DiseaseSelectTagQuery, DiseaseSelectTagQueryVariables> {
    document = DiseaseSelectTagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
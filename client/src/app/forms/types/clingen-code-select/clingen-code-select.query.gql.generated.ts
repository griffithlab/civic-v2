/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ClingenCodeSelectTypeaheadQueryVariables = Types.Exact<{
  code: Types.Scalars['String']['input'];
}>;


export type ClingenCodeSelectTypeaheadQuery = { __typename: 'Query', clingenCodesTypeahead: Array<{ __typename: 'ClingenCode', id: number, code: string, name: string, description: string, tooltip: string, exclusive: boolean }> };

export type ClingenCodeSelectTagQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type ClingenCodeSelectTagQuery = { __typename: 'Query', clingenCode?: { __typename: 'ClingenCode', id: number, code: string, name: string, description: string, tooltip: string, exclusive: boolean } | undefined };

export type ClingenCodeSelectTypeaheadFieldsFragment = { __typename: 'ClingenCode', id: number, code: string, name: string, description: string, tooltip: string, exclusive: boolean };

export const ClingenCodeSelectTypeaheadFieldsFragmentDoc = gql`
    fragment ClingenCodeSelectTypeaheadFields on ClingenCode {
  id
  code
  name
  description
  tooltip
  exclusive
}
    `;
export const ClingenCodeSelectTypeaheadDocument = gql`
    query ClingenCodeSelectTypeahead($code: String!) {
  clingenCodesTypeahead(queryTerm: $code) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${ClingenCodeSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ClingenCodeSelectTypeaheadGQL extends Apollo.Query<ClingenCodeSelectTypeaheadQuery, ClingenCodeSelectTypeaheadQueryVariables> {
    document = ClingenCodeSelectTypeaheadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ClingenCodeSelectTagDocument = gql`
    query ClingenCodeSelectTag($id: Int!) {
  clingenCode(id: $id) {
    ...ClingenCodeSelectTypeaheadFields
  }
}
    ${ClingenCodeSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ClingenCodeSelectTagGQL extends Apollo.Query<ClingenCodeSelectTagQuery, ClingenCodeSelectTagQueryVariables> {
    document = ClingenCodeSelectTagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
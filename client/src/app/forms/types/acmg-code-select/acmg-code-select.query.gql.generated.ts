/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { LinkableAcmgCodeFragmentDoc } from '../../../tags/linkable.fragments.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type AcmgCodeSelectTypeaheadQueryVariables = Types.Exact<{
  code: Types.Scalars['String']['input'];
}>;


export type AcmgCodeSelectTypeaheadQuery = { __typename: 'Query', acmgCodesTypeahead: Array<{ __typename: 'AcmgCode', code: string, description: string, id: number, name: string, tooltip: string }> };

export type AcmgCodeSelectTagQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type AcmgCodeSelectTagQuery = { __typename: 'Query', acmgCode?: { __typename: 'AcmgCode', code: string, description: string, id: number, name: string, tooltip: string } | undefined };

export type AcmgCodeSelectTypeaheadFieldsFragment = { __typename: 'AcmgCode', code: string, description: string, id: number, name: string, tooltip: string };

export const AcmgCodeSelectTypeaheadFieldsFragmentDoc = gql`
    fragment AcmgCodeSelectTypeaheadFields on AcmgCode {
  ...LinkableAcmgCode
  code
  description
}
    ${LinkableAcmgCodeFragmentDoc}`;
export const AcmgCodeSelectTypeaheadDocument = gql`
    query AcmgCodeSelectTypeahead($code: String!) {
  acmgCodesTypeahead(queryTerm: $code) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${AcmgCodeSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AcmgCodeSelectTypeaheadGQL extends Apollo.Query<AcmgCodeSelectTypeaheadQuery, AcmgCodeSelectTypeaheadQueryVariables> {
    document = AcmgCodeSelectTypeaheadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const AcmgCodeSelectTagDocument = gql`
    query AcmgCodeSelectTag($id: Int!) {
  acmgCode(id: $id) {
    ...AcmgCodeSelectTypeaheadFields
  }
}
    ${AcmgCodeSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AcmgCodeSelectTagGQL extends Apollo.Query<AcmgCodeSelectTagQuery, AcmgCodeSelectTagQueryVariables> {
    document = AcmgCodeSelectTagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
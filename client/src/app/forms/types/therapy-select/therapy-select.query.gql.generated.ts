/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type TherapySelectTypeaheadQueryVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
}>;


export type TherapySelectTypeaheadQuery = { __typename: 'Query', therapyTypeahead: Array<{ __typename: 'Therapy', id: number, name: string, link: string, ncitId?: string | undefined, therapyAliases: Array<string> }> };

export type TherapySelectTagQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type TherapySelectTagQuery = { __typename: 'Query', therapy?: { __typename: 'Therapy', id: number, name: string, link: string, ncitId?: string | undefined, therapyAliases: Array<string> } | undefined };

export type TherapySelectTypeaheadFieldsFragment = { __typename: 'Therapy', id: number, name: string, link: string, ncitId?: string | undefined, therapyAliases: Array<string> };

export const TherapySelectTypeaheadFieldsFragmentDoc = gql`
    fragment TherapySelectTypeaheadFields on Therapy {
  id
  name
  link
  ncitId
  therapyAliases
}
    `;
export const TherapySelectTypeaheadDocument = gql`
    query TherapySelectTypeahead($name: String!) {
  therapyTypeahead(queryTerm: $name) {
    ...TherapySelectTypeaheadFields
  }
}
    ${TherapySelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TherapySelectTypeaheadGQL extends Apollo.Query<TherapySelectTypeaheadQuery, TherapySelectTypeaheadQueryVariables> {
    document = TherapySelectTypeaheadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const TherapySelectTagDocument = gql`
    query TherapySelectTag($id: Int!) {
  therapy(id: $id) {
    ...TherapySelectTypeaheadFields
  }
}
    ${TherapySelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TherapySelectTagGQL extends Apollo.Query<TherapySelectTagQuery, TherapySelectTagQueryVariables> {
    document = TherapySelectTagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
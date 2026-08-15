/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { LinkableTherapyFragmentDoc } from '../../../tags/linkable.fragments.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type TherapySelectTypeaheadQueryVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
}>;


export type TherapySelectTypeaheadQuery = { __typename: 'Query', therapyTypeahead: Array<{ __typename: 'Therapy', ncitId?: string | undefined, therapyAliases: Array<string>, id: number, name: string, link: string, deprecated: boolean }> };

export type TherapySelectTagQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type TherapySelectTagQuery = { __typename: 'Query', therapy?: { __typename: 'Therapy', ncitId?: string | undefined, therapyAliases: Array<string>, id: number, name: string, link: string, deprecated: boolean } | undefined };

export type TherapySelectTypeaheadFieldsFragment = { __typename: 'Therapy', ncitId?: string | undefined, therapyAliases: Array<string>, id: number, name: string, link: string, deprecated: boolean };

export const TherapySelectTypeaheadFieldsFragmentDoc = gql`
    fragment TherapySelectTypeaheadFields on Therapy {
  ...LinkableTherapy
  ncitId
  therapyAliases
}
    ${LinkableTherapyFragmentDoc}`;
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
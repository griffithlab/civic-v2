/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type NccnGuidelineSelectTypeaheadQueryVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
}>;


export type NccnGuidelineSelectTypeaheadQuery = { __typename: 'Query', nccnGuidelinesTypeahead: Array<{ __typename: 'NccnGuideline', id: number, name: string }> };

export type NccnGuidelineSelectTagQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type NccnGuidelineSelectTagQuery = { __typename: 'Query', nccnGuideline?: { __typename: 'NccnGuideline', id: number, name: string } | undefined };

export type NccnGuidelineSelectTypeaheadFieldsFragment = { __typename: 'NccnGuideline', id: number, name: string };

export const NccnGuidelineSelectTypeaheadFieldsFragmentDoc = gql`
    fragment NccnGuidelineSelectTypeaheadFields on NccnGuideline {
  id
  name
}
    `;
export const NccnGuidelineSelectTypeaheadDocument = gql`
    query NccnGuidelineSelectTypeahead($name: String!) {
  nccnGuidelinesTypeahead(queryTerm: $name) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${NccnGuidelineSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class NccnGuidelineSelectTypeaheadGQL extends Apollo.Query<NccnGuidelineSelectTypeaheadQuery, NccnGuidelineSelectTypeaheadQueryVariables> {
    document = NccnGuidelineSelectTypeaheadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const NccnGuidelineSelectTagDocument = gql`
    query NccnGuidelineSelectTag($id: Int!) {
  nccnGuideline(id: $id) {
    ...NccnGuidelineSelectTypeaheadFields
  }
}
    ${NccnGuidelineSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class NccnGuidelineSelectTagGQL extends Apollo.Query<NccnGuidelineSelectTagQuery, NccnGuidelineSelectTagQueryVariables> {
    document = NccnGuidelineSelectTagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { LinkableVariantTypeFragmentDoc } from '../../../tags/linkable.fragments.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type VariantTypeSelectTypeaheadQueryVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
}>;


export type VariantTypeSelectTypeaheadQuery = { __typename: 'Query', variantTypeTypeahead: Array<{ __typename: 'VariantType', soid: string, id: number, name: string, link: string }> };

export type VariantTypeSelectTagQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type VariantTypeSelectTagQuery = { __typename: 'Query', variantType?: { __typename: 'VariantType', soid: string, id: number, name: string, link: string } | undefined };

export type VariantTypeSelectTypeaheadFieldsFragment = { __typename: 'VariantType', soid: string, id: number, name: string, link: string };

export const VariantTypeSelectTypeaheadFieldsFragmentDoc = gql`
    fragment VariantTypeSelectTypeaheadFields on VariantType {
  ...LinkableVariantType
  soid
}
    ${LinkableVariantTypeFragmentDoc}`;
export const VariantTypeSelectTypeaheadDocument = gql`
    query VariantTypeSelectTypeahead($name: String!) {
  variantTypeTypeahead(queryTerm: $name) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${VariantTypeSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantTypeSelectTypeaheadGQL extends Apollo.Query<VariantTypeSelectTypeaheadQuery, VariantTypeSelectTypeaheadQueryVariables> {
    document = VariantTypeSelectTypeaheadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const VariantTypeSelectTagDocument = gql`
    query VariantTypeSelectTag($id: Int!) {
  variantType(id: $id) {
    ...VariantTypeSelectTypeaheadFields
  }
}
    ${VariantTypeSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantTypeSelectTagGQL extends Apollo.Query<VariantTypeSelectTagQuery, VariantTypeSelectTagQueryVariables> {
    document = VariantTypeSelectTagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
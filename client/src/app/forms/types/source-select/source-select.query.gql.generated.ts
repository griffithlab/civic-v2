/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SourceSelectTypeaheadQueryVariables = Types.Exact<{
  partialCitationId: Types.Scalars['String']['input'];
  sourceType: Types.SourceSource;
}>;


export type SourceSelectTypeaheadQuery = { __typename: 'Query', sourceTypeahead: Array<{ __typename: 'Source', id: number, name: string, link: string, citation?: string | undefined, citationId: string, sourceType: Types.SourceSource, deprecated: boolean }> };

export type SourceSelectTagQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type SourceSelectTagQuery = { __typename: 'Query', source?: { __typename: 'Source', id: number, name: string, link: string, citation?: string | undefined, citationId: string, sourceType: Types.SourceSource, deprecated: boolean } | undefined };

export type SourceSelectTypeaheadFieldsFragment = { __typename: 'Source', id: number, name: string, link: string, citation?: string | undefined, citationId: string, sourceType: Types.SourceSource, deprecated: boolean };

export const SourceSelectTypeaheadFieldsFragmentDoc = gql`
    fragment SourceSelectTypeaheadFields on Source {
  id
  name
  link
  citation
  citationId
  sourceType
  deprecated
}
    `;
export const SourceSelectTypeaheadDocument = gql`
    query SourceSelectTypeahead($partialCitationId: String!, $sourceType: SourceSource!) {
  sourceTypeahead(citationId: $partialCitationId, sourceType: $sourceType) {
    ...SourceSelectTypeaheadFields
  }
}
    ${SourceSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SourceSelectTypeaheadGQL extends Apollo.Query<SourceSelectTypeaheadQuery, SourceSelectTypeaheadQueryVariables> {
    document = SourceSelectTypeaheadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SourceSelectTagDocument = gql`
    query SourceSelectTag($id: Int!) {
  source(id: $id) {
    ...SourceSelectTypeaheadFields
  }
}
    ${SourceSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SourceSelectTagGQL extends Apollo.Query<SourceSelectTagQuery, SourceSelectTagQueryVariables> {
    document = SourceSelectTagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
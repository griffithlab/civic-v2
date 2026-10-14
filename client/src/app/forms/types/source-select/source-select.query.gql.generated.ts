/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { LinkableSourceFragmentDoc } from '../../../tags/linkable.fragments.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SourceSelectTypeaheadQueryVariables = Types.Exact<{
  partialCitationId: Types.Scalars['String']['input'];
  sourceType: Types.SourceSource;
}>;


export type SourceSelectTypeaheadQuery = { __typename: 'Query', sourceTypeahead: Array<{ __typename: 'Source', citationId: string, id: number, name: string, link: string, deprecated: boolean, citation?: string | undefined, sourceType: Types.SourceSource }> };

export type SourceSelectTagQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type SourceSelectTagQuery = { __typename: 'Query', source?: { __typename: 'Source', citationId: string, id: number, name: string, link: string, deprecated: boolean, citation?: string | undefined, sourceType: Types.SourceSource } | undefined };

export type SourceSelectTypeaheadFieldsFragment = { __typename: 'Source', citationId: string, id: number, name: string, link: string, deprecated: boolean, citation?: string | undefined, sourceType: Types.SourceSource };

export const SourceSelectTypeaheadFieldsFragmentDoc = gql`
    fragment SourceSelectTypeaheadFields on Source {
  ...LinkableSource
  citationId
}
    ${LinkableSourceFragmentDoc}`;
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
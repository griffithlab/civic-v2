/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SourceDetailQueryVariables = Types.Exact<{
  sourceId: Types.Scalars['Int']['input'];
}>;


export type SourceDetailQuery = { __typename: 'Query', source?: { __typename: 'Source', id: number, citation?: string | undefined, sourceUrl?: string | undefined, displayType: string, fullyCurated: boolean, citationId: string, comments: { __typename: 'CommentConnection', totalCount: number } } | undefined };

export type SourceDetailFieldsFragment = { __typename: 'Source', id: number, citation?: string | undefined, sourceUrl?: string | undefined, displayType: string, fullyCurated: boolean, citationId: string, comments: { __typename: 'CommentConnection', totalCount: number } };

export const SourceDetailFieldsFragmentDoc = gql`
    fragment SourceDetailFields on Source {
  id
  citation
  sourceUrl
  displayType
  fullyCurated
  citationId
  comments {
    totalCount
  }
}
    `;
export const SourceDetailDocument = gql`
    query SourceDetail($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceDetailFields
  }
}
    ${SourceDetailFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SourceDetailGQL extends Apollo.Query<SourceDetailQuery, SourceDetailQueryVariables> {
    document = SourceDetailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
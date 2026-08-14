/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type QuickAddSourceCheckCitationQueryVariables = Types.Exact<{
  sourceType: Types.SourceSource;
  citationId: Types.Scalars['String']['input'];
}>;


export type QuickAddSourceCheckCitationQuery = { __typename: 'Query', remoteCitation?: string | undefined };

export type QuickAddSourceRemoteCitationMutationVariables = Types.Exact<{
  input: Types.AddRemoteCitationInput;
}>;


export type QuickAddSourceRemoteCitationMutation = { __typename: 'Mutation', addRemoteCitation?: { __typename: 'AddRemoteCitationPayload', newSource: { __typename: 'SourceStub', id: number, citationId: number, sourceType: Types.SourceSource } } | undefined };

export const QuickAddSourceCheckCitationDocument = gql`
    query QuickAddSourceCheckCitation($sourceType: SourceSource!, $citationId: String!) {
  remoteCitation(sourceType: $sourceType, citationId: $citationId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QuickAddSourceCheckCitationGQL extends Apollo.Query<QuickAddSourceCheckCitationQuery, QuickAddSourceCheckCitationQueryVariables> {
    document = QuickAddSourceCheckCitationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const QuickAddSourceRemoteCitationDocument = gql`
    mutation QuickAddSourceRemoteCitation($input: AddRemoteCitationInput!) {
  addRemoteCitation(input: $input) {
    newSource {
      id
      citationId
      sourceType
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QuickAddSourceRemoteCitationGQL extends Apollo.Mutation<QuickAddSourceRemoteCitationMutation, QuickAddSourceRemoteCitationMutationVariables> {
    document = QuickAddSourceRemoteCitationDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
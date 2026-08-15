/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { FeatureInstanceRefFragmentDoc } from '../../../graphql/feature-instance.fragments.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type FactorRevisableFieldsQueryVariables = Types.Exact<{
  featureId: Types.Scalars['Int']['input'];
}>;


export type FactorRevisableFieldsQuery = { __typename: 'Query', feature?: { __typename: 'Feature', id: number, name: string, fullName?: string | undefined, description?: string | undefined, featureAliases: Array<string>, sources: Array<{ __typename: 'Source', id: number, sourceType: Types.SourceSource, citation?: string | undefined, citationId: string }>, featureInstance:
      | { __typename: 'Factor', ncitId?: string | undefined, id: number }
      | { __typename: 'Fusion', id: number }
      | { __typename: 'Gene', id: number }
      | { __typename: 'Region', id: number }
     } | undefined };

export type RevisableFactorFieldsFragment = { __typename: 'Feature', id: number, name: string, fullName?: string | undefined, description?: string | undefined, featureAliases: Array<string>, sources: Array<{ __typename: 'Source', id: number, sourceType: Types.SourceSource, citation?: string | undefined, citationId: string }>, featureInstance:
    | { __typename: 'Factor', ncitId?: string | undefined, id: number }
    | { __typename: 'Fusion', id: number }
    | { __typename: 'Gene', id: number }
    | { __typename: 'Region', id: number }
   };

export type SuggestFactorRevisionMutationVariables = Types.Exact<{
  input: Types.SuggestFactorRevisionInput;
}>;


export type SuggestFactorRevisionMutation = { __typename: 'Mutation', suggestFactorRevision?: { __typename: 'SuggestFactorRevisionPayload', clientMutationId?: string | undefined, results: Array<{ __typename: 'RevisionResult', newlyCreated: boolean, id: number, fieldName: string }> } | undefined };

export const RevisableFactorFieldsFragmentDoc = gql`
    fragment RevisableFactorFields on Feature {
  id
  name
  fullName
  description
  sources {
    id
    sourceType
    citation
    citationId
  }
  featureAliases
  featureInstance {
    ...FeatureInstanceRef
    ... on Factor {
      ncitId
    }
  }
}
    ${FeatureInstanceRefFragmentDoc}`;
export const FactorRevisableFieldsDocument = gql`
    query FactorRevisableFields($featureId: Int!) {
  feature(id: $featureId) {
    ...RevisableFactorFields
  }
}
    ${RevisableFactorFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FactorRevisableFieldsGQL extends Apollo.Query<FactorRevisableFieldsQuery, FactorRevisableFieldsQueryVariables> {
    document = FactorRevisableFieldsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SuggestFactorRevisionDocument = gql`
    mutation SuggestFactorRevision($input: SuggestFactorRevisionInput!) {
  suggestFactorRevision(input: $input) {
    clientMutationId
    results {
      newlyCreated
      id
      fieldName
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SuggestFactorRevisionGQL extends Apollo.Mutation<SuggestFactorRevisionMutation, SuggestFactorRevisionMutationVariables> {
    document = SuggestFactorRevisionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
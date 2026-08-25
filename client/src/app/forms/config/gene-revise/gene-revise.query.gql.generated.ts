/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { FeatureInstanceRefFragmentDoc } from '../../../graphql/feature-instance.fragments.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type GeneRevisableFieldsQueryVariables = Types.Exact<{
  featureId: Types.Scalars['Int']['input'];
}>;


export type GeneRevisableFieldsQuery = { __typename: 'Query', feature?: { __typename: 'Feature', id: number, sources: Array<{ __typename: 'Source', id: number, sourceType: Types.SourceSource, citation?: string | undefined, citationId: string }>, featureInstance:
      | { __typename: 'Factor', id: number }
      | { __typename: 'Fusion', id: number }
      | { __typename: 'Gene', description?: string | undefined, id: number }
      | { __typename: 'Region', id: number }
     } | undefined };

export type RevisableGeneFieldsFragment = { __typename: 'Feature', id: number, sources: Array<{ __typename: 'Source', id: number, sourceType: Types.SourceSource, citation?: string | undefined, citationId: string }>, featureInstance:
    | { __typename: 'Factor', id: number }
    | { __typename: 'Fusion', id: number }
    | { __typename: 'Gene', description?: string | undefined, id: number }
    | { __typename: 'Region', id: number }
   };

export type SuggestGeneRevisionMutationVariables = Types.Exact<{
  input: Types.SuggestGeneRevisionInput;
}>;


export type SuggestGeneRevisionMutation = { __typename: 'Mutation', suggestGeneRevision?: { __typename: 'SuggestGeneRevisionPayload', clientMutationId?: string | undefined, results: Array<{ __typename: 'RevisionResult', newlyCreated: boolean, id: number, fieldName: string }> } | undefined };

export const RevisableGeneFieldsFragmentDoc = gql`
    fragment RevisableGeneFields on Feature {
  id
  sources {
    id
    sourceType
    citation
    citationId
  }
  featureInstance {
    ...FeatureInstanceRef
    ... on Gene {
      description
    }
  }
}
    ${FeatureInstanceRefFragmentDoc}`;
export const GeneRevisableFieldsDocument = gql`
    query GeneRevisableFields($featureId: Int!) {
  feature(id: $featureId) {
    ...RevisableGeneFields
  }
}
    ${RevisableGeneFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GeneRevisableFieldsGQL extends Apollo.Query<GeneRevisableFieldsQuery, GeneRevisableFieldsQueryVariables> {
    document = GeneRevisableFieldsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SuggestGeneRevisionDocument = gql`
    mutation SuggestGeneRevision($input: SuggestGeneRevisionInput!) {
  suggestGeneRevision(input: $input) {
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
  export class SuggestGeneRevisionGQL extends Apollo.Mutation<SuggestGeneRevisionMutation, SuggestGeneRevisionMutationVariables> {
    document = SuggestGeneRevisionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
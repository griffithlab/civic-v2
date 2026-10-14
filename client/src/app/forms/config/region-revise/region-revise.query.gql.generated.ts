/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type RegionRevisableFieldsQueryVariables = Types.Exact<{
  featureId: Types.Scalars['Int']['input'];
}>;


export type RegionRevisableFieldsQuery = { __typename: 'Query', feature?: { __typename: 'Feature', id: number, description?: string | undefined, featureAliases: Array<string>, sources: Array<{ __typename: 'Source', id: number, sourceType: Types.SourceSource, citation?: string | undefined, citationId: string }> } | undefined };

export type RevisableRegionFieldsFragment = { __typename: 'Feature', id: number, description?: string | undefined, featureAliases: Array<string>, sources: Array<{ __typename: 'Source', id: number, sourceType: Types.SourceSource, citation?: string | undefined, citationId: string }> };

export type SuggestRegionRevisionMutationVariables = Types.Exact<{
  input: Types.SuggestRegionRevisionInput;
}>;


export type SuggestRegionRevisionMutation = { __typename: 'Mutation', suggestRegionRevision?: { __typename: 'SuggestRegionRevisionPayload', clientMutationId?: string | undefined, results: Array<{ __typename: 'RevisionResult', newlyCreated: boolean, id: number, fieldName: string }> } | undefined };

export const RevisableRegionFieldsFragmentDoc = gql`
    fragment RevisableRegionFields on Feature {
  id
  description
  sources {
    id
    sourceType
    citation
    citationId
  }
  featureAliases
}
    `;
export const RegionRevisableFieldsDocument = gql`
    query RegionRevisableFields($featureId: Int!) {
  feature(id: $featureId) {
    ...RevisableRegionFields
  }
}
    ${RevisableRegionFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RegionRevisableFieldsGQL extends Apollo.Query<RegionRevisableFieldsQuery, RegionRevisableFieldsQueryVariables> {
    document = RegionRevisableFieldsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SuggestRegionRevisionDocument = gql`
    mutation SuggestRegionRevision($input: SuggestRegionRevisionInput!) {
  suggestRegionRevision(input: $input) {
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
  export class SuggestRegionRevisionGQL extends Apollo.Mutation<SuggestRegionRevisionMutation, SuggestRegionRevisionMutationVariables> {
    document = SuggestRegionRevisionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
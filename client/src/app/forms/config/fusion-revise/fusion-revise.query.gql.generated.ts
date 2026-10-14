/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type FusionRevisableFieldsQueryVariables = Types.Exact<{
  featureId: Types.Scalars['Int']['input'];
}>;


export type FusionRevisableFieldsQuery = { __typename: 'Query', feature?: { __typename: 'Feature', id: number, description?: string | undefined, featureAliases: Array<string>, sources: Array<{ __typename: 'Source', id: number, sourceType: Types.SourceSource, citation?: string | undefined, citationId: string }>, featureInstance:
      | { __typename: 'Factor' }
      | { __typename: 'Fusion', fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus, knownPartnerGenes: Array<{ __typename: 'Gene', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }> }
      | { __typename: 'Gene' }
      | { __typename: 'Region' }
     } | undefined };

export type RevisableFusionFieldsFragment = { __typename: 'Feature', id: number, description?: string | undefined, featureAliases: Array<string>, sources: Array<{ __typename: 'Source', id: number, sourceType: Types.SourceSource, citation?: string | undefined, citationId: string }>, featureInstance:
    | { __typename: 'Factor' }
    | { __typename: 'Fusion', fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus, knownPartnerGenes: Array<{ __typename: 'Gene', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }> }
    | { __typename: 'Gene' }
    | { __typename: 'Region' }
   };

export type SuggestFusionRevisionMutationVariables = Types.Exact<{
  input: Types.SuggestFusionRevisionInput;
}>;


export type SuggestFusionRevisionMutation = { __typename: 'Mutation', suggestFusionRevision?: { __typename: 'SuggestFusionRevisionPayload', clientMutationId?: string | undefined, results: Array<{ __typename: 'RevisionResult', newlyCreated: boolean, id: number, fieldName: string }> } | undefined };

export const RevisableFusionFieldsFragmentDoc = gql`
    fragment RevisableFusionFields on Feature {
  id
  description
  sources {
    id
    sourceType
    citation
    citationId
  }
  featureAliases
  featureInstance {
    __typename
    ... on Fusion {
      fivePrimePartnerStatus
      threePrimePartnerStatus
      knownPartnerGenes {
        id
        name
        link
        deprecated
        flagged
      }
    }
  }
}
    `;
export const FusionRevisableFieldsDocument = gql`
    query FusionRevisableFields($featureId: Int!) {
  feature(id: $featureId) {
    ...RevisableFusionFields
  }
}
    ${RevisableFusionFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FusionRevisableFieldsGQL extends Apollo.Query<FusionRevisableFieldsQuery, FusionRevisableFieldsQueryVariables> {
    document = FusionRevisableFieldsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SuggestFusionRevisionDocument = gql`
    mutation SuggestFusionRevision($input: SuggestFusionRevisionInput!) {
  suggestFusionRevision(input: $input) {
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
  export class SuggestFusionRevisionGQL extends Apollo.Mutation<SuggestFusionRevisionMutation, SuggestFusionRevisionMutationVariables> {
    document = SuggestFusionRevisionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
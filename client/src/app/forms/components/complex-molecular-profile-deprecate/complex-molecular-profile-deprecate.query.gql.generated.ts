/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DeprecateComplexMolecularProfileMutationVariables = Types.Exact<{
  molecularProfileId: Types.Scalars['Int']['input'];
  deprecationReason: Types.MolecularProfileDeprecationReasonMutationInput;
  comment: Types.Scalars['String']['input'];
  organizationId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type DeprecateComplexMolecularProfileMutation = { __typename: 'Mutation', deprecateComplexMolecularProfile?: { __typename: 'DeprecateComplexMolecularProfilePayload', molecularProfile?: { __typename: 'MolecularProfile', id: number, name: string } | undefined } | undefined };

export type EvidenceCountsForMolecularProfileQueryVariables = Types.Exact<{
  molecularProfileId: Types.Scalars['Int']['input'];
}>;


export type EvidenceCountsForMolecularProfileQuery = { __typename: 'Query', molecularProfile?: { __typename: 'MolecularProfile', id: number, name: string, link: string, evidenceCountsByStatus: { __typename: 'EvidenceItemsByStatus', submittedCount: number, acceptedCount: number } } | undefined };

export const DeprecateComplexMolecularProfileDocument = gql`
    mutation DeprecateComplexMolecularProfile($molecularProfileId: Int!, $deprecationReason: MolecularProfileDeprecationReasonMutationInput!, $comment: String!, $organizationId: Int) {
  deprecateComplexMolecularProfile(
    input: {molecularProfileId: $molecularProfileId, deprecationReason: $deprecationReason, comment: $comment, organizationId: $organizationId}
  ) {
    molecularProfile {
      id
      name
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeprecateComplexMolecularProfileGQL extends Apollo.Mutation<DeprecateComplexMolecularProfileMutation, DeprecateComplexMolecularProfileMutationVariables> {
    document = DeprecateComplexMolecularProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EvidenceCountsForMolecularProfileDocument = gql`
    query EvidenceCountsForMolecularProfile($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    id
    name
    link
    evidenceCountsByStatus {
      submittedCount
      acceptedCount
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EvidenceCountsForMolecularProfileGQL extends Apollo.Query<EvidenceCountsForMolecularProfileQuery, EvidenceCountsForMolecularProfileQueryVariables> {
    document = EvidenceCountsForMolecularProfileDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
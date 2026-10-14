/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type AssertionRevisableFieldsQueryVariables = Types.Exact<{
  assertionId: Types.Scalars['Int']['input'];
}>;


export type AssertionRevisableFieldsQuery = { __typename: 'Query', assertion?: { __typename: 'Assertion', id: number, summary: string, description: string, variantOrigin: Types.VariantOrigin, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, assertionDirection: Types.AssertionDirection, assertionType: Types.AssertionType, ampLevel?: Types.AmpLevel | undefined, nccnGuidelineVersion?: string | undefined, regulatoryApproval?: boolean | undefined, fdaCompanionTest?: boolean | undefined, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string }, disease?: { __typename: 'Disease', id: number, doid?: string | undefined, name: string, displayName: string, link: string } | undefined, therapies: Array<{ __typename: 'Therapy', id: number, ncitId?: string | undefined, name: string, link: string }>, phenotypes: Array<{ __typename: 'Phenotype', id: number, hpoId: string, name: string }>, acmgCodes: Array<{ __typename: 'AcmgCode', id: number, name: string, code: string, description: string, tooltip: string }>, clingenCodes: Array<{ __typename: 'ClingenCode', id: number, code: string, description: string, name: string, tooltip: string, exclusive: boolean }>, nccnGuideline?: { __typename: 'NccnGuideline', id: number, name: string } | undefined, evidenceItems: Array<{ __typename: 'EvidenceItem', id: number, name: string, link: string, status: Types.EvidenceStatus }> } | undefined };

export type RevisableAssertionFieldsFragment = { __typename: 'Assertion', id: number, summary: string, description: string, variantOrigin: Types.VariantOrigin, significance: Types.AssertionSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, assertionDirection: Types.AssertionDirection, assertionType: Types.AssertionType, ampLevel?: Types.AmpLevel | undefined, nccnGuidelineVersion?: string | undefined, regulatoryApproval?: boolean | undefined, fdaCompanionTest?: boolean | undefined, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string }, disease?: { __typename: 'Disease', id: number, doid?: string | undefined, name: string, displayName: string, link: string } | undefined, therapies: Array<{ __typename: 'Therapy', id: number, ncitId?: string | undefined, name: string, link: string }>, phenotypes: Array<{ __typename: 'Phenotype', id: number, hpoId: string, name: string }>, acmgCodes: Array<{ __typename: 'AcmgCode', id: number, name: string, code: string, description: string, tooltip: string }>, clingenCodes: Array<{ __typename: 'ClingenCode', id: number, code: string, description: string, name: string, tooltip: string, exclusive: boolean }>, nccnGuideline?: { __typename: 'NccnGuideline', id: number, name: string } | undefined, evidenceItems: Array<{ __typename: 'EvidenceItem', id: number, name: string, link: string, status: Types.EvidenceStatus }> };

export type SuggestAssertionRevisionMutationVariables = Types.Exact<{
  input: Types.SuggestAssertionRevisionInput;
}>;


export type SuggestAssertionRevisionMutation = { __typename: 'Mutation', suggestAssertionRevision?: { __typename: 'SuggestAssertionRevisionPayload', clientMutationId?: string | undefined, assertion: { __typename: 'Assertion', id: number }, results: Array<{ __typename: 'RevisionResult', newlyCreated: boolean }> } | undefined };

export const RevisableAssertionFieldsFragmentDoc = gql`
    fragment RevisableAssertionFields on Assertion {
  id
  summary
  description
  molecularProfile {
    id
    name
    link
  }
  variantOrigin
  significance
  disease {
    id
    doid
    name
    displayName
    link
  }
  therapies {
    id
    ncitId
    name
    link
  }
  therapyInteractionType
  assertionDirection
  assertionType
  phenotypes {
    id
    hpoId
    name
  }
  ampLevel
  acmgCodes {
    id
    name
    code
    description
    tooltip
  }
  clingenCodes {
    id
    code
    description
    name
    tooltip
    exclusive
  }
  nccnGuideline {
    id
    name
  }
  nccnGuidelineVersion
  regulatoryApproval
  fdaCompanionTest
  evidenceItems {
    id
    name
    link
    status
  }
}
    `;
export const AssertionRevisableFieldsDocument = gql`
    query AssertionRevisableFields($assertionId: Int!) {
  assertion(id: $assertionId) {
    ...RevisableAssertionFields
  }
}
    ${RevisableAssertionFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AssertionRevisableFieldsGQL extends Apollo.Query<AssertionRevisableFieldsQuery, AssertionRevisableFieldsQueryVariables> {
    document = AssertionRevisableFieldsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SuggestAssertionRevisionDocument = gql`
    mutation SuggestAssertionRevision($input: SuggestAssertionRevisionInput!) {
  suggestAssertionRevision(input: $input) {
    clientMutationId
    assertion {
      id
    }
    results {
      newlyCreated
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SuggestAssertionRevisionGQL extends Apollo.Mutation<SuggestAssertionRevisionMutation, SuggestAssertionRevisionMutationVariables> {
    document = SuggestAssertionRevisionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
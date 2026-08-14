/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type EvidenceFieldsFromSourceSuggestionQueryVariables = Types.Exact<{
  sourceId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  molecularProfileId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  diseaseId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type EvidenceFieldsFromSourceSuggestionQuery = { __typename: 'Query', sourceSuggestionValues: { __typename: 'SourceSuggestionValues', molecularProfile?: { __typename: 'MolecularProfile', id: number, name: string, link: string } | undefined, disease?: { __typename: 'Disease', id: number, name: string, link: string } | undefined, source?: { __typename: 'Source', id: number, sourceType: Types.SourceSource, citationId: string, citation?: string | undefined, link: string, deprecated: boolean } | undefined } };

export type EvidenceSubmittableFieldsQueryVariables = Types.Exact<{
  evidenceId: Types.Scalars['Int']['input'];
}>;


export type EvidenceSubmittableFieldsQuery = { __typename: 'Query', evidenceItem?: { __typename: 'EvidenceItem', id: number, description: string, variantOrigin: Types.VariantOrigin, evidenceType: Types.EvidenceType, significance: Types.EvidenceSignificance, evidenceLevel: Types.EvidenceLevel, evidenceDirection: Types.EvidenceDirection, evidenceRating?: number | undefined, therapyInteractionType?: Types.TherapyInteraction | undefined, source: { __typename: 'Source', id: number, citation?: string | undefined, sourceType: Types.SourceSource, deprecated: boolean }, phenotypes: Array<{ __typename: 'Phenotype', id: number, name: string }>, therapies: Array<{ __typename: 'Therapy', id: number, name: string }>, disease?: { __typename: 'Disease', id: number, name: string } | undefined } | undefined };

export type SubmittableEvidenceFieldsFragment = { __typename: 'EvidenceItem', id: number, description: string, variantOrigin: Types.VariantOrigin, evidenceType: Types.EvidenceType, significance: Types.EvidenceSignificance, evidenceLevel: Types.EvidenceLevel, evidenceDirection: Types.EvidenceDirection, evidenceRating?: number | undefined, therapyInteractionType?: Types.TherapyInteraction | undefined, source: { __typename: 'Source', id: number, citation?: string | undefined, sourceType: Types.SourceSource, deprecated: boolean }, phenotypes: Array<{ __typename: 'Phenotype', id: number, name: string }>, therapies: Array<{ __typename: 'Therapy', id: number, name: string }>, disease?: { __typename: 'Disease', id: number, name: string } | undefined };

export type SubmitEvidenceItemMutationVariables = Types.Exact<{
  input: Types.SubmitEvidenceItemInput;
}>;


export type SubmitEvidenceItemMutation = { __typename: 'Mutation', submitEvidence?: { __typename: 'SubmitEvidenceItemPayload', clientMutationId?: string | undefined, evidenceItem: { __typename: 'EvidenceItem', id: number } } | undefined };

export const SubmittableEvidenceFieldsFragmentDoc = gql`
    fragment SubmittableEvidenceFields on EvidenceItem {
  id
  description
  variantOrigin
  evidenceType
  significance
  evidenceLevel
  evidenceDirection
  evidenceRating
  therapyInteractionType
  source {
    id
    citation
    sourceType
    deprecated
  }
  phenotypes {
    id
    name
  }
  therapies {
    id
    name
  }
  disease {
    id
    name
  }
}
    `;
export const EvidenceFieldsFromSourceSuggestionDocument = gql`
    query EvidenceFieldsFromSourceSuggestion($sourceId: Int, $molecularProfileId: Int, $diseaseId: Int) {
  sourceSuggestionValues(
    molecularProfileId: $molecularProfileId
    diseaseId: $diseaseId
    sourceId: $sourceId
  ) {
    molecularProfile {
      id
      name
      link
    }
    disease {
      id
      name
      link
    }
    source {
      id
      sourceType
      citationId
      citation
      link
      deprecated
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EvidenceFieldsFromSourceSuggestionGQL extends Apollo.Query<EvidenceFieldsFromSourceSuggestionQuery, EvidenceFieldsFromSourceSuggestionQueryVariables> {
    document = EvidenceFieldsFromSourceSuggestionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EvidenceSubmittableFieldsDocument = gql`
    query EvidenceSubmittableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...SubmittableEvidenceFields
  }
}
    ${SubmittableEvidenceFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EvidenceSubmittableFieldsGQL extends Apollo.Query<EvidenceSubmittableFieldsQuery, EvidenceSubmittableFieldsQueryVariables> {
    document = EvidenceSubmittableFieldsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SubmitEvidenceItemDocument = gql`
    mutation SubmitEvidenceItem($input: SubmitEvidenceItemInput!) {
  submitEvidence(input: $input) {
    clientMutationId
    evidenceItem {
      id
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SubmitEvidenceItemGQL extends Apollo.Mutation<SubmitEvidenceItemMutation, SubmitEvidenceItemMutationVariables> {
    document = SubmitEvidenceItemDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
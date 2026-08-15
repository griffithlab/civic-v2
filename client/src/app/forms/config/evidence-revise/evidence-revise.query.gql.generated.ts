/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { MolecularProfileSelectTypeaheadFieldsFragmentDoc } from '../../types/molecular-profile-select/molecular-profile-select.query.gql.generated';
import { DiseaseSelectTypeaheadFieldsFragmentDoc } from '../../types/disease-select/disease-select.query.gql.generated';
import { TherapySelectTypeaheadFieldsFragmentDoc } from '../../types/therapy-select/therapy-select.query.gql.generated';
import { PhenotypeSelectTypeaheadFieldsFragmentDoc } from '../../types/phenotype-select/phenotype-select.query.gql.generated';
import { SourceSelectTypeaheadFieldsFragmentDoc } from '../../types/source-select/source-select.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type EvidenceItemRevisableFieldsQueryVariables = Types.Exact<{
  evidenceId: Types.Scalars['Int']['input'];
}>;


export type EvidenceItemRevisableFieldsQuery = { __typename: 'Query', evidenceItem?: { __typename: 'EvidenceItem', id: number, variantOrigin: Types.VariantOrigin, description: string, significance: Types.EvidenceSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, evidenceDirection: Types.EvidenceDirection, evidenceLevel: Types.EvidenceLevel, evidenceType: Types.EvidenceType, evidenceRating?: number | undefined, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string>, deprecated: boolean, flagged: boolean }, disease?: { __typename: 'Disease', doid?: string | undefined, diseaseAliases: Array<string>, id: number, name: string, link: string, deprecated: boolean } | undefined, therapies: Array<{ __typename: 'Therapy', ncitId?: string | undefined, therapyAliases: Array<string>, id: number, name: string, link: string, deprecated: boolean }>, phenotypes: Array<{ __typename: 'Phenotype', hpoId: string, id: number, name: string, link: string }>, source: { __typename: 'Source', citationId: string, id: number, name: string, link: string, deprecated: boolean, citation?: string | undefined, sourceType: Types.SourceSource } } | undefined };

export type RevisableEvidenceFieldsFragment = { __typename: 'EvidenceItem', id: number, variantOrigin: Types.VariantOrigin, description: string, significance: Types.EvidenceSignificance, therapyInteractionType?: Types.TherapyInteraction | undefined, evidenceDirection: Types.EvidenceDirection, evidenceLevel: Types.EvidenceLevel, evidenceType: Types.EvidenceType, evidenceRating?: number | undefined, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string>, deprecated: boolean, flagged: boolean }, disease?: { __typename: 'Disease', doid?: string | undefined, diseaseAliases: Array<string>, id: number, name: string, link: string, deprecated: boolean } | undefined, therapies: Array<{ __typename: 'Therapy', ncitId?: string | undefined, therapyAliases: Array<string>, id: number, name: string, link: string, deprecated: boolean }>, phenotypes: Array<{ __typename: 'Phenotype', hpoId: string, id: number, name: string, link: string }>, source: { __typename: 'Source', citationId: string, id: number, name: string, link: string, deprecated: boolean, citation?: string | undefined, sourceType: Types.SourceSource } };

export type SuggestEvidenceItemRevisionMutationVariables = Types.Exact<{
  input: Types.SuggestEvidenceItemRevisionInput;
}>;


export type SuggestEvidenceItemRevisionMutation = { __typename: 'Mutation', suggestEvidenceItemRevision?: { __typename: 'SuggestEvidenceItemRevisionPayload', clientMutationId?: string | undefined, evidenceItem: { __typename: 'EvidenceItem', id: number }, results: Array<{ __typename: 'RevisionResult', newlyCreated: boolean }> } | undefined };

export const RevisableEvidenceFieldsFragmentDoc = gql`
    fragment RevisableEvidenceFields on EvidenceItem {
  id
  molecularProfile {
    ...MolecularProfileSelectTypeaheadFields
  }
  variantOrigin
  description
  significance
  disease {
    ...DiseaseSelectTypeaheadFields
  }
  therapies {
    ...TherapySelectTypeaheadFields
  }
  therapyInteractionType
  evidenceDirection
  evidenceLevel
  evidenceType
  phenotypes {
    ...PhenotypeSelectTypeaheadFields
  }
  evidenceRating
  source {
    ...SourceSelectTypeaheadFields
  }
}
    ${MolecularProfileSelectTypeaheadFieldsFragmentDoc}
${DiseaseSelectTypeaheadFieldsFragmentDoc}
${TherapySelectTypeaheadFieldsFragmentDoc}
${PhenotypeSelectTypeaheadFieldsFragmentDoc}
${SourceSelectTypeaheadFieldsFragmentDoc}`;
export const EvidenceItemRevisableFieldsDocument = gql`
    query EvidenceItemRevisableFields($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...RevisableEvidenceFields
  }
}
    ${RevisableEvidenceFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EvidenceItemRevisableFieldsGQL extends Apollo.Query<EvidenceItemRevisableFieldsQuery, EvidenceItemRevisableFieldsQueryVariables> {
    document = EvidenceItemRevisableFieldsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const SuggestEvidenceItemRevisionDocument = gql`
    mutation SuggestEvidenceItemRevision($input: SuggestEvidenceItemRevisionInput!) {
  suggestEvidenceItemRevision(input: $input) {
    clientMutationId
    evidenceItem {
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
  export class SuggestEvidenceItemRevisionGQL extends Apollo.Mutation<SuggestEvidenceItemRevisionMutation, SuggestEvidenceItemRevisionMutationVariables> {
    document = SuggestEvidenceItemRevisionDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
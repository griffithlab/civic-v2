/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DiseasesSummaryQueryVariables = Types.Exact<{
  diseaseId: Types.Scalars['Int']['input'];
}>;


export type DiseasesSummaryQuery = { __typename: 'Query', disease?: { __typename: 'Disease', id: number, name: string, doid?: string | undefined, diseaseUrl?: string | undefined, displayName: string, diseaseAliases: Array<string>, link: string, deprecated: boolean, myDiseaseInfo?: { __typename: 'MyDiseaseInfo', diseaseOntologyExactSynonyms: Array<string>, diseaseOntologyRelatedSynonyms: Array<string>, mesh?: string | undefined, icdo?: string | undefined, icd10?: string | undefined, ncit: Array<string>, omim?: string | undefined, doDef?: string | undefined, doDefCitations: Array<string>, mondoDef?: string | undefined, mondoId?: string | undefined } | undefined } | undefined };

export type MyDiseaseInfoFieldsFragment = { __typename: 'MyDiseaseInfo', diseaseOntologyExactSynonyms: Array<string>, diseaseOntologyRelatedSynonyms: Array<string>, mesh?: string | undefined, icdo?: string | undefined, icd10?: string | undefined, ncit: Array<string>, omim?: string | undefined, doDef?: string | undefined, doDefCitations: Array<string>, mondoDef?: string | undefined, mondoId?: string | undefined };

export type DiseasesSummaryFieldsFragment = { __typename: 'Disease', id: number, name: string, doid?: string | undefined, diseaseUrl?: string | undefined, displayName: string, diseaseAliases: Array<string>, link: string, deprecated: boolean, myDiseaseInfo?: { __typename: 'MyDiseaseInfo', diseaseOntologyExactSynonyms: Array<string>, diseaseOntologyRelatedSynonyms: Array<string>, mesh?: string | undefined, icdo?: string | undefined, icd10?: string | undefined, ncit: Array<string>, omim?: string | undefined, doDef?: string | undefined, doDefCitations: Array<string>, mondoDef?: string | undefined, mondoId?: string | undefined } | undefined };

export const MyDiseaseInfoFieldsFragmentDoc = gql`
    fragment MyDiseaseInfoFields on MyDiseaseInfo {
  diseaseOntologyExactSynonyms
  diseaseOntologyRelatedSynonyms
  mesh
  icdo
  icd10
  ncit
  omim
  doDef
  doDefCitations
  mondoDef
  mondoId
}
    `;
export const DiseasesSummaryFieldsFragmentDoc = gql`
    fragment DiseasesSummaryFields on Disease {
  id
  name
  doid
  diseaseUrl
  displayName
  diseaseAliases
  link
  myDiseaseInfo {
    ...MyDiseaseInfoFields
  }
  deprecated
}
    ${MyDiseaseInfoFieldsFragmentDoc}`;
export const DiseasesSummaryDocument = gql`
    query DiseasesSummary($diseaseId: Int!) {
  disease(id: $diseaseId) {
    ...DiseasesSummaryFields
  }
}
    ${DiseasesSummaryFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class DiseasesSummaryGQL extends Apollo.Query<DiseasesSummaryQuery, DiseasesSummaryQueryVariables> {
    document = DiseasesSummaryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
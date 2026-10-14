/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type TherapiesSummaryQueryVariables = Types.Exact<{
  therapyId: Types.Scalars['Int']['input'];
}>;


export type TherapiesSummaryQuery = { __typename: 'Query', therapy?: { __typename: 'Therapy', id: number, name: string, description?: string | undefined, ncitId?: string | undefined, therapyUrl?: string | undefined, therapyAliases: Array<string>, link: string, myChemInfo?: { __typename: 'MyChemInfo', chebiId?: string | undefined, chebiDefinition?: string | undefined, firstApproval?: string | undefined, chemblMoleculeType?: string | undefined, chemblId?: string | undefined, pubchemCid?: string | undefined, pharmgkbId?: string | undefined, rxnorm?: string | undefined, inchikey?: string | undefined, drugbankId?: string | undefined, indications: Array<string>, fdaEpcCodes: Array<{ __typename: 'FdaCode', code: string, description: string }>, fdaMoaCodes: Array<{ __typename: 'FdaCode', code: string, description: string }> } | undefined } | undefined };

export type TherapiesSummaryFieldsFragment = { __typename: 'Therapy', id: number, name: string, description?: string | undefined, ncitId?: string | undefined, therapyUrl?: string | undefined, therapyAliases: Array<string>, link: string, myChemInfo?: { __typename: 'MyChemInfo', chebiId?: string | undefined, chebiDefinition?: string | undefined, firstApproval?: string | undefined, chemblMoleculeType?: string | undefined, chemblId?: string | undefined, pubchemCid?: string | undefined, pharmgkbId?: string | undefined, rxnorm?: string | undefined, inchikey?: string | undefined, drugbankId?: string | undefined, indications: Array<string>, fdaEpcCodes: Array<{ __typename: 'FdaCode', code: string, description: string }>, fdaMoaCodes: Array<{ __typename: 'FdaCode', code: string, description: string }> } | undefined };

export type MyChemInfoFieldsFragment = { __typename: 'MyChemInfo', chebiId?: string | undefined, chebiDefinition?: string | undefined, firstApproval?: string | undefined, chemblMoleculeType?: string | undefined, chemblId?: string | undefined, pubchemCid?: string | undefined, pharmgkbId?: string | undefined, rxnorm?: string | undefined, inchikey?: string | undefined, drugbankId?: string | undefined, indications: Array<string>, fdaEpcCodes: Array<{ __typename: 'FdaCode', code: string, description: string }>, fdaMoaCodes: Array<{ __typename: 'FdaCode', code: string, description: string }> };

export const MyChemInfoFieldsFragmentDoc = gql`
    fragment MyChemInfoFields on MyChemInfo {
  chebiId
  chebiDefinition
  fdaEpcCodes {
    code
    description
  }
  fdaMoaCodes {
    code
    description
  }
  firstApproval
  chemblMoleculeType
  chemblId
  pubchemCid
  pharmgkbId
  rxnorm
  inchikey
  drugbankId
  indications
}
    `;
export const TherapiesSummaryFieldsFragmentDoc = gql`
    fragment TherapiesSummaryFields on Therapy {
  id
  name
  description
  ncitId
  therapyUrl
  therapyAliases
  link
  myChemInfo {
    ...MyChemInfoFields
  }
}
    ${MyChemInfoFieldsFragmentDoc}`;
export const TherapiesSummaryDocument = gql`
    query TherapiesSummary($therapyId: Int!) {
  therapy(id: $therapyId) {
    ...TherapiesSummaryFields
  }
}
    ${TherapiesSummaryFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class TherapiesSummaryGQL extends Apollo.Query<TherapiesSummaryQuery, TherapiesSummaryQueryVariables> {
    document = TherapiesSummaryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
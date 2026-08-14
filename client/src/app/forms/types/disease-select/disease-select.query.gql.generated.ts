/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { LinkableDiseaseFragmentDoc } from '../../../tags/linkable.fragments.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type DiseaseSelectTypeaheadQueryVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
}>;


export type DiseaseSelectTypeaheadQuery = { __typename: 'Query', diseaseTypeahead: Array<{ __typename: 'Disease', doid?: string | undefined, diseaseAliases: Array<string>, id: number, name: string, link: string, deprecated: boolean }> };

export type DiseaseSelectTagQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type DiseaseSelectTagQuery = { __typename: 'Query', disease?: { __typename: 'Disease', doid?: string | undefined, diseaseAliases: Array<string>, id: number, name: string, link: string, deprecated: boolean } | undefined };

export type DiseaseSelectTypeaheadFieldsFragment = { __typename: 'Disease', doid?: string | undefined, diseaseAliases: Array<string>, id: number, name: string, link: string, deprecated: boolean };

export const DiseaseSelectTypeaheadFieldsFragmentDoc = gql`
    fragment DiseaseSelectTypeaheadFields on Disease {
  ...LinkableDisease
  doid
  diseaseAliases
}
    ${LinkableDiseaseFragmentDoc}`;
export const DiseaseSelectTypeaheadDocument = gql`
    query DiseaseSelectTypeahead($name: String!) {
  diseaseTypeahead(queryTerm: $name) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${DiseaseSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class DiseaseSelectTypeaheadGQL extends Apollo.Query<DiseaseSelectTypeaheadQuery, DiseaseSelectTypeaheadQueryVariables> {
    document = DiseaseSelectTypeaheadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const DiseaseSelectTagDocument = gql`
    query DiseaseSelectTag($id: Int!) {
  disease(id: $id) {
    ...DiseaseSelectTypeaheadFields
  }
}
    ${DiseaseSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class DiseaseSelectTagGQL extends Apollo.Query<DiseaseSelectTagQuery, DiseaseSelectTagQueryVariables> {
    document = DiseaseSelectTagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
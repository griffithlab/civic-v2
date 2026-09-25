/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { LinkablePhenotypeFragmentDoc } from '../../../tags/linkable.fragments.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type PhenotypeSelectTypeaheadQueryVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
}>;


export type PhenotypeSelectTypeaheadQuery = { __typename: 'Query', phenotypeTypeahead: Array<{ __typename: 'Phenotype', hpoId: string, id: number, name: string, link: string }> };

export type PhenotypeSelectTagQueryVariables = Types.Exact<{
  id: Types.Scalars['Int']['input'];
}>;


export type PhenotypeSelectTagQuery = { __typename: 'Query', phenotype?: { __typename: 'Phenotype', hpoId: string, id: number, name: string, link: string } | undefined };

export type PhenotypeSelectTypeaheadFieldsFragment = { __typename: 'Phenotype', hpoId: string, id: number, name: string, link: string };

export const PhenotypeSelectTypeaheadFieldsFragmentDoc = gql`
    fragment PhenotypeSelectTypeaheadFields on Phenotype {
  ...LinkablePhenotype
  hpoId
}
    ${LinkablePhenotypeFragmentDoc}`;
export const PhenotypeSelectTypeaheadDocument = gql`
    query PhenotypeSelectTypeahead($name: String!) {
  phenotypeTypeahead(queryTerm: $name) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${PhenotypeSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PhenotypeSelectTypeaheadGQL extends Apollo.Query<PhenotypeSelectTypeaheadQuery, PhenotypeSelectTypeaheadQueryVariables> {
    document = PhenotypeSelectTypeaheadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const PhenotypeSelectTagDocument = gql`
    query PhenotypeSelectTag($id: Int!) {
  phenotype(id: $id) {
    ...PhenotypeSelectTypeaheadFields
  }
}
    ${PhenotypeSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class PhenotypeSelectTagGQL extends Apollo.Query<PhenotypeSelectTagQuery, PhenotypeSelectTagQueryVariables> {
    document = PhenotypeSelectTagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
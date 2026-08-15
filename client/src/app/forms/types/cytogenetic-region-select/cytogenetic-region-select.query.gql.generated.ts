/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { LinkableCytogeneticRegionFragmentDoc } from '../../../tags/linkable.fragments.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type CytogeneticRegionSelectTypeaheadQueryVariables = Types.Exact<{
  queryTerm: Types.Scalars['String']['input'];
}>;


export type CytogeneticRegionSelectTypeaheadQuery = { __typename: 'Query', cytogeneticRegionTypeahead: Array<{ __typename: 'CytogeneticRegion', id: number, name: string }> };

export type CytogeneticRegionSelectTagQueryVariables = Types.Exact<{
  cytogeneticRegionId: Types.Scalars['Int']['input'];
}>;


export type CytogeneticRegionSelectTagQuery = { __typename: 'Query', cytogeneticRegion?: { __typename: 'CytogeneticRegion', id: number, name: string } | undefined };

export type CytogeneticRegionSelectTypeaheadFieldsFragment = { __typename: 'CytogeneticRegion', id: number, name: string };

export const CytogeneticRegionSelectTypeaheadFieldsFragmentDoc = gql`
    fragment CytogeneticRegionSelectTypeaheadFields on CytogeneticRegion {
  ...LinkableCytogeneticRegion
}
    ${LinkableCytogeneticRegionFragmentDoc}`;
export const CytogeneticRegionSelectTypeaheadDocument = gql`
    query CytogeneticRegionSelectTypeahead($queryTerm: String!) {
  cytogeneticRegionTypeahead(queryTerm: $queryTerm) {
    ...CytogeneticRegionSelectTypeaheadFields
  }
}
    ${CytogeneticRegionSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CytogeneticRegionSelectTypeaheadGQL extends Apollo.Query<CytogeneticRegionSelectTypeaheadQuery, CytogeneticRegionSelectTypeaheadQueryVariables> {
    document = CytogeneticRegionSelectTypeaheadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const CytogeneticRegionSelectTagDocument = gql`
    query CytogeneticRegionSelectTag($cytogeneticRegionId: Int!) {
  cytogeneticRegion(id: $cytogeneticRegionId) {
    ...CytogeneticRegionSelectTypeaheadFields
  }
}
    ${CytogeneticRegionSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CytogeneticRegionSelectTagGQL extends Apollo.Query<CytogeneticRegionSelectTagQuery, CytogeneticRegionSelectTagQueryVariables> {
    document = CytogeneticRegionSelectTagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
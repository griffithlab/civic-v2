/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type MolecularProfileSelectTypeaheadQueryVariables = Types.Exact<{
  name: Types.Scalars['String']['input'];
  geneId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type MolecularProfileSelectTypeaheadQuery = { __typename: 'Query', molecularProfiles: { __typename: 'MolecularProfileConnection', nodes: Array<{ __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string>, deprecated: boolean, flagged: boolean }> } };

export type MolecularProfileSelectTagQueryVariables = Types.Exact<{
  molecularProfileId: Types.Scalars['Int']['input'];
}>;


export type MolecularProfileSelectTagQuery = { __typename: 'Query', molecularProfile?: { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string>, deprecated: boolean, flagged: boolean } | undefined };

export type MolecularProfileSelectTypeaheadFieldsFragment = { __typename: 'MolecularProfile', id: number, name: string, link: string, molecularProfileAliases: Array<string>, deprecated: boolean, flagged: boolean };

export const MolecularProfileSelectTypeaheadFieldsFragmentDoc = gql`
    fragment MolecularProfileSelectTypeaheadFields on MolecularProfile {
  id
  name
  link
  molecularProfileAliases
  deprecated
  flagged
}
    `;
export const MolecularProfileSelectTypeaheadDocument = gql`
    query MolecularProfileSelectTypeahead($name: String!, $geneId: Int) {
  molecularProfiles(name: $name, geneId: $geneId, first: 25) {
    nodes {
      ...MolecularProfileSelectTypeaheadFields
    }
  }
}
    ${MolecularProfileSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MolecularProfileSelectTypeaheadGQL extends Apollo.Query<MolecularProfileSelectTypeaheadQuery, MolecularProfileSelectTypeaheadQueryVariables> {
    document = MolecularProfileSelectTypeaheadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MolecularProfileSelectTagDocument = gql`
    query MolecularProfileSelectTag($molecularProfileId: Int!) {
  molecularProfile(id: $molecularProfileId) {
    ...MolecularProfileSelectTypeaheadFields
  }
}
    ${MolecularProfileSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MolecularProfileSelectTagGQL extends Apollo.Query<MolecularProfileSelectTagQuery, MolecularProfileSelectTagQueryVariables> {
    document = MolecularProfileSelectTagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
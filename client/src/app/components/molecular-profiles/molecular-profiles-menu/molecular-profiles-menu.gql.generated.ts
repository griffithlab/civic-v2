/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type MolecularProfileMenuQueryVariables = Types.Exact<{
  geneId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  featureId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  mpName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  evidenceStatusFilter?: Types.InputMaybe<Types.AssociatedEvidenceStatusFilter>;
}>;


export type MolecularProfileMenuQuery = { __typename: 'Query', molecularProfiles: { __typename: 'MolecularProfileConnection', totalCount: number, pageInfo: { __typename: 'PageInfo', startCursor?: string | undefined, endCursor?: string | undefined, hasPreviousPage: boolean, hasNextPage: boolean }, edges: Array<{ __typename: 'MolecularProfileEdge', cursor: string, node?: { __typename: 'MolecularProfile', id: number, name: string, link: string, flagged: boolean, deprecated: boolean } | undefined }> } };

export type MenuMolecularProfileFragment = { __typename: 'MolecularProfile', id: number, name: string, link: string, flagged: boolean, deprecated: boolean };

export const MenuMolecularProfileFragmentDoc = gql`
    fragment menuMolecularProfile on MolecularProfile {
  id
  name
  link
  flagged
  deprecated
}
    `;
export const MolecularProfileMenuDocument = gql`
    query MolecularProfileMenu($geneId: Int, $featureId: Int, $mpName: String, $first: Int, $last: Int, $before: String, $after: String, $evidenceStatusFilter: AssociatedEvidenceStatusFilter) {
  molecularProfiles(
    geneId: $geneId
    featureId: $featureId
    name: $mpName
    evidenceStatusFilter: $evidenceStatusFilter
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    totalCount
    pageInfo {
      startCursor
      endCursor
      hasPreviousPage
      hasNextPage
    }
    edges {
      cursor
      node {
        ...menuMolecularProfile
      }
    }
  }
}
    ${MenuMolecularProfileFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MolecularProfileMenuGQL extends Apollo.Query<MolecularProfileMenuQuery, MolecularProfileMenuQueryVariables> {
    document = MolecularProfileMenuDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
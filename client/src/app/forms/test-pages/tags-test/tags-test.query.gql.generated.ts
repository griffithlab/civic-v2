/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type EntityTagsTestQueryVariables = Types.Exact<{
  molecularProfileId: Types.Scalars['Int']['input'];
  geneId: Types.Scalars['Int']['input'];
  variantId: Types.Scalars['Int']['input'];
  therapyId: Types.Scalars['Int']['input'];
  diseaseId: Types.Scalars['Int']['input'];
  eid: Types.Scalars['Int']['input'];
}>;


export type EntityTagsTestQuery = { __typename: 'Query', evidenceItem?: { __typename: 'EvidenceItem', id: number, name: string, link: string } | undefined, molecularProfile?: { __typename: 'MolecularProfile', id: number, name: string, link: string } | undefined, gene?: { __typename: 'Gene', id: number, name: string, link: string } | undefined, variant?:
    | { __typename: 'FactorVariant', id: number, name: string, link: string }
    | { __typename: 'FusionVariant', id: number, name: string, link: string }
    | { __typename: 'GeneVariant', id: number, name: string, link: string }
    | { __typename: 'RegionVariant', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
   | undefined, therapy?: { __typename: 'Therapy', id: number, name: string, link: string } | undefined, disease?: { __typename: 'Disease', id: number, name: string, link: string } | undefined };

export const EntityTagsTestDocument = gql`
    query EntityTagsTest($molecularProfileId: Int!, $geneId: Int!, $variantId: Int!, $therapyId: Int!, $diseaseId: Int!, $eid: Int!) {
  evidenceItem(id: $eid) {
    id
    name
    link
  }
  molecularProfile(id: $molecularProfileId) {
    id
    name
    link
  }
  gene(id: $geneId) {
    id
    name
    link
  }
  variant(id: $variantId) {
    id
    name
    link
  }
  therapy(id: $therapyId) {
    id
    name
    link
  }
  disease(id: $diseaseId) {
    id
    name
    link
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EntityTagsTestGQL extends Apollo.Query<EntityTagsTestQuery, EntityTagsTestQueryVariables> {
    document = EntityTagsTestDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
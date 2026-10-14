/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type LinkableGeneQueryVariables = Types.Exact<{
  geneId: Types.Scalars['Int']['input'];
}>;


export type LinkableGeneQuery = { __typename: 'Query', gene?: { __typename: 'Gene', id: number, name: string, link: string } | undefined };

export type LinkableVariantQueryVariables = Types.Exact<{
  variantId: Types.Scalars['Int']['input'];
}>;


export type LinkableVariantQuery = { __typename: 'Query', variant?:
    | { __typename: 'FactorVariant', id: number, name: string, link: string }
    | { __typename: 'FusionVariant', id: number, name: string, link: string }
    | { __typename: 'GeneVariant', id: number, name: string, link: string }
    | { __typename: 'RegionVariant', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
   | undefined };

export type LinkableTherapyQueryVariables = Types.Exact<{
  therapyId: Types.Scalars['Int']['input'];
}>;


export type LinkableTherapyQuery = { __typename: 'Query', therapy?: { __typename: 'Therapy', id: number, name: string, link: string } | undefined };

export type LinkableFeatureQueryVariables = Types.Exact<{
  featureId: Types.Scalars['Int']['input'];
}>;


export type LinkableFeatureQuery = { __typename: 'Query', feature?: { __typename: 'Feature', id: number, name: string, link: string, featureType: Types.FeatureInstanceTypes } | undefined };

export const LinkableGeneDocument = gql`
    query LinkableGene($geneId: Int!) {
  gene(id: $geneId) {
    id
    name
    link
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LinkableGeneGQL extends Apollo.Query<LinkableGeneQuery, LinkableGeneQueryVariables> {
    document = LinkableGeneDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LinkableVariantDocument = gql`
    query LinkableVariant($variantId: Int!) {
  variant(id: $variantId) {
    id
    name
    link
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LinkableVariantGQL extends Apollo.Query<LinkableVariantQuery, LinkableVariantQueryVariables> {
    document = LinkableVariantDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LinkableTherapyDocument = gql`
    query LinkableTherapy($therapyId: Int!) {
  therapy(id: $therapyId) {
    id
    name
    link
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LinkableTherapyGQL extends Apollo.Query<LinkableTherapyQuery, LinkableTherapyQueryVariables> {
    document = LinkableTherapyDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LinkableFeatureDocument = gql`
    query LinkableFeature($featureId: Int!) {
  feature(id: $featureId) {
    id
    name
    link
    featureType
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LinkableFeatureGQL extends Apollo.Query<LinkableFeatureQuery, LinkableFeatureQueryVariables> {
    document = LinkableFeatureDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
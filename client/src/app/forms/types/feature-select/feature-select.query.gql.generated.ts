/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type FeatureSelectTypeaheadQueryVariables = Types.Exact<{
  queryTerm: Types.Scalars['String']['input'];
  featureType?: Types.InputMaybe<Types.FeatureInstanceTypes>;
}>;


export type FeatureSelectTypeaheadQuery = { __typename: 'Query', featureTypeahead: Array<{ __typename: 'Feature', id: number, name: string, featureAliases: Array<string>, link: string, featureType: Types.FeatureInstanceTypes, featureInstance:
      | { __typename: 'Factor', ncitId?: string | undefined }
      | { __typename: 'Fusion', fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus }
      | { __typename: 'Gene', entrezId: number }
      | { __typename: 'Region' }
     }> };

export type FeatureSelectTagQueryVariables = Types.Exact<{
  featureId: Types.Scalars['Int']['input'];
}>;


export type FeatureSelectTagQuery = { __typename: 'Query', feature?: { __typename: 'Feature', id: number, name: string, featureAliases: Array<string>, link: string, featureType: Types.FeatureInstanceTypes, featureInstance:
      | { __typename: 'Factor', ncitId?: string | undefined }
      | { __typename: 'Fusion', fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus }
      | { __typename: 'Gene', entrezId: number }
      | { __typename: 'Region' }
     } | undefined };

export type FeatureSelectTypeaheadFieldsFragment = { __typename: 'Feature', id: number, name: string, featureAliases: Array<string>, link: string, featureType: Types.FeatureInstanceTypes, featureInstance:
    | { __typename: 'Factor', ncitId?: string | undefined }
    | { __typename: 'Fusion', fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus }
    | { __typename: 'Gene', entrezId: number }
    | { __typename: 'Region' }
   };

export const FeatureSelectTypeaheadFieldsFragmentDoc = gql`
    fragment FeatureSelectTypeaheadFields on Feature {
  id
  name
  featureAliases
  link
  featureType
  featureInstance {
    __typename
    ... on Gene {
      entrezId
    }
    ... on Factor {
      ncitId
    }
    ... on Fusion {
      fivePrimePartnerStatus
      threePrimePartnerStatus
    }
  }
}
    `;
export const FeatureSelectTypeaheadDocument = gql`
    query FeatureSelectTypeahead($queryTerm: String!, $featureType: FeatureInstanceTypes) {
  featureTypeahead(queryTerm: $queryTerm, featureType: $featureType) {
    ...FeatureSelectTypeaheadFields
  }
}
    ${FeatureSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FeatureSelectTypeaheadGQL extends Apollo.Query<FeatureSelectTypeaheadQuery, FeatureSelectTypeaheadQueryVariables> {
    document = FeatureSelectTypeaheadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FeatureSelectTagDocument = gql`
    query FeatureSelectTag($featureId: Int!) {
  feature(id: $featureId) {
    ...FeatureSelectTypeaheadFields
  }
}
    ${FeatureSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FeatureSelectTagGQL extends Apollo.Query<FeatureSelectTagQuery, FeatureSelectTagQueryVariables> {
    document = FeatureSelectTagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
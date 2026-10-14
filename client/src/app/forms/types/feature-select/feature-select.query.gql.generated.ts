/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { LinkableFeatureFragmentDoc } from '../../../tags/linkable.fragments.gql.generated';
import { FeatureInstanceRefFragmentDoc } from '../../../graphql/feature-instance.fragments.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type FeatureSelectTypeaheadQueryVariables = Types.Exact<{
  queryTerm: Types.Scalars['String']['input'];
  featureType?: Types.InputMaybe<Types.FeatureInstanceTypes>;
}>;


export type FeatureSelectTypeaheadQuery = { __typename: 'Query', featureTypeahead: Array<{ __typename: 'Feature', featureAliases: Array<string>, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, featureType: Types.FeatureInstanceTypes, featureInstance:
      | { __typename: 'Factor', ncitId?: string | undefined, id: number }
      | { __typename: 'Fusion', fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus, id: number }
      | { __typename: 'Gene', entrezId: number, id: number }
      | { __typename: 'Region', id: number }
     }> };

export type FeatureSelectTagQueryVariables = Types.Exact<{
  featureId: Types.Scalars['Int']['input'];
}>;


export type FeatureSelectTagQuery = { __typename: 'Query', feature?: { __typename: 'Feature', featureAliases: Array<string>, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, featureType: Types.FeatureInstanceTypes, featureInstance:
      | { __typename: 'Factor', ncitId?: string | undefined, id: number }
      | { __typename: 'Fusion', fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus, id: number }
      | { __typename: 'Gene', entrezId: number, id: number }
      | { __typename: 'Region', id: number }
     } | undefined };

export type FeatureSelectTypeaheadFieldsFragment = { __typename: 'Feature', featureAliases: Array<string>, id: number, name: string, link: string, flagged: boolean, deprecated: boolean, featureType: Types.FeatureInstanceTypes, featureInstance:
    | { __typename: 'Factor', ncitId?: string | undefined, id: number }
    | { __typename: 'Fusion', fivePrimePartnerStatus: Types.FusionPartnerStatus, threePrimePartnerStatus: Types.FusionPartnerStatus, id: number }
    | { __typename: 'Gene', entrezId: number, id: number }
    | { __typename: 'Region', id: number }
   };

export const FeatureSelectTypeaheadFieldsFragmentDoc = gql`
    fragment FeatureSelectTypeaheadFields on Feature {
  ...LinkableFeature
  featureAliases
  featureInstance {
    ...FeatureInstanceRef
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
    ${LinkableFeatureFragmentDoc}
${FeatureInstanceRefFragmentDoc}`;
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
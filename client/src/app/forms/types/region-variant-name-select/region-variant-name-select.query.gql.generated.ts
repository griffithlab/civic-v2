/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type RegionVariantNameForFeatureQueryVariables = Types.Exact<{
  featureId: Types.Scalars['Int']['input'];
}>;


export type RegionVariantNameForFeatureQuery = { __typename: 'Query', regionVariantNamesForFeatureId?: Array<Types.RegionVariantName> | undefined };

export const RegionVariantNameForFeatureDocument = gql`
    query RegionVariantNameForFeature($featureId: Int!) {
  regionVariantNamesForFeatureId(featureId: $featureId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RegionVariantNameForFeatureGQL extends Apollo.Query<RegionVariantNameForFeatureQuery, RegionVariantNameForFeatureQueryVariables> {
    document = RegionVariantNameForFeatureDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
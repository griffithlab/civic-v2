/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { FeatureInstanceRefFragmentDoc } from '../../../graphql/feature-instance.fragments.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type FeaturePopoverQueryVariables = Types.Exact<{
  featureId: Types.Scalars['Int']['input'];
}>;


export type FeaturePopoverQuery = { __typename: 'Query', feature?: { __typename: 'Feature', id: number, name: string, fullName?: string | undefined, featureAliases: Array<string>, featureInstance:
      | { __typename: 'Factor', id: number }
      | { __typename: 'Fusion', id: number }
      | { __typename: 'Gene', id: number }
      | { __typename: 'Region', id: number }
    , revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number }, stats: { __typename: 'FeatureStats', variantCount: number, molecularProfileCount: number, evidenceItemCount: number, assertionCount: number } } | undefined };

export type FeaturePopoverFragment = { __typename: 'Feature', id: number, name: string, fullName?: string | undefined, featureAliases: Array<string>, featureInstance:
    | { __typename: 'Factor', id: number }
    | { __typename: 'Fusion', id: number }
    | { __typename: 'Gene', id: number }
    | { __typename: 'Region', id: number }
  , revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number }, flags: { __typename: 'FlagConnection', totalCount: number }, stats: { __typename: 'FeatureStats', variantCount: number, molecularProfileCount: number, evidenceItemCount: number, assertionCount: number } };

export const FeaturePopoverFragmentDoc = gql`
    fragment featurePopover on Feature {
  id
  name
  fullName
  featureInstance {
    ...FeatureInstanceRef
  }
  featureAliases
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
  flags(state: OPEN) {
    totalCount
  }
  stats {
    variantCount
    molecularProfileCount
    evidenceItemCount
    assertionCount
  }
}
    ${FeatureInstanceRefFragmentDoc}`;
export const FeaturePopoverDocument = gql`
    query FeaturePopover($featureId: Int!) {
  feature(id: $featureId) {
    ...featurePopover
  }
}
    ${FeaturePopoverFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FeaturePopoverGQL extends Apollo.Query<FeaturePopoverQuery, FeaturePopoverQueryVariables> {
    document = FeaturePopoverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
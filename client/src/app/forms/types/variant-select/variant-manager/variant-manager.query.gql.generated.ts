/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { BrowseVariantsFieldsFragmentDoc } from '../../../../components/variants/variants-table/variants-table.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type VariantManagerQueryVariables = Types.Exact<{
  variantName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  featureName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  diseaseName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  therapyName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  variantAlias?: Types.InputMaybe<Types.Scalars['String']['input']>;
  variantTypeId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  variantGroupId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  sortBy?: Types.InputMaybe<Types.VariantsSort>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type VariantManagerQuery = { __typename: 'Query', browseVariants: { __typename: 'BrowseVariantConnection', totalCount: number, filteredCount: number, pageCount: number, pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, startCursor?: string | undefined, hasPreviousPage: boolean }, edges: Array<{ __typename: 'BrowseVariantEdge', cursor: string, node?: { __typename: 'BrowseVariant', id: number, name: string, link: string, featureId: number, featureName: string, featureLink: string, category: Types.VariantCategories, evidenceItemCount: number, featureDeprecated: boolean, featureFlagged: boolean, deprecated: boolean, flagged: boolean, diseases: Array<{ __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean }>, therapies: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }>, aliases: Array<{ __typename: 'VariantAlias', name: string }>, variantTypes: Array<{ __typename: 'LinkableVariantType', id: number, name: string, link: string }> } | undefined }> } };

export type VariantManagerFieldsFragment = { __typename: 'BrowseVariant', id: number, name: string, link: string, featureId: number, featureName: string, featureLink: string, diseases: Array<{ __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean }>, therapies: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }>, aliases: Array<{ __typename: 'VariantAlias', name: string }> };

export const VariantManagerFieldsFragmentDoc = gql`
    fragment VariantManagerFields on BrowseVariant {
  id
  name
  link
  featureId
  featureName
  featureLink
  diseases {
    id
    name
    link
    deprecated
  }
  therapies {
    id
    name
    link
    deprecated
  }
  aliases {
    name
  }
}
    `;
export const VariantManagerDocument = gql`
    query VariantManager($variantName: String, $featureName: String, $diseaseName: String, $therapyName: String, $variantAlias: String, $variantTypeId: Int, $variantGroupId: Int, $sortBy: VariantsSort, $first: Int, $last: Int, $before: String, $after: String) {
  browseVariants(
    variantName: $variantName
    featureName: $featureName
    diseaseName: $diseaseName
    therapyName: $therapyName
    variantAlias: $variantAlias
    variantTypeId: $variantTypeId
    variantGroupId: $variantGroupId
    sortBy: $sortBy
    first: $first
    last: $last
    before: $before
    after: $after
  ) {
    pageInfo {
      endCursor
      hasNextPage
      startCursor
      hasPreviousPage
    }
    edges {
      cursor
      node {
        ...BrowseVariantsFields
      }
    }
    totalCount
    filteredCount
    pageCount
  }
}
    ${BrowseVariantsFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class VariantManagerGQL extends Apollo.Query<VariantManagerQuery, VariantManagerQueryVariables> {
    document = VariantManagerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
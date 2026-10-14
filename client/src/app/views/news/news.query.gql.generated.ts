/* eslint-disable */
import * as Types from '../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { NewsItemFieldsFragmentDoc } from '../../components/news/news-item-list/news-item-list.fragment.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type NewsItemsPageQueryVariables = Types.Exact<{
  first: Types.Scalars['Int']['input'];
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type NewsItemsPageQuery = { __typename: 'Query', newsItems: { __typename: 'NewsItemConnection', totalCount: number, edges: Array<{ __typename: 'NewsItemEdge', cursor: string, node?: { __typename: 'NewsItem', id: number, title: string, publishedAt?: any | undefined, contentHtml?: string | undefined } | undefined }>, pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean } } };

export const NewsItemsPageDocument = gql`
    query NewsItemsPage($first: Int!, $after: String) {
  newsItems(first: $first, after: $after) {
    edges {
      cursor
      node {
        ...NewsItemFields
      }
    }
    totalCount
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
    ${NewsItemFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class NewsItemsPageGQL extends Apollo.Query<NewsItemsPageQuery, NewsItemsPageQueryVariables> {
    document = NewsItemsPageDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
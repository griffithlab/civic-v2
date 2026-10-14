/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { NewsItemFieldsFragmentDoc } from '../../../components/news/news-item-list/news-item-list.fragment.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type HomepageNewsItemsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type HomepageNewsItemsQuery = { __typename: 'Query', newsItems: { __typename: 'NewsItemConnection', edges: Array<{ __typename: 'NewsItemEdge', cursor: string, node?: { __typename: 'NewsItem', id: number, title: string, publishedAt?: any | undefined, contentHtml?: string | undefined } | undefined }> } };

export const HomepageNewsItemsDocument = gql`
    query HomepageNewsItems {
  newsItems(first: 5) {
    edges {
      cursor
      node {
        ...NewsItemFields
      }
    }
  }
}
    ${NewsItemFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class HomepageNewsItemsGQL extends Apollo.Query<HomepageNewsItemsQuery, HomepageNewsItemsQueryVariables> {
    document = HomepageNewsItemsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
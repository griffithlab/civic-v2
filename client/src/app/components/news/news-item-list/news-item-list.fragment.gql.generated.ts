/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
export type NewsItemFieldsFragment = { __typename: 'NewsItem', id: number, title: string, publishedAt?: any | undefined, contentHtml?: string | undefined };

export const NewsItemFieldsFragmentDoc = gql`
    fragment NewsItemFields on NewsItem {
  id
  title
  publishedAt
  contentHtml
}
    `;
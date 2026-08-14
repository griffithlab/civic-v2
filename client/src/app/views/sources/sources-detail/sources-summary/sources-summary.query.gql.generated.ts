/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SourceSummaryQueryVariables = Types.Exact<{
  sourceId: Types.Scalars['Int']['input'];
}>;


export type SourceSummaryQuery = { __typename: 'Query', source?: { __typename: 'Source', id: number, citation?: string | undefined, displayType: string, sourceUrl?: string | undefined, title?: string | undefined, abstract?: string | undefined, publicationDate?: string | undefined, citationId: string, fullJournalTitle?: string | undefined, pmcId?: string | undefined, authorString?: string | undefined, ascoAbstractId?: number | undefined, retracted: boolean, retractionNature?: string | undefined, retractionDate?: any | undefined, retractionReasons?: string | undefined, deprecated: boolean, clinicalTrials?: Array<{ __typename: 'ClinicalTrial', nctId: string, id: number, link: string }> | undefined } | undefined };

export type SourceSummaryFieldsFragment = { __typename: 'Source', id: number, citation?: string | undefined, displayType: string, sourceUrl?: string | undefined, title?: string | undefined, abstract?: string | undefined, publicationDate?: string | undefined, citationId: string, fullJournalTitle?: string | undefined, pmcId?: string | undefined, authorString?: string | undefined, ascoAbstractId?: number | undefined, retracted: boolean, retractionNature?: string | undefined, retractionDate?: any | undefined, retractionReasons?: string | undefined, deprecated: boolean, clinicalTrials?: Array<{ __typename: 'ClinicalTrial', nctId: string, id: number, link: string }> | undefined };

export const SourceSummaryFieldsFragmentDoc = gql`
    fragment SourceSummaryFields on Source {
  id
  citation
  displayType
  sourceUrl
  title
  abstract
  publicationDate
  citationId
  fullJournalTitle
  pmcId
  authorString
  ascoAbstractId
  clinicalTrials {
    nctId
    id
    link
  }
  retracted
  retractionNature
  retractionDate
  retractionReasons
  deprecated
}
    `;
export const SourceSummaryDocument = gql`
    query SourceSummary($sourceId: Int!) {
  source(id: $sourceId) {
    ...SourceSummaryFields
  }
}
    ${SourceSummaryFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SourceSummaryGQL extends Apollo.Query<SourceSummaryQuery, SourceSummaryQueryVariables> {
    document = SourceSummaryDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
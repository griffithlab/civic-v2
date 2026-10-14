/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type SourcePopoverQueryVariables = Types.Exact<{
  sourceId: Types.Scalars['Int']['input'];
}>;


export type SourcePopoverQuery = { __typename: 'Query', sourcePopover?: { __typename: 'SourcePopover', id: number, title?: string | undefined, fullJournalTitle?: string | undefined, evidenceItemCount: number, citation?: string | undefined, citationId: string, displayType: string, sourceUrl?: string | undefined, retractionDate?: any | undefined, retractionReasons?: string | undefined, retractionNature?: string | undefined, clinicalTrials?: Array<{ __typename: 'ClinicalTrial', id: number, nctId: string, link: string }> | undefined } | undefined };

export type SourcePopoverFragment = { __typename: 'SourcePopover', id: number, title?: string | undefined, fullJournalTitle?: string | undefined, evidenceItemCount: number, citation?: string | undefined, citationId: string, displayType: string, sourceUrl?: string | undefined, retractionDate?: any | undefined, retractionReasons?: string | undefined, retractionNature?: string | undefined, clinicalTrials?: Array<{ __typename: 'ClinicalTrial', id: number, nctId: string, link: string }> | undefined };

export const SourcePopoverFragmentDoc = gql`
    fragment sourcePopover on SourcePopover {
  id
  title
  fullJournalTitle
  evidenceItemCount
  citation
  citationId
  displayType
  sourceUrl
  clinicalTrials {
    id
    nctId
    link
  }
  retractionDate
  retractionReasons
  retractionNature
}
    `;
export const SourcePopoverDocument = gql`
    query SourcePopover($sourceId: Int!) {
  sourcePopover(id: $sourceId) {
    ...sourcePopover
  }
}
    ${SourcePopoverFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class SourcePopoverGQL extends Apollo.Query<SourcePopoverQuery, SourcePopoverQueryVariables> {
    document = SourcePopoverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
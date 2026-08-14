/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ExistingEvidenceCountQueryVariables = Types.Exact<{
  molecularProfileId: Types.Scalars['Int']['input'];
  sourceId: Types.Scalars['Int']['input'];
}>;


export type ExistingEvidenceCountQuery = { __typename: 'Query', evidenceItems: { __typename: 'EvidenceItemConnection', totalCount: number } };

export type FullyCuratedSourceQueryVariables = Types.Exact<{
  sourceId: Types.Scalars['Int']['input'];
}>;


export type FullyCuratedSourceQuery = { __typename: 'Query', source?: { __typename: 'Source', fullyCurated: boolean } | undefined };

export const ExistingEvidenceCountDocument = gql`
    query ExistingEvidenceCount($molecularProfileId: Int!, $sourceId: Int!) {
  evidenceItems(molecularProfileId: $molecularProfileId, sourceId: $sourceId) {
    totalCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExistingEvidenceCountGQL extends Apollo.Query<ExistingEvidenceCountQuery, ExistingEvidenceCountQueryVariables> {
    document = ExistingEvidenceCountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const FullyCuratedSourceDocument = gql`
    query FullyCuratedSource($sourceId: Int!) {
  source(id: $sourceId) {
    fullyCurated
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FullyCuratedSourceGQL extends Apollo.Query<FullyCuratedSourceQuery, FullyCuratedSourceQueryVariables> {
    document = FullyCuratedSourceDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
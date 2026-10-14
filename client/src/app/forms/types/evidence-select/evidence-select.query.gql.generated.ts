/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { LinkableEvidenceItemFragmentDoc } from '../../../tags/linkable.fragments.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type EvidenceSelectTypeaheadQueryVariables = Types.Exact<{
  eid: Types.Scalars['Int']['input'];
}>;


export type EvidenceSelectTypeaheadQuery = { __typename: 'Query', evidenceItems: { __typename: 'EvidenceItemConnection', nodes: Array<{ __typename: 'EvidenceItem', evidenceType: Types.EvidenceType, evidenceDirection: Types.EvidenceDirection, evidenceLevel: Types.EvidenceLevel, evidenceRating?: number | undefined, significance: Types.EvidenceSignificance, variantOrigin: Types.VariantOrigin, status: Types.EvidenceStatus, id: number, name: string, link: string, flagged: boolean }> } };

export type EvidenceSelectTagQueryVariables = Types.Exact<{
  eid: Types.Scalars['Int']['input'];
}>;


export type EvidenceSelectTagQuery = { __typename: 'Query', evidenceItem?: { __typename: 'EvidenceItem', evidenceType: Types.EvidenceType, evidenceDirection: Types.EvidenceDirection, evidenceLevel: Types.EvidenceLevel, evidenceRating?: number | undefined, significance: Types.EvidenceSignificance, variantOrigin: Types.VariantOrigin, status: Types.EvidenceStatus, id: number, name: string, link: string, flagged: boolean } | undefined };

export type EvidenceSelectTypeaheadFieldsFragment = { __typename: 'EvidenceItem', evidenceType: Types.EvidenceType, evidenceDirection: Types.EvidenceDirection, evidenceLevel: Types.EvidenceLevel, evidenceRating?: number | undefined, significance: Types.EvidenceSignificance, variantOrigin: Types.VariantOrigin, status: Types.EvidenceStatus, id: number, name: string, link: string, flagged: boolean };

export const EvidenceSelectTypeaheadFieldsFragmentDoc = gql`
    fragment EvidenceSelectTypeaheadFields on EvidenceItem {
  ...LinkableEvidenceItem
  evidenceType
  evidenceDirection
  evidenceLevel
  evidenceRating
  significance
  variantOrigin
  status
}
    ${LinkableEvidenceItemFragmentDoc}`;
export const EvidenceSelectTypeaheadDocument = gql`
    query EvidenceSelectTypeahead($eid: Int!) {
  evidenceItems(id: $eid) {
    nodes {
      ...EvidenceSelectTypeaheadFields
    }
  }
}
    ${EvidenceSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EvidenceSelectTypeaheadGQL extends Apollo.Query<EvidenceSelectTypeaheadQuery, EvidenceSelectTypeaheadQueryVariables> {
    document = EvidenceSelectTypeaheadDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EvidenceSelectTagDocument = gql`
    query EvidenceSelectTag($eid: Int!) {
  evidenceItem(id: $eid) {
    ...EvidenceSelectTypeaheadFields
  }
}
    ${EvidenceSelectTypeaheadFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EvidenceSelectTagGQL extends Apollo.Query<EvidenceSelectTagQuery, EvidenceSelectTagQueryVariables> {
    document = EvidenceSelectTagDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
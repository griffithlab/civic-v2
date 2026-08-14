/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { MolecularProfileParsedNameFragmentDoc } from '../../../views/molecular-profiles/molecular-profiles-detail/molecular-profiles-summary/molecular-profiles-summary.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type EvidencePopoverQueryVariables = Types.Exact<{
  evidenceId: Types.Scalars['Int']['input'];
}>;


export type EvidencePopoverQuery = { __typename: 'Query', evidenceItem?: { __typename: 'EvidenceItem', id: number, name: string, status: Types.EvidenceStatus, description: string, evidenceLevel: Types.EvidenceLevel, evidenceType: Types.EvidenceType, evidenceDirection: Types.EvidenceDirection, significance: Types.EvidenceSignificance, variantOrigin: Types.VariantOrigin, therapyInteractionType?: Types.TherapyInteraction | undefined, evidenceRating?: number | undefined, therapies: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }>, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, phenotypes: Array<{ __typename: 'Phenotype', id: number, name: string, link: string }>, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, parsedName: Array<
        | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
        | { __typename: 'MolecularProfileTextSegment', text: string }
        | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      > }, source: { __typename: 'Source', id: number, citation?: string | undefined, sourceType: Types.SourceSource, displayType: string, link: string, deprecated: boolean, clinicalTrials?: Array<{ __typename: 'ClinicalTrial', nctId: string, id: number, link: string }> | undefined }, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number } } | undefined };

export type EvidencePopoverFragment = { __typename: 'EvidenceItem', id: number, name: string, status: Types.EvidenceStatus, description: string, evidenceLevel: Types.EvidenceLevel, evidenceType: Types.EvidenceType, evidenceDirection: Types.EvidenceDirection, significance: Types.EvidenceSignificance, variantOrigin: Types.VariantOrigin, therapyInteractionType?: Types.TherapyInteraction | undefined, evidenceRating?: number | undefined, therapies: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }>, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, phenotypes: Array<{ __typename: 'Phenotype', id: number, name: string, link: string }>, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, flagged: boolean, parsedName: Array<
      | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      | { __typename: 'MolecularProfileTextSegment', text: string }
      | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
    > }, source: { __typename: 'Source', id: number, citation?: string | undefined, sourceType: Types.SourceSource, displayType: string, link: string, deprecated: boolean, clinicalTrials?: Array<{ __typename: 'ClinicalTrial', nctId: string, id: number, link: string }> | undefined }, flags: { __typename: 'FlagConnection', totalCount: number }, revisions: { __typename: 'RevisionConnection', totalCount: number }, comments: { __typename: 'CommentConnection', totalCount: number } };

export const EvidencePopoverFragmentDoc = gql`
    fragment evidencePopover on EvidenceItem {
  id
  name
  status
  description
  evidenceLevel
  evidenceType
  evidenceDirection
  significance
  variantOrigin
  therapies {
    id
    name
    link
    deprecated
  }
  therapyInteractionType
  disease {
    id
    name
    link
    deprecated
  }
  phenotypes {
    id
    name
    link
  }
  evidenceRating
  molecularProfile {
    id
    name
    link
    deprecated
    flagged
    parsedName {
      ...MolecularProfileParsedName
    }
  }
  source {
    id
    citation
    sourceType
    displayType
    link
    deprecated
    clinicalTrials {
      nctId
      id
      link
    }
  }
  flags(state: OPEN) {
    totalCount
  }
  revisions(status: NEW) {
    totalCount
  }
  comments {
    totalCount
  }
}
    ${MolecularProfileParsedNameFragmentDoc}`;
export const EvidencePopoverDocument = gql`
    query EvidencePopover($evidenceId: Int!) {
  evidenceItem(id: $evidenceId) {
    ...evidencePopover
  }
}
    ${EvidencePopoverFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EvidencePopoverGQL extends Apollo.Query<EvidencePopoverQuery, EvidencePopoverQueryVariables> {
    document = EvidencePopoverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
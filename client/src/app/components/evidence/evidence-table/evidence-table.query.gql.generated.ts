/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { MolecularProfileParsedNameFragmentDoc } from '../../../views/molecular-profiles/molecular-profiles-detail/molecular-profiles-summary/molecular-profiles-summary.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type EvidenceBrowseQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  diseaseName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  therapyName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  ids?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  description?: Types.InputMaybe<Types.Scalars['String']['input']>;
  evidenceLevel?: Types.InputMaybe<Types.EvidenceLevel>;
  evidenceDirection?: Types.InputMaybe<Types.EvidenceDirection>;
  significance?: Types.InputMaybe<Types.EvidenceSignificance>;
  evidenceType?: Types.InputMaybe<Types.EvidenceType>;
  evidenceRating?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  variantOrigin?: Types.InputMaybe<Types.VariantOrigin>;
  variantId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  molecularProfileId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  assertionId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  organization?: Types.InputMaybe<Types.OrganizationFilter>;
  userId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  sortBy?: Types.InputMaybe<Types.EvidenceSort>;
  phenotypeId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  diseaseId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  therapyId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  sourceId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  clinicalTrialId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  molecularProfileName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  status?: Types.InputMaybe<Types.EvidenceStatusFilter>;
}>;


export type EvidenceBrowseQuery = { __typename: 'Query', evidenceItems: { __typename: 'EvidenceItemConnection', totalCount: number, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined, endCursor?: string | undefined }, edges: Array<{ __typename: 'EvidenceItemEdge', cursor: string, node?: { __typename: 'EvidenceItem', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean, therapyInteractionType?: Types.TherapyInteraction | undefined, description: string, evidenceType: Types.EvidenceType, evidenceDirection: Types.EvidenceDirection, evidenceLevel: Types.EvidenceLevel, evidenceRating?: number | undefined, significance: Types.EvidenceSignificance, variantOrigin: Types.VariantOrigin, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }>, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, parsedName: Array<
            | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
            | { __typename: 'MolecularProfileTextSegment', text: string }
            | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
          > } } | undefined }> } };

export type EvidenceGridFieldsFragment = { __typename: 'EvidenceItem', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean, therapyInteractionType?: Types.TherapyInteraction | undefined, description: string, evidenceType: Types.EvidenceType, evidenceDirection: Types.EvidenceDirection, evidenceLevel: Types.EvidenceLevel, evidenceRating?: number | undefined, significance: Types.EvidenceSignificance, variantOrigin: Types.VariantOrigin, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }>, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, parsedName: Array<
      | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      | { __typename: 'MolecularProfileTextSegment', text: string }
      | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
    > } };

export const EvidenceGridFieldsFragmentDoc = gql`
    fragment EvidenceGridFields on EvidenceItem {
  id
  name
  link
  disease {
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
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
    deprecated
  }
  status
  flagged
  therapyInteractionType
  description
  evidenceType
  evidenceDirection
  evidenceLevel
  evidenceRating
  significance
  variantOrigin
}
    ${MolecularProfileParsedNameFragmentDoc}`;
export const EvidenceBrowseDocument = gql`
    query EvidenceBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $therapyName: String, $id: Int, $ids: [Int!], $description: String, $evidenceLevel: EvidenceLevel, $evidenceDirection: EvidenceDirection, $significance: EvidenceSignificance, $evidenceType: EvidenceType, $evidenceRating: Int, $variantOrigin: VariantOrigin, $variantId: Int, $molecularProfileId: Int, $assertionId: Int, $organization: OrganizationFilter, $userId: Int, $sortBy: EvidenceSort, $phenotypeId: Int, $diseaseId: Int, $therapyId: Int, $sourceId: Int, $clinicalTrialId: Int, $molecularProfileName: String, $status: EvidenceStatusFilter) {
  evidenceItems(
    first: $first
    last: $last
    before: $before
    after: $after
    diseaseName: $diseaseName
    therapyName: $therapyName
    id: $id
    ids: $ids
    description: $description
    evidenceLevel: $evidenceLevel
    evidenceDirection: $evidenceDirection
    significance: $significance
    evidenceType: $evidenceType
    evidenceRating: $evidenceRating
    variantOrigin: $variantOrigin
    variantId: $variantId
    molecularProfileId: $molecularProfileId
    assertionId: $assertionId
    organization: $organization
    userId: $userId
    phenotypeId: $phenotypeId
    diseaseId: $diseaseId
    therapyId: $therapyId
    sourceId: $sourceId
    clinicalTrialId: $clinicalTrialId
    molecularProfileName: $molecularProfileName
    status: $status
    sortBy: $sortBy
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...EvidenceGridFields
      }
    }
  }
}
    ${EvidenceGridFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EvidenceBrowseGQL extends Apollo.Query<EvidenceBrowseQuery, EvidenceBrowseQueryVariables> {
    document = EvidenceBrowseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
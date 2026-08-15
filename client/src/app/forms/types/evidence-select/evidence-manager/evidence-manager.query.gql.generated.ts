/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { LinkableMolecularProfileFragmentDoc, LinkableTherapyFragmentDoc, LinkableDiseaseFragmentDoc } from '../../../../tags/linkable.fragments.gql.generated';
import { MolecularProfileParsedNameFragmentDoc } from '../../../../views/molecular-profiles/molecular-profiles-detail/molecular-profiles-summary/molecular-profiles-summary.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type EvidenceManagerQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  diseaseName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  therapyName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  description?: Types.InputMaybe<Types.Scalars['String']['input']>;
  evidenceLevel?: Types.InputMaybe<Types.EvidenceLevel>;
  evidenceDirection?: Types.InputMaybe<Types.EvidenceDirection>;
  significance?: Types.InputMaybe<Types.EvidenceSignificance>;
  evidenceType?: Types.InputMaybe<Types.EvidenceType>;
  rating?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  variantOrigin?: Types.InputMaybe<Types.VariantOrigin>;
  variantId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  molecularProfileId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  assertionId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  organizationId?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
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


export type EvidenceManagerQuery = { __typename: 'Query', evidenceItems: { __typename: 'EvidenceItemConnection', totalCount: number, pageCount: number, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined, endCursor?: string | undefined }, edges: Array<{ __typename: 'EvidenceItemEdge', cursor: string, node?: { __typename: 'EvidenceItem', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean, therapyInteractionType?: Types.TherapyInteraction | undefined, description: string, evidenceType: Types.EvidenceType, evidenceDirection: Types.EvidenceDirection, evidenceLevel: Types.EvidenceLevel, evidenceRating?: number | undefined, significance: Types.EvidenceSignificance, variantOrigin: Types.VariantOrigin, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }>, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, flagged: boolean, deprecated: boolean, parsedName: Array<
            | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
            | { __typename: 'MolecularProfileTextSegment', text: string }
            | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
          > } } | undefined }>, nodes: Array<{ __typename: 'EvidenceItem', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean, therapyInteractionType?: Types.TherapyInteraction | undefined, description: string, evidenceType: Types.EvidenceType, evidenceDirection: Types.EvidenceDirection, evidenceLevel: Types.EvidenceLevel, evidenceRating?: number | undefined, significance: Types.EvidenceSignificance, variantOrigin: Types.VariantOrigin, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }>, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, flagged: boolean, deprecated: boolean, parsedName: Array<
          | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
          | { __typename: 'MolecularProfileTextSegment', text: string }
          | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
        > } }> } };

export type EvidenceManagerFieldsFragment = { __typename: 'EvidenceItem', id: number, name: string, link: string, status: Types.EvidenceStatus, flagged: boolean, therapyInteractionType?: Types.TherapyInteraction | undefined, description: string, evidenceType: Types.EvidenceType, evidenceDirection: Types.EvidenceDirection, evidenceLevel: Types.EvidenceLevel, evidenceRating?: number | undefined, significance: Types.EvidenceSignificance, variantOrigin: Types.VariantOrigin, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }>, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, flagged: boolean, deprecated: boolean, parsedName: Array<
      | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      | { __typename: 'MolecularProfileTextSegment', text: string }
      | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
    > } };

export const EvidenceManagerFieldsFragmentDoc = gql`
    fragment EvidenceManagerFields on EvidenceItem {
  id
  name
  link
  disease {
    ...LinkableDisease
  }
  therapies {
    ...LinkableTherapy
  }
  molecularProfile {
    ...LinkableMolecularProfile
    parsedName {
      ...MolecularProfileParsedName
    }
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
    ${LinkableDiseaseFragmentDoc}
${LinkableTherapyFragmentDoc}
${LinkableMolecularProfileFragmentDoc}
${MolecularProfileParsedNameFragmentDoc}`;
export const EvidenceManagerDocument = gql`
    query EvidenceManager($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $therapyName: String, $id: Int, $description: String, $evidenceLevel: EvidenceLevel, $evidenceDirection: EvidenceDirection, $significance: EvidenceSignificance, $evidenceType: EvidenceType, $rating: Int, $variantOrigin: VariantOrigin, $variantId: Int, $molecularProfileId: Int, $assertionId: Int, $organizationId: [Int!], $userId: Int, $sortBy: EvidenceSort, $phenotypeId: Int, $diseaseId: Int, $therapyId: Int, $sourceId: Int, $clinicalTrialId: Int, $molecularProfileName: String, $status: EvidenceStatusFilter) {
  evidenceItems(
    first: $first
    last: $last
    before: $before
    after: $after
    diseaseName: $diseaseName
    therapyName: $therapyName
    id: $id
    description: $description
    evidenceLevel: $evidenceLevel
    evidenceDirection: $evidenceDirection
    significance: $significance
    evidenceType: $evidenceType
    evidenceRating: $rating
    variantOrigin: $variantOrigin
    variantId: $variantId
    molecularProfileId: $molecularProfileId
    assertionId: $assertionId
    organization: {ids: $organizationId}
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
    pageCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...EvidenceManagerFields
      }
    }
    nodes {
      ...EvidenceManagerFields
    }
  }
}
    ${EvidenceManagerFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EvidenceManagerGQL extends Apollo.Query<EvidenceManagerQuery, EvidenceManagerQueryVariables> {
    document = EvidenceManagerDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
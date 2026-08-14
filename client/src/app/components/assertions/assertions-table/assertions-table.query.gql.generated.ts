/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { MolecularProfileParsedNameFragmentDoc } from '../../../views/molecular-profiles/molecular-profiles-detail/molecular-profiles-summary/molecular-profiles-summary.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type AssertionsBrowseQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  diseaseName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  therapyName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  ids?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  summary?: Types.InputMaybe<Types.Scalars['String']['input']>;
  assertionDirection?: Types.InputMaybe<Types.EvidenceDirection>;
  significance?: Types.InputMaybe<Types.AssertionSignificance>;
  assertionType?: Types.InputMaybe<Types.EvidenceType>;
  variantId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  molecularProfileId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  evidenceId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  molecularProfileName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  sortBy?: Types.InputMaybe<Types.AssertionSort>;
  ampLevel?: Types.InputMaybe<Types.AmpLevel>;
  organization?: Types.InputMaybe<Types.OrganizationFilter>;
  userId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  phenotypeId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  diseaseId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  therapyId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  status?: Types.InputMaybe<Types.EvidenceStatusFilter>;
  approvingOrganizations?: Types.InputMaybe<Types.OrganizationFilter>;
}>;


export type AssertionsBrowseQuery = { __typename: 'Query', assertions: { __typename: 'AssertionConnection', totalCount: number, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined, endCursor?: string | undefined }, edges: Array<{ __typename: 'AssertionEdge', cursor: string, node?: { __typename: 'Assertion', id: number, name: string, link: string, therapyInteractionType?: Types.TherapyInteraction | undefined, summary: string, assertionType: Types.AssertionType, assertionDirection: Types.AssertionDirection, significance: Types.AssertionSignificance, ampLevel?: Types.AmpLevel | undefined, evidenceItemsCount: number, status: Types.EvidenceStatus, flagged: boolean, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, parsedName: Array<
            | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
            | { __typename: 'MolecularProfileTextSegment', text: string }
            | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
          > }, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> } | undefined }> } };

export type AssertionBrowseFieldsFragment = { __typename: 'Assertion', id: number, name: string, link: string, therapyInteractionType?: Types.TherapyInteraction | undefined, summary: string, assertionType: Types.AssertionType, assertionDirection: Types.AssertionDirection, significance: Types.AssertionSignificance, ampLevel?: Types.AmpLevel | undefined, evidenceItemsCount: number, status: Types.EvidenceStatus, flagged: boolean, molecularProfile: { __typename: 'MolecularProfile', id: number, name: string, link: string, deprecated: boolean, parsedName: Array<
      | { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
      | { __typename: 'MolecularProfileTextSegment', text: string }
      | { __typename: 'Variant', id: number, name: string, link: string, deprecated: boolean, flagged: boolean }
    > }, disease?: { __typename: 'Disease', id: number, name: string, link: string, deprecated: boolean } | undefined, therapies: Array<{ __typename: 'Therapy', id: number, name: string, link: string, deprecated: boolean }> };

export const AssertionBrowseFieldsFragmentDoc = gql`
    fragment AssertionBrowseFields on Assertion {
  id
  name
  link
  molecularProfile {
    id
    name
    link
    parsedName {
      ...MolecularProfileParsedName
    }
    deprecated
  }
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
  therapyInteractionType
  summary
  assertionType
  assertionDirection
  significance
  ampLevel
  evidenceItemsCount
  status
  flagged
}
    ${MolecularProfileParsedNameFragmentDoc}`;
export const AssertionsBrowseDocument = gql`
    query AssertionsBrowse($first: Int, $last: Int, $before: String, $after: String, $diseaseName: String, $therapyName: String, $id: Int, $ids: [Int!], $summary: String, $assertionDirection: EvidenceDirection, $significance: AssertionSignificance, $assertionType: EvidenceType, $variantId: Int, $molecularProfileId: Int, $evidenceId: Int, $molecularProfileName: String, $sortBy: AssertionSort, $ampLevel: AmpLevel, $organization: OrganizationFilter, $userId: Int, $phenotypeId: Int, $diseaseId: Int, $therapyId: Int, $status: EvidenceStatusFilter, $approvingOrganizations: OrganizationFilter) {
  assertions(
    first: $first
    last: $last
    before: $before
    after: $after
    diseaseName: $diseaseName
    therapyName: $therapyName
    id: $id
    ids: $ids
    summary: $summary
    assertionDirection: $assertionDirection
    significance: $significance
    assertionType: $assertionType
    variantId: $variantId
    molecularProfileId: $molecularProfileId
    sortBy: $sortBy
    ampLevel: $ampLevel
    molecularProfileName: $molecularProfileName
    evidenceId: $evidenceId
    organization: $organization
    userId: $userId
    phenotypeId: $phenotypeId
    therapyId: $therapyId
    diseaseId: $diseaseId
    status: $status
    approvingOrganizations: $approvingOrganizations
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
        ...AssertionBrowseFields
      }
    }
  }
}
    ${AssertionBrowseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class AssertionsBrowseGQL extends Apollo.Query<AssertionsBrowseQuery, AssertionsBrowseQueryVariables> {
    document = AssertionsBrowseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
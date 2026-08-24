/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type OrganizationDetailQueryVariables = Types.Exact<{
  organizationId: Types.Scalars['Int']['input'];
}>;


export type OrganizationDetailQuery = { __typename: 'Query', organization?: { __typename: 'Organization', id: number, name: string, url: string, description: string, canApprove: boolean, hasApprovingSubgroups: boolean, profileImagePath?: string | undefined, subGroups: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }>, orgStatsHash: { __typename: 'Stats', comments: number, revisions: number, appliedRevisions: number, submittedEvidenceItems: number, acceptedEvidenceItems: number, suggestedSources: number, submittedAssertions: number, acceptedAssertions: number }, orgAndSuborgsStatsHash: { __typename: 'Stats', comments: number, revisions: number, appliedRevisions: number, submittedEvidenceItems: number, acceptedEvidenceItems: number, suggestedSources: number, submittedAssertions: number, acceptedAssertions: number }, ranks: { __typename: 'Ranks', commentsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, moderationRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, revisionsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, submissionsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined } } | undefined };

export type OrganizationDetailFieldsFragment = { __typename: 'Organization', id: number, name: string, url: string, description: string, canApprove: boolean, hasApprovingSubgroups: boolean, profileImagePath?: string | undefined, subGroups: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }>, orgStatsHash: { __typename: 'Stats', comments: number, revisions: number, appliedRevisions: number, submittedEvidenceItems: number, acceptedEvidenceItems: number, suggestedSources: number, submittedAssertions: number, acceptedAssertions: number }, orgAndSuborgsStatsHash: { __typename: 'Stats', comments: number, revisions: number, appliedRevisions: number, submittedEvidenceItems: number, acceptedEvidenceItems: number, suggestedSources: number, submittedAssertions: number, acceptedAssertions: number }, ranks: { __typename: 'Ranks', commentsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, moderationRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, revisionsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, submissionsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined } };

export const OrganizationDetailFieldsFragmentDoc = gql`
    fragment OrganizationDetailFields on Organization {
  id
  name
  url
  description
  canApprove
  hasApprovingSubgroups
  profileImagePath(size: 256)
  subGroups {
    id
    name
    profileImagePath(size: 12)
  }
  orgStatsHash {
    comments
    revisions
    appliedRevisions
    submittedEvidenceItems
    acceptedEvidenceItems
    suggestedSources
    submittedAssertions
    acceptedAssertions
  }
  orgAndSuborgsStatsHash {
    comments
    revisions
    appliedRevisions
    submittedEvidenceItems
    acceptedEvidenceItems
    suggestedSources
    submittedAssertions
    acceptedAssertions
  }
  ranks {
    commentsRank {
      rank
      actionCount
    }
    moderationRank {
      rank
      actionCount
    }
    revisionsRank {
      rank
      actionCount
    }
    submissionsRank {
      rank
      actionCount
    }
  }
}
    `;
export const OrganizationDetailDocument = gql`
    query OrganizationDetail($organizationId: Int!) {
  organization(id: $organizationId) {
    ...OrganizationDetailFields
  }
}
    ${OrganizationDetailFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class OrganizationDetailGQL extends Apollo.Query<OrganizationDetailQuery, OrganizationDetailQueryVariables> {
    document = OrganizationDetailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
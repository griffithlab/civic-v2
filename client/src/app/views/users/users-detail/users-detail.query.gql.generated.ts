/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type UserDetailQueryVariables = Types.Exact<{
  userId: Types.Scalars['Int']['input'];
}>;


export type UserDetailQuery = { __typename: 'Query', user?: { __typename: 'User', id: number, name?: string | undefined, displayName: string, username: string, email?: string | undefined, profileImagePath?: string | undefined, role: Types.UserRole, url?: string | undefined, bio?: string | undefined, areaOfExpertise?: Types.AreaOfExpertise | undefined, orcid?: string | undefined, twitterHandle?: string | undefined, facebookProfile?: string | undefined, linkedinProfile?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, url: string }>, country?: { __typename: 'Country', id: number, name: string } | undefined, statsHash: { __typename: 'Stats', comments: number, revisions: number, appliedRevisions: number, submittedEvidenceItems: number, acceptedEvidenceItems: number, suggestedSources: number, submittedAssertions: number, acceptedAssertions: number }, ranks: { __typename: 'Ranks', commentsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, moderationRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, revisionsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, submissionsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined }, mostRecentConflictOfInterestStatement?: { __typename: 'Coi', id: number, coiPresent: boolean, coiStatement?: string | undefined, coiStatus: Types.CoiStatus, createdAt?: any | undefined, expiresAt: any } | undefined } | undefined };

export type UserDetailFieldsFragment = { __typename: 'User', id: number, name?: string | undefined, displayName: string, username: string, email?: string | undefined, profileImagePath?: string | undefined, role: Types.UserRole, url?: string | undefined, bio?: string | undefined, areaOfExpertise?: Types.AreaOfExpertise | undefined, orcid?: string | undefined, twitterHandle?: string | undefined, facebookProfile?: string | undefined, linkedinProfile?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, url: string }>, country?: { __typename: 'Country', id: number, name: string } | undefined, statsHash: { __typename: 'Stats', comments: number, revisions: number, appliedRevisions: number, submittedEvidenceItems: number, acceptedEvidenceItems: number, suggestedSources: number, submittedAssertions: number, acceptedAssertions: number }, ranks: { __typename: 'Ranks', commentsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, moderationRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, revisionsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, submissionsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined }, mostRecentConflictOfInterestStatement?: { __typename: 'Coi', id: number, coiPresent: boolean, coiStatement?: string | undefined, coiStatus: Types.CoiStatus, createdAt?: any | undefined, expiresAt: any } | undefined };

export const UserDetailFieldsFragmentDoc = gql`
    fragment UserDetailFields on User {
  id
  name
  displayName
  username
  email
  profileImagePath(size: 128)
  role
  url
  bio
  areaOfExpertise
  orcid
  twitterHandle
  facebookProfile
  linkedinProfile
  organizations {
    id
    name
    url
  }
  country {
    id
    name
  }
  statsHash {
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
  mostRecentConflictOfInterestStatement {
    id
    coiPresent
    coiStatement
    coiStatus
    createdAt
    expiresAt
  }
}
    `;
export const UserDetailDocument = gql`
    query UserDetail($userId: Int!) {
  user(id: $userId) {
    ...UserDetailFields
  }
}
    ${UserDetailFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UserDetailGQL extends Apollo.Query<UserDetailQuery, UserDetailQueryVariables> {
    document = UserDetailDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type OrganizationGroupsQueryVariables = Types.Exact<{
  organizationId: Types.Scalars['Int']['input'];
}>;


export type OrganizationGroupsQuery = { __typename: 'Query', organization?: { __typename: 'Organization', subGroups: Array<{ __typename: 'Organization', id: number, name: string, url: string, description: string, profileImagePath?: string | undefined, subGroups: Array<{ __typename: 'Organization', id: number, name: string, url: string }>, ranks: { __typename: 'Ranks', commentsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, moderationRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, revisionsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, submissionsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined } }> } | undefined };

export type OrganizationGroupsFieldsFragment = { __typename: 'Organization', id: number, name: string, url: string, description: string, profileImagePath?: string | undefined, subGroups: Array<{ __typename: 'Organization', id: number, name: string, url: string }>, ranks: { __typename: 'Ranks', commentsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, moderationRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, revisionsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined, submissionsRank?: { __typename: 'LeaderboardRank', rank: number, actionCount: number } | undefined } };

export const OrganizationGroupsFieldsFragmentDoc = gql`
    fragment OrganizationGroupsFields on Organization {
  id
  name
  url
  description
  profileImagePath(size: 128)
  subGroups {
    id
    name
    url
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
export const OrganizationGroupsDocument = gql`
    query OrganizationGroups($organizationId: Int!) {
  organization(id: $organizationId) {
    subGroups {
      ...OrganizationGroupsFields
    }
  }
}
    ${OrganizationGroupsFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class OrganizationGroupsGQL extends Apollo.Query<OrganizationGroupsQuery, OrganizationGroupsQueryVariables> {
    document = OrganizationGroupsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type LeaderboardOrganizationFieldsFragment = { __typename: 'LeaderboardOrganization', id: number, name: string, actionCount: number, rank: number, profileImagePath?: string | undefined };

export type OrganizationCommentsLeaderboardQueryVariables = Types.Exact<{
  window?: Types.InputMaybe<Types.TimeWindow>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type OrganizationCommentsLeaderboardQuery = { __typename: 'Query', organizationLeaderboards: { __typename: 'OrganizationLeaderboards', commentsLeaderboard: { __typename: 'LeaderboardOrganizationConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined }, edges: Array<{ __typename: 'LeaderboardOrganizationEdge', cursor: string, node?: { __typename: 'LeaderboardOrganization', id: number, name: string, actionCount: number, rank: number, profileImagePath?: string | undefined } | undefined }>, nodes: Array<{ __typename: 'LeaderboardOrganization', id: number, name: string, actionCount: number, rank: number, profileImagePath?: string | undefined }> } } };

export type OrganizationRevisionsLeaderboardQueryVariables = Types.Exact<{
  window?: Types.InputMaybe<Types.TimeWindow>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type OrganizationRevisionsLeaderboardQuery = { __typename: 'Query', organizationLeaderboards: { __typename: 'OrganizationLeaderboards', revisionsLeaderboard: { __typename: 'LeaderboardOrganizationConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined }, edges: Array<{ __typename: 'LeaderboardOrganizationEdge', cursor: string, node?: { __typename: 'LeaderboardOrganization', id: number, name: string, actionCount: number, rank: number, profileImagePath?: string | undefined } | undefined }>, nodes: Array<{ __typename: 'LeaderboardOrganization', id: number, name: string, actionCount: number, rank: number, profileImagePath?: string | undefined }> } } };

export type OrganizationModerationLeaderboardQueryVariables = Types.Exact<{
  window?: Types.InputMaybe<Types.TimeWindow>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type OrganizationModerationLeaderboardQuery = { __typename: 'Query', organizationLeaderboards: { __typename: 'OrganizationLeaderboards', moderationLeaderboard: { __typename: 'LeaderboardOrganizationConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined }, edges: Array<{ __typename: 'LeaderboardOrganizationEdge', cursor: string, node?: { __typename: 'LeaderboardOrganization', id: number, name: string, actionCount: number, rank: number, profileImagePath?: string | undefined } | undefined }>, nodes: Array<{ __typename: 'LeaderboardOrganization', id: number, name: string, actionCount: number, rank: number, profileImagePath?: string | undefined }> } } };

export type OrganizationSubmissionsLeaderboardQueryVariables = Types.Exact<{
  window?: Types.InputMaybe<Types.TimeWindow>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type OrganizationSubmissionsLeaderboardQuery = { __typename: 'Query', organizationLeaderboards: { __typename: 'OrganizationLeaderboards', submissionsLeaderboard: { __typename: 'LeaderboardOrganizationConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined }, edges: Array<{ __typename: 'LeaderboardOrganizationEdge', cursor: string, node?: { __typename: 'LeaderboardOrganization', id: number, name: string, actionCount: number, rank: number, profileImagePath?: string | undefined } | undefined }>, nodes: Array<{ __typename: 'LeaderboardOrganization', id: number, name: string, actionCount: number, rank: number, profileImagePath?: string | undefined }> } } };

export const LeaderboardOrganizationFieldsFragmentDoc = gql`
    fragment LeaderboardOrganizationFields on LeaderboardOrganization {
  id
  name
  actionCount
  rank
  profileImagePath(size: 64)
}
    `;
export const OrganizationCommentsLeaderboardDocument = gql`
    query OrganizationCommentsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  organizationLeaderboards {
    commentsLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardOrganizationFields
        }
      }
      nodes {
        ...LeaderboardOrganizationFields
      }
    }
  }
}
    ${LeaderboardOrganizationFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class OrganizationCommentsLeaderboardGQL extends Apollo.Query<OrganizationCommentsLeaderboardQuery, OrganizationCommentsLeaderboardQueryVariables> {
    document = OrganizationCommentsLeaderboardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OrganizationRevisionsLeaderboardDocument = gql`
    query OrganizationRevisionsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  organizationLeaderboards {
    revisionsLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardOrganizationFields
        }
      }
      nodes {
        ...LeaderboardOrganizationFields
      }
    }
  }
}
    ${LeaderboardOrganizationFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class OrganizationRevisionsLeaderboardGQL extends Apollo.Query<OrganizationRevisionsLeaderboardQuery, OrganizationRevisionsLeaderboardQueryVariables> {
    document = OrganizationRevisionsLeaderboardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OrganizationModerationLeaderboardDocument = gql`
    query OrganizationModerationLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  organizationLeaderboards {
    moderationLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardOrganizationFields
        }
      }
      nodes {
        ...LeaderboardOrganizationFields
      }
    }
  }
}
    ${LeaderboardOrganizationFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class OrganizationModerationLeaderboardGQL extends Apollo.Query<OrganizationModerationLeaderboardQuery, OrganizationModerationLeaderboardQueryVariables> {
    document = OrganizationModerationLeaderboardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const OrganizationSubmissionsLeaderboardDocument = gql`
    query OrganizationSubmissionsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  organizationLeaderboards {
    submissionsLeaderboard(
      first: $first
      last: $last
      before: $before
      after: $after
      window: $window
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        cursor
        node {
          ...LeaderboardOrganizationFields
        }
      }
      nodes {
        ...LeaderboardOrganizationFields
      }
    }
  }
}
    ${LeaderboardOrganizationFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class OrganizationSubmissionsLeaderboardGQL extends Apollo.Query<OrganizationSubmissionsLeaderboardQuery, OrganizationSubmissionsLeaderboardQueryVariables> {
    document = OrganizationSubmissionsLeaderboardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
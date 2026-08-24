/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type LeaderboardUserFieldsFragment = { __typename: 'LeaderboardUser', id: number, name?: string | undefined, displayName: string, actionCount: number, role: Types.UserRole, rank: number, profileImagePath?: string | undefined };

export type UserCommentsLeaderboardQueryVariables = Types.Exact<{
  window?: Types.InputMaybe<Types.TimeWindow>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type UserCommentsLeaderboardQuery = { __typename: 'Query', userLeaderboards: { __typename: 'UserLeaderboards', commentsLeaderboard: { __typename: 'LeaderboardUserConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined }, edges: Array<{ __typename: 'LeaderboardUserEdge', cursor: string, node?: { __typename: 'LeaderboardUser', id: number, name?: string | undefined, displayName: string, actionCount: number, role: Types.UserRole, rank: number, profileImagePath?: string | undefined } | undefined }>, nodes: Array<{ __typename: 'LeaderboardUser', id: number, name?: string | undefined, displayName: string, actionCount: number, role: Types.UserRole, rank: number, profileImagePath?: string | undefined }> } } };

export type UserRevisionsLeaderboardQueryVariables = Types.Exact<{
  window?: Types.InputMaybe<Types.TimeWindow>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type UserRevisionsLeaderboardQuery = { __typename: 'Query', userLeaderboards: { __typename: 'UserLeaderboards', revisionsLeaderboard: { __typename: 'LeaderboardUserConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined }, edges: Array<{ __typename: 'LeaderboardUserEdge', cursor: string, node?: { __typename: 'LeaderboardUser', id: number, name?: string | undefined, displayName: string, actionCount: number, role: Types.UserRole, rank: number, profileImagePath?: string | undefined } | undefined }>, nodes: Array<{ __typename: 'LeaderboardUser', id: number, name?: string | undefined, displayName: string, actionCount: number, role: Types.UserRole, rank: number, profileImagePath?: string | undefined }> } } };

export type UserModerationLeaderboardQueryVariables = Types.Exact<{
  window?: Types.InputMaybe<Types.TimeWindow>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type UserModerationLeaderboardQuery = { __typename: 'Query', userLeaderboards: { __typename: 'UserLeaderboards', moderationLeaderboard: { __typename: 'LeaderboardUserConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined }, edges: Array<{ __typename: 'LeaderboardUserEdge', cursor: string, node?: { __typename: 'LeaderboardUser', id: number, name?: string | undefined, displayName: string, actionCount: number, role: Types.UserRole, rank: number, profileImagePath?: string | undefined } | undefined }>, nodes: Array<{ __typename: 'LeaderboardUser', id: number, name?: string | undefined, displayName: string, actionCount: number, role: Types.UserRole, rank: number, profileImagePath?: string | undefined }> } } };

export type UserSubmissionsLeaderboardQueryVariables = Types.Exact<{
  window?: Types.InputMaybe<Types.TimeWindow>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type UserSubmissionsLeaderboardQuery = { __typename: 'Query', userLeaderboards: { __typename: 'UserLeaderboards', submissionsLeaderboard: { __typename: 'LeaderboardUserConnection', pageInfo: { __typename: 'PageInfo', endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined }, edges: Array<{ __typename: 'LeaderboardUserEdge', cursor: string, node?: { __typename: 'LeaderboardUser', id: number, name?: string | undefined, displayName: string, actionCount: number, role: Types.UserRole, rank: number, profileImagePath?: string | undefined } | undefined }>, nodes: Array<{ __typename: 'LeaderboardUser', id: number, name?: string | undefined, displayName: string, actionCount: number, role: Types.UserRole, rank: number, profileImagePath?: string | undefined }> } } };

export const LeaderboardUserFieldsFragmentDoc = gql`
    fragment LeaderboardUserFields on LeaderboardUser {
  id
  name
  displayName
  actionCount
  role
  rank
  profileImagePath(size: 64)
}
    `;
export const UserCommentsLeaderboardDocument = gql`
    query UserCommentsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  userLeaderboards {
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
          ...LeaderboardUserFields
        }
      }
      nodes {
        ...LeaderboardUserFields
      }
    }
  }
}
    ${LeaderboardUserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UserCommentsLeaderboardGQL extends Apollo.Query<UserCommentsLeaderboardQuery, UserCommentsLeaderboardQueryVariables> {
    document = UserCommentsLeaderboardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserRevisionsLeaderboardDocument = gql`
    query UserRevisionsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  userLeaderboards {
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
          ...LeaderboardUserFields
        }
      }
      nodes {
        ...LeaderboardUserFields
      }
    }
  }
}
    ${LeaderboardUserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UserRevisionsLeaderboardGQL extends Apollo.Query<UserRevisionsLeaderboardQuery, UserRevisionsLeaderboardQueryVariables> {
    document = UserRevisionsLeaderboardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserModerationLeaderboardDocument = gql`
    query UserModerationLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  userLeaderboards {
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
          ...LeaderboardUserFields
        }
      }
      nodes {
        ...LeaderboardUserFields
      }
    }
  }
}
    ${LeaderboardUserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UserModerationLeaderboardGQL extends Apollo.Query<UserModerationLeaderboardQuery, UserModerationLeaderboardQueryVariables> {
    document = UserModerationLeaderboardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UserSubmissionsLeaderboardDocument = gql`
    query UserSubmissionsLeaderboard($window: TimeWindow, $first: Int, $last: Int, $before: String, $after: String) {
  userLeaderboards {
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
          ...LeaderboardUserFields
        }
      }
      nodes {
        ...LeaderboardUserFields
      }
    }
  }
}
    ${LeaderboardUserFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UserSubmissionsLeaderboardGQL extends Apollo.Query<UserSubmissionsLeaderboardQuery, UserSubmissionsLeaderboardQueryVariables> {
    document = UserSubmissionsLeaderboardDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
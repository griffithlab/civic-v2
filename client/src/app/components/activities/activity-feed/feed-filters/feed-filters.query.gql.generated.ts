/* eslint-disable */
import * as Types from '../../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ActivityFeedUpdatesQueryVariables = Types.Exact<{
  subject?: Types.InputMaybe<Array<Types.SubscribableQueryInput> | Types.SubscribableQueryInput>;
  organizationId?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  includeSubgroups?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  userId?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  activityType?: Types.InputMaybe<Array<Types.ActivityTypeInput> | Types.ActivityTypeInput>;
  subjectType?: Types.InputMaybe<Array<Types.ActivitySubjectInput> | Types.ActivitySubjectInput>;
  includeAutomatedEvents?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  mode?: Types.InputMaybe<Types.EventFeedMode>;
  occurredAfter?: Types.InputMaybe<Types.Scalars['ISO8601DateTime']['input']>;
}>;


export type ActivityFeedUpdatesQuery = { __typename: 'Query', activities: { __typename: 'ActivityInterfaceConnection', pageCount: number, totalCount: number, unfilteredCount: number, pageInfo: { __typename: 'PageInfo', startCursor?: string | undefined, endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean } } };

export const ActivityFeedUpdatesDocument = gql`
    query ActivityFeedUpdates($subject: [SubscribableQueryInput!], $organizationId: [Int!], $includeSubgroups: Boolean, $userId: [Int!], $activityType: [ActivityTypeInput!], $subjectType: [ActivitySubjectInput!], $includeAutomatedEvents: Boolean, $mode: EventFeedMode, $occurredAfter: ISO8601DateTime) {
  activities(
    subject: $subject
    userId: $userId
    includeAutomatedEvents: $includeAutomatedEvents
    organization: {ids: $organizationId, includeSubgroups: $includeSubgroups}
    activityType: $activityType
    subjectType: $subjectType
    mode: $mode
    occurredAfter: $occurredAfter
  ) {
    pageInfo {
      startCursor
      endCursor
      hasNextPage
      hasPreviousPage
    }
    pageCount
    totalCount
    unfilteredCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ActivityFeedUpdatesGQL extends Apollo.Query<ActivityFeedUpdatesQuery, ActivityFeedUpdatesQueryVariables> {
    document = ActivityFeedUpdatesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
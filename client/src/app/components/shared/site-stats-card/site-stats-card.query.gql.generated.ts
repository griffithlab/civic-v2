/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type CivicStatsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CivicStatsQuery = { __typename: 'Query', timepointStats: { __typename: 'CivicTimepointStats', assertions: { __typename: 'TimePointCounts', allTime: number, newThisMonth: number, newThisWeek: number, newThisYear: number }, diseases: { __typename: 'TimePointCounts', allTime: number, newThisMonth: number, newThisWeek: number, newThisYear: number }, therapies: { __typename: 'TimePointCounts', allTime: number, newThisMonth: number, newThisWeek: number, newThisYear: number }, evidenceItems: { __typename: 'TimePointCounts', allTime: number, newThisMonth: number, newThisWeek: number, newThisYear: number }, features: { __typename: 'TimePointCounts', allTime: number, newThisMonth: number, newThisWeek: number, newThisYear: number }, revisions: { __typename: 'TimePointCounts', allTime: number, newThisMonth: number, newThisWeek: number, newThisYear: number }, sources: { __typename: 'TimePointCounts', allTime: number, newThisMonth: number, newThisWeek: number, newThisYear: number }, users: { __typename: 'TimePointCounts', allTime: number, newThisMonth: number, newThisWeek: number, newThisYear: number }, variants: { __typename: 'TimePointCounts', allTime: number, newThisMonth: number, newThisWeek: number, newThisYear: number }, comments: { __typename: 'TimePointCounts', allTime: number, newThisMonth: number, newThisWeek: number, newThisYear: number }, molecularProfiles: { __typename: 'TimePointCounts', allTime: number, newThisMonth: number, newThisWeek: number, newThisYear: number } } };

export type TimepointCountFragment = { __typename: 'TimePointCounts', allTime: number, newThisMonth: number, newThisWeek: number, newThisYear: number };

export const TimepointCountFragmentDoc = gql`
    fragment TimepointCount on TimePointCounts {
  allTime
  newThisMonth
  newThisWeek
  newThisYear
}
    `;
export const CivicStatsDocument = gql`
    query CivicStats {
  timepointStats {
    assertions {
      ...TimepointCount
    }
    diseases {
      ...TimepointCount
    }
    therapies {
      ...TimepointCount
    }
    evidenceItems {
      ...TimepointCount
    }
    features {
      ...TimepointCount
    }
    revisions {
      ...TimepointCount
    }
    sources {
      ...TimepointCount
    }
    users {
      ...TimepointCount
    }
    variants {
      ...TimepointCount
    }
    comments {
      ...TimepointCount
    }
    molecularProfiles {
      ...TimepointCount
    }
  }
}
    ${TimepointCountFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class CivicStatsGQL extends Apollo.Query<CivicStatsQuery, CivicStatsQueryVariables> {
    document = CivicStatsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
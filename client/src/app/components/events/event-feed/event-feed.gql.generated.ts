/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type EventFeedCountQueryVariables = Types.Exact<{
  subject?: Types.InputMaybe<Types.SubscribableQueryInput>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  originatingUserId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  organizationId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  eventType?: Types.InputMaybe<Types.EventAction>;
  includeAutomatedEvents?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  mode?: Types.InputMaybe<Types.EventFeedMode>;
}>;


export type EventFeedCountQuery = { __typename: 'Query', events: { __typename: 'EventConnection', unfilteredCount: number } };

export type EventFeedQueryVariables = Types.Exact<{
  subject?: Types.InputMaybe<Types.SubscribableQueryInput>;
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  originatingUserId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  organizationId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  eventType?: Types.InputMaybe<Types.EventAction>;
  mode?: Types.InputMaybe<Types.EventFeedMode>;
  includeAutomatedEvents?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
  showFilters: Types.Scalars['Boolean']['input'];
}>;


export type EventFeedQuery = { __typename: 'Query', events: { __typename: 'EventConnection', eventTypes?: Array<Types.EventAction>, unfilteredCount: number, pageInfo: { __typename: 'PageInfo', startCursor?: string | undefined, endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean }, uniqueParticipants?: Array<{ __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }>, participatingOrganizations?: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }>, edges: Array<{ __typename: 'EventEdge', cursor: string, node?: { __typename: 'Event', id: number, action: Types.EventAction, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined } | undefined, originatingUser: { __typename: 'User', id: number, username: string, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, subject?:
          | { __typename: 'Assertion', status: Types.EvidenceStatus, flagged: boolean, name: string, id: number, link: string }
          | { __typename: 'Comment', name: string, id: number, link: string }
          | { __typename: 'EvidenceItem', status: Types.EvidenceStatus, flagged: boolean, name: string, id: number, link: string }
          | { __typename: 'ExonCoordinate', name: string, id: number, link: string }
          | { __typename: 'Factor', name: string, id: number, link: string }
          | { __typename: 'FactorVariant', deprecated: boolean, flagged: boolean, name: string, id: number, link: string, feature: { __typename: 'Feature', id: number, link: string, name: string, deprecated: boolean, flagged: boolean } }
          | { __typename: 'Feature', deprecated: boolean, flagged: boolean, id: number, link: string, name: string }
          | { __typename: 'Flag', name: string, id: number, link: string }
          | { __typename: 'Fusion', name: string, id: number, link: string }
          | { __typename: 'FusionVariant', deprecated: boolean, flagged: boolean, name: string, id: number, link: string, feature: { __typename: 'Feature', id: number, link: string, name: string, deprecated: boolean, flagged: boolean } }
          | { __typename: 'Gene', name: string, id: number, link: string }
          | { __typename: 'GeneVariant', deprecated: boolean, flagged: boolean, name: string, id: number, link: string, feature: { __typename: 'Feature', id: number, link: string, name: string, deprecated: boolean, flagged: boolean } }
          | { __typename: 'MolecularProfile', deprecated: boolean, flagged: boolean, name: string, id: number, link: string }
          | { __typename: 'Region', name: string, id: number, link: string }
          | { __typename: 'RegionVariant', deprecated: boolean, flagged: boolean, name: string, id: number, link: string, feature: { __typename: 'Feature', id: number, link: string, name: string, deprecated: boolean, flagged: boolean } }
          | { __typename: 'Revision', revisionSetId: number, name: string, id: number, link: string }
          | { __typename: 'RevisionSet', name: string, id: number, link: string }
          | { __typename: 'Source', citation?: string | undefined, sourceType: Types.SourceSource, deprecated: boolean, name: string, id: number, link: string }
          | { __typename: 'SourcePopover', name: string, id: number, link: string }
          | { __typename: 'SourceSuggestion', name: string, id: number, link: string }
          | { __typename: 'Variant', deprecated: boolean, flagged: boolean, name: string, id: number, link: string, feature: { __typename: 'Feature', id: number, link: string, name: string, deprecated: boolean, flagged: boolean } }
          | { __typename: 'VariantCoordinate', name: string, id: number, link: string }
          | { __typename: 'VariantGroup', flagged: boolean, name: string, id: number, link: string }
         | undefined, originatingObject?:
          | { __typename: 'Assertion', id: number, name: string, link: string }
          | { __typename: 'Comment', id: number, name: string, link: string }
          | { __typename: 'EvidenceItem', id: number, name: string, link: string }
          | { __typename: 'Factor', id: number, name: string, link: string }
          | { __typename: 'FactorVariant', id: number, name: string, link: string }
          | { __typename: 'Feature', id: number, name: string, link: string }
          | { __typename: 'Flag', id: number, name: string, link: string }
          | { __typename: 'Fusion', id: number, name: string, link: string }
          | { __typename: 'FusionVariant', id: number, name: string, link: string }
          | { __typename: 'Gene', id: number, name: string, link: string }
          | { __typename: 'GeneVariant', id: number, name: string, link: string }
          | { __typename: 'MolecularProfile', id: number, name: string, link: string }
          | { __typename: 'Region', id: number, name: string, link: string }
          | { __typename: 'RegionVariant', id: number, name: string, link: string }
          | { __typename: 'Revision', id: number, revisionSetId: number, name: string, link: string }
          | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
          | { __typename: 'Variant', id: number, name: string, link: string }
         | undefined } | undefined }> } };

export type EventFeedFragment = { __typename: 'EventConnection', eventTypes?: Array<Types.EventAction>, unfilteredCount: number, pageInfo: { __typename: 'PageInfo', startCursor?: string | undefined, endCursor?: string | undefined, hasNextPage: boolean, hasPreviousPage: boolean }, uniqueParticipants?: Array<{ __typename: 'User', id: number, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }>, participatingOrganizations?: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }>, edges: Array<{ __typename: 'EventEdge', cursor: string, node?: { __typename: 'Event', id: number, action: Types.EventAction, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined } | undefined, originatingUser: { __typename: 'User', id: number, username: string, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, subject?:
        | { __typename: 'Assertion', status: Types.EvidenceStatus, flagged: boolean, name: string, id: number, link: string }
        | { __typename: 'Comment', name: string, id: number, link: string }
        | { __typename: 'EvidenceItem', status: Types.EvidenceStatus, flagged: boolean, name: string, id: number, link: string }
        | { __typename: 'ExonCoordinate', name: string, id: number, link: string }
        | { __typename: 'Factor', name: string, id: number, link: string }
        | { __typename: 'FactorVariant', deprecated: boolean, flagged: boolean, name: string, id: number, link: string, feature: { __typename: 'Feature', id: number, link: string, name: string, deprecated: boolean, flagged: boolean } }
        | { __typename: 'Feature', deprecated: boolean, flagged: boolean, id: number, link: string, name: string }
        | { __typename: 'Flag', name: string, id: number, link: string }
        | { __typename: 'Fusion', name: string, id: number, link: string }
        | { __typename: 'FusionVariant', deprecated: boolean, flagged: boolean, name: string, id: number, link: string, feature: { __typename: 'Feature', id: number, link: string, name: string, deprecated: boolean, flagged: boolean } }
        | { __typename: 'Gene', name: string, id: number, link: string }
        | { __typename: 'GeneVariant', deprecated: boolean, flagged: boolean, name: string, id: number, link: string, feature: { __typename: 'Feature', id: number, link: string, name: string, deprecated: boolean, flagged: boolean } }
        | { __typename: 'MolecularProfile', deprecated: boolean, flagged: boolean, name: string, id: number, link: string }
        | { __typename: 'Region', name: string, id: number, link: string }
        | { __typename: 'RegionVariant', deprecated: boolean, flagged: boolean, name: string, id: number, link: string, feature: { __typename: 'Feature', id: number, link: string, name: string, deprecated: boolean, flagged: boolean } }
        | { __typename: 'Revision', revisionSetId: number, name: string, id: number, link: string }
        | { __typename: 'RevisionSet', name: string, id: number, link: string }
        | { __typename: 'Source', citation?: string | undefined, sourceType: Types.SourceSource, deprecated: boolean, name: string, id: number, link: string }
        | { __typename: 'SourcePopover', name: string, id: number, link: string }
        | { __typename: 'SourceSuggestion', name: string, id: number, link: string }
        | { __typename: 'Variant', deprecated: boolean, flagged: boolean, name: string, id: number, link: string, feature: { __typename: 'Feature', id: number, link: string, name: string, deprecated: boolean, flagged: boolean } }
        | { __typename: 'VariantCoordinate', name: string, id: number, link: string }
        | { __typename: 'VariantGroup', flagged: boolean, name: string, id: number, link: string }
       | undefined, originatingObject?:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'Comment', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
        | { __typename: 'Factor', id: number, name: string, link: string }
        | { __typename: 'FactorVariant', id: number, name: string, link: string }
        | { __typename: 'Feature', id: number, name: string, link: string }
        | { __typename: 'Flag', id: number, name: string, link: string }
        | { __typename: 'Fusion', id: number, name: string, link: string }
        | { __typename: 'FusionVariant', id: number, name: string, link: string }
        | { __typename: 'Gene', id: number, name: string, link: string }
        | { __typename: 'GeneVariant', id: number, name: string, link: string }
        | { __typename: 'MolecularProfile', id: number, name: string, link: string }
        | { __typename: 'Region', id: number, name: string, link: string }
        | { __typename: 'RegionVariant', id: number, name: string, link: string }
        | { __typename: 'Revision', id: number, revisionSetId: number, name: string, link: string }
        | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
       | undefined } | undefined }> };

export type EventFeedNodeFragment = { __typename: 'Event', id: number, action: Types.EventAction, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined } | undefined, originatingUser: { __typename: 'User', id: number, username: string, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, subject?:
    | { __typename: 'Assertion', status: Types.EvidenceStatus, flagged: boolean, name: string, id: number, link: string }
    | { __typename: 'Comment', name: string, id: number, link: string }
    | { __typename: 'EvidenceItem', status: Types.EvidenceStatus, flagged: boolean, name: string, id: number, link: string }
    | { __typename: 'ExonCoordinate', name: string, id: number, link: string }
    | { __typename: 'Factor', name: string, id: number, link: string }
    | { __typename: 'FactorVariant', deprecated: boolean, flagged: boolean, name: string, id: number, link: string, feature: { __typename: 'Feature', id: number, link: string, name: string, deprecated: boolean, flagged: boolean } }
    | { __typename: 'Feature', deprecated: boolean, flagged: boolean, id: number, link: string, name: string }
    | { __typename: 'Flag', name: string, id: number, link: string }
    | { __typename: 'Fusion', name: string, id: number, link: string }
    | { __typename: 'FusionVariant', deprecated: boolean, flagged: boolean, name: string, id: number, link: string, feature: { __typename: 'Feature', id: number, link: string, name: string, deprecated: boolean, flagged: boolean } }
    | { __typename: 'Gene', name: string, id: number, link: string }
    | { __typename: 'GeneVariant', deprecated: boolean, flagged: boolean, name: string, id: number, link: string, feature: { __typename: 'Feature', id: number, link: string, name: string, deprecated: boolean, flagged: boolean } }
    | { __typename: 'MolecularProfile', deprecated: boolean, flagged: boolean, name: string, id: number, link: string }
    | { __typename: 'Region', name: string, id: number, link: string }
    | { __typename: 'RegionVariant', deprecated: boolean, flagged: boolean, name: string, id: number, link: string, feature: { __typename: 'Feature', id: number, link: string, name: string, deprecated: boolean, flagged: boolean } }
    | { __typename: 'Revision', revisionSetId: number, name: string, id: number, link: string }
    | { __typename: 'RevisionSet', name: string, id: number, link: string }
    | { __typename: 'Source', citation?: string | undefined, sourceType: Types.SourceSource, deprecated: boolean, name: string, id: number, link: string }
    | { __typename: 'SourcePopover', name: string, id: number, link: string }
    | { __typename: 'SourceSuggestion', name: string, id: number, link: string }
    | { __typename: 'Variant', deprecated: boolean, flagged: boolean, name: string, id: number, link: string, feature: { __typename: 'Feature', id: number, link: string, name: string, deprecated: boolean, flagged: boolean } }
    | { __typename: 'VariantCoordinate', name: string, id: number, link: string }
    | { __typename: 'VariantGroup', flagged: boolean, name: string, id: number, link: string }
   | undefined, originatingObject?:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', id: number, name: string, link: string }
    | { __typename: 'EvidenceItem', id: number, name: string, link: string }
    | { __typename: 'Factor', id: number, name: string, link: string }
    | { __typename: 'FactorVariant', id: number, name: string, link: string }
    | { __typename: 'Feature', id: number, name: string, link: string }
    | { __typename: 'Flag', id: number, name: string, link: string }
    | { __typename: 'Fusion', id: number, name: string, link: string }
    | { __typename: 'FusionVariant', id: number, name: string, link: string }
    | { __typename: 'Gene', id: number, name: string, link: string }
    | { __typename: 'GeneVariant', id: number, name: string, link: string }
    | { __typename: 'MolecularProfile', id: number, name: string, link: string }
    | { __typename: 'Region', id: number, name: string, link: string }
    | { __typename: 'RegionVariant', id: number, name: string, link: string }
    | { __typename: 'Revision', id: number, revisionSetId: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
   | undefined };

export const EventFeedNodeFragmentDoc = gql`
    fragment eventFeedNode on Event {
  id
  action
  createdAt
  organization {
    id
    name
    profileImagePath(size: 32)
  }
  originatingUser {
    id
    username
    displayName
    role
    profileImagePath(size: 32)
  }
  subject {
    name
    id
    link
    ... on Source {
      citation
      sourceType
      deprecated
    }
    ... on EvidenceItem {
      status
      flagged
    }
    ... on Assertion {
      status
      flagged
    }
    ... on Revision {
      revisionSetId
    }
    ... on VariantInterface {
      deprecated
      flagged
      feature {
        id
        link
        name
        deprecated
        flagged
      }
    }
    ... on Feature {
      deprecated
      flagged
      id
      link
      name
    }
    ... on MolecularProfile {
      deprecated
      flagged
    }
    ... on VariantGroup {
      flagged
    }
    __typename
  }
  originatingObject {
    id
    name
    link
    __typename
    ... on Revision {
      id
      revisionSetId
    }
    ... on Comment {
      id
    }
    ... on Flag {
      id
    }
  }
}
    `;
export const EventFeedFragmentDoc = gql`
    fragment eventFeed on EventConnection {
  pageInfo {
    startCursor
    endCursor
    hasNextPage
    hasPreviousPage
  }
  eventTypes @include(if: $showFilters)
  unfilteredCount
  uniqueParticipants @include(if: $showFilters) {
    id
    displayName
    role
    profileImagePath(size: 32)
  }
  participatingOrganizations @include(if: $showFilters) {
    id
    name
    profileImagePath(size: 32)
  }
  edges {
    cursor
    node {
      ...eventFeedNode
    }
  }
}
    ${EventFeedNodeFragmentDoc}`;
export const EventFeedCountDocument = gql`
    query EventFeedCount($subject: SubscribableQueryInput, $first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $organizationId: Int, $eventType: EventAction, $includeAutomatedEvents: Boolean, $mode: EventFeedMode) {
  events(
    subject: $subject
    first: $first
    last: $last
    before: $before
    after: $after
    originatingUserId: $originatingUserId
    organizationId: $organizationId
    eventType: $eventType
    mode: $mode
    includeAutomatedEvents: $includeAutomatedEvents
  ) {
    unfilteredCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EventFeedCountGQL extends Apollo.Query<EventFeedCountQuery, EventFeedCountQueryVariables> {
    document = EventFeedCountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EventFeedDocument = gql`
    query EventFeed($subject: SubscribableQueryInput, $first: Int, $last: Int, $before: String, $after: String, $originatingUserId: Int, $organizationId: Int, $eventType: EventAction, $mode: EventFeedMode, $includeAutomatedEvents: Boolean = true, $showFilters: Boolean!) {
  events(
    subject: $subject
    first: $first
    last: $last
    before: $before
    after: $after
    originatingUserId: $originatingUserId
    organizationId: $organizationId
    eventType: $eventType
    includeAutomatedEvents: $includeAutomatedEvents
    mode: $mode
  ) {
    ...eventFeed
  }
}
    ${EventFeedFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class EventFeedGQL extends Apollo.Query<EventFeedQuery, EventFeedQueryVariables> {
    document = EventFeedDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
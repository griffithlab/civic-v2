/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type ViewerBaseQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ViewerBaseQuery = { __typename: 'Query', viewer?: { __typename: 'User', id: number, username: string, role: Types.UserRole, displayName: string, profileImagePath?: string | undefined, mostRecentOrganizationId?: number | undefined, organizationsWithApprovalPrivileges: Array<{ __typename: 'Organization', id: number }>, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }>, mostRecentConflictOfInterestStatement?: { __typename: 'Coi', coiStatus: Types.CoiStatus } | undefined } | undefined };

export type ViewerNotificationCountQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ViewerNotificationCountQuery = { __typename: 'Query', notifications: { __typename: 'NotificationConnection', unreadCount: number } };

export type ViewerFieldsFragment = { __typename: 'User', id: number, username: string, role: Types.UserRole, displayName: string, profileImagePath?: string | undefined, mostRecentOrganizationId?: number | undefined, organizationsWithApprovalPrivileges: Array<{ __typename: 'Organization', id: number }>, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }>, mostRecentConflictOfInterestStatement?: { __typename: 'Coi', coiStatus: Types.CoiStatus } | undefined };

export type ViewerOrganizationFragment = { __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined };

export type UserMostRecentOrgIdFragment = { __typename: 'User', mostRecentOrganizationId?: number | undefined };

export const ViewerOrganizationFragmentDoc = gql`
    fragment viewerOrganization on Organization {
  id
  name
  profileImagePath(size: 32)
}
    `;
export const ViewerFieldsFragmentDoc = gql`
    fragment viewerFields on User {
  id
  username
  role
  displayName
  profileImagePath(size: 32)
  organizationsWithApprovalPrivileges {
    id
  }
  organizations {
    ...viewerOrganization
  }
  mostRecentConflictOfInterestStatement {
    coiStatus
  }
  mostRecentOrganizationId
}
    ${ViewerOrganizationFragmentDoc}`;
export const UserMostRecentOrgIdFragmentDoc = gql`
    fragment UserMostRecentOrgId on User {
  mostRecentOrganizationId
}
    `;
export const ViewerBaseDocument = gql`
    query ViewerBase {
  viewer {
    ...viewerFields
  }
}
    ${ViewerFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewerBaseGQL extends Apollo.Query<ViewerBaseQuery, ViewerBaseQueryVariables> {
    document = ViewerBaseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const ViewerNotificationCountDocument = gql`
    query ViewerNotificationCount {
  notifications {
    unreadCount
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ViewerNotificationCountGQL extends Apollo.Query<ViewerNotificationCountQuery, ViewerNotificationCountQueryVariables> {
    document = ViewerNotificationCountDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type UserPopoverQueryVariables = Types.Exact<{
  userId: Types.Scalars['Int']['input'];
}>;


export type UserPopoverQuery = { __typename: 'Query', user?: { __typename: 'User', id: number, profileImagePath?: string | undefined, displayName: string, bio?: string | undefined, role: Types.UserRole, organizations: Array<{ __typename: 'Organization', id: number, name: string }> } | undefined };

export type PopoverUserFragment = { __typename: 'User', id: number, profileImagePath?: string | undefined, displayName: string, bio?: string | undefined, role: Types.UserRole, organizations: Array<{ __typename: 'Organization', id: number, name: string }> };

export const PopoverUserFragmentDoc = gql`
    fragment popoverUser on User {
  id
  profileImagePath(size: 64)
  displayName
  bio
  role
  organizations {
    id
    name
  }
}
    `;
export const UserPopoverDocument = gql`
    query UserPopover($userId: Int!) {
  user(id: $userId) {
    ...popoverUser
  }
}
    ${PopoverUserFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class UserPopoverGQL extends Apollo.Query<UserPopoverQuery, UserPopoverQueryVariables> {
    document = UserPopoverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
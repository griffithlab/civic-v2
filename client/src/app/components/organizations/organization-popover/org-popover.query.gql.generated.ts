/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type OrgPopoverQueryVariables = Types.Exact<{
  orgId: Types.Scalars['Int']['input'];
}>;


export type OrgPopoverQuery = { __typename: 'Query', organization?: { __typename: 'Organization', id: number, profileImagePath?: string | undefined, name: string, description: string, url: string } | undefined };

export type OrgPopoverFragment = { __typename: 'Organization', id: number, profileImagePath?: string | undefined, name: string, description: string, url: string };

export const OrgPopoverFragmentDoc = gql`
    fragment orgPopover on Organization {
  id
  profileImagePath(size: 64)
  name
  description
  url
}
    `;
export const OrgPopoverDocument = gql`
    query OrgPopover($orgId: Int!) {
  organization(id: $orgId) {
    ...orgPopover
  }
}
    ${OrgPopoverFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class OrgPopoverGQL extends Apollo.Query<OrgPopoverQuery, OrgPopoverQueryVariables> {
    document = OrgPopoverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
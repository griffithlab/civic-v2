/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { ParsedCommentFragmentFragmentDoc } from '../../comments/comment-list/comment-list.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type FlagPopoverQueryVariables = Types.Exact<{
  flagId: Types.Scalars['Int']['input'];
}>;


export type FlagPopoverQuery = { __typename: 'Query', flag?: { __typename: 'Flag', id: number, name: string, state: Types.FlagState, createdAt: any, flaggingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, flaggable:
      | { __typename: 'Assertion', status: Types.EvidenceStatus, id: number, link: string, name: string, flagged: boolean }
      | { __typename: 'BrowseFeature', id: number, link: string, name: string, flagged: boolean }
      | { __typename: 'EvidenceItem', status: Types.EvidenceStatus, id: number, link: string, name: string, flagged: boolean }
      | { __typename: 'Factor', id: number, link: string, name: string, flagged: boolean }
      | { __typename: 'FactorVariant', deprecated: boolean, id: number, link: string, name: string, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
      | { __typename: 'Feature', deprecated: boolean, id: number, link: string, name: string, flagged: boolean }
      | { __typename: 'Fusion', id: number, link: string, name: string, flagged: boolean }
      | { __typename: 'FusionVariant', deprecated: boolean, id: number, link: string, name: string, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
      | { __typename: 'Gene', id: number, link: string, name: string, flagged: boolean }
      | { __typename: 'GeneVariant', deprecated: boolean, id: number, link: string, name: string, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
      | { __typename: 'MolecularProfile', id: number, link: string, name: string, flagged: boolean }
      | { __typename: 'Region', id: number, link: string, name: string, flagged: boolean }
      | { __typename: 'RegionVariant', deprecated: boolean, id: number, link: string, name: string, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
      | { __typename: 'Variant', deprecated: boolean, id: number, link: string, name: string, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
      | { __typename: 'VariantGroup', id: number, link: string, name: string, flagged: boolean }
    , openActivity: { __typename: 'FlagEntityActivity', parsedNote: Array<
        | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTextSegment', text: string }
        | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
      > } } | undefined };

export type FlagPopoverFragment = { __typename: 'Flag', id: number, name: string, state: Types.FlagState, createdAt: any, flaggingUser: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, flaggable:
    | { __typename: 'Assertion', status: Types.EvidenceStatus, id: number, link: string, name: string, flagged: boolean }
    | { __typename: 'BrowseFeature', id: number, link: string, name: string, flagged: boolean }
    | { __typename: 'EvidenceItem', status: Types.EvidenceStatus, id: number, link: string, name: string, flagged: boolean }
    | { __typename: 'Factor', id: number, link: string, name: string, flagged: boolean }
    | { __typename: 'FactorVariant', deprecated: boolean, id: number, link: string, name: string, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
    | { __typename: 'Feature', deprecated: boolean, id: number, link: string, name: string, flagged: boolean }
    | { __typename: 'Fusion', id: number, link: string, name: string, flagged: boolean }
    | { __typename: 'FusionVariant', deprecated: boolean, id: number, link: string, name: string, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
    | { __typename: 'Gene', id: number, link: string, name: string, flagged: boolean }
    | { __typename: 'GeneVariant', deprecated: boolean, id: number, link: string, name: string, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
    | { __typename: 'MolecularProfile', id: number, link: string, name: string, flagged: boolean }
    | { __typename: 'Region', id: number, link: string, name: string, flagged: boolean }
    | { __typename: 'RegionVariant', deprecated: boolean, id: number, link: string, name: string, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
    | { __typename: 'Variant', deprecated: boolean, id: number, link: string, name: string, flagged: boolean, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
    | { __typename: 'VariantGroup', id: number, link: string, name: string, flagged: boolean }
  , openActivity: { __typename: 'FlagEntityActivity', parsedNote: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    > } };

export const FlagPopoverFragmentDoc = gql`
    fragment flagPopover on Flag {
  id
  name
  state
  flaggingUser {
    id
    displayName
    role
  }
  flaggable {
    id
    link
    name
    ... on VariantInterface {
      deprecated
      feature {
        id
        name
        link
        deprecated
        flagged
      }
    }
    ... on Feature {
      deprecated
    }
    ... on EvidenceItem {
      status
    }
    ... on Assertion {
      status
    }
    flagged
  }
  createdAt
  openActivity {
    parsedNote {
      ...parsedCommentFragment
    }
  }
}
    ${ParsedCommentFragmentFragmentDoc}`;
export const FlagPopoverDocument = gql`
    query FlagPopover($flagId: Int!) {
  flag(id: $flagId) {
    ...flagPopover
  }
}
    ${FlagPopoverFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class FlagPopoverGQL extends Apollo.Query<FlagPopoverQuery, FlagPopoverQueryVariables> {
    document = FlagPopoverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
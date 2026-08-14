/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { ParsedCommentFragmentFragmentDoc } from '../../comments/comment-list/comment-list.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type RevisionPopoverQueryVariables = Types.Exact<{
  revisionId: Types.Scalars['Int']['input'];
}>;


export type RevisionPopoverQuery = { __typename: 'Query', revision?: { __typename: 'Revision', id: number, name: string, link: string, status: Types.RevisionStatus, createdAt: any, creationActivity?: { __typename: 'SuggestRevisionSetActivity', user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, parsedNote: Array<
        | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
        | { __typename: 'CommentTextSegment', text: string }
        | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
      > } | undefined, subject:
      | { __typename: 'Assertion', flagged: boolean, status: Types.EvidenceStatus, id: number, link: string, name: string }
      | { __typename: 'Comment', id: number, link: string, name: string }
      | { __typename: 'EvidenceItem', flagged: boolean, status: Types.EvidenceStatus, id: number, link: string, name: string }
      | { __typename: 'ExonCoordinate', id: number, link: string, name: string }
      | { __typename: 'Factor', id: number, link: string, name: string }
      | { __typename: 'FactorVariant', deprecated: boolean, flagged: boolean, id: number, link: string, name: string, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
      | { __typename: 'Feature', deprecated: boolean, flagged: boolean, id: number, link: string, name: string }
      | { __typename: 'Flag', id: number, link: string, name: string }
      | { __typename: 'Fusion', id: number, link: string, name: string }
      | { __typename: 'FusionVariant', deprecated: boolean, flagged: boolean, id: number, link: string, name: string, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
      | { __typename: 'Gene', id: number, link: string, name: string }
      | { __typename: 'GeneVariant', deprecated: boolean, flagged: boolean, id: number, link: string, name: string, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
      | { __typename: 'MolecularProfile', id: number, link: string, name: string }
      | { __typename: 'Region', id: number, link: string, name: string }
      | { __typename: 'RegionVariant', deprecated: boolean, flagged: boolean, id: number, link: string, name: string, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
      | { __typename: 'Revision', id: number, link: string, name: string }
      | { __typename: 'RevisionSet', id: number, link: string, name: string }
      | { __typename: 'Source', id: number, link: string, name: string }
      | { __typename: 'SourcePopover', id: number, link: string, name: string }
      | { __typename: 'SourceSuggestion', id: number, link: string, name: string }
      | { __typename: 'Variant', deprecated: boolean, flagged: boolean, id: number, link: string, name: string, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
      | { __typename: 'VariantCoordinate', id: number, link: string, name: string }
      | { __typename: 'VariantGroup', flagged: boolean, id: number, link: string, name: string }
    , linkoutData: { __typename: 'LinkoutData', name: string } } | undefined };

export type RevisionPopoverFragment = { __typename: 'Revision', id: number, name: string, link: string, status: Types.RevisionStatus, createdAt: any, creationActivity?: { __typename: 'SuggestRevisionSetActivity', user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, parsedNote: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    > } | undefined, subject:
    | { __typename: 'Assertion', flagged: boolean, status: Types.EvidenceStatus, id: number, link: string, name: string }
    | { __typename: 'Comment', id: number, link: string, name: string }
    | { __typename: 'EvidenceItem', flagged: boolean, status: Types.EvidenceStatus, id: number, link: string, name: string }
    | { __typename: 'ExonCoordinate', id: number, link: string, name: string }
    | { __typename: 'Factor', id: number, link: string, name: string }
    | { __typename: 'FactorVariant', deprecated: boolean, flagged: boolean, id: number, link: string, name: string, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
    | { __typename: 'Feature', deprecated: boolean, flagged: boolean, id: number, link: string, name: string }
    | { __typename: 'Flag', id: number, link: string, name: string }
    | { __typename: 'Fusion', id: number, link: string, name: string }
    | { __typename: 'FusionVariant', deprecated: boolean, flagged: boolean, id: number, link: string, name: string, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
    | { __typename: 'Gene', id: number, link: string, name: string }
    | { __typename: 'GeneVariant', deprecated: boolean, flagged: boolean, id: number, link: string, name: string, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
    | { __typename: 'MolecularProfile', id: number, link: string, name: string }
    | { __typename: 'Region', id: number, link: string, name: string }
    | { __typename: 'RegionVariant', deprecated: boolean, flagged: boolean, id: number, link: string, name: string, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
    | { __typename: 'Revision', id: number, link: string, name: string }
    | { __typename: 'RevisionSet', id: number, link: string, name: string }
    | { __typename: 'Source', id: number, link: string, name: string }
    | { __typename: 'SourcePopover', id: number, link: string, name: string }
    | { __typename: 'SourceSuggestion', id: number, link: string, name: string }
    | { __typename: 'Variant', deprecated: boolean, flagged: boolean, id: number, link: string, name: string, feature: { __typename: 'Feature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } }
    | { __typename: 'VariantCoordinate', id: number, link: string, name: string }
    | { __typename: 'VariantGroup', flagged: boolean, id: number, link: string, name: string }
  , linkoutData: { __typename: 'LinkoutData', name: string } };

export const RevisionPopoverFragmentDoc = gql`
    fragment revisionPopover on Revision {
  id
  name
  link
  status
  creationActivity {
    user {
      id
      displayName
      role
    }
    parsedNote {
      ...parsedCommentFragment
    }
  }
  subject {
    id
    link
    name
    ... on VariantInterface {
      deprecated
      flagged
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
      flagged
    }
    ... on Assertion {
      flagged
      status
    }
    ... on EvidenceItem {
      flagged
      status
    }
    ... on VariantGroup {
      flagged
    }
  }
  createdAt
  linkoutData {
    name
  }
}
    ${ParsedCommentFragmentFragmentDoc}`;
export const RevisionPopoverDocument = gql`
    query RevisionPopover($revisionId: Int!) {
  revision(id: $revisionId) {
    ...revisionPopover
  }
}
    ${RevisionPopoverFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RevisionPopoverGQL extends Apollo.Query<RevisionPopoverQuery, RevisionPopoverQueryVariables> {
    document = RevisionPopoverDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
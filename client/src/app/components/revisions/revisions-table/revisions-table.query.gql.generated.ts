/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { RevisionLinkoutDataFragmentDoc } from '../revisions-list-and-filter/revisions-list-and-filter.query.gql.generated';
import { ParsedCommentFragmentFragmentDoc } from '../../comments/comment-list/comment-list.query.gql.generated';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type RevisionsBrowseQueryVariables = Types.Exact<{
  first?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  last?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  before?: Types.InputMaybe<Types.Scalars['String']['input']>;
  after?: Types.InputMaybe<Types.Scalars['String']['input']>;
  fieldName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  originatingUserName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  excludeRevisionsFromUserId?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  organizationName?: Types.InputMaybe<Types.Scalars['String']['input']>;
  subjectType?: Types.InputMaybe<Types.ActivitySubjectInput>;
  id?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  ids?: Types.InputMaybe<Array<Types.Scalars['Int']['input']> | Types.Scalars['Int']['input']>;
  status?: Types.InputMaybe<Types.RevisionStatus>;
  requestDetails?: Types.InputMaybe<Types.Scalars['Boolean']['input']>;
}>;


export type RevisionsBrowseQuery = { __typename: 'Query', revisionSets: { __typename: 'RevisionSetConnection', totalCount: number, pageInfo: { __typename: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | undefined, endCursor?: string | undefined }, edges: Array<{ __typename: 'RevisionSetEdge', cursor: string, node?: { __typename: 'RevisionSet', id: number, name: string, revisions: Array<{ __typename: 'Revision', id: number, name: string, status: Types.RevisionStatus, currentValue?: any | undefined, suggestedValue?: any | undefined, fieldName: string, fieldDisplayName: string, link: string, linkoutData?: { __typename: 'LinkoutData', name: string, diffValue:
              | { __typename: 'ObjectFieldDiff', currentObjects: Array<{ __typename: 'ModeratedObjectField', id: number, displayName?: string | undefined, displayType?: string | undefined, entityType: string, link?: string | undefined, deleted: boolean, deprecated?: boolean | undefined, flagged?: boolean | undefined, feature?: { __typename: 'LinkableFeature', link: string, id: number, name: string, deprecated: boolean, flagged: boolean } | undefined }>, addedObjects: Array<{ __typename: 'ModeratedObjectField', id: number, displayName?: string | undefined, displayType?: string | undefined, entityType: string, link?: string | undefined, deleted: boolean, deprecated?: boolean | undefined, flagged?: boolean | undefined, feature?: { __typename: 'LinkableFeature', link: string, id: number, name: string, deprecated: boolean, flagged: boolean } | undefined }>, removedObjects: Array<{ __typename: 'ModeratedObjectField', id: number, displayName?: string | undefined, displayType?: string | undefined, entityType: string, link?: string | undefined, deleted: boolean, deprecated?: boolean | undefined, flagged?: boolean | undefined, feature?: { __typename: 'LinkableFeature', link: string, id: number, name: string, deprecated: boolean, flagged: boolean } | undefined }>, keptObjects: Array<{ __typename: 'ModeratedObjectField', id: number, displayName?: string | undefined, displayType?: string | undefined, entityType: string, link?: string | undefined, deleted: boolean, deprecated?: boolean | undefined, flagged?: boolean | undefined, feature?: { __typename: 'LinkableFeature', link: string, id: number, name: string, deprecated: boolean, flagged: boolean } | undefined }>, suggestedObjects: Array<{ __typename: 'ModeratedObjectField', id: number, displayName?: string | undefined, displayType?: string | undefined, entityType: string, link?: string | undefined, deleted: boolean, deprecated?: boolean | undefined, flagged?: boolean | undefined, feature?: { __typename: 'LinkableFeature', link: string, id: number, name: string, deprecated: boolean, flagged: boolean } | undefined }> }
              | { __typename: 'ScalarFieldDiff', left: string, right: string }
             }, subject:
            | { __typename: 'Assertion' }
            | { __typename: 'Comment' }
            | { __typename: 'EvidenceItem' }
            | { __typename: 'ExonCoordinate', coordinateType: Types.ExonCoordinateType }
            | { __typename: 'Factor' }
            | { __typename: 'FactorVariant' }
            | { __typename: 'Feature' }
            | { __typename: 'Flag' }
            | { __typename: 'Fusion' }
            | { __typename: 'FusionVariant' }
            | { __typename: 'Gene' }
            | { __typename: 'GeneVariant' }
            | { __typename: 'MolecularProfile' }
            | { __typename: 'Region' }
            | { __typename: 'RegionVariant' }
            | { __typename: 'Revision' }
            | { __typename: 'RevisionSet' }
            | { __typename: 'Source' }
            | { __typename: 'SourcePopover' }
            | { __typename: 'SourceSuggestion' }
            | { __typename: 'Variant' }
            | { __typename: 'VariantCoordinate' }
            | { __typename: 'VariantGroup' }
           }>, creationActivity?: { __typename: 'SuggestRevisionSetActivity', createdAt: any, subject:
            | { __typename: 'Assertion', id: number, name: string, link: string }
            | { __typename: 'Comment', id: number, name: string, link: string }
            | { __typename: 'EvidenceItem', id: number, name: string, link: string }
            | { __typename: 'ExonCoordinate', id: number, name: string, link: string }
            | { __typename: 'Factor', id: number, name: string, link: string }
            | { __typename: 'FactorVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
            | { __typename: 'Feature', id: number, name: string, link: string }
            | { __typename: 'Flag', id: number, name: string, link: string }
            | { __typename: 'Fusion', id: number, name: string, link: string }
            | { __typename: 'FusionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
            | { __typename: 'Gene', id: number, name: string, link: string }
            | { __typename: 'GeneVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
            | { __typename: 'MolecularProfile', id: number, name: string, link: string }
            | { __typename: 'Region', id: number, name: string, link: string }
            | { __typename: 'RegionVariant', id: number, name: string, link: string }
            | { __typename: 'Revision', id: number, name: string, link: string }
            | { __typename: 'RevisionSet', id: number, name: string, link: string }
            | { __typename: 'Source', id: number, name: string, link: string }
            | { __typename: 'SourcePopover', id: number, name: string, link: string }
            | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
            | { __typename: 'Variant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
            | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
            | { __typename: 'VariantGroup', id: number, name: string, link: string }
          , user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, parsedNote: Array<
            | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
            | { __typename: 'CommentTextSegment', text: string }
            | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
          >, organization?: { __typename: 'Organization', id: number, name: string } | undefined } | undefined } | undefined }> } };

export type RevisionSetBrowseFieldsFragment = { __typename: 'RevisionSet', id: number, name: string, revisions: Array<{ __typename: 'Revision', id: number, name: string, status: Types.RevisionStatus, currentValue?: any | undefined, suggestedValue?: any | undefined, fieldName: string, fieldDisplayName: string, link: string, linkoutData?: { __typename: 'LinkoutData', name: string, diffValue:
        | { __typename: 'ObjectFieldDiff', currentObjects: Array<{ __typename: 'ModeratedObjectField', id: number, displayName?: string | undefined, displayType?: string | undefined, entityType: string, link?: string | undefined, deleted: boolean, deprecated?: boolean | undefined, flagged?: boolean | undefined, feature?: { __typename: 'LinkableFeature', link: string, id: number, name: string, deprecated: boolean, flagged: boolean } | undefined }>, addedObjects: Array<{ __typename: 'ModeratedObjectField', id: number, displayName?: string | undefined, displayType?: string | undefined, entityType: string, link?: string | undefined, deleted: boolean, deprecated?: boolean | undefined, flagged?: boolean | undefined, feature?: { __typename: 'LinkableFeature', link: string, id: number, name: string, deprecated: boolean, flagged: boolean } | undefined }>, removedObjects: Array<{ __typename: 'ModeratedObjectField', id: number, displayName?: string | undefined, displayType?: string | undefined, entityType: string, link?: string | undefined, deleted: boolean, deprecated?: boolean | undefined, flagged?: boolean | undefined, feature?: { __typename: 'LinkableFeature', link: string, id: number, name: string, deprecated: boolean, flagged: boolean } | undefined }>, keptObjects: Array<{ __typename: 'ModeratedObjectField', id: number, displayName?: string | undefined, displayType?: string | undefined, entityType: string, link?: string | undefined, deleted: boolean, deprecated?: boolean | undefined, flagged?: boolean | undefined, feature?: { __typename: 'LinkableFeature', link: string, id: number, name: string, deprecated: boolean, flagged: boolean } | undefined }>, suggestedObjects: Array<{ __typename: 'ModeratedObjectField', id: number, displayName?: string | undefined, displayType?: string | undefined, entityType: string, link?: string | undefined, deleted: boolean, deprecated?: boolean | undefined, flagged?: boolean | undefined, feature?: { __typename: 'LinkableFeature', link: string, id: number, name: string, deprecated: boolean, flagged: boolean } | undefined }> }
        | { __typename: 'ScalarFieldDiff', left: string, right: string }
       }, subject:
      | { __typename: 'Assertion' }
      | { __typename: 'Comment' }
      | { __typename: 'EvidenceItem' }
      | { __typename: 'ExonCoordinate', coordinateType: Types.ExonCoordinateType }
      | { __typename: 'Factor' }
      | { __typename: 'FactorVariant' }
      | { __typename: 'Feature' }
      | { __typename: 'Flag' }
      | { __typename: 'Fusion' }
      | { __typename: 'FusionVariant' }
      | { __typename: 'Gene' }
      | { __typename: 'GeneVariant' }
      | { __typename: 'MolecularProfile' }
      | { __typename: 'Region' }
      | { __typename: 'RegionVariant' }
      | { __typename: 'Revision' }
      | { __typename: 'RevisionSet' }
      | { __typename: 'Source' }
      | { __typename: 'SourcePopover' }
      | { __typename: 'SourceSuggestion' }
      | { __typename: 'Variant' }
      | { __typename: 'VariantCoordinate' }
      | { __typename: 'VariantGroup' }
     }>, creationActivity?: { __typename: 'SuggestRevisionSetActivity', createdAt: any, subject:
      | { __typename: 'Assertion', id: number, name: string, link: string }
      | { __typename: 'Comment', id: number, name: string, link: string }
      | { __typename: 'EvidenceItem', id: number, name: string, link: string }
      | { __typename: 'ExonCoordinate', id: number, name: string, link: string }
      | { __typename: 'Factor', id: number, name: string, link: string }
      | { __typename: 'FactorVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
      | { __typename: 'Feature', id: number, name: string, link: string }
      | { __typename: 'Flag', id: number, name: string, link: string }
      | { __typename: 'Fusion', id: number, name: string, link: string }
      | { __typename: 'FusionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
      | { __typename: 'Gene', id: number, name: string, link: string }
      | { __typename: 'GeneVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
      | { __typename: 'MolecularProfile', id: number, name: string, link: string }
      | { __typename: 'Region', id: number, name: string, link: string }
      | { __typename: 'RegionVariant', id: number, name: string, link: string }
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'RevisionSet', id: number, name: string, link: string }
      | { __typename: 'Source', id: number, name: string, link: string }
      | { __typename: 'SourcePopover', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
      | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
      | { __typename: 'VariantGroup', id: number, name: string, link: string }
    , user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, parsedNote: Array<
      | { __typename: 'CommentTagSegment', entityId: number, displayName: string, tagType: Types.TaggableEntity, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlagged', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndDeprecated', entityId: number, displayName: string, tagType: Types.TaggableEntity, flagged: boolean, deprecated: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTagSegmentFlaggedAndWithStatus', entityId: number, displayName: string, tagType: Types.TaggableEntity, status: Types.EvidenceStatus, flagged: boolean, link: string, revisionSetId?: number | undefined, feature?: { __typename: 'LinkableFeature', id: number, name: string, link: string, deprecated: boolean, flagged: boolean } | undefined }
      | { __typename: 'CommentTextSegment', text: string }
      | { __typename: 'User', id: number, username: string, displayName: string, name?: string | undefined, role: Types.UserRole, profileImagePath?: string | undefined, organizations: Array<{ __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined }> }
    >, organization?: { __typename: 'Organization', id: number, name: string } | undefined } | undefined };

export const RevisionSetBrowseFieldsFragmentDoc = gql`
    fragment RevisionSetBrowseFields on RevisionSet {
  id
  name
  revisions {
    id
    name
    status
    currentValue
    suggestedValue
    fieldName
    fieldDisplayName
    link
    linkoutData @include(if: $requestDetails) {
      ...revisionLinkoutData
    }
    subject {
      ... on ExonCoordinate {
        coordinateType
      }
    }
  }
  creationActivity @skip(if: $requestDetails) {
    subject {
      id
      name
      link
      ... on Variant {
        feature {
          id
          name
          link
        }
      }
      ... on GeneVariant {
        feature {
          id
          name
          link
        }
      }
      ... on FactorVariant {
        feature {
          id
          name
          link
        }
      }
      ... on FusionVariant {
        feature {
          id
          name
          link
        }
      }
    }
    createdAt
    user {
      id
      displayName
      role
    }
    parsedNote {
      ...parsedCommentFragment
    }
    organization {
      id
      name
    }
  }
}
    ${RevisionLinkoutDataFragmentDoc}
${ParsedCommentFragmentFragmentDoc}`;
export const RevisionsBrowseDocument = gql`
    query RevisionsBrowse($first: Int, $last: Int, $before: String, $after: String, $fieldName: String, $originatingUserName: String, $excludeRevisionsFromUserId: Int, $organizationName: String, $subjectType: ActivitySubjectInput, $id: Int, $ids: [Int!], $status: RevisionStatus, $requestDetails: Boolean = false) {
  revisionSets(
    first: $first
    last: $last
    before: $before
    after: $after
    status: $status
    fieldName: $fieldName
    originatingUserName: $originatingUserName
    excludeRevisionsFromUserId: $excludeRevisionsFromUserId
    organizationName: $organizationName
    subjectType: $subjectType
    id: $id
    ids: $ids
  ) {
    totalCount
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        ...RevisionSetBrowseFields
      }
    }
  }
}
    ${RevisionSetBrowseFieldsFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class RevisionsBrowseGQL extends Apollo.Query<RevisionsBrowseQuery, RevisionsBrowseQueryVariables> {
    document = RevisionsBrowseDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
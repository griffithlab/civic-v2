/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
import { RevisionLinkoutDataFragmentDoc } from '../../revisions/revisions-list-and-filter/revisions-list-and-filter.query.gql.generated';
export type ActivityFeedItemBase_AcceptRevisionsActivity_Fragment = { __typename: 'AcceptRevisionsActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_ApproveAssertionActivity_Fragment = { __typename: 'ApproveAssertionActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_CommentActivity_Fragment = { __typename: 'CommentActivity', id: number, verbiage: string, createdAt: any, comment: { __typename: 'Comment', id: number, name: string, link: string }, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_CreateComplexMolecularProfileActivity_Fragment = { __typename: 'CreateComplexMolecularProfileActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_CreateFeatureActivity_Fragment = { __typename: 'CreateFeatureActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_CreateVariantActivity_Fragment = { __typename: 'CreateVariantActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_DeleteCommentActivity_Fragment = { __typename: 'DeleteCommentActivity', id: number, verbiage: string, createdAt: any, comment: { __typename: 'Comment', id: number, name: string, link: string }, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_DeprecateComplexMolecularProfileActivity_Fragment = { __typename: 'DeprecateComplexMolecularProfileActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_DeprecateFeatureActivity_Fragment = { __typename: 'DeprecateFeatureActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_DeprecateVariantActivity_Fragment = { __typename: 'DeprecateVariantActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_FlagEntityActivity_Fragment = { __typename: 'FlagEntityActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_ModerateAssertionActivity_Fragment = { __typename: 'ModerateAssertionActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_ModerateEvidenceItemActivity_Fragment = { __typename: 'ModerateEvidenceItemActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_RejectRevisionsActivity_Fragment = { __typename: 'RejectRevisionsActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_ResolveFlagActivity_Fragment = { __typename: 'ResolveFlagActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_RevokeApprovalActivity_Fragment = { __typename: 'RevokeApprovalActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_SubmitAssertionActivity_Fragment = { __typename: 'SubmitAssertionActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_SubmitEvidenceItemActivity_Fragment = { __typename: 'SubmitEvidenceItemActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_SuggestRevisionSetActivity_Fragment = { __typename: 'SuggestRevisionSetActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_SuggestSourceActivity_Fragment = { __typename: 'SuggestSourceActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBase_UpdateSourceSuggestionStatusActivity_Fragment = { __typename: 'UpdateSourceSuggestionStatusActivity', id: number, verbiage: string, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string } | undefined, user: { __typename: 'User', id: number, displayName: string, role: Types.UserRole }, subject:
    | { __typename: 'Assertion', id: number, name: string, link: string }
    | { __typename: 'Comment', deleted: boolean, deletedAt?: any | undefined, id: number, name: string, link: string, commentable:
        | { __typename: 'Assertion', id: number, name: string, link: string }
        | { __typename: 'EvidenceItem', id: number, name: string, link: string }
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
        | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
        | { __typename: 'Revision', id: number, name: string, link: string }
        | { __typename: 'Source', id: number, name: string, link: string }
        | { __typename: 'SourcePopover', id: number, name: string, link: string }
        | { __typename: 'Variant', id: number, name: string, link: string }
        | { __typename: 'VariantGroup', id: number, name: string, link: string }
       }
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
    | { __typename: 'RegionVariant', id: number, name: string, link: string, feature: { __typename: 'Feature', id: number, name: string, link: string } }
    | { __typename: 'Revision', id: number, name: string, link: string }
    | { __typename: 'RevisionSet', id: number, name: string, link: string }
    | { __typename: 'Source', id: number, name: string, link: string }
    | { __typename: 'SourcePopover', id: number, name: string, link: string }
    | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
    | { __typename: 'Variant', id: number, name: string, link: string }
    | { __typename: 'VariantCoordinate', id: number, name: string, link: string }
    | { __typename: 'VariantGroup', id: number, name: string, link: string }
   };

export type ActivityFeedItemBaseFragment =
  | ActivityFeedItemBase_AcceptRevisionsActivity_Fragment
  | ActivityFeedItemBase_ApproveAssertionActivity_Fragment
  | ActivityFeedItemBase_CommentActivity_Fragment
  | ActivityFeedItemBase_CreateComplexMolecularProfileActivity_Fragment
  | ActivityFeedItemBase_CreateFeatureActivity_Fragment
  | ActivityFeedItemBase_CreateVariantActivity_Fragment
  | ActivityFeedItemBase_DeleteCommentActivity_Fragment
  | ActivityFeedItemBase_DeprecateComplexMolecularProfileActivity_Fragment
  | ActivityFeedItemBase_DeprecateFeatureActivity_Fragment
  | ActivityFeedItemBase_DeprecateVariantActivity_Fragment
  | ActivityFeedItemBase_FlagEntityActivity_Fragment
  | ActivityFeedItemBase_ModerateAssertionActivity_Fragment
  | ActivityFeedItemBase_ModerateEvidenceItemActivity_Fragment
  | ActivityFeedItemBase_RejectRevisionsActivity_Fragment
  | ActivityFeedItemBase_ResolveFlagActivity_Fragment
  | ActivityFeedItemBase_RevokeApprovalActivity_Fragment
  | ActivityFeedItemBase_SubmitAssertionActivity_Fragment
  | ActivityFeedItemBase_SubmitEvidenceItemActivity_Fragment
  | ActivityFeedItemBase_SuggestRevisionSetActivity_Fragment
  | ActivityFeedItemBase_SuggestSourceActivity_Fragment
  | ActivityFeedItemBase_UpdateSourceSuggestionStatusActivity_Fragment
;

export type ActivityFeedItemEvents_AcceptRevisionsActivity_Fragment = { __typename: 'AcceptRevisionsActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_ApproveAssertionActivity_Fragment = { __typename: 'ApproveAssertionActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_CommentActivity_Fragment = { __typename: 'CommentActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_CreateComplexMolecularProfileActivity_Fragment = { __typename: 'CreateComplexMolecularProfileActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_CreateFeatureActivity_Fragment = { __typename: 'CreateFeatureActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_CreateVariantActivity_Fragment = { __typename: 'CreateVariantActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_DeleteCommentActivity_Fragment = { __typename: 'DeleteCommentActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_DeprecateComplexMolecularProfileActivity_Fragment = { __typename: 'DeprecateComplexMolecularProfileActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_DeprecateFeatureActivity_Fragment = { __typename: 'DeprecateFeatureActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_DeprecateVariantActivity_Fragment = { __typename: 'DeprecateVariantActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_FlagEntityActivity_Fragment = { __typename: 'FlagEntityActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_ModerateAssertionActivity_Fragment = { __typename: 'ModerateAssertionActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_ModerateEvidenceItemActivity_Fragment = { __typename: 'ModerateEvidenceItemActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_RejectRevisionsActivity_Fragment = { __typename: 'RejectRevisionsActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_ResolveFlagActivity_Fragment = { __typename: 'ResolveFlagActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_RevokeApprovalActivity_Fragment = { __typename: 'RevokeApprovalActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_SubmitAssertionActivity_Fragment = { __typename: 'SubmitAssertionActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_SubmitEvidenceItemActivity_Fragment = { __typename: 'SubmitEvidenceItemActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_SuggestRevisionSetActivity_Fragment = { __typename: 'SuggestRevisionSetActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_SuggestSourceActivity_Fragment = { __typename: 'SuggestSourceActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEvents_UpdateSourceSuggestionStatusActivity_Fragment = { __typename: 'UpdateSourceSuggestionStatusActivity', events: Array<{ __typename: 'Event', id: number, createdAt: any, action: Types.EventAction, originatingObject?:
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
      | { __typename: 'Revision', id: number, name: string, link: string }
      | { __typename: 'SourceSuggestion', id: number, name: string, link: string }
      | { __typename: 'Variant', id: number, name: string, link: string }
     | undefined, originatingUser: { __typename: 'User', id: number, displayName: string } }> };

export type ActivityFeedItemEventsFragment =
  | ActivityFeedItemEvents_AcceptRevisionsActivity_Fragment
  | ActivityFeedItemEvents_ApproveAssertionActivity_Fragment
  | ActivityFeedItemEvents_CommentActivity_Fragment
  | ActivityFeedItemEvents_CreateComplexMolecularProfileActivity_Fragment
  | ActivityFeedItemEvents_CreateFeatureActivity_Fragment
  | ActivityFeedItemEvents_CreateVariantActivity_Fragment
  | ActivityFeedItemEvents_DeleteCommentActivity_Fragment
  | ActivityFeedItemEvents_DeprecateComplexMolecularProfileActivity_Fragment
  | ActivityFeedItemEvents_DeprecateFeatureActivity_Fragment
  | ActivityFeedItemEvents_DeprecateVariantActivity_Fragment
  | ActivityFeedItemEvents_FlagEntityActivity_Fragment
  | ActivityFeedItemEvents_ModerateAssertionActivity_Fragment
  | ActivityFeedItemEvents_ModerateEvidenceItemActivity_Fragment
  | ActivityFeedItemEvents_RejectRevisionsActivity_Fragment
  | ActivityFeedItemEvents_ResolveFlagActivity_Fragment
  | ActivityFeedItemEvents_RevokeApprovalActivity_Fragment
  | ActivityFeedItemEvents_SubmitAssertionActivity_Fragment
  | ActivityFeedItemEvents_SubmitEvidenceItemActivity_Fragment
  | ActivityFeedItemEvents_SuggestRevisionSetActivity_Fragment
  | ActivityFeedItemEvents_SuggestSourceActivity_Fragment
  | ActivityFeedItemEvents_UpdateSourceSuggestionStatusActivity_Fragment
;

export type RevisionActivityDetailFragment = { __typename: 'Revision', id: number, name: string, status: Types.RevisionStatus, currentValue?: any | undefined, suggestedValue?: any | undefined, fieldName: string, link: string, createdAt: any, linkoutData: { __typename: 'LinkoutData', name: string, diffValue:
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
   };

export const ActivityFeedItemBaseFragmentDoc = gql`
    fragment ActivityFeedItemBase on ActivityInterface {
  id
  verbiage
  createdAt
  organization {
    id
    name
  }
  user {
    id
    displayName
    role
  }
  subject {
    id
    name
    link
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
    ... on RegionVariant {
      feature {
        id
        name
        link
      }
    }
    ... on Comment {
      deleted
      deletedAt
      commentable {
        id
        name
        link
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
        ... on GeneVariant {
          feature {
            id
            name
            link
          }
        }
        ... on RegionVariant {
          feature {
            id
            name
            link
          }
        }
      }
    }
  }
  ... on DeleteCommentActivity {
    comment {
      id
      name
      link
    }
  }
  ... on CommentActivity {
    comment {
      id
      name
      link
    }
  }
}
    `;
export const ActivityFeedItemEventsFragmentDoc = gql`
    fragment ActivityFeedItemEvents on ActivityInterface {
  events {
    id
    createdAt
    action
    originatingObject {
      id
      name
      link
    }
    originatingUser {
      id
      displayName
    }
  }
}
    `;
export const RevisionActivityDetailFragmentDoc = gql`
    fragment RevisionActivityDetail on Revision {
  id
  name
  status
  currentValue
  suggestedValue
  fieldName
  link
  createdAt
  linkoutData {
    ...revisionLinkoutData
  }
  subject {
    ... on ExonCoordinate {
      coordinateType
    }
  }
}
    ${RevisionLinkoutDataFragmentDoc}`;
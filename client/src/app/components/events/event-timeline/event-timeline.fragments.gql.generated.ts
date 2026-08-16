/* eslint-disable */
import * as Types from '../../../generated/civic.apollo.types';

import { gql } from 'apollo-angular';
export type EventTimelineNodeFragment = { __typename: 'Event', id: number, action: Types.EventAction, createdAt: any, organization?: { __typename: 'Organization', id: number, name: string, profileImagePath?: string | undefined } | undefined, originatingUser: { __typename: 'User', id: number, username: string, displayName: string, role: Types.UserRole, profileImagePath?: string | undefined }, subject?:
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

export const EventTimelineNodeFragmentDoc = gql`
    """
The event shape cvc-event-timeline and cvc-event-timeline-item render.

It lived in event-feed.gql until that component was retired in favour of the
activity feed. It is kept here, beside the components typed by it, because the
users-notifications query still spreads it — notifications are Event-based by
design (Notification belongs_to :event), so this is not legacy.
"""
fragment eventTimelineNode on Event {
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
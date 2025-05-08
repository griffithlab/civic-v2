import {
  AssertionDetailFieldsFragment,
  EndorsementListNodeFragment,
  Maybe,
} from '@app/generated/civic.apollo'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { TagLinkableOrganization } from '@app/components/organizations/organization-tag/organization-tag.component'

export interface EndorsableEntity {
  id: number
  name: string
  status: string
  flags: {
    totalCount: number
  }
}

export function canPerformEndorsementActions(viewer: Maybe<Viewer>): boolean {
  return (
    viewer !== undefined &&
    viewer.mostRecentOrg !== undefined &&
    viewer.signedIn &&
    viewer.canModerate &&
    viewer.endorsableOrgIds.length > 0
  )
}

export function isLiveEndorsement(
  endorsement: EndorsementListNodeFragment
): boolean {
  return (
    endorsement.status === 'ACTIVE' || endorsement.status === 'REQUIRES_REVIEW'
  )
}

export function canBeEndorsed(entity: EndorsableEntity): boolean {
  return entity.status === 'ACCEPTED' && entity.flags.totalCount === 0
}

export function currentOrgCanEndorse(viewer: Viewer): boolean {
  if (viewer.mostRecentOrg === undefined) return false
  return viewer.endorsableOrgIds.includes(viewer.mostRecentOrg.id)
}

export function currentOrgCanModerateEndorsement(
  viewer: Viewer,
  endorsement: EndorsementListNodeFragment
): boolean {
  return viewer.mostRecentOrg?.id === endorsement.organization.id
}

export function canModerateEndorsement(
  viewer: Viewer,
  endorsement: EndorsementListNodeFragment
): boolean {
  return (
    canPerformEndorsementActions(viewer) &&
    isLiveEndorsement(endorsement) &&
    canBeEndorsed(endorsement.assertion) &&
    currentOrgCanModerateEndorsement(viewer, endorsement)
  )
}

export function canRevokeEndorsement(
  viewer: Viewer,
  endorsement: EndorsementListNodeFragment
): boolean {
  return (
    canPerformEndorsementActions(viewer) &&
    isLiveEndorsement(endorsement) &&
    currentOrgCanModerateEndorsement(viewer, endorsement)
  )
}

export function canCreateEndorsement(
  viewer: Viewer,
  entity: AssertionDetailFieldsFragment
): boolean {
  if (
    canPerformEndorsementActions(viewer) &&
    currentOrgCanEndorse(viewer) &&
    canBeEndorsed(entity)
  ) {
    // viewer can't create a new endorsement if they can moderate
    // any currently live (active or requires review) endorsements
    return !entity.endorsements.nodes.some((endorsement) => {
      return canModerateEndorsement(viewer, endorsement)
    })
  } else {
    return false
  }
}

export function hasLiveEndorsement(
  viewer: Viewer,
  entity: AssertionDetailFieldsFragment
): boolean {
  return entity.endorsements.nodes.some((endorsement) => {
    return canModerateEndorsement(viewer, endorsement)
  })
}

export function getAlternateCreatingOrgs(
  viewer: Viewer,
  entity: AssertionDetailFieldsFragment
): Maybe<TagLinkableOrganization[]> {
  const currentId = viewer.mostRecentOrg?.id
  const possibleIds = viewer.endorsableOrgIds.filter((id) => id !== currentId)
  if (possibleIds.length === 0) return
  const liveEndorsements = entity.endorsements.nodes.filter(isLiveEndorsement)
  const altOrgs = viewer.user?.organizations.filter((org) => {
    const orgHasNoLiveEndorsements = liveEndorsements.every((e) => {
      return e.organization.id !== org.id
    })
    return possibleIds.includes(org.id) && orgHasNoLiveEndorsements
  })
  return altOrgs && altOrgs.length > 0 ? altOrgs : undefined
}

export function getAlternateModeratingOrg(
  viewer: Viewer,
  endorsement: EndorsementListNodeFragment
): Maybe<TagLinkableOrganization> {
  const altId = viewer.endorsableOrgIds.find(
    (id) => id !== endorsement.organization.id
  )
  if (altId) {
    return viewer.user?.organizations.find((org) => org.id === altId)
  }
  return
}

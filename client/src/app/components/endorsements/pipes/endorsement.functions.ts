import { EndorsementListNodeFragment, Maybe } from '@app/generated/civic.apollo'
import { Viewer } from '@app/core/services/viewer/viewer.service'

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

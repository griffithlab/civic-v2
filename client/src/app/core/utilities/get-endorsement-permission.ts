import { EndorsementListNodeFragment, Maybe } from '@app/generated/civic.apollo'
import { Viewer } from '../services/viewer/viewer.service'

export type EndorsementAction = 'endorse' | 'revoke'

export function getEndorsementsPermission(
  action: EndorsementAction,
  viewer: Viewer,
  endorsements: Maybe<EndorsementListNodeFragment>[]
) {
  // check baseline viewer state & permissions
  if (
    !(
      viewer.signedIn &&
      viewer.canModerate &&
      viewer.mostRecentOrg &&
      viewer.endorsableOrgIds.includes(viewer.mostRecentOrg.id)
    )
  ) {
    return false
  }
  let permission = false

  // fn to check if the viewer has an active endorsement for the specified org
  const hasActiveEndorsement = (
    orgId: number,
    endorsements: any[]
  ): boolean => {
    return endorsements.some((e) => e.organization.id === orgId)
  }

  return action === 'endorse'
    ? !hasActiveEndorsement(viewer.mostRecentOrg.id, endorsements)
    : hasActiveEndorsement(viewer.mostRecentOrg.id, endorsements)
}

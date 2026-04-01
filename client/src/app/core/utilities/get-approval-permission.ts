import { ApprovalListNodeFragment, Maybe } from '@app/generated/civic.apollo'
import { Viewer } from '../services/viewer/viewer.service'

export type ApprovalAction = 'approve' | 're-approve' | 'revoke'

export function getApprovalsPermission(
  action: ApprovalAction,
  viewer: Viewer,
  approvals: Maybe<ApprovalListNodeFragment>[]
) {
  // check baseline viewer state & permissions
  if (
    !(
      viewer.signedIn &&
      viewer.canModerate &&
      viewer.mostRecentOrg &&
      viewer.approvableOrgIds.includes(viewer.mostRecentOrg.id)
    )
  ) {
    return false
  }
  let permission = false

  // fn to check if the viewer has an active approval for the specified org
  const hasActiveApproval = (orgId: number, approvals: any[]): boolean => {
    return approvals.some((e) => e.organization.id === orgId)
  }

  return action === 'approve'
    ? !hasActiveApproval(viewer.mostRecentOrg.id, approvals)
    : hasActiveApproval(viewer.mostRecentOrg.id, approvals)
}

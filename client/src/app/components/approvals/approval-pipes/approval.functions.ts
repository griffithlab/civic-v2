import {
  AssertionDetailFieldsFragment,
  ApprovalListNodeFragment,
  Maybe,
} from '@app/generated/civic.apollo'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { TagLinkableOrganization } from '@app/components/organizations/organization-tag/organization-tag.component'

export interface ApprovableEntity {
  id: number
  name: string
  status: string
  flags: {
    totalCount: number
  }
}

export function canPerformApprovalActions(viewer: Maybe<Viewer>): boolean {
  return (
    viewer !== undefined &&
    viewer.mostRecentOrg !== undefined &&
    viewer.signedIn &&
    viewer.canModerate &&
    viewer.approvableOrgIds.length > 0
  )
}

export function isLiveApproval(approval: ApprovalListNodeFragment): boolean {
  return approval.status === 'ACTIVE' || approval.status === 'REQUIRES_REVIEW'
}

export function canBeApproved(entity: ApprovableEntity): boolean {
  return entity.status === 'ACCEPTED' && entity.flags.totalCount === 0
}

export function currentOrgCanApprove(viewer: Viewer): boolean {
  if (viewer.mostRecentOrg === undefined) return false
  return viewer.approvableOrgIds.includes(viewer.mostRecentOrg.id)
}

export function currentOrgCanModerateApproval(
  viewer: Viewer,
  approval: ApprovalListNodeFragment
): boolean {
  return viewer.mostRecentOrg?.id === approval.organization.id
}

export function canModerateApproval(
  viewer: Viewer,
  approval: ApprovalListNodeFragment
): boolean {
  return (
    canPerformApprovalActions(viewer) &&
    isLiveApproval(approval) &&
    canBeApproved(approval.assertion) &&
    currentOrgCanModerateApproval(viewer, approval)
  )
}

export function canRevokeApproval(
  viewer: Viewer,
  approval: ApprovalListNodeFragment
): boolean {
  return (
    canPerformApprovalActions(viewer) &&
    isLiveApproval(approval) &&
    currentOrgCanModerateApproval(viewer, approval)
  )
}

export function canCreateApproval(
  viewer: Viewer,
  entity: AssertionDetailFieldsFragment
): boolean {
  if (
    canPerformApprovalActions(viewer) &&
    currentOrgCanApprove(viewer) &&
    canBeApproved(entity)
  ) {
    // viewer can't create a new approval if they can moderate
    // any currently live (active or requires review) approvals
    return !entity.approvals.nodes.some((approval) => {
      return canModerateApproval(viewer, approval)
    })
  } else {
    return false
  }
}

export function hasLiveApproval(
  viewer: Viewer,
  entity: AssertionDetailFieldsFragment
): boolean {
  return entity.approvals.nodes.some((approval) => {
    return canModerateApproval(viewer, approval)
  })
}

export function getAlternateCreatingOrgs(
  viewer: Viewer,
  entity: AssertionDetailFieldsFragment
): Maybe<TagLinkableOrganization[]> {
  const currentId = viewer.mostRecentOrg?.id
  const possibleIds = viewer.approvableOrgIds.filter((id) => id !== currentId)
  if (possibleIds.length === 0) return
  const liveApprovals = entity.approvals.nodes.filter(isLiveApproval)
  const altOrgs = viewer.user?.organizations.filter((org) => {
    const orgHasNoLiveApprovals = liveApprovals.every((e) => {
      return e.organization.id !== org.id
    })
    return possibleIds.includes(org.id) && orgHasNoLiveApprovals
  })
  return altOrgs && altOrgs.length > 0 ? altOrgs : undefined
}

export function getAlternateModeratingOrg(
  viewer: Viewer,
  approval: ApprovalListNodeFragment
): Maybe<TagLinkableOrganization> {
  const altId = viewer.approvableOrgIds.find(
    (id) => id !== approval.organization.id
  )
  if (altId) {
    return viewer.user?.organizations.find((org) => org.id === altId)
  }
  return
}

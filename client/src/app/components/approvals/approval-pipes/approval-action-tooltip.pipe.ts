import { Pipe, PipeTransform } from '@angular/core'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import {
  AssertionDetailFieldsFragment,
  ApprovalListNodeFragment,
  Maybe,
} from '@app/generated/civic.apollo'
import {
  canBeApproved,
  canCreateApproval,
  canModerateApproval,
  canPerformApprovalActions,
  canRevokeApproval,
  currentOrgCanApprove,
  currentOrgCanModerateApproval,
  getAlternateCreatingOrgs,
  getAlternateModeratingOrg,
  hasLiveApproval,
  isLiveApproval,
} from './approval.functions'

/*
 * Given a viewer, action, approvable entity, and optional approval
 * ID, returns a string appropriate for an action button tooltip.
 *
 * @param viewer - The viewer of the approval
 * @param action - An approval action (create, revoke, approve)
 * @param entity - An approvable entity (currently Assertion)
 * @param approvalId - Required for revoke & approveChanges tooltips, which are displayed in the context of a specific approval.
 *
 * @returns tooltip string for the specified approval action button
 */

export type ApprovalActions = 'create' | 'revoke' | 'approveChanges'

@Pipe({
  name: 'approvalActionTooltip',
  standalone: true,
})
export class CvcApprovalActionTooltipPipe implements PipeTransform {
  transform(
    viewer: Maybe<Viewer>,
    action: ApprovalActions,
    entity: AssertionDetailFieldsFragment,
    approvalId?: number
  ): Maybe<string> {
    if (viewer === undefined) return
    if (action === 'create') {
      return this.getCreateTooltip(viewer, entity)
    } else {
      const approval = entity.approvals.nodes.find((e) => e.id === approvalId)
      if (approval !== undefined) {
        if (action === 'revoke') {
          return this.getRevokeTooltip(viewer, approval)
        } else if (action === 'approveChanges') {
          return this.getApproveChangesTooltip(viewer, approval)
        }
      }
    }
    return
  }

  getCreateTooltip(
    viewer: Viewer,
    entity: AssertionDetailFieldsFragment
  ): Maybe<string> {
    if (!viewer.mostRecentOrg) return
    if (canCreateApproval(viewer, entity)) {
      return `Approve the Classification of ${entity.name} under the authority of ${viewer.mostRecentOrg.name}`
    } else {
      if (!canBeApproved(entity)) {
        return `${entity.name} must be accepted and unflagged to be approved.`
      } else if (!currentOrgCanApprove(viewer)) {
        let tooltip = `Your organization, ${viewer.mostRecentOrg.name}, does not have approval authority.`
        const altOrgs = getAlternateCreatingOrgs(viewer, entity)
        if (altOrgs && altOrgs.length > 0) {
          tooltip += ` You may switch to ${altOrgs[0].name}, which does have approval authority, to approve this assertion.`
        }
        return tooltip
      } else if (hasLiveApproval(viewer, entity)) {
        let tooltip = `${entity.name} has already been approved by ${viewer.mostRecentOrg.name}.`
        const altOrgs = getAlternateCreatingOrgs(viewer, entity)
        if (altOrgs && altOrgs.length > 0) {
          tooltip += ` You may switch to ${altOrgs[0].name}, which also has approval authority and no current approvals.`
        }
        return tooltip
      }
    }
    return
  }

  getRevokeTooltip(
    viewer: Viewer,
    approval: ApprovalListNodeFragment
  ): Maybe<string> {
    if (canRevokeApproval(viewer, approval)) {
      return `Revoke approval of ${approval.assertion.name} under the authority of ${approval.organization.name}.`
    } else {
      if (!canPerformApprovalActions(viewer)) {
        // likely unused - approval buttons invisible to non-moderators
        return `You do not have privileges to perform approval actions.`
      } else if (!isLiveApproval(approval)) {
        // likely unused - revoke button hidden on revoked approvals
        return `Only live approvals may be revoked.` // likely unused
      } else if (!currentOrgCanModerateApproval(viewer, approval)) {
        let tooltip = `${approval.assertion.name} may only be revoked by a ${approval.organization.name} editor with approval privileges.`
        const altOrg = getAlternateModeratingOrg(viewer, approval)
        if (altOrg) {
          tooltip += ` As you are a member, you may switch your organization and revoke this approval.`
        }
        return tooltip
      }
    }
    return
  }

  getApproveChangesTooltip(
    viewer: Viewer,
    approval: ApprovalListNodeFragment
  ): Maybe<string> {
    if (canModerateApproval(viewer, approval)) {
      return `Approve changes to ${approval.assertion.name} under the authority of ${approval.organization.name}.`
    } else {
      if (!canPerformApprovalActions(viewer)) {
        // likely unused - approval buttons invisible to non-moderators
        return `You do not have permission to perform approval actions.`
      } else if (!isLiveApproval(approval)) {
        // likely unused - approve changes button hidden on active, revoked approvals
        return `Only approvals under review have changes that may be approved.`
      } else if (!canBeApproved(approval.assertion)) {
        let tooltip = `${approval.assertion.name} must be accepted and unflagged for its changes to be approved.`
        if (approval.assertion.flags.totalCount > 0) {
          tooltip += ` Resolve active flag${approval.assertion.flags.totalCount > 1 ? 's' : ''} to approve changes.`
        }
        return tooltip
      } else if (!currentOrgCanModerateApproval(viewer, approval)) {
        let tooltip = `Changes to ${approval.assertion.name} may only be approved under the authority of ${approval.organization.name}.`
        const altOrg = getAlternateModeratingOrg(viewer, approval)
        if (altOrg) {
          tooltip += ` As you are a member, may switch your organization and approve changes to this assertion.`
        }
        return tooltip
      }
    }
    return
  }
}

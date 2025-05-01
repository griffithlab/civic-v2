import { Pipe, PipeTransform } from '@angular/core'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import {
  AssertionDetailFieldsFragment,
  EndorsementListNodeFragment,
  Maybe,
} from '@app/generated/civic.apollo'
import {
  canBeEndorsed,
  canCreateEndorsement,
  canModerateEndorsement,
  canPerformEndorsementActions,
  currentOrgCanModerateEndorsement,
  getAlternateCreatingOrgs,
  getAlternateModeratingOrg,
  hasLiveEndorsement,
  isLiveEndorsement,
} from '@app/components/endorsements/endorsement-pipes/endorsement.functions'

/*
 * Given a viewer, action, endorsable entity, and optional endorsement
 * ID, returns a string appropriate for an action button tooltip.
 *
 * @param viewer - The viewer of the endorsement
 * @param action - An endorsement action (create, revoke, approve)
 * @param entity - An endorsable entity (currently Assertion)
 * @param endorsementId - Required for revoke & approveChanges tooltips, which are displayed in the context of a specific endorsement.
 *
 * @returns tooltip string for the specified endorsement action button
 */

export type EndorsementActions = 'create' | 'revoke' | 'approveChanges'

@Pipe({
  name: 'endorsementActionTooltip',
  standalone: true,
})
export class CvcEndorsementActionTooltipPipe implements PipeTransform {
  transform(
    viewer: Maybe<Viewer>,
    action: EndorsementActions,
    entity: AssertionDetailFieldsFragment,
    endorsementId?: number
  ): Maybe<string> {
    if (viewer === undefined) return
    if (action === 'create') {
      return this.getCreateTooltip(viewer, entity)
    } else {
      const endorsement = entity.endorsements.nodes.find(
        (e) => e.id === endorsementId
      )
      if (endorsement !== undefined) {
        if (action === 'revoke') {
          return this.getRevokeTooltip(viewer, endorsement)
        } else if (action === 'approveChanges') {
          return this.getApproveChangesTooltip(viewer, endorsement)
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
    if (canCreateEndorsement(viewer, entity)) {
      return `Endorse ${entity.name} under the authority of ${viewer.mostRecentOrg.name}`
    } else {
      if (!canBeEndorsed(entity)) {
        return `${entity.name} must be accepted and unflagged to be endorsed.`
      } else if (hasLiveEndorsement(viewer, entity)) {
        let tooltip = `${entity.name} has already been endorsed by ${viewer.mostRecentOrg.name}.`
        const altOrgs = getAlternateCreatingOrgs(viewer, entity)
        if (altOrgs && altOrgs.length > 0) {
          tooltip += ` You may switch to ${altOrgs[0].name}, which also has endorsement authority and no current endorsements.`
        }
        return tooltip
      }
    }
    return
  }

  getRevokeTooltip(
    viewer: Viewer,
    endorsement: EndorsementListNodeFragment
  ): Maybe<string> {
    if (canModerateEndorsement(viewer, endorsement)) {
      return `Revoke endorsement of ${endorsement.assertion.name} under the authority of ${endorsement.organization.name}.`
    } else {
      if (!canPerformEndorsementActions(viewer)) {
        // likely unused - endorsement buttons invisible to non-moderators
        return `You do not have permission to perform endorsement actions.`
      } else if (!isLiveEndorsement(endorsement)) {
        // likely unused - revoke button hidden on revoked endorsements
        return `Only live endorsements may be revoked.` // likely unused
      } else if (!currentOrgCanModerateEndorsement(viewer, endorsement)) {
        let tooltip = `${endorsement.assertion.name} may only be revoked under the authority of ${endorsement.organization.name}.`
        const altOrg = getAlternateModeratingOrg(viewer, endorsement)
        if (altOrg) {
          tooltip += ` As you are a member, you may switch your organization and revoke this endorsement.`
        }
        return tooltip
      }
    }
    return
  }

  getApproveChangesTooltip(
    viewer: Viewer,
    endorsement: EndorsementListNodeFragment
  ): Maybe<string> {
    if (canModerateEndorsement(viewer, endorsement)) {
      return `Approve changes to ${endorsement.assertion.name} under the authority of ${endorsement.organization.name}.`
    } else {
      if (!canPerformEndorsementActions(viewer)) {
        // likely unused - endorsement buttons invisible to non-moderators
        return `You do not have permission to perform endorsement actions.`
      } else if (!isLiveEndorsement(endorsement)) {
        // likely unused - approve changes button hidden on active, revoked endorsements
        return `Only endorsements under review have changes that may be approved.`
      } else if (!canBeEndorsed(endorsement.assertion)) {
        let tooltip = `${endorsement.assertion.name} must be accepted and unflagged for its changes to be approved.`
        if (endorsement.assertion.flags.totalCount > 0) {
          tooltip += ` Resolve active flag${endorsement.assertion.flags.totalCount > 1 ? 's' : ''} to approve changes.`
        }
        return tooltip
      } else if (!currentOrgCanModerateEndorsement(viewer, endorsement)) {
        let tooltip = `Changes to ${endorsement.assertion.name} may only be approved under the authority of ${endorsement.organization.name}.`
        const altOrg = getAlternateModeratingOrg(viewer, endorsement)
        if (altOrg) {
          tooltip += ` As you are a member, may switch your organization and approve changes to this assertion.`
        }
        return tooltip
      }
    }
    return
  }
}

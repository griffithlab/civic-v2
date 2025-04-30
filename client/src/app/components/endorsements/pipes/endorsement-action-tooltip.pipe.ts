import { Pipe, PipeTransform } from '@angular/core'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { EndorsementListNodeFragment, Maybe } from '@app/generated/civic.apollo'

/*
 * Given a viewer, action, endorsable entity, and optional endorsement
 * ID, returns a string appropriate for an action button tooltip.
 *
 * @param viewer - The viewer of the endorsement
 * @param action - An endorsement action (create, revoke, approve)
 * @param entity - An endorsable entity (currently Assertion)
 * @param endorsementId - If provided, returns a string applicable to individual endorsements (e.g., displayed in endorsement-list). If not provided, string will be applicable to the entity (e.g., displayed in entity-detail headers).
 *
 * @returns tooltip string for the specified endorsement action button
 */

@Pipe({
  name: 'hasAlternateApprovingOrg',
  standalone: true,
})
export class CvcHasAlternateApprovingOrg implements PipeTransform {
  transform(
    viewer: Maybe<Viewer>,
    endorsement: EndorsementListNodeFragment
  ): false | string {
    let hasAlternateApprovingOrg: boolean | string = false
    if (
      viewer &&
      viewer.user &&
      viewer.signedIn &&
      viewer.canModerate &&
      viewer.endorsableOrgIds.length > 0 &&
      viewer.mostRecentOrg &&
      endorsement.status === 'REQUIRES_REVIEW'
    ) {
      if (endorsement.organization.id === viewer.mostRecentOrg.id) return false
      const endorsementOrgId = endorsement.organization.id
      const alternateApprovingOrgId = viewer.endorsableOrgIds.find(
        (orgId) => orgId === endorsementOrgId
      )
      if (alternateApprovingOrgId) {
        hasAlternateApprovingOrg =
          viewer.user.organizations.find(
            (org) => org.id === alternateApprovingOrgId
          )?.name ?? false
      }
    }
    return hasAlternateApprovingOrg
  }
}

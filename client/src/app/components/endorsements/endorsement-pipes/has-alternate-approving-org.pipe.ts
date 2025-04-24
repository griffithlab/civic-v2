import { Pipe, PipeTransform } from '@angular/core'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { EndorsementListNodeFragment, Maybe } from '@app/generated/civic.apollo'

/*
 * Given a viewer and an endorsement, return false if the viewer does not have an alternate organization that
 * could be used to approve changes to the endorsement, and returns the name of the alternate
 * organization if it exists.
 *
 * @param viewer - The viewer of the endorsement
 * @param endorsement - The endorsement to check
 * @returns false if the viewer does not have an alternate organization,
 *          or the name of the alternate organization if it exists
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

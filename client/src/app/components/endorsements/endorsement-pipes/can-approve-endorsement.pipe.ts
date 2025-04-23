import { Pipe, PipeTransform } from '@angular/core'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { EndorsementListNodeFragment, Maybe } from '@app/generated/civic.apollo'

/**
 * Returns true if a viewer can approve changes to an endorsement. Checks
 * if viewer is able to perform endorsement actions, if the endorsement
 * status is 'REQUIRES_REVIEW', and if the viewer's organization originally
 * endorsed the assertion.
 *
 * @param viewer - The viewer object
 * @param endorsement - The endorsement object
 * @returns true if viewer can approve the endorsement, false otherwise
 */

@Pipe({
  name: 'canApproveEndorsement',
  standalone: true,
})
export class CvcCanApproveEndorsement implements PipeTransform {
  transform(
    viewer: Maybe<Viewer>,
    endorsement: EndorsementListNodeFragment
  ): boolean {
    let canApproveEndorsement = false
    if (
      viewer &&
      viewer.signedIn &&
      viewer.canModerate &&
      viewer.endorsableOrgIds.length > 0 &&
      viewer.mostRecentOrg
    ) {
      const endorsingOrgId = viewer.mostRecentOrg.id
      const isEndorsableOrg = viewer.endorsableOrgIds.includes(endorsingOrgId)
      canApproveEndorsement =
        isEndorsableOrg &&
        endorsement.status === 'REQUIRES_REVIEW' &&
        endorsement.organization.id === endorsingOrgId
    }
    return canApproveEndorsement
  }
}

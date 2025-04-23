import { Pipe, PipeTransform } from '@angular/core'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { EndorsementListNodeFragment, Maybe } from '@app/generated/civic.apollo'

/**
 * Returns true if viewer can create an endorsement for an assertion.
 * It checks if the viewer can create endorsements, and ensures the viewer's
 * endorsing organization has not already endorsed the assertion.
 *
 * @param viewer - The viewer object
 * @param endorsements - The assertion's endorsements
 * @returns true if viewer can create an endorsement, false otherwise
 */

@Pipe({
  name: 'canCreateEndorsement',
  standalone: true,
})
export class CvcCanCreateEndorsement implements PipeTransform {
  transform(
    viewer: Maybe<Viewer>,
    endorsements: EndorsementListNodeFragment[] = []
  ): boolean {
    let canCreateEndorsement = false
    if (
      viewer &&
      viewer.signedIn &&
      viewer.canModerate &&
      viewer.endorsableOrgIds.length > 0 &&
      viewer.mostRecentOrg
    ) {
      const endorsingOrgId = viewer.mostRecentOrg.id
      const isEndorsableOrg = viewer.endorsableOrgIds.includes(endorsingOrgId)
      const currentEndorsements = endorsements.filter(
        (e) => e.status === 'ACTIVE' || e.status === 'REQUIRES_REVIEW'
      )
      if (isEndorsableOrg) {
        canCreateEndorsement = !currentEndorsements.some((ce) => {
          return endorsingOrgId === ce.organization.id
        })
      }
    }
    return canCreateEndorsement
  }
}

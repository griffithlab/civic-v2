import { Pipe, PipeTransform } from '@angular/core'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { EndorsementListNodeFragment, Maybe } from '@app/generated/civic.apollo'

/**
 * Returns true if viewer is able to perform endorsement actions.
 *
 * @param viewer - The viewer object
 * @returns true if viewer is able to perform endorsement actions, false otherwise
 */

@Pipe({
  name: 'canEndorse',
  standalone: true,
})
export class CvcCanEndorse implements PipeTransform {
  transform(viewer: Maybe<Viewer>): boolean {
    let canEndorse = false
    if (
      viewer &&
      viewer.signedIn &&
      viewer.canModerate &&
      viewer.endorsableOrgIds.length > 0 &&
      viewer.mostRecentOrg
    ) {
      const endorsingOrgId = viewer.mostRecentOrg.id
      const isEndorsableOrg = viewer.endorsableOrgIds.includes(endorsingOrgId)
      canEndorse = isEndorsableOrg
    }
    return canEndorse
  }
}

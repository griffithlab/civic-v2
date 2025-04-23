import { Pipe, PipeTransform } from '@angular/core'
import { EndorsementListNodeFragment, Maybe } from '@app/generated/civic.apollo'
import { Viewer } from '../services/viewer/viewer.service'
import { getEndorsementsPermission } from '../utilities/get-endorsement-permission'

@Pipe({
  name: 'canCreateEndorsement',
  standalone: false,
})
export class CanCreateEndorsementPipe implements PipeTransform {
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
      const currentEndorsements = endorsements.filter(
        (e) => e.status === 'ACTIVE' || e.status === 'REQUIRES_REVIEW'
      )
      const endorsingOrgId = viewer.mostRecentOrg.id
      canCreateEndorsement = !currentEndorsements.some((ce) => {
        return endorsingOrgId === ce.organization.id
      })
    }
    return canCreateEndorsement
  }
}

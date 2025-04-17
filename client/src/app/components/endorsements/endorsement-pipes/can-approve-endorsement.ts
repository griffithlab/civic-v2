import { Pipe, PipeTransform } from '@angular/core'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { EndorsementListNodeFragment, Maybe } from '@app/generated/civic.apollo'

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
        isEndorsableOrg && endorsement.status === 'REQUIRES_REVIEW'
    }
    return canApproveEndorsement
  }
}

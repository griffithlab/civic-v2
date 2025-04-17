import { Pipe, PipeTransform } from '@angular/core'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { EndorsementListNodeFragment, Maybe } from '@app/generated/civic.apollo'

@Pipe({
  name: 'canRevokeEndorsement',
  standalone: true,
})
export class CvcCanRevokeEndorsement implements PipeTransform {
  transform(
    viewer: Maybe<Viewer>,
    endorsement: EndorsementListNodeFragment
  ): boolean {
    let canRevokeEndorsement = false
    if (
      viewer &&
      viewer.signedIn &&
      viewer.canModerate &&
      viewer.endorsableOrgIds.length > 0 &&
      viewer.mostRecentOrg
    ) {
      const endorsingOrgId = viewer.mostRecentOrg.id
      const isEndorsableOrg = viewer.endorsableOrgIds.includes(endorsingOrgId)
      canRevokeEndorsement =
        isEndorsableOrg &&
        (endorsement.status === 'ACTIVE' ||
          endorsement.status === 'REQUIRES_REVIEW')
    }
    return canRevokeEndorsement
  }
}

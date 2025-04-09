import { Pipe, PipeTransform } from '@angular/core'
import { AssertionDetailFieldsFragment } from '@app/generated/civic.apollo'
import { Viewer } from '../services/viewer/viewer.service'

@Pipe({
  name: 'canRevokeAssertion',
  standalone: false,
})
export class CanRevokeAssertionPipe implements PipeTransform {
  transform(viewer: Viewer, assertion: AssertionDetailFieldsFragment): boolean {
    if (!viewer || !viewer.mostRecentOrg) return false

    const hasActiveEndorsement = (
      orgId: number,
      endorsements: any[]
    ): boolean => {
      return endorsements.some((e) => e.organization.id === orgId)
    }

    return (
      viewer.signedIn &&
      viewer.canModerate &&
      viewer.endorsableOrgIds.includes(viewer.mostRecentOrg.id) &&
      hasActiveEndorsement(
        viewer.mostRecentOrg.id,
        assertion.activeEndorsements.nodes
      )
    )
  }
}

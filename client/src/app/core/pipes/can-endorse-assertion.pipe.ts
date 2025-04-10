import { Pipe, PipeTransform } from '@angular/core'
import {
  AssertionDetailFieldsFragment,
  Maybe,
} from '@app/generated/civic.apollo'
import { Viewer } from '../services/viewer/viewer.service'

@Pipe({
  name: 'canEndorseAssertion',
  standalone: false,
})
export class CanEndorseAssertionPipe implements PipeTransform {
  transform(
    viewer: Maybe<Viewer>,
    assertion: AssertionDetailFieldsFragment
  ): boolean {
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
      !hasActiveEndorsement(
        viewer.mostRecentOrg.id,
        assertion.activeEndorsements.nodes
      )
    )
  }
}

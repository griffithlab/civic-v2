import { Pipe, PipeTransform } from '@angular/core'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { EndorsementListNodeFragment, Maybe } from '@app/generated/civic.apollo'
import { canModerateEndorsement } from '@app/components/endorsements/endorsement-pipes/endorsement.functions'

/**
 * Returns true if a viewer can approve changes to an existing endorsement.
 *
 * @param {Maybe<Viewer>} viewer - The viewer
 * @param {EndorsementListNodeFragment} endorsement - The endorsement object
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
    if (viewer === undefined) return false
    return (
      endorsement.status === 'REQUIRES_REVIEW' &&
      canModerateEndorsement(viewer, endorsement)
    )
  }
}

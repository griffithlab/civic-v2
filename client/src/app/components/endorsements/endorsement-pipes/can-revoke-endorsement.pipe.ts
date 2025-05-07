import { Pipe, PipeTransform } from '@angular/core'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { EndorsementListNodeFragment, Maybe } from '@app/generated/civic.apollo'
import { canRevokeEndorsement } from '@app/components/endorsements/endorsement-pipes/endorsement.functions'

/**
 * Returns true if a viewer can approve changes to an existing endorsement.
 *
 * @param {Maybe<Viewer>} viewer - The viewer
 * @param {EndorsementListNodeFragment} endorsement - The endorsement object
 * @returns true if viewer can approve the endorsement, false otherwise
 */

@Pipe({
  name: 'canRevokeEndorsement',
  standalone: true,
})
export class CvcCanRevokeEndorsement implements PipeTransform {
  transform(
    viewer: Maybe<Viewer>,
    endorsement: EndorsementListNodeFragment
  ): boolean {
    if (viewer === undefined) return false
    return canRevokeEndorsement(viewer, endorsement)
  }
}

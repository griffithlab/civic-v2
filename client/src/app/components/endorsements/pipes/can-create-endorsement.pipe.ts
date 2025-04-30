import { Pipe, PipeTransform } from '@angular/core'
import {
  AssertionDetailFieldsFragment,
  Maybe,
} from '@app/generated/civic.apollo'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import {
  canBeEndorsed,
  canModerateEndorsement,
  canPerformEndorsementActions,
} from '@app/components/endorsements/pipes/endorsement.functions'

/**
 * Returns true if the viewer can endorse an endorsable entity.
 *
 * @param {Maybe<Viewer>} viewer - The viewer
 * @param {AssertionDetailFieldsFragment} entity - The entity (currently only Assertions)
 * @returns true if viewer can create an endorsement, false otherwise
 */
@Pipe({
  name: 'canCreateEndorsement',
  standalone: true,
})
export class CvcCanCreateEndorsementPipe implements PipeTransform {
  transform(
    viewer: Maybe<Viewer>,
    entity: AssertionDetailFieldsFragment
  ): boolean {
    if (viewer === undefined) return false
    if (canPerformEndorsementActions(viewer) && canBeEndorsed(entity)) {
      // viewer can't create a new endorsement if they can moderate
      // any currently live (active or requires review) endorsements
      return !entity.endorsements.nodes.some((endorsement) => {
        return canModerateEndorsement(viewer, endorsement)
      })
    }
    return false
  }
}

import { Pipe, PipeTransform } from '@angular/core'
import { AssertionDetailFieldsFragment, Maybe } from '@app/generated/civic.apollo'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { canCreateEndorsement } from '@app/components/endorsements/endorsement-pipes/endorsement.functions'

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
    return canCreateEndorsement(viewer, entity)
  }
}

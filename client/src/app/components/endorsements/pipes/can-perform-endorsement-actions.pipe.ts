import { Pipe, PipeTransform } from '@angular/core'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { Maybe } from '@app/generated/civic.apollo'
import { canPerformEndorsementActions } from '@app/components/endorsements/pipes/endorsement.functions'

/**
 * Returns true if a viewer can perform any of the endorsement actions.
 *
 * @param {Maybe<Viewer>} viewer - The viewer
 * @returns true if viewer can perform endorsement actions
 */

@Pipe({
  name: 'canPerformEndorsementActions',
  standalone: true,
})
export class CvcCanPerformEndorsementActionsPipe implements PipeTransform {
  transform(viewer: Maybe<Viewer>): boolean {
    if (viewer === undefined) return false
    return canPerformEndorsementActions(viewer)
  }
}

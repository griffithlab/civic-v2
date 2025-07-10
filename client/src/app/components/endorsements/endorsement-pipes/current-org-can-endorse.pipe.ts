import { Pipe, PipeTransform } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { currentOrgCanEndorse } from '@app/components/endorsements/endorsement-pipes/endorsement.functions'

/**
 * Returns true if the viewer's current organizations has endorsement authority.
 *
 * @param {Maybe<Viewer>} viewer - The viewer
 * @returns true if viewer can create an endorsement, false otherwise
 */
@Pipe({
  name: 'currentOrgCanEndorse',
  standalone: true,
})
export class CvcCurrentOrgCanEndorsePipe implements PipeTransform {
  transform(viewer: Maybe<Viewer>): boolean {
    if (viewer === undefined) return false
    return currentOrgCanEndorse(viewer)
  }
}

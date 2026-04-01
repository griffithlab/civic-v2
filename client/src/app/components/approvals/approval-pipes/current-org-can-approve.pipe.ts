import { Pipe, PipeTransform } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { currentOrgCanApprove } from './approval.functions'

/**
 * Returns true if the viewer's current organizations has approval authority.
 *
 * @param {Maybe<Viewer>} viewer - The viewer
 * @returns true if viewer can create an approval, false otherwise
 */
@Pipe({
  name: 'currentOrgCanApprove',
  standalone: true,
})
export class CvcCurrentOrgCanApprovePipe implements PipeTransform {
  transform(viewer: Maybe<Viewer>): boolean {
    if (viewer === undefined) return false
    return currentOrgCanApprove(viewer)
  }
}

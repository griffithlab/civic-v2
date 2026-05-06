import { Pipe, PipeTransform } from '@angular/core'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { Maybe } from '@app/generated/civic.apollo'
import { canPerformApprovalActions } from './approval.functions'

/**
 * Returns true if a viewer can perform any of the approval actions.
 *
 * @param {Maybe<Viewer>} viewer - The viewer
 * @returns true if viewer can perform approval actions
 */

@Pipe({
  name: 'canPerformApprovalActions',
  standalone: true,
})
export class CvcCanPerformApprovalActionsPipe implements PipeTransform {
  transform(viewer: Maybe<Viewer>): boolean {
    if (viewer === undefined) return false
    return canPerformApprovalActions(viewer)
  }
}

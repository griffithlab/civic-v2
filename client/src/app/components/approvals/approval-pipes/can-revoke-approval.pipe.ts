import { Pipe, PipeTransform } from '@angular/core'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { ApprovalListNodeFragment, Maybe } from '@app/generated/civic.apollo'
import { canRevokeApproval } from './approval.functions'

/**
 * Returns true if a viewer can revoke an existing approval.
 *
 * @param {Maybe<Viewer>} viewer - The viewer
 * @param {ApprovalListNodeFragment} approval - The approval object
 * @returns true if viewer can revoke the approval, false otherwise
 */

@Pipe({
  name: 'canRevokeApproval',
  standalone: true,
})
export class CvcCanRevokeApproval implements PipeTransform {
  transform(
    viewer: Maybe<Viewer>,
    approval: ApprovalListNodeFragment
  ): boolean {
    if (viewer === undefined) return false
    return canRevokeApproval(viewer, approval)
  }
}

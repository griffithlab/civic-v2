import { Pipe, PipeTransform } from '@angular/core'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { ApprovalListNodeFragment, Maybe } from '@app/generated/civic.apollo'
import { canModerateApproval } from './approval.functions'

/**
 * Returns true if a viewer can approve changes to an existing approval.
 *
 * @param {Maybe<Viewer>} viewer - The viewer
 * @param {ApprovalListNodeFragment} approval - The approval object
 * @returns true if viewer can approve the approval, false otherwise
 */

@Pipe({
  name: 'canApproveApproval',
  standalone: true,
})
export class CvcCanApproveApproval implements PipeTransform {
  transform(
    viewer: Maybe<Viewer>,
    approval: ApprovalListNodeFragment
  ): boolean {
    if (viewer === undefined) return false
    return (
      approval.status === 'REQUIRES_REVIEW' &&
      canModerateApproval(viewer, approval)
    )
  }
}

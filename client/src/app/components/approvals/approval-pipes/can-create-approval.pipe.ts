import { Pipe, PipeTransform } from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo.types'
import { AssertionDetailFieldsFragment } from '@app/views/assertions/assertions-detail/assertions-detail.query.gql.generated'
import { Viewer } from '@app/core/services/viewer/viewer.service'
import { canCreateApproval } from './approval.functions'

/**
 * Returns true if the viewer can approve an approvable entity.
 *
 * @param {Maybe<Viewer>} viewer - The viewer
 * @param {AssertionDetailFieldsFragment} entity - The entity (currently only Assertions)
 * @returns true if viewer can create an approval, false otherwise
 */
@Pipe({
  name: 'canCreateApproval',
  standalone: true,
})
export class CvcCanCreateApprovalPipe implements PipeTransform {
  transform(
    viewer: Maybe<Viewer>,
    entity: AssertionDetailFieldsFragment
  ): boolean {
    if (viewer === undefined) return false
    return canCreateApproval(viewer, entity)
  }
}

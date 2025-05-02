import { Pipe, PipeTransform } from '@angular/core'
import { EndorsementListNodeFragment, Maybe } from '@app/generated/civic.apollo'
import { Viewer } from '../services/viewer/viewer.service'
import { getEndorsementsPermission } from '../utilities/get-endorsement-permission'

@Pipe({
  name: 'canEndorseAssertion',
  standalone: false,
})
export class CanEndorseAssertionPipe implements PipeTransform {
  transform(
    viewer: Maybe<Viewer>,
    endorsements: Maybe<EndorsementListNodeFragment>[]
  ): boolean {
    if (!viewer) return false

    return getEndorsementsPermission('endorse', viewer, endorsements)
  }
}

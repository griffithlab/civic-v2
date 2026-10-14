import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core'
import { RevisionActivityDetailFragment } from '@app/components/activities/activity-feed/activity-feed.fragments.gql.generated'
import { AcceptRevisionsActivityDetailFragment } from './accept-revisions-activity.query.gql.generated'

import { CvcActivityRevision } from '../shared/activity-revision/activity-revision.component'

@Component({
  selector: 'cvc-accept-revisions-activity-details',
  imports: [CvcActivityRevision],
  templateUrl: './accept-revisions-activity.component.html',
  styleUrl: './accept-revisions-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcAcceptRevisionsActivity {
  activity = input.required<AcceptRevisionsActivityDetailFragment>({
    alias: 'cvcAcceptRevisionActivity',
  })
  // coerce revisions to Revision[] >:(
  // otherwise revision detail components complain about missing fields
  revisions = computed(
    () => this.activity().revisions as RevisionActivityDetailFragment[]
  )
}

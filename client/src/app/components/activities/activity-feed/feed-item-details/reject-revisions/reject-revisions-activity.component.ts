import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core'
import { RevisionActivityDetailFragment } from '@app/components/activities/activity-feed/activity-feed.fragments.gql.generated'
import { RejectRevisionsActivityDetailFragment } from './reject-revisions-activity.query.gql.generated'
import { CvcActivityRevision } from '../shared/activity-revision/activity-revision.component'

@Component({
  selector: 'cvc-reject-revisions-activity-details',
  imports: [CvcActivityRevision],
  templateUrl: './reject-revisions-activity.component.html',
  styleUrl: './reject-revisions-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcRejectRevisionsActivity {
  activity = input.required<RejectRevisionsActivityDetailFragment>({
    alias: 'cvcRejectRevisionsActivity',
  })
  // coerce revisions to Revision[] >:(
  // otherwise revision detail components complain about missing fields
  revisions = computed(
    () => this.activity().revisions as RevisionActivityDetailFragment[]
  )
}

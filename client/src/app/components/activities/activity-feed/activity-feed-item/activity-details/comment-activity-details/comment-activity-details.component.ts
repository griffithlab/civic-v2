import { Component, input } from '@angular/core'
import { ActivityFeedFieldsFragment } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-comment-activity-details',
  standalone: true,
  imports: [],
  templateUrl: './comment-activity-details.component.html',
  styleUrl: './comment-activity-details.component.less',
})
export class CvcCommentActivityDetails {
  cvcActivityDetails = input.required<ActivityFeedFieldsFragment>()
}

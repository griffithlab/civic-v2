import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { UpdateSourceSuggestionStatusActivityDetailFragment } from '@app/generated/civic.apollo'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'cvc-update-source-suggestion-activity-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './update-source-suggestion-activity.component.html',
  styleUrl: './update-source-suggestion-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcUpdateSourceSuggestionActivity {
  activity = input.required<UpdateSourceSuggestionStatusActivityDetailFragment>(
    { alias: 'cvcUpdateSourceSuggestionStatusActivity' }
  )
}

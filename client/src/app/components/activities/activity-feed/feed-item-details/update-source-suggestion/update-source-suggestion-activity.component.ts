import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { UpdateSourceSuggestionStatusActivityDetailFragment } from './update-source-suggestion-activity.query.gql.generated'
import { CvcEmptyValueModule } from '@app/forms/components/empty-value/empty-value.module'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzTagModule } from 'ng-zorro-antd/tag'

@Component({
  selector: 'cvc-update-source-suggestion-activity-details',
  imports: [NzDescriptionsModule, NzTagModule, CvcEmptyValueModule],
  templateUrl: './update-source-suggestion-activity.component.html',
  styleUrl: './update-source-suggestion-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcUpdateSourceSuggestionActivity {
  activity = input.required<UpdateSourceSuggestionStatusActivityDetailFragment>(
    { alias: 'cvcUpdateSourceSuggestionStatusActivity' }
  )
}

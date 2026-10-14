import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { DeprecateFeatureActivityDetailFragment } from './deprecate-feature-activity.query.gql.generated'

@Component({
  selector: 'cvc-deprecate-feature-activity-details',
  imports: [],
  templateUrl: './deprecate-feature-activity.component.html',
  styleUrl: './deprecate-feature-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcDeprecateFeatureActivity {
  activity = input.required<DeprecateFeatureActivityDetailFragment>({
    alias: 'cvcDeprecateFeatureActivity',
  })
}

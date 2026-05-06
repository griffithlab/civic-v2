import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { DeprecateVariantActivityDetailFragment } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-deprecate-variant-activity-details',
  templateUrl: './deprecate-variant-activity.component.html',
  styleUrl: './deprecate-variant-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcDeprecateVariantActivity {
  activity = input.required<DeprecateVariantActivityDetailFragment>({
    alias: 'cvcDeprecateVariantActivity',
  })
}

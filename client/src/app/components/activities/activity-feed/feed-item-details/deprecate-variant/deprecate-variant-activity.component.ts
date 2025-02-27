import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { DeprecateVariantActivityDetailFragment } from '@app/generated/civic.apollo'
import { JsonPipe } from '@angular/common'

@Component({
    selector: 'cvc-deprecate-variant-activity-details',
    imports: [JsonPipe],
    templateUrl: './deprecate-variant-activity.component.html',
    styleUrl: './deprecate-variant-activity.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvcDeprecateVariantActivity {
  activity = input.required<DeprecateVariantActivityDetailFragment>({
    alias: 'cvcDeprecateVariantActivity',
  })
}

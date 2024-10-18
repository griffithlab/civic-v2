import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import {
  CreateComplexMolecularProfileActivityDetailFragment,
  CreateVariantActivityDetailFragment,
  Maybe,
} from '@app/generated/civic.apollo'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'cvc-create-variant-activity-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './create-variant-activity.component.html',
  styleUrl: './create-variant-activity.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcCreateVariantActivity {
  activity = input.required<Maybe<CreateVariantActivityDetailFragment>>({
    alias: 'cvcCreateVariantActivity',
  })
}

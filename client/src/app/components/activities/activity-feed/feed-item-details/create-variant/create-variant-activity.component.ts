import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { CreateComplexMolecularProfileActivityDetailFragment } from '@app/components/activities/activity-feed/feed-item-details/create-molecular-profile/create-mp-activity.query.gql.generated'
import { CreateVariantActivityDetailFragment } from './create-variant-activity.query.gql.generated'
import { Maybe } from '@app/generated/civic.apollo.types'
import { JsonPipe } from '@angular/common'

@Component({
  selector: 'cvc-create-variant-activity-details',
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

import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core'

import {
  SubscribableEntities,
  SubscribableInput,
  CytogeneticCoordinate,
} from '@app/generated/civic.apollo.types'
import { RegionSummaryFieldsFragment } from '@app/views/features/features-detail/features-summary/features-summary.query.gql.generated'

@Component({
  selector: 'cvc-region-summary',
  templateUrl: './regions-summary.page.html',
  styleUrls: ['./regions-summary.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class RegionsSummaryPage implements OnInit {
  @Input() region!: RegionSummaryFieldsFragment
  @Input() featureId!: number

  subscribableEntity?: SubscribableInput

  ngOnInit() {
    if (this.region == undefined) {
      throw new Error('Must pass a Region into region summary')
    } else if (this.featureId === undefined) {
      throw new Error('Must pass a feature id into region summary')
    } else {
      this.subscribableEntity = {
        id: this.featureId,
        entityType: SubscribableEntities.Feature,
      }
    }
  }
}

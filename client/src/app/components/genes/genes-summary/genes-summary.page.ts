import {
  Component,
  Input,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core'

import {
  SubscribableEntities,
  SubscribableInput,
} from '@app/generated/civic.apollo.types'
import { GeneSummaryFieldsFragment } from '@app/views/features/features-detail/features-summary/features-summary.query.gql.generated'

@Component({
  selector: 'cvc-genes-summary',
  templateUrl: './genes-summary.page.html',
  styleUrls: ['./genes-summary.page.less'],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class GenesSummaryPage implements OnInit {
  @Input() gene!: GeneSummaryFieldsFragment
  @Input() featureId!: number

  subscribableEntity?: SubscribableInput

  ngOnInit() {
    if (this.gene == undefined) {
      throw new Error('Must pass a Gene into gene summary')
    } else if (this.featureId === undefined) {
      throw new Error('Must pass a feature id into factor summary')
    } else {
      this.subscribableEntity = {
        id: this.featureId,
        entityType: SubscribableEntities.Feature,
      }
    }
  }
}

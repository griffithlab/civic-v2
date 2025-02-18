import { Component, Input, OnInit } from '@angular/core'

import {
  SubscribableEntities,
  SubscribableInput,
  GeneSummaryFieldsFragment,
} from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-genes-summary',
  templateUrl: './genes-summary.page.html',
  styleUrls: ['./genes-summary.page.less'],
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

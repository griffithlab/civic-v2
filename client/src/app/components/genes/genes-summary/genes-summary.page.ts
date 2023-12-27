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
})
export class GenesSummaryPage implements OnInit {
  @Input() gene!: GeneSummaryFieldsFragment

  subscribableEntity?: SubscribableInput

  ngOnInit() {
    if (this.gene == undefined) {
      throw new Error('Must pass a Gene into gene summary')
    }
    else {
      this.subscribableEntity = {
        id: this.gene.id,
        entityType: SubscribableEntities.Feature,
      }
    }
  }
}

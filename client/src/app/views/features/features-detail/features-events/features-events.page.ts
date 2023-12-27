import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  SubscribableEntities,
  SubscribableInput,
} from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-features-events',
  templateUrl: './features-events.page.html',
  styleUrls: ['./features-events.page.less'],
})
export class FeaturesEventsPage {
  subscribable: SubscribableInput

  constructor(private route: ActivatedRoute) {
    const geneId: number = +this.route.snapshot.params['featureId']
    this.subscribable = {
      id: geneId,
      entityType: SubscribableEntities.Feature,
    }
  }
}

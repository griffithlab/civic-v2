import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  SubscribableEntities,
  SubscribableInput,
} from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-assertions-events',
  templateUrl: './assertions-events.page.html',
  styleUrls: ['./assertions-events.page.less'],
})
export class AssertionsEventsPage {
  subscribable: SubscribableInput

  constructor(private route: ActivatedRoute) {
    const assertionId: number = +this.route.snapshot.params['assertionId']
    this.subscribable = {
      id: assertionId,
      entityType: SubscribableEntities.Assertion,
    }
  }
}

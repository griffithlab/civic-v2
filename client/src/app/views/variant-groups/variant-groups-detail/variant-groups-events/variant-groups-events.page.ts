import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  SubscribableEntities,
  SubscribableInput,
} from '@app/generated/civic.apollo'

@Component({
    selector: 'cvc-variant-groups-events',
    templateUrl: './variant-groups-events.page.html',
    styleUrls: ['./variant-groups-events.page.less'],
    standalone: false
})
export class VariantGroupsEventsPage {
  subscribable: SubscribableInput

  constructor(private route: ActivatedRoute) {
    const variantGroupId: number = +this.route.snapshot.params['variantGroupId']
    this.subscribable = {
      id: variantGroupId,
      entityType: SubscribableEntities.VariantGroup,
    }
  }
}

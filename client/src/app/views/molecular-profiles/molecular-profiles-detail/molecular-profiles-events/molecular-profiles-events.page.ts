import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  SubscribableEntities,
  SubscribableInput,
} from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-molecular-profiles-events',
  templateUrl: './molecular-profiles-events.page.html',
  styleUrls: ['./molecular-profiles-events.page.less'],
})
export class MolecularProfilesEventsPage {
  subscribable: SubscribableInput

  constructor(private route: ActivatedRoute) {
    const mpId: number = +this.route.snapshot.params['molecularProfileId']
    this.subscribable = {
      id: mpId,
      entityType: SubscribableEntities.MolecularProfile,
    }
  }
}

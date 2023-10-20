import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  SubscribableEntities,
  SubscribableInput,
} from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-genes-events',
  templateUrl: './genes-events.page.html',
  styleUrls: ['./genes-events.page.less'],
})
export class GenesEventsPage {
  subscribable: SubscribableInput

  constructor(private route: ActivatedRoute) {
    const geneId: number = +this.route.snapshot.params['geneId']
    this.subscribable = {
      id: geneId,
      entityType: SubscribableEntities.Gene,
    }
  }
}

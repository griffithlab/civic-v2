import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubscribableEntities, SubscribableInput } from '@app/generated/civic.apollo';

@Component({
  selector: 'cvc-evidence-events',
  templateUrl: './evidence-events.page.html',
  styleUrls: ['./evidence-events.page.less'],
})
export class EvidenceEventsPage {
  subscribable: SubscribableInput

  constructor(private route: ActivatedRoute) {
    const evidenceId: number = +this.route.snapshot.params['evidenceId'];
    this.subscribable = {
      id: evidenceId,
      entityType: SubscribableEntities.EvidenceItem
    }
  }
}

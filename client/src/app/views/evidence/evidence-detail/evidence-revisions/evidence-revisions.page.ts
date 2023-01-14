import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModeratedEntities } from '@app/generated/civic.apollo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cvc-evidence-revisions',
  templateUrl: './evidence-revisions.page.html',
})
export class EvidenceRevisionsPage implements OnDestroy {
  eid!: number;
  entityType!: ModeratedEntities;

  routeSub: Subscription;

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.eid = +params.evidenceId;
      this.entityType = ModeratedEntities['EvidenceItem'];
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}

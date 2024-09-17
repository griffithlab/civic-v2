import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ModeratedEntities, ModeratedInput } from '@app/generated/civic.apollo'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-evidence-revisions',
  templateUrl: './evidence-revisions.page.html',
})
export class EvidenceRevisionsPage implements OnDestroy {
  subject!: ModeratedInput

  routeSub: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.subject = {
        id: +params.evidenceId,
        entityType: ModeratedEntities['EvidenceItem'],
      }
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}

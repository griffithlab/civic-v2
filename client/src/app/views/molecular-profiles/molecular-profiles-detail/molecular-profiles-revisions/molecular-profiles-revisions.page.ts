import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ModeratedEntities, ModeratedInput } from '@app/generated/civic.apollo'
import { Subscription } from 'rxjs'

@Component({
    selector: 'cvc-molecular-profiles-revisions',
    templateUrl: './molecular-profiles-revisions.page.html',
    standalone: false
})
export class MolecularProfilesRevisionsPage implements OnDestroy {
  subject!: ModeratedInput

  routeSub: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.subject = {
        id: +params.molecularProfileId,
        entityType: ModeratedEntities.MolecularProfile,
      }
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}

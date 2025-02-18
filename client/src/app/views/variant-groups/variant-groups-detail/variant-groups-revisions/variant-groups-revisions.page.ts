import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ModeratedEntities, ModeratedInput } from '@app/generated/civic.apollo'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-variant-groups-revisions',
  templateUrl: './variant-groups-revisions.page.html',
  styleUrls: ['./variant-groups-revisions.page.less'],
  standalone: false,
})
export class VariantGroupsRevisionsPage implements OnDestroy {
  subject!: ModeratedInput

  routeSub: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.subject = {
        id: +params.variantGroupId,
        entityType: ModeratedEntities['VariantGroup'],
      }
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}

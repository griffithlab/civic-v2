import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ModeratedEntities } from '@app/generated/civic.apollo'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-variants-revisions',
  templateUrl: './variants-revisions.page.html',
})
export class VariantsRevisionsPage implements OnDestroy {
  variantId!: number
  entityType!: ModeratedEntities

  routeSub: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.variantId = +params.variantId
      this.entityType = ModeratedEntities['Variant']
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}

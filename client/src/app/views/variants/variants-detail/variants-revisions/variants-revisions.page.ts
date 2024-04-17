import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  ModeratedEntities,
  ModeratedInput,
  VariantCoordinateTypes,
} from '@app/generated/civic.apollo'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-variants-revisions',
  templateUrl: './variants-revisions.page.html',
})
export class VariantsRevisionsPage implements OnDestroy {
  coordinateSubject!: ModeratedInput
  variantSubject!: ModeratedInput

  routeSub: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.variantSubject = {
        id: +params.variantId,
        entityType: ModeratedEntities['Variant'],
      }
      this.coordinateSubject = {
        id: +params.variantId,
        entityType: ModeratedEntities['Variant'],
        coordinateType: VariantCoordinateTypes.GeneVariantCoordinate,
      }
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}

import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  ModeratedEntities,
} from '@app/generated/civic.apollo'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-variant-groups-revisions',
  templateUrl: './variant-groups-revisions.page.html',
  styleUrls: ['./variant-groups-revisions.page.less'],
})
export class VariantGroupsRevisionsPage implements OnDestroy {
  vgId!: number
  entityType!: ModeratedEntities

  routeSub: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.vgId = +params.variantGroupId
      this.entityType = ModeratedEntities['VariantGroup']
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}

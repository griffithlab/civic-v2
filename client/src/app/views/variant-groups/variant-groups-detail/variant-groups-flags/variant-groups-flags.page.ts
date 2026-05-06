import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { FlaggableEntities, FlaggableInput } from '@app/generated/civic.apollo'
import { Subscription } from 'rxjs'

@Component({
    selector: 'cvc-variant-groups-flags',
    templateUrl: './variant-groups-flags.page.html',
    styleUrls: ['./variant-groups-flags.page.less'],
    standalone: false
})
export class VariantGroupsFlagsPage implements OnDestroy {
  flaggable?: FlaggableInput
  routeSub: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.flaggable = {
        entityType: FlaggableEntities.VariantGroup,
        id: +params.variantGroupId,
      }
    })
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }
}

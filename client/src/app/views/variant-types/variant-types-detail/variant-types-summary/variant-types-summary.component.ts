import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
    selector: 'cvc-variant-types-summary',
    templateUrl: './variant-types-summary.component.html',
    styleUrls: ['./variant-types-summary.component.less'],
    standalone: false
})
export class VariantTypesSummaryComponent implements OnDestroy {
  variantTypeId?: number
  routeSub: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.variantTypeId = +params.variantTypeId
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}

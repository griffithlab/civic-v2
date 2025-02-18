import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-variant-groups-suggest-page',
  templateUrl: './variant-group-suggest.page.html',
  standalone: false,
})
export class VariantGroupSuggestPage implements OnDestroy {
  variantGroupId?: number
  routeParams$: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeParams$ = this.route.params.subscribe((params) => {
      this.variantGroupId = +params.variantGroupId
    })
  }

  ngOnDestroy(): void {
    this.routeParams$.unsubscribe()
  }
}

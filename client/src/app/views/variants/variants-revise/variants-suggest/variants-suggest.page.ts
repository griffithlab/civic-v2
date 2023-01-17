import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-variants-suggest',
  templateUrl: './variants-suggest.page.html',
})
export class VariantsSuggestPage implements OnDestroy {
  variantId?: number
  routeParams$: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeParams$ = this.route.params.subscribe((params) => {
      this.variantId = +params.variantId
    })
  }

  ngOnDestroy(): void {
    this.routeParams$.unsubscribe()
  }
}

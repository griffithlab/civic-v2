import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-variants-suggest',
  templateUrl: './variants-suggest.page.html',
})
export class VariantsSuggestPage implements OnDestroy {
  variantId?: number
  variantType?: string
  routeParams$: Subscription
  queryParams$: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeParams$ = this.route.params.subscribe((params) => {
      this.variantId = +params.variantId
    })
    this.queryParams$ = this.route.queryParamMap.subscribe((params) => {
      if (params.has('variantType')) {
        this.variantType = params.get('variantType')!
      }
    })
  }

  ngOnDestroy(): void {
    this.routeParams$.unsubscribe()
    this.queryParams$.unsubscribe()
  }
}

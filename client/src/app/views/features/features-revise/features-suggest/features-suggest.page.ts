import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-features-suggest',
  templateUrl: './features-suggest.page.html',
  styleUrls: ['./features-suggest.page.less'],
})
export class FeaturesSuggestPage implements OnDestroy {
  featureId?: number
  featureType?: string
  routeParams$: Subscription
  queryParams$: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeParams$ = this.route.params.subscribe((params) => {
      this.featureId = +params.featureId
    })
    this.queryParams$ = this.route.queryParamMap.subscribe((params) => {
      if (params.has('featureType')) {
        this.featureType = params.get('featureType')!
      }
    })
  }

  ngOnDestroy(): void {
    this.routeParams$.unsubscribe()
    this.queryParams$.unsubscribe()
  }
}

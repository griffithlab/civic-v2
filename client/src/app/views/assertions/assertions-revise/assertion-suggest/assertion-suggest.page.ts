import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
    selector: 'cvc-assertions-suggest-page',
    templateUrl: './assertion-suggest.page.html',
    standalone: false
})
export class AssertionSuggestPage implements OnDestroy {
  assertionId?: number
  routeParams$: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeParams$ = this.route.params.subscribe((params) => {
      this.assertionId = +params.assertionId
    })
  }

  ngOnDestroy(): void {
    this.routeParams$.unsubscribe()
  }
}

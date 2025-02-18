import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-evidence-suggest',
  templateUrl: './evidence-suggest.page.html',
  standalone: false,
})
export class EvidenceSuggestPage implements OnDestroy {
  evidenceId?: number
  routeParams$: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeParams$ = this.route.params.subscribe((params) => {
      this.evidenceId = +params.evidenceId
    })
  }

  ngOnDestroy(): void {
    this.routeParams$.unsubscribe()
  }
}

import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-evidence-submit',
  templateUrl: './evidence-submit.page.html',
  standalone: false,
})
export class EvidenceSubmitPage implements OnDestroy {
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

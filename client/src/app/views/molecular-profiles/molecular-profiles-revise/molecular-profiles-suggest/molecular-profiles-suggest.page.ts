import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-molecular-profiles-suggest',
  templateUrl: './molecular-profiles-suggest.page.html',
  standalone: false,
})
export class MolecularProfilesSuggestPage implements OnDestroy {
  molecularProfileId?: number
  routeParams$: Subscription

  constructor(private route: ActivatedRoute) {
    this.routeParams$ = this.route.params.subscribe((params) => {
      this.molecularProfileId = +params.molecularProfileId
    })
  }

  ngOnDestroy(): void {
    this.routeParams$.unsubscribe()
  }
}

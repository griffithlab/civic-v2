import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs'

@Component({
    selector: 'cvc-phenotypes-summary',
    templateUrl: './phenotypes-summary.component.html',
    styleUrls: ['./phenotypes-summary.component.less'],
    standalone: false
})
export class PhenotypesSummaryComponent implements OnDestroy {
  routeSub: Subscription
  phenotypeId?: number

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.phenotypeId = +params.phenotypeId
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}

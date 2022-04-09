import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-drugs-summary',
  templateUrl: './drugs-summary.component.html',
  styleUrls: ['./drugs-summary.component.less']
})
export class DrugsSummaryComponent implements OnDestroy {
  routeSub: Subscription;
  drugId?: number;

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.drugId = +params.drugId;
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}

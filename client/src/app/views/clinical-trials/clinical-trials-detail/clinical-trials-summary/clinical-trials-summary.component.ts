import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs'

@Component({
  selector: 'cvc-clinical-trials-summary',
  templateUrl: './clinical-trials-summary.component.html',
  styleUrls: ['./clinical-trials-summary.component.less']
})
export class ClinicalTrialsSummaryComponent implements OnDestroy {
  routeSub: Subscription;
  clinicalTrialId?: number;

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.clinicalTrialId = +params.clinicalTrialId;
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}

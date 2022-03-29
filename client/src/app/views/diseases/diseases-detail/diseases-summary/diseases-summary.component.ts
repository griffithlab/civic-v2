import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cvc-diseases-summary',
  templateUrl: './diseases-summary.component.html',
  styleUrls: ['./diseases-summary.component.less']
})
export class DiseasesSummaryComponent implements OnDestroy {
  routeSub: Subscription;
  diseaseId?: number;

  constructor(private route: ActivatedRoute) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.diseaseId = +params.diseaseId;
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}

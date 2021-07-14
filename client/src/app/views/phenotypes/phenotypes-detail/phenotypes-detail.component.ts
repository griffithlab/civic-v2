import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'cvc-phenotypes-detail',
  templateUrl: './phenotypes-detail.component.html',
  styleUrls: ['./phenotypes-detail.component.less']
})

export class PhenotypesDetailComponent implements OnDestroy {
  routeSub: Subscription;
  phenotypeId?: number;

  constructor(
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.phenotypeId = +params.phenotypeId;
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}

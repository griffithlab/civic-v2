import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cvc-genes-suggest',
  templateUrl: './genes-suggest.page.html',
  styleUrls: ['./genes-suggest.page.less'],
})
export class GenesSuggestPage implements OnDestroy {
  geneId?: number;
  routeParams$: Subscription;

  constructor(private route: ActivatedRoute) {
    this.routeParams$ = this.route.params.subscribe((params) => {
      this.geneId = +params.geneId;
    });
  }

  ngOnDestroy(): void {
    this.routeParams$.unsubscribe();
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  SubscribableEntities,
  SubscribableInput,
  GenesSummaryGQL,
  GeneSummaryFieldsFragment,
  Maybe,
} from '@app/generated/civic.apollo';

import {
  Viewer,
  ViewerService,
} from '@app/core/services/viewer/viewer.service';

@Component({
  selector: 'cvc-genes-summary',
  templateUrl: './genes-summary.page.html',
  styleUrls: ['./genes-summary.page.less'],
})
export class GenesSummaryPage implements OnDestroy {
  gene$?: Observable<Maybe<GeneSummaryFieldsFragment>>;
  loading$?: Observable<boolean>;
  myGeneInfo$?: Observable<any>;
  viewer$?: Observable<Viewer>;

  subscribableEntity?: SubscribableInput;

  routeSub: Subscription;

  constructor(
    private gql: GenesSummaryGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.viewer$ = this.viewerService.viewer$;

      let queryRef = this.gql.watch({ geneId: +params.geneId });
      let observable = queryRef.valueChanges;

      this.subscribableEntity = {
        id: +params.geneId,
        entityType: SubscribableEntities.Gene,
      };

      this.gene$ = observable.pipe(pluck('data', 'gene'));
      this.loading$ = observable.pipe(pluck('loading'));

      this.myGeneInfo$ = this.gene$.pipe(
        pluck('myGeneInfoDetails'),
        map((info) => JSON.parse(String(info)))
      );
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}

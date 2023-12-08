import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { pluck } from 'rxjs-etc/operators'

import {
  SubscribableEntities,
  SubscribableInput,
  FeaturesSummaryGQL,
  FeatureSummaryFieldsFragment,
  Maybe,
} from '@app/generated/civic.apollo'

import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'

@Component({
  selector: 'cvc-features-summary',
  templateUrl: './features-summary.page.html',
  styleUrls: ['./features-summary.page.less'],
})
export class FeaturesSummaryPage implements OnDestroy {
  feature$?: Observable<Maybe<FeatureSummaryFieldsFragment>>
  loading$?: Observable<boolean>
  viewer$?: Observable<Viewer>

  subscribableEntity?: SubscribableInput

  routeSub: Subscription

  constructor(
    private gql: FeaturesSummaryGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.viewer$ = this.viewerService.viewer$

      let queryRef = this.gql.watch({ featureId: +params.featureId })
      let observable = queryRef.valueChanges

/*       this.subscribableEntity = {
        id: +params.featureId,
        entityType: SubscribableEntities.Gene,
      } */

      this.feature$ = observable.pipe(pluck('data', 'feature'))
      this.loading$ = observable.pipe(pluck('loading'))
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}

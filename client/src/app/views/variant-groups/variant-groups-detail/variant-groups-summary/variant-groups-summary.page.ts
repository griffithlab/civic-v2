import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Observable, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

import {
  SubscribableEntities,
  SubscribableInput,
  VariantGroupsSummaryGQL,
  VariantGroupSummaryFieldsFragment,
  Maybe,
} from '@app/generated/civic.apollo'

import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'

@Component({
  selector: 'cvc-variant-groups-summary',
  templateUrl: './variant-groups-summary.page.html',
  styleUrls: ['./variant-groups-summary.page.less'],
  standalone: false,
})
export class VariantGroupsSummaryPage implements OnDestroy {
  variantGroup$?: Observable<Maybe<VariantGroupSummaryFieldsFragment>>
  loading$?: Observable<boolean>
  myVariantGroupInfo$?: Observable<any>
  viewer$?: Observable<Viewer>

  subscribableEntity?: SubscribableInput

  routeSub: Subscription

  constructor(
    private gql: VariantGroupsSummaryGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      this.viewer$ = this.viewerService.viewer$

      let queryRef = this.gql.watch({ variantGroupId: +params.variantGroupId })
      let observable = queryRef.valueChanges

      this.subscribableEntity = {
        id: +params.variantGroupId,
        entityType: SubscribableEntities.VariantGroup,
      }

      this.variantGroup$ = observable.pipe(pluck('data', 'variantGroup'))
      this.loading$ = observable.pipe(pluck('loading'))

      this.myVariantGroupInfo$ = this.variantGroup$.pipe(
        pluck('myVariantGroupInfoDetails'),
        map((info) => JSON.parse(String(info)))
      )
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}

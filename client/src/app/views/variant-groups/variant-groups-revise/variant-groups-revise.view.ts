import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  Maybe,
  VariantGroupDetailFieldsFragment,
  VariantGroupDetailGQL,
} from '@app/generated/civic.apollo'
import { Observable, Subscription } from 'rxjs'
import { startWith, map } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

@Component({
  selector: 'cvc-variant-groups-revise-view',
  templateUrl: './variant-groups-revise.view.html',
  styleUrls: ['./variant-groups-revise.view.less'],
  standalone: false,
})
export class VariantGroupsReviseView implements OnInit {
  loading$?: Observable<boolean>
  routeSub: Subscription
  isSignedIn$?: Observable<boolean>
  variantGroup$?: Observable<Maybe<VariantGroupDetailFieldsFragment>>

  constructor(
    private gql: VariantGroupDetailGQL,
    private route: ActivatedRoute,
    private viewerService: ViewerService
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      let observable = this.gql.watch({
        variantGroupId: +params.variantGroupId,
      }).valueChanges

      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.variantGroup$ = observable.pipe(pluck('data', 'variantGroup'))
    })
  }

  ngOnInit(): void {
    this.isSignedIn$ = this.viewerService.viewer$.pipe(map((v) => v.signedIn))
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }
}

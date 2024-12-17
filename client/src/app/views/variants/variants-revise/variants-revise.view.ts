import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  Maybe,
  VariantDetailFieldsFragment,
  VariantDetailGQL,
} from '@app/generated/civic.apollo'
import { Observable, Subscription } from 'rxjs'
import { map, startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

@Component({
  selector: 'cvc-variants-revise',
  templateUrl: './variants-revise.view.html',
  styleUrls: ['./variants-revise.view.less'],
  standalone: false,
})
export class VariantsReviseView implements OnInit, OnDestroy {
  loading$?: Observable<boolean>
  variant$?: Observable<Maybe<VariantDetailFieldsFragment>>
  commentsTotal$?: Observable<number>
  revisionsTotal$?: Observable<number>
  flagsTotal$?: Observable<number>
  routeSub: Subscription
  isSignedIn$?: Observable<boolean>

  constructor(
    private gql: VariantDetailGQL,
    private route: ActivatedRoute,
    private viewerService: ViewerService
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      let observable = this.gql.watch({
        variantId: +params.variantId,
      }).valueChanges

      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.variant$ = observable.pipe(pluck('data', 'variant'))

      this.commentsTotal$ = this.variant$.pipe(pluck('comments', 'totalCount'))

      this.flagsTotal$ = this.variant$.pipe(pluck('flags', 'totalCount'))

      this.revisionsTotal$ = this.variant$.pipe(
        pluck('revisions', 'totalCount')
      )
    })
  }

  ngOnInit(): void {
    this.isSignedIn$ = this.viewerService.viewer$.pipe(map((v) => v.signedIn))
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }
}

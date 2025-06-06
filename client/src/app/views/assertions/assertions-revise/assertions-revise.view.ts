import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  AssertionDetailFieldsFragment,
  AssertionDetailGQL,
  Maybe,
} from '@app/generated/civic.apollo'
import { Observable, Subscription } from 'rxjs'
import { map, startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

@Component({
    selector: 'cvc-assertions-revise-view',
    templateUrl: './assertions-revise.view.html',
    styleUrls: ['./assertions-revise.view.less'],
    standalone: false
})
export class AssertionsReviseView implements OnInit, OnDestroy {
  loading$?: Observable<boolean>
  assertion$?: Observable<Maybe<AssertionDetailFieldsFragment>>
  routeSub: Subscription
  isSignedIn$?: Observable<boolean>

  constructor(
    private gql: AssertionDetailGQL,
    private route: ActivatedRoute,
    private viewerService: ViewerService
  ) {
    this.routeSub = this.route.params.subscribe((params) => {
      let observable = this.gql.watch({
        assertionId: +params.assertionId,
      }).valueChanges

      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.assertion$ = observable.pipe(pluck('data', 'assertion'))
    })
  }

  ngOnInit(): void {
    this.isSignedIn$ = this.viewerService.viewer$.pipe(map((v) => v.signedIn))
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }
}

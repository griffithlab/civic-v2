import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  Maybe,
  SourceDetailFieldsFragment,
  SourceDetailGQL,
  SourceDetailQuery,
  SourceDetailQueryVariables,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { Observable, Subscription } from 'rxjs'
import { startWith } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

@Component({
  selector: 'cvc-sources-detail',
  templateUrl: './sources-detail.view.html',
  styleUrls: ['./sources-detail.view.less'],
})
export class SourcesDetailView implements OnDestroy {
  viewer$: Observable<Viewer>
  routeSub: Subscription
  sourceId?: number

  queryRef?: QueryRef<SourceDetailQuery, SourceDetailQueryVariables>

  loading$?: Observable<boolean>
  source$?: Observable<Maybe<SourceDetailFieldsFragment>>

  tabs: RouteableTab[]

  constructor(
    private viewerService: ViewerService,
    private route: ActivatedRoute,
    private gql: SourceDetailGQL
  ) {
    this.viewer$ = this.viewerService.viewer$

    this.routeSub = this.route.params.subscribe((params) => {
      this.sourceId = +params.sourceId

      this.queryRef = this.gql.watch({
        sourceId: this.sourceId,
      })

      let observable = this.queryRef.valueChanges
      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.source$ = observable.pipe(pluck('data', 'source'))
    })

    this.tabs = [
      {
        routeName: 'summary',
        iconName: 'pic-left',
        tabLabel: 'Summary',
      },
      {
        routeName: 'comments',
        iconName: 'civic-comment',
        tabLabel: 'Comments',
      },
    ]
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe()
  }
}

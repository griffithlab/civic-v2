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
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs'
import { startWith, takeUntil } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

@Component({
  selector: 'cvc-sources-detail',
  templateUrl: './sources-detail.view.html',
  styleUrls: ['./sources-detail.view.less'],
  standalone: false,
})
export class SourcesDetailView implements OnDestroy {
  viewer$: Observable<Viewer>
  routeSub: Subscription
  sourceId?: number

  queryRef?: QueryRef<SourceDetailQuery, SourceDetailQueryVariables>
  destroy$ = new Subject<void>()

  loading$?: Observable<boolean>
  source$?: Observable<Maybe<SourceDetailFieldsFragment>>

  tabs$: BehaviorSubject<RouteableTab[]>
  defaultTabs: RouteableTab[] = [
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

  constructor(
    private viewerService: ViewerService,
    private route: ActivatedRoute,
    private gql: SourceDetailGQL
  ) {
    this.tabs$ = new BehaviorSubject(this.defaultTabs)

    this.viewer$ = this.viewerService.viewer$

    this.routeSub = this.route.params.subscribe((params) => {
      this.sourceId = +params.sourceId

      this.queryRef = this.gql.watch({
        sourceId: this.sourceId,
      })

      let observable = this.queryRef.valueChanges
      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.source$ = observable.pipe(pluck('data', 'source'))
      this.source$.pipe(takeUntil(this.destroy$)).subscribe({
        next: (sourceResp) => {
          this.tabs$.next(
            this.defaultTabs.map((tab) => {
              if (tab.tabLabel === 'Comments') {
                return {
                  badgeCount: sourceResp?.comments.totalCount,
                  badgeColor: '#cccccc',
                  ...tab,
                }
              } else {
                return tab
              }
            })
          )
        },
      })
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.destroy$.next()
    this.destroy$.unsubscribe()
  }
}

import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs'
import { startWith, takeUntil } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import {
  FeatureDetailFieldsFragment,
  FeatureDetailGQL,
  Maybe,
  SubscribableEntities,
  SubscribableInput,
} from '@app/generated/civic.apollo'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component'

@Component({
  selector: 'features-detail',
  templateUrl: './features-detail.view.html',
  styleUrls: ['./features-detail.view.less'],
  standalone: false,
})
export class FeaturesDetailView implements OnDestroy {
  loading$?: Observable<boolean>
  feature$?: Observable<Maybe<FeatureDetailFieldsFragment>>
  viewer$: Observable<Viewer>
  flagsTotal$?: Observable<number>
  routeSub: Subscription
  subscribable?: SubscribableInput

  tabs$: BehaviorSubject<RouteableTab[]>
  destroy$ = new Subject<void>()
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
    {
      routeName: 'revisions',
      iconName: 'civic-revision',
      tabLabel: 'Revisions',
    },
    {
      routeName: 'flags',
      iconName: 'civic-flag',
      tabLabel: 'Flags',
    },
    {
      routeName: 'events',
      iconName: 'civic-event',
      tabLabel: 'Activity',
    },
  ]

  constructor(
    private gql: FeatureDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.tabs$ = new BehaviorSubject(this.defaultTabs)
    this.viewer$ = this.viewerService.viewer$

    this.routeSub = this.route.params.subscribe((params) => {
      let observable = this.gql.watch({
        featureId: +params.featureId,
      }).valueChanges

      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.feature$ = observable.pipe(pluck('data', 'feature'))

      this.flagsTotal$ = this.feature$.pipe(pluck('flags', 'totalCount'))

      this.feature$.pipe(takeUntil(this.destroy$)).subscribe({
        next: (featureResp) => {
          this.tabs$.next(
            this.defaultTabs.map((tab) => {
              if (tab.tabLabel === 'Revisions') {
                return {
                  badgeCount: featureResp?.revisions.totalCount,
                  ...tab,
                }
              } else if (tab.tabLabel === 'Flags') {
                return {
                  badgeCount: featureResp?.flags.totalCount,
                  ...tab,
                }
              } else if (tab.tabLabel === 'Comments') {
                return {
                  badgeCount: featureResp?.comments.totalCount,
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

      this.subscribable = {
        id: +params.featureId,
        entityType: SubscribableEntities.Feature,
      }
    })
  }

  filterCurators = (u: any): boolean => {
    return u.role == 'curator'
  }
  filterEditors = (u: any): boolean => {
    return u.role == 'editor' || u.role == 'admin'
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.destroy$.next()
    this.destroy$.unsubscribe()
  }
}

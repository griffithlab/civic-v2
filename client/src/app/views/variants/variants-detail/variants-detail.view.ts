import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  Maybe,
  SubscribableEntities,
  SubscribableInput,
  VariantDetailFieldsFragment,
  VariantDetailGQL,
  VariantDetailQueryVariables,
} from '@app/generated/civic.apollo'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { QueryRef } from 'apollo-angular'
import { VariantDetailQuery } from '@app/generated/civic.apollo'
import { startWith, takeUntil } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs'
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component'

@Component({
  selector: 'variants-detail',
  templateUrl: './variants-detail.view.html',
  styleUrls: ['./variants-detail.view.less'],
  standalone: false,
})
export class VariantsDetailView implements OnDestroy {
  queryRef?: QueryRef<VariantDetailQuery, VariantDetailQueryVariables>

  variant$?: Observable<Maybe<VariantDetailFieldsFragment>>
  loading$?: Observable<boolean>
  flagsTotal$?: Observable<number>
  viewer$: Observable<Viewer>

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
    private gql: VariantDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.tabs$ = new BehaviorSubject(this.defaultTabs)
    this.viewer$ = this.viewerService.viewer$

    this.routeSub = this.route.params.subscribe((params) => {
      this.queryRef = this.gql.watch({ variantId: +params.variantId })

      let observable = this.queryRef.valueChanges

      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.variant$ = observable.pipe(pluck('data', 'variant'))

      this.flagsTotal$ = this.variant$.pipe(pluck('flags', 'totalCount'))

      this.variant$.pipe(takeUntil(this.destroy$)).subscribe({
        next: (variantResp) => {
          this.tabs$.next(
            this.defaultTabs.map((tab) => {
              if (tab.tabLabel === 'Revisions') {
                return {
                  badgeCount: variantResp?.openRevisionCount,
                  ...tab,
                }
              } else if (tab.tabLabel === 'Flags') {
                return {
                  badgeCount: variantResp?.flags.totalCount,
                  ...tab,
                }
              } else if (tab.tabLabel === 'Comments') {
                return {
                  badgeCount: variantResp?.comments.totalCount,
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
        id: +params.variantId,
        entityType: SubscribableEntities.Variant,
      }
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.destroy$.next()
    this.destroy$.unsubscribe()
  }
}

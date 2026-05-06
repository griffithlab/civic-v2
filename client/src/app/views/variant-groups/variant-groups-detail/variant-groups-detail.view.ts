import { Component, OnDestroy, OnInit } from '@angular/core'
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import {
  Maybe,
  VariantGroupDetailFieldsFragment,
  SubscribableEntities,
  SubscribableInput,
  VariantGroupDetailGQL,
} from '@app/generated/civic.apollo'
import { ActivatedRoute } from '@angular/router'
import { startWith, takeUntil } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component'

@Component({
    selector: 'cvc-variant-groups-detail',
    templateUrl: './variant-groups-detail.view.html',
    styleUrls: ['./variant-groups-detail.view.less'],
    standalone: false
})
export class VariantGroupsDetailView implements OnInit, OnDestroy {
  loading$?: Observable<boolean>
  variantGroup$?: Observable<Maybe<VariantGroupDetailFieldsFragment>>
  viewer$: Observable<Viewer>
  revisionsTotal$?: Observable<number>
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
  ]

  constructor(
    private gql: VariantGroupDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.viewer$ = this.viewerService.viewer$
    this.tabs$ = new BehaviorSubject(this.defaultTabs)

    this.routeSub = this.route.params.subscribe((params) => {
      let observable = this.gql.watch({
        variantGroupId: +params.variantGroupId,
      }).valueChanges

      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.variantGroup$ = observable.pipe(pluck('data', 'variantGroup'))

      this.flagsTotal$ = this.variantGroup$.pipe(pluck('flags', 'totalCount'))

      this.variantGroup$
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (vgResp) => {
            this.tabs$.next(
              this.defaultTabs.map((tab) => {
                if (tab.tabLabel === 'Revisions') {
                  return {
                    badgeCount: vgResp?.revisions.totalCount,
                    ...tab,
                  }
                } else if (tab.tabLabel === 'Comments') {
                  return {
                    badgeCount: vgResp?.comments.totalCount,
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
        id: +params.variantGroupId,
        entityType: SubscribableEntities.VariantGroup,
      }
    })
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
    this.destroy$.next()
    this.destroy$.unsubscribe()
  }
}

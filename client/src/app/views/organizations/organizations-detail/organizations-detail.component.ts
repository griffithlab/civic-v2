import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  Maybe,
  Organization,
  OrganizationDetailFieldsFragment,
  OrganizationDetailGQL,
  OrganizationDetailQueryVariables,
} from '@app/generated/civic.apollo'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { QueryRef } from 'apollo-angular'
import { OrganizationDetailQuery } from '@app/generated/civic.apollo'
import { startWith, map, takeUntil } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs'
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component'

@Component({
    selector: 'organizations-detail',
    templateUrl: './organizations-detail.component.html',
    styleUrls: ['./organizations-detail.component.less'],
    standalone: false
})
export class OrganizationsDetailComponent implements OnDestroy {
  queryRef?: QueryRef<OrganizationDetailQuery, OrganizationDetailQueryVariables>
  destroy$ = new Subject<void>()

  organization$?: Observable<Maybe<OrganizationDetailFieldsFragment>>
  loading$?: Observable<boolean>
  viewer$?: Observable<Viewer>
  routeSub: Subscription

  defaultTabs: RouteableTab[] = [
    {
      routeName: 'members',
      tabLabel: 'Members',
      iconName: 'pic-right',
    },
    {
      routeName: 'activity',
      tabLabel: 'Activity',
      iconName: 'civic-event',
    },
    {
      routeName: 'evidence',
      tabLabel: 'Evidence Items',
      iconName: 'civic-evidence',
    },
    {
      routeName: 'assertions',
      tabLabel: 'Assertions',
      iconName: 'civic-assertion',
    },
  ]

  tabs$: BehaviorSubject<RouteableTab[]>

  constructor(
    private gql: OrganizationDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.tabs$ = new BehaviorSubject(this.defaultTabs)

    this.routeSub = this.route.params.subscribe((params) => {
      this.queryRef = this.gql.watch({
        organizationId: +params.organizationId,
      })

      let observable = this.queryRef.valueChanges

      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.organization$ = observable.pipe(pluck('data', 'organization'))

      this.viewer$ = this.viewerService.viewer$

      this.organization$.pipe(takeUntil(this.destroy$)).subscribe({
        next: (org: Maybe<OrganizationDetailFieldsFragment>) => {
          if (org && org.subGroups.length > 0) {
            this.tabs$.next([
              ...this.defaultTabs,
              {
                routeName: 'groups',
                tabLabel: 'Child Organizations',
                iconName: 'civic-organization',
              },
            ])
          } else {
            this.tabs$.next(this.defaultTabs)
          }
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

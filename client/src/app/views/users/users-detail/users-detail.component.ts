import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  Maybe,
  Organization,
  UserDetailFieldsFragment,
  UserDetailGQL,
  UserDetailQuery,
  UserDetailQueryVariables,
} from '@app/generated/civic.apollo'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { QueryRef } from 'apollo-angular'
import { startWith, map } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { BehaviorSubject, Observable, Subscription } from 'rxjs'
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component'
import { TagInfo } from '@app/components/shared/tag-overflow/tag-overflow.component'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

@UntilDestroy()
@Component({
    selector: 'users-detail',
    templateUrl: './users-detail.component.html',
    styleUrls: ['./users-detail.component.less'],
    standalone: false
})
export class UsersDetailComponent implements OnDestroy {
  queryRef?: QueryRef<UserDetailQuery, UserDetailQueryVariables>
  user$?: Observable<Maybe<UserDetailFieldsFragment>>
  loading$?: Observable<boolean>
  viewer$?: Observable<Viewer>
  organization$ = new BehaviorSubject<Maybe<TagInfo[]>>([])
  ownProfile$ = new BehaviorSubject<boolean>(false)
  uploadError = false
  updateSuccess = false

  updateCoiModalVisible = false
  updateProfileModalVisible = false

  routeSub: Subscription
  viewerSub?: Subscription

  tabs$: BehaviorSubject<RouteableTab[]>

  defaultTabs: RouteableTab[] = [
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
    {
      routeName: 'source-suggestions',
      tabLabel: 'Source Suggestions',
      iconName: 'file-add',
    },
    // {
    //   routeName: 'badges',
    //   tabLabel: 'Badges',
    //   iconName: 'safety-certificate',
    // },
  ]

  constructor(
    private gql: UserDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.tabs$ = new BehaviorSubject(this.defaultTabs)

    this.routeSub = this.route.params.subscribe((params) => {
      this.queryRef = this.gql.watch({ userId: +params.userId })
      let observable = this.queryRef.valueChanges
      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.user$ = observable.pipe(pluck('data', 'user'))

      // Munge user.organizations into a type that cvc-tag-overflow will accept.
      // Not sure why this is required here but users-table doesn't seem to need any of this munging.
      this.user$
        .pipe(
          map((user) => {
            if (!user) return []
            return user.organizations.map((org) => {
              // convert user Organization into TagInfo
              return { id: org.id, name: org.name, link: org.url }
            })
          }),
          untilDestroyed(this)
        )
        .subscribe((orgs) => {
          this.organization$.next(orgs)
        })

      this.viewerSub = this.viewerService.viewer$.subscribe((v) => {
        if (v.id === +params.userId) {
          let notificationTab: RouteableTab = {
            routeName: 'notifications',
            tabLabel: 'Notifications',
            iconName: 'bell',
          }

          this.tabs$.next([...this.defaultTabs, notificationTab])
          this.ownProfile$.next(true)
        } else {
          this.ownProfile$.next(false)
        }
      })
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe()
    this.viewerSub?.unsubscribe()
  }

  profileUploadComplete(success: boolean) {
    if (success) {
      this.queryRef?.refetch()
      this.updateSuccess = true
    } else {
      this.uploadError = true
    }
  }

  coiUpdated() {
    this.updateCoiModalVisible = false
    this.queryRef?.refetch()
  }

  profileUpdated() {
    this.updateProfileModalVisible = false
    this.queryRef?.refetch()
  }

  handleCoiModalCancel() {
    this.updateCoiModalVisible = false
  }

  handleProfileModalCancel() {
    this.updateProfileModalVisible = false
  }
}

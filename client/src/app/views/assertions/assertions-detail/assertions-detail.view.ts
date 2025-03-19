import { Component, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  Maybe,
  AssertionDetailFieldsFragment,
  AssertionDetailGQL,
  AssertionDetailQueryVariables,
  SubscribableInput,
  SubscribableEntities,
  EvidenceStatus,
} from '@app/generated/civic.apollo'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { QueryRef } from 'apollo-angular'
import { AssertionDetailQuery } from '@app/generated/civic.apollo'
import { map, startWith, takeUntil } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs'
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component'
import { EndorsementResult } from '@app/components/shared/endorse-assertion-button/endorse-assertion-button.component'

type ActiveEndorsement = {
  organization: {
    id: number
  }
}

@Component({
  selector: 'assertions-detail',
  templateUrl: './assertions-detail.view.html',
  styleUrls: ['./assertions-detail.view.less'],
  standalone: false,
})
export class AssertionsDetailView implements OnDestroy {
  queryRef?: QueryRef<AssertionDetailQuery, AssertionDetailQueryVariables>

  assertion$?: Observable<Maybe<AssertionDetailFieldsFragment>>
  loading$?: Observable<boolean>
  flagsTotal$?: Observable<number>
  activeEndorsementTotal$?: Observable<number>
  viewer$: Observable<Viewer>

  paramsSub: Subscription
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
      routeName: 'endorsements',
      iconName: 'safety-certificate',
      tabLabel: 'Endorsements',
    },
    {
      routeName: 'events',
      iconName: 'civic-event',
      tabLabel: 'Activity',
    },
  ]

  errors: string[] = []
  successMessage: Maybe<string>

  constructor(
    private gql: AssertionDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.tabs$ = new BehaviorSubject(this.defaultTabs)

    this.viewer$ = this.viewerService.viewer$

    this.paramsSub = this.route.params.subscribe((params) => {
      this.queryRef = this.gql.watch({ assertionId: +params.assertionId })

      let observable = this.queryRef.valueChanges

      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.assertion$ = observable.pipe(pluck('data', 'assertion'))

      this.flagsTotal$ = this.assertion$.pipe(pluck('flags', 'totalCount'))

      this.activeEndorsementTotal$ = this.assertion$.pipe(
        pluck('activeEndorsements', 'totalCount')
      )

      this.assertion$.pipe(takeUntil(this.destroy$)).subscribe({
        next: (assertionResp) => {
          this.tabs$.next(
            this.defaultTabs.map((tab) => {
              if (tab.tabLabel === 'Revisions') {
                return {
                  badgeCount: assertionResp?.revisions.totalCount,
                  ...tab,
                }
              } else if (tab.tabLabel === 'Flags') {
                return {
                  badgeCount: assertionResp?.flags.totalCount,
                  ...tab,
                }
              } else if (tab.tabLabel === 'Comments') {
                return {
                  badgeCount: assertionResp?.comments.totalCount,
                  badgeColor: '#cccccc',
                  ...tab,
                }
              } else if (tab.tabLabel === 'Endorsements') {
                let activeCount = assertionResp?.activeEndorsements.totalCount ? assertionResp?.activeEndorsements.totalCount : 0 
                let requiresReviewCount = assertionResp?.requiresReviewEndorsements.totalCount ? assertionResp?.requiresReviewEndorsements.totalCount : 0 
                let count = activeCount + requiresReviewCount
                if (count == 0) {
                  let count = undefined
                }
                return {
                  badgeCount: count,
                  badgeColor: '#EFBF04',
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
        id: +params.assertionId,
        entityType: SubscribableEntities.Assertion,
      }
    })
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe()
    this.destroy$.next()
    this.destroy$.unsubscribe()
  }

  onRevertCompleted(res: true | string[]) {
    if (res === true) {
      this.errors = []
      this.successMessage = 'Assertion reverted to submitted status.'
      this.queryRef?.refetch()
    } else {
      this.errors = res
      this.successMessage = undefined
    }
  }

  onErrorBannerClose(err: string) {
    this.errors = this.errors?.filter((e) => e != err)
  }

  onSuccessBannerClose() {
    this.successMessage = undefined
  }

  onModerateCompleted(res: EvidenceStatus | string[]) {
    if (Array.isArray(res)) {
      this.errors = res
      this.successMessage = undefined
    } else {
      this.errors = []
      this.successMessage = `Assertion successfully ${res}.`
      this.queryRef?.refetch()
    }
  }

  onEndorsementAction(res: EndorsementResult) {
    if (res.success) {
      if (res.action == 'endorse') {
        this.successMessage = `Assertion Endorsed Successfully`
      } else {
        this.successMessage = `Successfully Revoked Endorsement`
      }
      this.errors = []
      this.queryRef?.refetch()
    } else {
      this.successMessage = undefined
      this.errors = res.errors
    }
  }

  hasActiveEndorsement(
    currentOrgId: number,
    activeEndorsements: ActiveEndorsement[]
  ): boolean {
    return (
      activeEndorsements.filter((ae) => ae.organization.id === currentOrgId)
        .length > 0
    )
  }
}

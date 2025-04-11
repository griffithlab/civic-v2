import { Component, computed, OnDestroy, Signal, signal } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import {
  Maybe,
  AssertionDetailFieldsFragment,
  AssertionDetailGQL,
  AssertionDetailQueryVariables,
  SubscribableInput,
  SubscribableEntities,
  EvidenceStatus,
  EndorsementListNodeFragment,
} from '@app/generated/civic.apollo'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { QueryRef } from 'apollo-angular'
import { AssertionDetailQuery } from '@app/generated/civic.apollo'
import { filter, map, shareReplay, startWith, takeUntil } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs'
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component'
import { EndorsementResult } from '@app/components/shared/endorse-assertion-button/endorse-assertion-button.component'
import { toSignal } from '@angular/core/rxjs-interop'
import { isNonNulled } from 'rxjs-etc'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

type ActiveEndorsement = {
  organization: {
    id: number
  }
}

@UntilDestroy()
@Component({
  selector: 'assertions-detail',
  templateUrl: './assertions-detail.view.html',
  styleUrls: ['./assertions-detail.view.less'],
  standalone: false,
})
export class AssertionsDetailView {
  queryRef?: QueryRef<AssertionDetailQuery, AssertionDetailQueryVariables>

  assertion$!: Observable<Maybe<AssertionDetailFieldsFragment>>
  endorsement$!: Observable<Maybe<EndorsementListNodeFragment[]>>
  activeCount!: Signal<number>
  requiresReviewCount!: Signal<number>
  loading$?: Observable<boolean>
  flagsTotal$?: Observable<number>
  activeEndorsementTotal$?: Observable<number>
  requiresReviewEndorsementTotal$?: Observable<number>
  viewer$: Observable<Viewer>
  $viewer: Signal<Maybe<Viewer>>
  subscribable?: SubscribableInput

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

  endorsementCount?: Signal<number>

  constructor(
    private gql: AssertionDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    this.tabs$ = new BehaviorSubject(this.defaultTabs)

    this.viewer$ = this.viewerService.viewer$
    this.$viewer = toSignal(this.viewer$, { initialValue: undefined })

    // ActiveRoute params subscriptions are automatically destroyed when the component is destroyed
    this.route.params.subscribe((params) => {
      this.queryRef = this.gql.watch({ assertionId: +params.assertionId })

      let observable = this.queryRef.valueChanges

      this.loading$ = observable.pipe(pluck('loading'), startWith(true))

      this.assertion$ = observable.pipe(
        pluck('data', 'assertion'),
        shareReplay(1)
      )

      this.flagsTotal$ = this.assertion$.pipe(pluck('flags', 'totalCount'))

      this.endorsement$ = this.assertion$.pipe(pluck('endorsements', 'nodes'))

      this.activeCount = toSignal(
        this.endorsement$.pipe(
          filter(isNonNulled),
          map((nodes) => nodes.filter((node) => node.status === 'ACTIVE')),
          map((filteredNodes) => filteredNodes.length)
        ),
        { initialValue: 0 }
      )

      this.requiresReviewCount = toSignal(
        this.endorsement$.pipe(
          filter(isNonNulled),
          map((nodes) =>
            nodes.filter((node) => node.status === 'REQUIRES_REVIEW')
          ),
          map((filteredNodes) => filteredNodes.length)
        ),
        { initialValue: 0 }
      )

      this.endorsementCount = computed(
        () => (this.activeCount() || 0) + (this.requiresReviewCount() || 0)
      )

      this.assertion$.pipe(untilDestroyed(this)).subscribe({
        next: (assertionResp) => {
          this.tabs$.next(
            this.defaultTabs.map((tab) => {
              if (tab.tabLabel === 'Revisions') {
                return {
                  badgeCount: assertionResp?.revisions.totalCount,
                  badgeColor: '#4096ff', // blue-5
                  ...tab,
                }
              } else if (tab.tabLabel === 'Flags') {
                return {
                  badgeCount: assertionResp?.flags.totalCount,
                  badgeColor: '#4096ff', // blue-5
                  ...tab,
                }
              } else if (tab.tabLabel === 'Comments') {
                return {
                  badgeCount: assertionResp?.comments.totalCount,
                  badgeColor: '#4096ff', // blue-5
                  ...tab,
                }
              } else if (tab.tabLabel === 'Endorsements') {
                let count: Maybe<number> =
                  this.activeCount() + this.requiresReviewCount()
                if (count == 0) {
                  count = undefined
                }
                return {
                  badgeCount: count,
                  badgeColor: '#4096ff', // blue-5
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

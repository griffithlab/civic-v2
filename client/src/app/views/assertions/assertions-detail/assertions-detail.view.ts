import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router'
import { ApolloQueryResult } from '@apollo/client/core'
import { EndorsementResult } from '@app/components/shared/endorse-assertion-button/endorse-assertion-button.component'
import { CvcFlaggableCounts } from '@app/components/shared/flaggable/flaggable.component'
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { EndorsementAction } from '@app/core/utilities/get-endorsement-permission'
import {
  AssertionDetailFieldsFragment,
  AssertionDetailGQL,
  AssertionDetailQuery,
  AssertionDetailQueryVariables,
  EndorsementListNodeFragment,
  EvidenceStatus,
  Maybe,
  SubscribableEntities,
  SubscribableInput,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { QueryRef } from 'apollo-angular'
import {
  BehaviorSubject,
  combineLatest,
  filter,
  map,
  Observable,
  Subject,
} from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/operators'
import { tag } from 'rxjs-spy/operators'
import { $enum } from 'ts-enum-util'

type EndorsementCounts = {
  active: number
  requiresReview: number
  revoked: number
}

@UntilDestroy()
@Component({
  selector: 'assertions-detail',
  templateUrl: './assertions-detail.view.html',
  styleUrls: ['./assertions-detail.view.less'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssertionsDetailView {
  // queryRef?: QueryRef<AssertionDetailQuery, AssertionDetailQueryVariables>

  // assertion$!: Observable<Maybe<AssertionDetailFieldsFragment>>
  // $assertion!: Signal<Maybe<AssertionDetailFieldsFragment>>
  // endorsement$!: Observable<Maybe<EndorsementListNodeFragment[]>>
  // activeCount!: Signal<number>
  // requiresReviewCount!: Signal<number>
  // loading$?: Observable<boolean>
  // flagsTotal$?: Observable<number>
  // activeEndorsementTotal$?: Observable<number>
  // requiresReviewEndorsementTotal$?: Observable<number>
  // $viewer: Signal<Maybe<Viewer>>
  // subscribable?: SubscribableInput

  // tabs$: BehaviorSubject<RouteableTab[]>
  // defaultTabs: RouteableTab[] = [
  //   {
  //     routeName: 'summary',
  //     iconName: 'pic-left',
  //     tabLabel: 'Summary',
  //   },
  //   {
  //     routeName: 'comments',
  //     iconName: 'civic-comment',
  //     tabLabel: 'Comments',
  //   },
  //   {
  //     routeName: 'revisions',
  //     iconName: 'civic-revision',
  //     tabLabel: 'Revisions',
  //   },
  //   {
  //     routeName: 'flags',
  //     iconName: 'civic-flag',
  //     tabLabel: 'Flags',
  //   },
  //   {
  //     routeName: 'endorsements',
  //     iconName: 'safety-certificate',
  //     tabLabel: 'Endorsements',
  //   },
  //   {
  //     routeName: 'events',
  //     iconName: 'civic-event',
  //     tabLabel: 'Activity',
  //   },
  // ]

  // errors: string[] = []
  // successMessage: Maybe<string>

  // endorsementCount?: Signal<number>

  /* EVENT SOURCES */
  private response$: Observable<ApolloQueryResult<AssertionDetailQuery>>
  onRevert$: Subject<true | string[]>
  onModeration$: Subject<EvidenceStatus | string[]>
  onEndorsement$: Subject<EndorsementResult>
  onErrorBannerClose$: Subject<Maybe<string>>
  onSuccessBannerClose$: Subject<void>

  /* DERIVED SIGNALS */
  viewer: Signal<Maybe<Viewer>>
  loading: Signal<boolean>
  assertion: Signal<Maybe<AssertionDetailFieldsFragment>>
  endorsements: Signal<EndorsementListNodeFragment[]>
  endorsementCounts: Signal<EndorsementCounts>
  flaggableCounts: Signal<CvcFlaggableCounts>
  tabConfig: Signal<RouteableTab[]>
  errors: WritableSignal<string[]>
  successMessage: WritableSignal<Maybe<string>>
  subscribableInput: Signal<Maybe<SubscribableInput>>

  /* ATTRIBUTES */
  private queryRef: QueryRef<
    AssertionDetailQuery,
    AssertionDetailQueryVariables
  >
  assertionId?: number

  // CONTANTS
  SUBSCRIBABLE_ENTITY_TYPE = SubscribableEntities.Assertion
  SUBSCRIBABLE_ENTITY_TYPENAME = 'Assertion'
  DEFAULT_TAB_CONFIG: RouteableTab[] = [
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

  constructor(
    private gql: AssertionDetailGQL,
    private viewerService: ViewerService,
    private route: ActivatedRoute
  ) {
    /**************************
    CONFIGURE QUERY & RESPONSE
    **************************/
    // get assertionId from route params
    this.assertionId = +this.route.snapshot.params['assertionId']

    // save query reference for calling refetch() or fetchMore()
    this.queryRef = this.gql.watch({ assertionId: this.assertionId })

    this.response$ = this.queryRef.valueChanges

    /**************************
    DERIVED SIGNALS
    **************************/
    // NOTE: the 'pluck' operator from rxjs-etc preserves types,
    // while the 'pluck' operator in the core rxjs lib does not
    // (and is deprecated). Using map((data) => data.to.be.plucked)
    // is also an option, but IMHO 'pluck' easier to type and read.
    // Note that rxjs-etc/pluck is limited to 6 arguments.

    // provide viewer$ observable as signal
    this.viewer = toSignal(
      this.viewerService.viewer$.pipe(
        map((viewer) => ({ ...viewer })) // create new object to trigger change detection
      ),
      {
        initialValue: undefined,
      }
    )

    // pluck loading from response$, provide as signal
    this.loading = toSignal(this.response$.pipe(pluck('loading')), {
      initialValue: false,
    })

    // provide assertion detail fragment as signal derived from response observable
    this.assertion = toSignal(
      this.response$.pipe(
        pluck('data', 'assertion'),
        filter(isNonNulled),
        map((assertion) => ({
          ...assertion,
        })) // create new object to trigger change detection
      ),
      {
        initialValue: undefined,
      }
    )

    // provide subscribable input as signal derived from assertion & entity type constant
    this.subscribableInput = computed(() => {
      const assertion = this.assertion()
      let subscribable: Maybe<SubscribableInput>
      if (assertion) {
        subscribable = {
          id: assertion.id,
          entityType: this.SUBSCRIBABLE_ENTITY_TYPE,
        }
      }
      return subscribable
    })

    // provide endorsements as signal derived from assertion endorsement connection
    this.endorsements = computed(() => {
      const assertion = this.assertion()
      return assertion?.endorsements.nodes || []
    })

    // provide endorsement counts as signal derived from assertion endorsement connection
    this.endorsementCounts = computed(() => {
      const assertion = this.assertion()
      let counts = {
        active: 0,
        requiresReview: 0,
        revoked: 0,
      }
      if (assertion) {
        const endorsements = assertion.endorsements.nodes
        counts = {
          active: endorsements.filter((node) => node.status === 'ACTIVE')
            .length,
          requiresReview: endorsements.filter(
            (node) => node.status === 'REQUIRES_REVIEW'
          ).length,
          revoked: endorsements.filter((node) => node.status === 'REVOKED')
            .length,
        }
      }
      return counts
    })

    // provide flaggable counts as signal derived from flag & endorsement counts
    this.flaggableCounts = computed(() => {
      const assertion = this.assertion()
      let counts = {
        flags: 0,
        endorsements: 0,
      }
      if (assertion) {
        counts = {
          flags: assertion.flags.totalCount,
          endorsements: this.endorsementCounts().active,
        }
      }
      return counts
    })

    // configure tabs
    this.tabConfig = computed(() => {
      const assertion = this.assertion()
      let tabConfig = [...this.DEFAULT_TAB_CONFIG]
      if (assertion) {
        tabConfig = this.DEFAULT_TAB_CONFIG.map((tab) => {
          if (tab.tabLabel === 'Revisions') {
            return {
              badgeCount: assertion.revisions.totalCount,
              badgeColor: '#4096ff', // blue-5
              ...tab,
            }
          } else if (tab.tabLabel === 'Flags') {
            return {
              badgeCount: assertion.flags.totalCount,
              badgeColor: '#4096ff', // blue-5
              ...tab,
            }
          } else if (tab.tabLabel === 'Comments') {
            return {
              badgeCount: assertion.comments.totalCount,
              badgeColor: '#4096ff', // blue-5
              ...tab,
            }
          } else if (tab.tabLabel === 'Endorsements') {
            let count: Maybe<number> =
              this.endorsementCounts().active +
              this.endorsementCounts().requiresReview
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
      }
      return tabConfig
    })

    this.errors = signal<string[]>([])
    this.successMessage = signal<Maybe<string>>(undefined)

    // provide action and user input event emitters
    this.onRevert$ = new Subject<true | string[]>()
    this.onErrorBannerClose$ = new Subject<Maybe<string>>()
    this.onSuccessBannerClose$ = new Subject<void>()
    this.onModeration$ = new Subject<EvidenceStatus | string[]>()
    this.onEndorsement$ = new Subject<EndorsementResult>()

    // handle action and user input events
    this.onRevert$.pipe(untilDestroyed(this)).subscribe((revertEvent) => {
      if (revertEvent === true) {
        this.errors.set([])
        this.successMessage.set(
          `Assertion AID${this.assertionId} reverted to Submitted status.`
        )
        this.queryRef.refetch()
      } else {
        this.errors.set(revertEvent)
        this.successMessage.set(undefined)
      }
    })

    this.onModeration$
      .pipe(untilDestroyed(this))
      .subscribe((moderationEvent) => {
        if (Array.isArray(moderationEvent)) {
          this.errors.set(moderationEvent)
          this.successMessage.set(undefined)
        } else {
          this.errors.set([])
          this.successMessage.set(moderationEvent)
        }
      })

    this.onErrorBannerClose$.pipe(untilDestroyed(this)).subscribe((err) => {
      if (err) {
        this.errors.set(this.errors().filter((e) => e != err))
      }
    })

    this.onSuccessBannerClose$.pipe(untilDestroyed(this)).subscribe(() => {
      this.successMessage.set(undefined)
    })

    this.onEndorsement$
      .pipe(untilDestroyed(this))
      .subscribe((endorsementEvent) => {
        if (endorsementEvent.success) {
          switch (endorsementEvent.action) {
            case 'endorse':
              this.successMessage.set('Assertion endorsed successfully')
              break
            case 'revoke':
              this.successMessage.set('Successfully revoked endorsement')
              break
          }
        }
      })
  } // end constructor
}

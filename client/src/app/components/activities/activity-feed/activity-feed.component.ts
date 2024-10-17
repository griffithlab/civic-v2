import {
  ChangeDetectionStrategy,
  Component,
  effect,
  Inject,
  InjectionToken,
  Injector,
  input,
  NgZone,
  Signal,
} from '@angular/core'
import {
  ActivityFeedCounts,
  ActivityFeedFilterOptions,
  ActivityFeedFilters,
  ActivityFeedScope,
  ActivityFeedSettings,
  FeedQueryEvent,
  FeedQueryFetchMoreEvent,
  FeedQueryRefetchEvent,
  FetchParams,
} from '@app/components/activities/activity-feed/activity-feed.types'
import {
  feedDefaultFilters,
  feedDefaultScope,
  feedDefaultSettings,
  feedFilterOptionDefaults,
  scrollerDevSettings,
  scrollerSettings,
} from '@app/components/activities/activity-feed/activity-feed.config'
import {
  configureScrollerRoutines,
  ScrollerState,
  ScrollerStateService,
} from '@app/components/activities/activity-feed/feed-scroll-service/feed-scroll.service'
import {
  combineLatest,
  filter,
  interval,
  map,
  merge,
  Observable,
  of,
  skipUntil,
  Subject,
  switchMap,
  take,
  timer,
  withLatestFrom,
} from 'rxjs'
import {
  CvcActivityFeedItem,
  FeedItemToggle,
} from '@app/components/activities/activity-feed/feed-item/feed-item.component'
import {
  connectionToFeedCounts,
  connectionToFilterOptions,
  queryParamsToQueryVariables,
} from '@app/components/activities/activity-feed/activity-feed.functions'
import {
  distinctUntilChanged,
  mapTo,
  shareReplay,
  skip,
  startWith,
} from 'rxjs/operators'
import { ApolloQueryResult } from '@apollo/client/core'
import {
  ActivityFeedGQL,
  ActivityFeedQuery,
  ActivityFeedQueryVariables,
  ActivityInterfaceConnection,
  ActivityInterfaceEdge,
  Maybe,
  PageInfo,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import {
  Datasource,
  IAdapter,
  IDatasource,
  UiScrollModule,
} from 'ngx-ui-scroll'
import { toSignal } from '@angular/core/rxjs-interop'
import { pluck } from 'rxjs-etc/operators'
import { isNonNulled } from 'rxjs-etc'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module'
import { CvcActivityFeedCounts } from '@app/components/activities/activity-feed/feed-counts/feed-counts.component'
import { CvcActivityFeedSettingsButton } from '@app/components/activities/activity-feed/feed-settings/feed-settings.component'
import { CvcActivityFeedFilterSelects } from '@app/components/activities/activity-feed/feed-filters/feed-filters.component'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { CommonModule } from '@angular/common'
import { NzResultModule } from 'ng-zorro-antd/result'
import { tag } from 'rxjs-spy/operators'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'

export const FEED_SCROLL_SERVICE_TOKEN =
  new InjectionToken<ScrollerStateService>('ActivityFeedScrollerState')
@Component({
  selector: 'cvc-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrl: './activity-feed.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    UiScrollModule,
    NzAlertModule,
    NzCardModule,
    NzGridModule,
    NzSpaceModule,
    NzTagModule,
    NzSpinModule,
    NzResultModule,
    NzButtonModule,
    NzIconModule,
    CvcActivityFeedItem,
    CvcAutoHeightDivModule,
    CvcActivityFeedCounts,
    CvcActivityFeedSettingsButton,
    CvcActivityFeedFilterSelects,
  ],
  providers: [
    {
      provide: FEED_SCROLL_SERVICE_TOKEN,
      useFactory: (zone: NgZone) => {
        return new ScrollerStateService(zone)
      },
      deps: [NgZone],
    },
  ],
  animations: [],
})
export class CvcActivityFeed {
  // INPUTS
  cvcShowFilters = input<boolean>(true)
  cvcSettings = input<ActivityFeedSettings>(feedDefaultSettings)
  cvcFilters = input<ActivityFeedFilters>(feedDefaultFilters)
  cvcScope = input<ActivityFeedScope>(feedDefaultScope)
  cvcTitle = input<string>('Activity Feed')
  cvcCheckInterval = input<number>(0)

  // SOURCE STREAMS
  onSettingChange$: Subject<ActivityFeedSettings>
  onFilterChange$: Subject<ActivityFeedFilters>
  onToggleItem$: Subject<FeedItemToggle>

  // INTERMEDIATE STREAMS
  poll$: Subject<FetchParams>
  fetchMore$: Subject<FetchParams>
  refreshChange$: Observable<FeedQueryRefetchEvent>
  result$: Observable<ApolloQueryResult<ActivityFeedQuery>>
  init$: Subject<void>
  queryType$: Subject<'refetch' | 'fetchMore'>
  onQueryComplete$: Subject<boolean>
  edge$: Observable<ActivityInterfaceEdge[]>
  pageInfo$: Observable<PageInfo>
  onAllRowsFetched$: Subject<boolean>

  // PRESENTATION SIGNALS
  refetchLoading: Signal<boolean> // loading state for refetch, shows spinner over feed
  moreLoading: Signal<boolean> // loading state for fetchMore, shows spinner in card header
  zeroRows: Signal<boolean> // true when no rows are returned from query
  counts: Signal<Maybe<ActivityFeedCounts>>
  feedFilterOptions: Signal<ActivityFeedFilterOptions>
  scroller: Signal<ScrollerState>
  allRowsFetched: Signal<boolean>

  // REFERENCES
  queryRef?: QueryRef<ActivityFeedQuery, ActivityFeedQueryVariables>
  scrollDatasource?: IDatasource<ActivityInterfaceEdge>
  scrollAdapter?: IAdapter<ActivityInterfaceEdge>
  scrollerRoutines: any

  constructor(
    private gql: ActivityFeedGQL,
    private injector: Injector,
    @Inject(FEED_SCROLL_SERVICE_TOKEN)
    private scrollerState: ScrollerStateService
  ) {
    this.onSettingChange$ = new Subject()
    this.onFilterChange$ = new Subject()
    this.onToggleItem$ = new Subject<FeedItemToggle>()

    this.poll$ = new Subject()
    this.fetchMore$ = new Subject()
    this.init$ = new Subject()
    this.queryType$ = new Subject()
    this.pageInfo$ = new Observable()
    this.onQueryComplete$ = new Subject()
    this.onAllRowsFetched$ = new Subject()

    this.scrollerRoutines = configureScrollerRoutines(this, this.scrollerState)
    this.scroller = this.scrollerState.state.asReadonly()
    this.allRowsFetched = toSignal(this.onAllRowsFetched$, {
      initialValue: false,
    })

    this.refreshChange$ = combineLatest([
      this.onSettingChange$,
      this.onFilterChange$,
    ]).pipe(
      map(([settings, filters]) => {
        const queryVars = queryParamsToQueryVariables({
          settings: settings,
          filters: filters,
        })
        return <FeedQueryRefetchEvent>{
          type: 'refetch',
          query: queryVars,
        }
      })
    )

    const fetchChange$ = merge(this.fetchMore$, this.poll$).pipe(
      map((fetchParams) => {
        return <FeedQueryFetchMoreEvent>{
          type: 'fetchMore',
          fetch: fetchParams,
        }
      })
    )

    this.result$ = this.init$.pipe(
      switchMap(() => merge(this.refreshChange$, fetchChange$)),
      switchMap((event: FeedQueryEvent) => {
        this.queryType$.next(event.type)
        if (!this.queryRef) {
          this.queryRef = this.gql.watch(event.query)
        } else {
          if (event.type === 'refetch') {
            this.queryRef.refetch(event.query).then((data) => {
              this.onQueryComplete$.next(true)
              if (this.scrollAdapter) this.scrollAdapter.reload()
            })
          } else if (event.type === 'fetchMore') {
            if (this.queryRef) {
              this.queryRef
                .fetchMore({
                  variables: event.fetch,
                })
                .then((data) => {
                  this.onQueryComplete$.next(true)
                  console.log('fetchMore complete', data)
                })
            }
          }
        }
        return this.queryRef.valueChanges
      }),
      shareReplay(1)
    )

    this.refetchLoading = toSignal(
      this.result$.pipe(
        pluck('loading'),
        withLatestFrom(this.queryType$),
        filter(([_loading, queryType]) => queryType === 'refetch'),
        map(([loading]) => loading)
        // tag('refetchLoading')
      ),
      { initialValue: false }
    )
    // TODO: figure out why moreLoading is always false in template
    this.moreLoading = toSignal(
      this.result$.pipe(
        pluck('loading'),
        withLatestFrom(this.queryType$),
        filter(([_loading, queryType]) => queryType === 'fetchMore'),
        map(([loading]) => loading)
        // tag('moreLoading')
      ),
      { initialValue: false }
    )

    const connection$ = this.result$.pipe(
      pluck('data', 'activities'),
      filter(isNonNulled),
      shareReplay(1)
    )

    this.pageInfo$ = connection$.pipe(pluck('pageInfo'), filter(isNonNulled))

    this.counts = toSignal(
      connection$.pipe(
        map((connection) => {
          return connectionToFeedCounts(
            connection as ActivityInterfaceConnection
          )
        })
      ),
      { initialValue: undefined }
    )

    this.feedFilterOptions = toSignal(
      connection$.pipe(
        map((connection) => {
          return connectionToFilterOptions(
            connection as ActivityInterfaceConnection
          )
        })
      ),
      { initialValue: feedFilterOptionDefaults }
    )

    this.allRowsFetched = toSignal(
      this.onAllRowsFetched$.pipe(tag('onAllRowsFetched$')),
      // connection$.pipe(
      //   map((connection) => {
      //     return connection.pageInfo.hasNextPage
      //   })
      // ),
      { initialValue: false }
    )

    this.edge$ = this.result$.pipe(
      pluck('data', 'activities'),
      filter(isNonNulled),
      map((connection) => connection.edges as ActivityInterfaceEdge[])
      // tag('edge$ ++++++++++++++')
    )

    // kick off initial query
    this.init$.next()

    // initialize scroller datasource after initial query completes
    this.edge$.pipe(take(1)).subscribe(() => {
      this.configureDatasource()
      this.configureAdapter()
    })

    this.zeroRows = toSignal(
      this.result$.pipe(
        map((result) => result.data?.activities?.edges.length === 0),
        shareReplay(1)
      ),
      { initialValue: false }
    )
  } // end constructor()

  configureDatasource(): void {
    this.scrollDatasource = new Datasource<ActivityInterfaceEdge>({
      get: (index: number, count: number) => {
        return of({ index: index, count: count }).pipe(
          withLatestFrom(this.edge$, this.pageInfo$),
          switchMap(([params, edges, pageInfo]) => {
            const { index, count } = params
            const edgesRequired = index + count // total edges needed to satisfy request
            const hasNextPage = pageInfo.hasNextPage

            // at top of results, all rows loaded & cached, more edges requested than available
            if (
              index === 0 &&
              hasNextPage === false &&
              edges.length <= edgesRequired
            ) {
              return of(edges)
            }

            // edges cached, return slice of current array
            if (edges.length >= edgesRequired) {
              return of(edges.slice(index, edgesRequired))
            } else {
              // requested edges not cached, fetchMore to retrieve them
              const queryVars = {
                first: count,
                after: edges[index - 1].cursor,
              }
              // reset query complete
              this.onQueryComplete$.next(false)

              // issue query!
              this.fetchMore$.next(queryVars)
              return this.edge$.pipe(
                skipUntil(this.onQueryComplete$), // wait until query complete (called from result$),
                map((edges) => edges.slice(index, edgesRequired))
                // tag('configureDatasource.get() ++++++++++++++')
              )
            }
          })
        )
      },
      settings: scrollerSettings,
      devSettings: scrollerDevSettings,
    })
  }

  configureAdapter(): void {
    this.scrollAdapter = this.scrollDatasource?.adapter
    // force scroller check when toggled items change
    effect(
      () => {
        const toggledItems = this.scroller().toggledItems
        this.scrollAdapter?.check()
      },
      { injector: this.injector }
    )
  }
}

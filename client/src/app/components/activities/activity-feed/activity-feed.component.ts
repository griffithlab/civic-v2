import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module'
import {
  ActivityFeedGQL,
  ActivityFeedQuery,
  ActivityFeedQueryVariables,
  ActivityInterfaceEdge,
  Maybe,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { LetDirective, PushPipe } from '@ngrx/component'
import { QueryRef } from 'apollo-angular'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import {
  Datasource,
  IAdapter,
  IDatasource,
  UiScrollModule,
} from 'ngx-ui-scroll'
import {
  asyncScheduler,
  BehaviorSubject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
  from,
  map,
  merge,
  Observable,
  of,
  Subject,
  switchMap,
  take,
  tap,
  withLatestFrom,
} from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/dist/esm/operators'
import { CvcActivityFeedCounts } from '@app/components/activities/activity-feed/feed-counts/feed-counts.component'
import { CvcActivityFeedFilterSelects } from '@app/components/activities/activity-feed/feed-filters/feed-filters.component'
import {
  CvcActivityFeedItem,
  FeedDetailToggle,
} from '@app/components/activities/activity-feed/feed-item/feed-item.component'
import { CvcActivityFeedSettingsButton } from '@app/components/activities/activity-feed/feed-settings/feed-settings.component'
import {
  feedDefaultFilters,
  feedDefaultSettings,
  feedFilterOptionDefaults,
  scrollerDevSettings,
  scrollerSettings,
} from './activity-feed.config'
import { queryParamsToVariables } from './activity-feed.functions'
import {
  ActivityFeedCounts,
  ActivityFeedFilterOptions,
  ActivityFeedFilters,
  ActivityFeedQueryParams,
  ActivityFeedScope,
  ActivityFeedSettings,
  FetchMoreParams,
} from './activity-feed.types'
import { ApolloQueryResult } from '@apollo/client/core'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { tag } from 'rxjs-spy/operators'
import { shareReplay, throttleTime } from 'rxjs/operators'

@UntilDestroy()
@Component({
  selector: 'cvc-activity-feed',
  standalone: true,
  imports: [
    CommonModule,
    PushPipe,
    LetDirective,
    NzGridModule,
    NzCardModule,
    NzSpinModule,
    NzTagModule,
    UiScrollModule,
    CvcActivityFeedCounts,
    CvcActivityFeedSettingsButton,
    CvcActivityFeedFilterSelects,
    CvcActivityFeedItem,
    CvcAutoHeightDivModule,
    NzIconModule,
    NzSpaceModule,
  ],
  templateUrl: './activity-feed.component.html',
  styleUrl: './activity-feed.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityFeed implements OnInit {
  // INPUTS
  cvcTitle = input<string>('Activity Feed')
  cvcScope = input<ActivityFeedScope>()
  cvcSettings = input<ActivityFeedSettings>(feedDefaultSettings)
  cvcFilters = input<ActivityFeedFilters>(feedDefaultFilters)
  cvcShowFilters = input<boolean>(true)
  cvcPollFeed = input<boolean>(false)

  // SOURCE STREAMS
  feedSetting$: Subject<ActivityFeedSettings> // initial settings, e.g. scope, context displays
  feedFilter$: Subject<ActivityFeedFilters> // activity attribute filters
  init$: Subject<void> // initial query trigger, called from scroller DataSource

  // INTERMEDIATE STREAMS
  result$: Observable<ApolloQueryResult<ActivityFeedQuery>>
  edge$: Observable<ActivityInterfaceEdge[]>
  onToggleItem$: Subject<FeedDetailToggle> // item detail toggle event from feed-item
  toggledItem$: BehaviorSubject<Set<number>> // set of item ids with details toggled
  onQueryType$: Subject<'refetch' | 'fetchMore'>
  // queryLoading$: Observable<boolean>
  // scrollerLoading$: BehaviorSubject<boolean>

  // PRESENTATION SIGNALS
  edges: Signal<ActivityInterfaceEdge[]> // signal for synchronous access to all loaded rows
  refetchLoading: Signal<boolean> // loading state for refetch, shows spinner over feed
  moreLoading: Signal<boolean> // loading state for fetchMore, shows spinner in card header
  errors: WritableSignal<any>
  counts: WritableSignal<Maybe<ActivityFeedCounts>>
  feedFilterOptions: WritableSignal<ActivityFeedFilterOptions>

  // SERVICE REFERENCES
  queryRef?: QueryRef<ActivityFeedQuery, ActivityFeedQueryVariables>
  scrollDatasource?: IDatasource<ActivityInterfaceEdge>
  scrollAdapter?: IAdapter<ActivityInterfaceEdge>

  constructor(private gql: ActivityFeedGQL) {
    this.feedSetting$ = new Subject<ActivityFeedSettings>()
    this.feedFilter$ = new Subject<ActivityFeedFilters>()
    this.init$ = new Subject<void>()
    this.onToggleItem$ = new Subject<FeedDetailToggle>()
    this.onQueryType$ = new Subject<'refetch' | 'fetchMore'>()

    this.refetchLoading = signal<boolean>(false)
    this.moreLoading = signal<boolean>(false)
    this.errors = signal<any>(false)
    this.counts = signal<Maybe<ActivityFeedCounts>>(undefined)
    this.feedFilterOptions = signal<ActivityFeedFilterOptions>(
      feedFilterOptionDefaults
    )
    this.toggledItem$ = new BehaviorSubject<Set<number>>(new Set())

    this.onToggleItem$
      .pipe(
        distinctUntilChanged(
          (a, b) => a.id === b.id && a.showDetails === b.showDetails
        ),
        withLatestFrom(this.toggledItem$),
        filter(
          // filter out toggles for items not in the current set
          ([toggle, toggledIds]) =>
            toggle.showDetails || toggledIds.has(toggle.id)
        ),
        tap(([toggle, toggledIds]) => {
          // update set of toggled item ids
          toggle.showDetails
            ? toggledIds.add(toggle.id)
            : toggledIds.delete(toggle.id)
          // emit updated set for use in next toggle event
          this.toggledItem$.next(toggledIds)
          // get scroller to recheck item heights
          this.scrollAdapter!.check()
        }),
        untilDestroyed(this)
      )
      .subscribe()

    // combine prefs, filters updates into a fetch query
    //
    // feedSetting$ and feedFilter$ are the main input streams,
    // emitted by filter & setting component during initializtion, and in resonse
    // to user activity. init$ is a trigger to start the initial query,
    // emitted from the scroller datasource
    this.result$ = combineLatest([
      this.init$,
      this.feedSetting$,
      this.feedFilter$,
    ]).pipe(
      map(([_init, settings, filters]) => {
        const params = <ActivityFeedQueryParams>{
          settings: settings,
          filters: filters,
        }
        return queryParamsToVariables(
          params,
          this.cvcScope(),
          this.cvcShowFilters(),
          false
        )
      }),
      switchMap((queryVars) => {
        this.onQueryType$.next('refetch')
        if (!this.queryRef) {
          this.queryRef = this.gql.watch(queryVars)
        } else {
          this.queryRef.refetch(queryVars).then(() => {
            if (this.scrollAdapter) {
              // clear item buffer, reset viewport params, start
              // rendering items from new query
              this.scrollAdapter.reload()
            }
          })
        }
        return this.queryRef.valueChanges
      }),
      shareReplay(1)
    )
    const loading$ = this.result$.pipe(
      pluck('loading'),
      withLatestFrom(this.onQueryType$)
    )
    this.refetchLoading = toSignal(
      loading$.pipe(
        filter(([_loading, queryType]) => queryType === 'refetch'),
        map(([loading]) => loading)
      ),
      { initialValue: false }
    )
    this.moreLoading = toSignal(
      loading$.pipe(
        filter(([_loading, queryType]) => queryType === 'fetchMore'),
        map(([loading]) => loading)
      ),
      { initialValue: false }
    )

    this.edge$ = this.result$.pipe(
      pluck('data', 'activities'),
      filter(isNonNulled),
      tap((connection) => {
        this.counts.set(<ActivityFeedCounts>{
          total: connection.totalCount,
          unfiltered: connection.unfilteredCount,
          page: connection.pageCount,
          rows: connection.edges.length,
        })
        this.feedFilterOptions.set(<ActivityFeedFilterOptions>{
          uniqueParticipants: connection.uniqueParticipants ?? [],
          participatingOrganizations:
            connection.participatingOrganizations ?? [],
          activityTypes: connection.activityTypes ?? [],
          subjectTypes: connection.subjectTypes ?? [],
        })
      }),
      map((connection) => connection.edges as ActivityInterfaceEdge[])
    )

    // provide edges signal for synchronous access
    // in scrollDatasource
    this.edges = toSignal(this.edge$, { initialValue: [] })

    // initialize scroller datasource only after the
    // initial query results available
    this.edge$.pipe(take(1)).subscribe((edges) => {
      this.configureDatasource()
      this.configureAdapter()
    })

    // kick off initial query
    this.init$.next()
  }
  ngOnInit(): void {}

  configureDatasource(): void {
    this.scrollDatasource = new Datasource<ActivityInterfaceEdge>({
      get: (index: number, count: number) => {
        const edges = this.edges()
        // return rows from cached set, or fetch more rows
        if (edges.length >= index + count) {
          // return observable of requested rows
          return of(edges.slice(index, index + count))
        } else {
          // issue fetchMore query to satisfy requested row set
          const queryVars = {
            first: count,
            after: edges[index - 1].cursor,
          }
          this.onQueryType$.next('fetchMore')
          // return fetchMore result, converted to observable from promise
          return from(this.queryRef!.fetchMore({ variables: queryVars })).pipe(
            // tap(() => this.moreLoading.set(false)),
            map((result) => result.data.activities.edges)
          )
        }
      },
      settings: scrollerSettings,
      devSettings: scrollerDevSettings,
    })
  }

  configureAdapter(): void {
    this.scrollAdapter = this.scrollDatasource?.adapter
  }
}

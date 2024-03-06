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
  BehaviorSubject,
  combineLatest,
  distinctUntilChanged,
  filter,
  from,
  map,
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
  feedScrollBuffer,
} from './activity-feed.config'
import {
  feedScopeToModeAttributes,
  filterParamsToQueryAttributes,
} from './activity-feed.functions'
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

enum SizeStrategy {
  Average = 'average',
  Constant = 'constant',
  Frequent = 'frequent',
}
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
  feedSetting$: Subject<ActivityFeedSettings>
  feedFilter$: Subject<ActivityFeedFilters>
  fetchMore$: Subject<FetchMoreParams>
  init$: Subject<void>

  // INTERMEDIATE STREAMS
  result$: Observable<ApolloQueryResult<ActivityFeedQuery>>
  edge$: Observable<ActivityInterfaceEdge[]>
  onToggleItem$: Subject<FeedDetailToggle>

  // PRESENTATION SIGNALS
  edges: Signal<ActivityInterfaceEdge[]>
  refetchLoading: Signal<boolean>
  moreLoading: Signal<boolean>
  errors: WritableSignal<any>
  counts: WritableSignal<Maybe<ActivityFeedCounts>>
  feedFilterOptions: WritableSignal<ActivityFeedFilterOptions>
  toggledItem$: BehaviorSubject<Set<number>>

  // SERVICE REFERENCES
  queryRef?: QueryRef<ActivityFeedQuery, ActivityFeedQueryVariables>
  scrollDatasource?: IDatasource<ActivityInterfaceEdge>
  scrollAdapter?: IAdapter<ActivityInterfaceEdge>

  constructor(private gql: ActivityFeedGQL) {
    this.feedSetting$ = new Subject<ActivityFeedSettings>()
    this.feedFilter$ = new Subject<ActivityFeedFilters>()
    this.init$ = new Subject<void>()
    this.fetchMore$ = new Subject<FetchMoreParams>()
    this.onToggleItem$ = new Subject<FeedDetailToggle>()

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
          ([toggle, toggledIds]) =>
            toggle.showDetails || toggledIds.has(toggle.id)
        ),
        tap(([toggle, toggledIds]) => {
          toggle.showDetails
            ? toggledIds.add(toggle.id)
            : toggledIds.delete(toggle.id)
          this.toggledItem$.next(toggledIds)
          this.scrollAdapter
            ?.check()
            .then((result) => console.log('vscroll check result: ', result))
        }),
        untilDestroyed(this)
      )
      .subscribe()

    // combine prefs, filters updates into a fetch query
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
        return this.queryParamsToVariables(params)
      }),
      switchMap((queryVars) => {
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
      })
      // tap((result) => {
      //   this.refetchLoading.set(result.loading)
      // })
    )
    this.refetchLoading = toSignal(
      this.result$.pipe(pluck('loading'), distinctUntilChanged()),
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
        // return rows from current fetched set if requested
        // all requested rows available
        if (edges.length >= index + count) {
          // return observable of requested rows
          return of(edges.slice(index, index + count))
        } else {
          // or issue fetchMore query to satisfy requested row set
          const queryVars = {
            first: count,
            after: edges[index].cursor,
          }
          // this.moreLoading.set(true)
          // return fetchMore result, converted to observable from promise
          return from(this.queryRef!.fetchMore({ variables: queryVars })).pipe(
            // tap(() => this.moreLoading.set(false)),
            map((result) => result.data.activities.edges)
          )
        }
      },
      settings: {
        bufferSize: feedScrollBuffer, // # of rows in fetchMore requests
        startIndex: 0, // start row display at 0 index
        minIndex: 0, // no negative rows
        itemSize: 48,
        sizeStrategy: SizeStrategy.Frequent,
      },
      devSettings: {
        debug: true,
        immediateLog: true,
        cacheData: true,
      },
    })
  }

  configureAdapter(): void {
    this.scrollAdapter = this.scrollDatasource?.adapter
    // watch init$ (for debug, can be removed)
    if (this.scrollAdapter) {
      const adapter = this.scrollAdapter
      // DEBUG
      adapter.init$.pipe(take(1)).subscribe(() => {
        console.log('ngx-ui-scroll initialized!')
      })
      // adapter.isLoading$
      //   .pipe(debounceTime(100), untilDestroyed(this))
      //   .subscribe((loading) => {
      //     console.log('vscroll isLoading: ', loading)
      //   })
      // adapter.loopPending$.subscribe((event) => {
      //   console.log('vscroll loopPending: ', event)
      // })
      // adapter.firstVisible$.subscribe((item) => {
      //   console.log('vscroll firstVisible: ', item)
      // })
      // adapter.lastVisible$.subscribe((item) => {
      //   console.log('vscroll lastVisible: ', item)
      // })
      // adapter.bof$.subscribe((event) => {
      //   console.log('vscroll bof: ', event)
      // })
      // adapter.eof$.subscribe((event) => {
      //   console.log('vscroll eof: ', event)
      // })
      // interface IReactiveOverride<Item = unknown> {
      //   init$: Subject<boolean>;
      //   isLoading$: Subject<boolean>;
      //   loopPending$: Subject<boolean>;
      //   firstVisible$: BehaviorSubject<IAdapterItem<Item>>;
      //   lastVisible$: BehaviorSubject<IAdapterItem<Item>>;
      //   bof$: Subject<boolean>;
      //   eof$: Subject<boolean>;
      // }
    }
  }

  queryParamsToVariables(
    params: ActivityFeedQueryParams
  ): ActivityFeedQueryVariables {
    // showFilters is a required query var
    let queryVars: ActivityFeedQueryVariables = {
      showFilters: this.cvcShowFilters(),
      requestDetails: false,
    }
    const pageSize = params.settings!.pageSize
    const modeAttrs = feedScopeToModeAttributes(this.cvcScope())
    const filterVars = filterParamsToQueryAttributes(params.filters)
    queryVars = {
      ...queryVars,
      first: pageSize,
      ...modeAttrs,
      ...filterVars,
    }
    return queryVars
  }
}

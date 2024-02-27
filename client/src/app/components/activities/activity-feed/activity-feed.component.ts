import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
  WritableSignal,
  input,
  signal,
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module'
import {
  ActivityFeedGQL,
  ActivityFeedQuery,
  ActivityFeedQueryVariables,
  ActivityInterfaceConnection,
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
  Observable,
  Subject,
  combineLatest,
  debounceTime,
  filter,
  from,
  map,
  of,
  switchMap,
  take,
  tap,
  withLatestFrom,
} from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { pluck } from 'rxjs-etc/dist/esm/operators'
import { tag } from 'rxjs-spy/operators'
import { CvcActivityFeedCounts } from './activity-feed-counts/activity-feed-counts.component'
import { CvcActivityFeedFilterSelects } from './activity-feed-filters/activity-feed-filters.component'
import { CvcActivityFeedItem } from './activity-feed-item/activity-feed-item.component'
import { CvcActivityFeedSettingsButton } from './activity-feed-settings/activity-feed-settings.component'
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
  reloadScroller$?: Subject<void>

  // PRESENTATION SIGNALS
  edges: Signal<ActivityInterfaceEdge[]>
  refetchLoading: WritableSignal<boolean>
  moreLoading: WritableSignal<boolean>
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
    this.fetchMore$ = new Subject<FetchMoreParams>()

    this.refetchLoading = signal<boolean>(false)
    this.moreLoading = signal<boolean>(false)
    this.errors = signal<any>(false)
    this.counts = signal<Maybe<ActivityFeedCounts>>(undefined)
    this.feedFilterOptions = signal<ActivityFeedFilterOptions>(
      feedFilterOptionDefaults
    )

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
      }),
      tap((result) => {
        this.refetchLoading.set(result.loading)
      })
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
          this.moreLoading.set(true)
          // return fetchMore result, converted to observable from promise
          return from(this.queryRef!.fetchMore({ variables: queryVars })).pipe(
            tap(() => this.moreLoading.set(false)),
            map((result) => result.data.activities.edges)
          )
        }
      },
      settings: {
        bufferSize: feedScrollBuffer, // # of rows in fetchMore requests
        startIndex: 0, // start row display at 0 index
        minIndex: 0, // no negative rows
      },
    })
  }

  configureAdapter(): void {
    this.scrollAdapter = this.scrollDatasource?.adapter
    // watch init$ (for debug, can be removed)
    if (this.scrollAdapter) {
      this.scrollAdapter.init$.pipe(take(1)).subscribe(() => {
        console.log('ngx-ui-scroll initialized!')
      })
      this.scrollAdapter.isLoading$
        .pipe(debounceTime(100), untilDestroyed(this))
        .subscribe((loading) => {
          console.log('vscroll isLoading: ', loading)
        })
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

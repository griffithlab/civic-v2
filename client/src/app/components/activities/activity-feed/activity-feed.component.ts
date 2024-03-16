import { CommonModule } from '@angular/common'
import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  OnInit,
  Self,
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
  EventFeedMode,
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
  catchError,
  combineLatest,
  distinctUntilChanged,
  filter,
  from,
  iif,
  map,
  merge,
  mergeWith,
  Observable,
  of,
  share,
  skipUntil,
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
  feedDefaultScope,
  feedDefaultSettings,
  feedFilterOptionDefaults,
  scrollerDevSettings,
  scrollerSettings,
} from './activity-feed.config'
import { queryParamsToQueryVariables } from './activity-feed.functions'
import {
  ActivityFeedCounts,
  ActivityFeedFilterOptions,
  ActivityFeedFilters,
  ActivityFeedQueryParams,
  ActivityFeedScope,
  ActivityFeedSettings,
  FeedQueryEvent,
  FeedQueryType,
  FetchParams,
} from './activity-feed.types'
import { ApolloQueryResult } from '@apollo/client/core'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { shareReplay } from 'rxjs/operators'
import { tag } from 'rxjs-spy/operators'
import { FeedScrollService } from '@app/components/activities/activity-feed/feed-scroll-service/feed-scroll.service'

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
  providers: [FeedScrollService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityFeed {
  // INPUTS
  cvcTitle = input<string>('Activity Feed')
  cvcScope = input<ActivityFeedScope>(feedDefaultScope)
  cvcSettings = input<ActivityFeedSettings>(feedDefaultSettings)
  cvcFilters = input<ActivityFeedFilters>(feedDefaultFilters)
  cvcShowFilters = input<boolean>(true)
  cvcPollFeed = input<boolean>(false)

  // SOURCE STREAMS
  onSettingChange$: Subject<ActivityFeedSettings> // initial settings, e.g. scope, context displays
  onFilterChange$: Subject<ActivityFeedFilters> // activity attribute filters
  onToggleItem$: Subject<FeedDetailToggle> // item detail toggle event from feed-item

  // INTERMEDIATE STREAMS
  init$: Subject<void> // initial query trigger, called from scroller DataSource
  poll$: Subject<FetchParams>
  fetchMore$: Subject<FetchParams>
  queryType$: Subject<'refetch' | 'fetchMore'>
  result$: Observable<ApolloQueryResult<ActivityFeedQuery>>
  edge$: Observable<ActivityInterfaceEdge[]>
  toggledItem$: BehaviorSubject<Set<number>> // set of item ids with details toggled
  onQueryComplete$: Subject<boolean>

  // PRESENTATION SIGNALS
  $refetchLoading: Signal<boolean> // loading state for refetch, shows spinner over feed
  $moreLoading: Signal<boolean> // loading state for fetchMore, shows spinner in card header
  $errors: WritableSignal<any>
  $counts: Signal<Maybe<ActivityFeedCounts>>
  $feedFilterOptions: Signal<ActivityFeedFilterOptions>

  // SERVICE REFERENCES
  queryRef?: QueryRef<ActivityFeedQuery, ActivityFeedQueryVariables>
  scrollDatasource?: IDatasource<ActivityInterfaceEdge>
  scrollAdapter?: IAdapter<ActivityInterfaceEdge>

  constructor(
    private gql: ActivityFeedGQL,
    private elementRef: ElementRef,
    @Self() private scrollService: FeedScrollService
  ) {
    this.init$ = new Subject<void>()
    this.onSettingChange$ = new Subject<ActivityFeedSettings>()
    this.onFilterChange$ = new Subject<ActivityFeedFilters>()
    this.poll$ = new Subject<FetchParams>()
    this.fetchMore$ = new Subject<FetchParams>()
    this.onToggleItem$ = new Subject<FeedDetailToggle>()
    this.queryType$ = new Subject<FeedQueryType>()
    this.onQueryComplete$ = new Subject<boolean>()
    this.$moreLoading = signal<boolean>(false)
    this.$errors = signal<any>(false)
    this.$counts = signal<Maybe<ActivityFeedCounts>>(undefined)
    this.$feedFilterOptions = signal<ActivityFeedFilterOptions>(
      feedFilterOptionDefaults
    )

    const refreshChange$ = combineLatest([
      this.onSettingChange$,
      this.onFilterChange$,
    ]).pipe(
      map(([settings, filters]) => {
        return <FeedQueryEvent>{
          type: 'refetch',
          query: {
            settings: settings,
            filters: filters,
          },
        }
      })
    )

    const fetchChange$ = merge(this.fetchMore$, this.poll$).pipe(
      map((fetch) => {
        return <FeedQueryEvent>{
          type: 'fetchMore',
          fetch: fetch,
        }
      })
    )

    this.result$ = this.init$.pipe(
      switchMap(() => merge(refreshChange$, fetchChange$)),
      switchMap((event) => {
        this.queryType$.next(event.type)
        if (!this.queryRef) {
          const queryVars = queryParamsToQueryVariables(event.query)
          this.queryRef = this.gql.watch(queryVars)
        } else {
          if (event.type === 'refetch') {
            const queryVars = queryParamsToQueryVariables(event.query)
            this.queryRef.refetch(queryVars).then((data) => {
              console.log('refetch complete', data)
              this.onQueryComplete$.next(true)
              this.scrollAdapter!.reload()
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
      catchError((error) => {
        console.error('query error', error)
        return of(error)
      }),
      shareReplay(1)
    )

    this.$refetchLoading = toSignal(
      this.result$.pipe(
        pluck('loading'),
        withLatestFrom(this.queryType$),
        filter(([_loading, queryType]) => queryType === 'refetch'),
        map(([loading]) => loading)
      ),
      { initialValue: false }
    )

    this.$moreLoading = toSignal(
      this.result$.pipe(
        pluck('loading'),
        withLatestFrom(this.queryType$),
        filter(([_loading, queryType]) => queryType === 'fetchMore'),
        map(([loading]) => loading)
      ),
      { initialValue: false }
    )

    const connection$ = this.result$.pipe(
      pluck('data', 'activities'),
      filter(isNonNulled),
      shareReplay(1)
    )

    this.$counts = toSignal(
      connection$.pipe(
        map((connection) => {
          return <ActivityFeedCounts>{
            total: connection.totalCount,
            unfiltered: connection.unfilteredCount,
            page: connection.pageCount,
            rows: connection.edges.length,
          }
        })
      ),
      { initialValue: undefined }
    )
    this.$feedFilterOptions = toSignal(
      connection$.pipe(
        map((connection) => {
          return <ActivityFeedFilterOptions>{
            uniqueParticipants: connection.uniqueParticipants ?? [],
            participatingOrganizations:
              connection.participatingOrganizations ?? [],
            activityTypes: connection.activityTypes ?? [],
            subjectTypes: connection.subjectTypes ?? [],
          }
        })
      ),
      { initialValue: feedFilterOptionDefaults }
    )

    this.edge$ = this.result$.pipe(
      pluck('data', 'activities'),
      filter(isNonNulled),
      map((connection) => connection.edges as ActivityInterfaceEdge[])
      // tag('edge$ ++++++++++++++')
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

    // initialize scroller datasource after initial query completes
    this.edge$.pipe(take(1)).subscribe((edges) => {
      this.configureDatasource()
      this.configureAdapter()
    })

    // kick off initial query
    this.init$.next()
  }

  configureDatasource(): void {
    this.scrollDatasource = new Datasource<ActivityInterfaceEdge>({
      get: (index: number, count: number) => {
        // TODO: handle case where all rows have been fetched, using scroll adapter's eof/bof events
        return of({ index: index, count: count }).pipe(
          withLatestFrom(this.edge$),
          switchMap(([params, edges]) => {
            const { index, count } = params
            if (edges.length >= index + 1 + count) {
              // edges cached, return slice of current array
              return of(edges.slice(index, index + count))
            } else {
              // issue fetchMore query to satisfy requested row set
              const queryVars = {
                first: count,
                after: edges[index - 1].cursor,
              }
              this.onQueryComplete$.next(false)
              this.fetchMore$.next(queryVars)
              return this.edge$.pipe(
                skipUntil(this.onQueryComplete$),
                map((edges) => edges.slice(index, index + count))
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
    if (this.scrollAdapter) {
      this.scrollService.configure(this.scrollAdapter)
      this.scrollService.isScrolling$
        .pipe(tag('service.isScrolling$'))
        .subscribe()
    }
  }
}

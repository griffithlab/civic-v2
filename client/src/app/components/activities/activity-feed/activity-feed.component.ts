import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Signal,
  input,
} from '@angular/core'
import { toSignal } from '@angular/core/rxjs-interop'
import {
  ActivityFeedGQL,
  ActivityFeedFieldsFragment,
  ActivityFeedQuery,
  ActivityFeedQueryVariables,
  EventFeedMode,
  Maybe,
  ActivityInterfaceEdge,
} from '@app/generated/civic.apollo'
import { NzCardModule } from 'ng-zorro-antd/card'
import { CvcActivityFeedCounts } from './activity-feed-counts/activity-feed-counts.component'
import { CvcActivityFeedSettingsButton } from './activity-feed-settings/activity-feed-settings.component'
import {
  ActivityFeedFilterOptions,
  ActivityFeedFilters,
  ActivityFeedFilterAttributes,
  ActivityFeedModeAttributes,
  ActivityFeedQueryParams,
  ActivityFeedScope,
  ActivityFeedSettings,
  FetchMoreParams,
  ActivityFeedFilterKeys,
  ActivityFeedCounts,
} from './activity-feed.types'
import { ApolloQueryResult } from '@apollo/client/core'
import {
  Observable,
  ReplaySubject,
  Subject,
  combineLatest,
  debounceTime,
  filter,
  map,
  merge,
  take,
  withLatestFrom,
} from 'rxjs'
import { QueryRef } from 'apollo-angular'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import {
  feedDefaultFilters,
  feedDefaultSettings,
  feedFilterOptionDefaults,
  feedScrollBuffer,
} from './activity-feed.config'
import { tag } from 'rxjs-spy/operators'
import { CvcActivityFeedFilterSelects } from './activity-feed-filters/activity-feed-filters.component'
import { pluck } from 'rxjs-etc/dist/esm/operators'
import { isNonNulled } from 'rxjs-etc'
import { CvcActivityFeedItem } from './activity-feed-item/activity-feed-item.component'
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module'
import {
  Datasource,
  IAdapter,
  IDatasource,
  UiScrollModule,
} from 'ngx-ui-scroll'
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module'
import {
  feedScopeToModeAttributes,
  filterParamsToQueryAttributes,
} from './activity-feed.functions'

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
  nextPage$: Subject<FetchMoreParams>

  // INTERMEDIATE STREAMS
  fetch$: Observable<ActivityFeedQueryParams>
  fetchMore$: Observable<ActivityFeedQueryParams>
  queryResult$: ReplaySubject<ApolloQueryResult<ActivityFeedQuery>>
  rowCount$: Observable<number>

  edges: Signal<ActivityInterfaceEdge[]>
  edge$: Observable<ActivityInterfaceEdge[]>

  // PRESENTATION STREAMS
  activity$: Observable<Maybe<ActivityFeedFieldsFragment>[]>
  feedCounts$: Observable<ActivityFeedCounts>

  // CONFIG, STATE
  queryRef?: QueryRef<ActivityFeedQuery, ActivityFeedQueryVariables>
  feedFilterOptions: Signal<ActivityFeedFilterOptions>
  scrollDatasource: IDatasource<ActivityInterfaceEdge>
  scrollAdapter?: IAdapter<ActivityInterfaceEdge>

  constructor(private gql: ActivityFeedGQL) {
    this.feedSetting$ = new Subject<ActivityFeedSettings>()
    this.feedFilter$ = new Subject<ActivityFeedFilters>()
    this.queryResult$ = new ReplaySubject<ApolloQueryResult<ActivityFeedQuery>>(
      1
    )
    this.nextPage$ = new Subject<FetchMoreParams>()

    // combine prefs, filters updates into a fetch query
    this.fetch$ = combineLatest([this.feedSetting$, this.feedFilter$]).pipe(
      map(([settings, filters]) => {
        // return <ActivityFeedQueryParams>{}
        const queryParams: ActivityFeedQueryParams = {
          settings: settings,
          filters: filters,
        }
        return queryParams
      })
      // tag('----- activity-feed fetch$')
    )

    // this.feedFilter$.pipe(tag('feed feedFilter$')).subscribe()

    // convert next page requests into fetch more query
    this.fetchMore$ = this.nextPage$.pipe(
      map((nextParams) => {
        return { fetchMore: nextParams }
      })
      // tag('+++++ activity-feed fetchMore$')
    )

    // subscribe to fetch & fetchMore requests
    merge(this.fetch$, this.fetchMore$)
      .pipe(
        debounceTime(50),
        // tag('+*+*+* activity-feed merge query'),
        untilDestroyed(this)
      )
      .subscribe((params: ActivityFeedQueryParams) => {
        const queryVars = this.queryParamsToVariables(params)
        if (!this.queryRef) {
          // this.isFetchMore$.next(false)
          // this.queryError$.next({})
          this.queryRef = this.gql.watch(queryVars)

          // NOTE: refetch and fetchMore results from valueChanges do not
          // include network or queryGQL errors, so this extra queryError$ stuff
          // below is required to catch and forward any errors. bug report:
          // https://github.com/apollographql/apollo-client/issues/6857
          this.queryRef.valueChanges
            .pipe(
              // tag('queryRef.valueChanges'),
              untilDestroyed(this)
            )
            .subscribe((result) => {
              this.queryResult$.next(result)
              // // queryRef.valueChanges should be emitting errors,
              // // but updating queryError$ just in case
              // if (result.error || result.errors) {
              //   this.queryError$.next(this.getRequestErrors(result))
              // }
            })
        } else {
          //// clear errors
          // this.queryError$.next({})
          if (params.fetchMore !== undefined) {
            // this.isFetchMore$.next(true)
            this.queryRef.fetchMore({ variables: queryVars }).then((result) => {
              if (result.error || result.errors) {
                console.error(result)
                // this.queryError$.next(this.getRequestErrors(result))
              }
            })
          } else {
            // this.isFetchMore$.next(false)
            this.queryRef
              .refetch(queryVars)
              .then((result) => {
                if (result.error || result.errors) {
                  console.error(result)
                  // this.queryError$.next(this.getRequestErrors(result))
                }
              })
              .then(() => {
                console.warn('TODO: scroll to top')
                // this.scrollToIndex$.next(0)
              })
          }
        }
      })

    this.activity$ = this.queryResult$.pipe(
      pluck('data', 'activities', 'edges'),
      filter(isNonNulled),
      map((edges) => edges.map((e) => e.node))
      // tag('feed activity$')
    )

    this.edge$ = this.queryResult$.pipe(
      pluck('data', 'activities', 'edges'),
      filter(isNonNulled),
      map((edges) => edges.map((e) => e as ActivityInterfaceEdge))
      // tag('feed edge$')
    )
    this.edges = toSignal(this.edge$, { initialValue: [] })
    this.rowCount$ = this.queryResult$.pipe(
      pluck('data', 'activities', 'edges'),
      map((edges) => {
        return edges?.length ?? 0
      })
    )

    this.feedCounts$ = this.queryResult$.pipe(
      pluck('data'),
      filter(isNonNulled),
      withLatestFrom(this.rowCount$),
      map(([data, rowCount]) => {
        return <ActivityFeedCounts>{
          total: data.activities.totalCount,
          unfiltered: data.activities.unfilteredCount,
          page: data.activities.pageCount,
          rows: rowCount,
        }
      })
    )

    this.feedFilterOptions = toSignal(
      this.queryResult$.pipe(
        pluck('data', 'activities'),
        filter(isNonNulled),
        map((activities) => {
          return {
            uniqueParticipants: activities.uniqueParticipants ?? [],
            participatingOrganizations:
              activities.participatingOrganizations ?? [],
            activityTypes: activities.activityTypes ?? [],
            subjectTypes: activities.subjectTypes ?? [],
          } as ActivityFeedFilterOptions
        })
      ),
      {
        initialValue: feedFilterOptionDefaults,
      }
    )

    this.scrollDatasource = this.configureDatasource()
  }
  configureDatasource(): IDatasource<ActivityInterfaceEdge> {
    return new Datasource<ActivityInterfaceEdge>({
      get: (index: number, count: number) => {
        console.log('scrollDatasource get()', index, count)
        console.log('edges():', this.edges())
        return this.edge$.pipe(map((e) => e.slice(index, index + count)))
        // this.fetchMore$.next({ first: count, after: index })
        //
      },
      settings: {
        bufferSize: feedScrollBuffer,
        startIndex: 0,
        minIndex: 0,
      },
    })
  }
  queryParamsToVariables(
    params: ActivityFeedQueryParams
  ): ActivityFeedQueryVariables {
    // showFilters is a required query var
    let queryVars: ActivityFeedQueryVariables = {
      showFilters: this.cvcShowFilters(),
      requestDetails: false,
    }
    // if this is a fetchMore query, add first & after vars,
    // else configure a refetch query with new settings and filters
    if (params.fetchMore !== undefined) {
      queryVars = {
        ...queryVars,
        first: params.fetchMore.first ?? params.settings!.pageSize,
        after: params.fetchMore.after,
      }
    } else {
      const pageSize = params.settings!.pageSize
      const modeAttrs = feedScopeToModeAttributes(this.cvcScope())
      const filterVars = filterParamsToQueryAttributes(params.filters)
      queryVars = {
        ...queryVars,
        first: pageSize,
        ...modeAttrs,
        ...filterVars,
      }
    }
    return queryVars
  }

  ngOnInit(): void {
    this.scrollAdapter = this.scrollDatasource.adapter
    if (this.scrollAdapter) {
      this.scrollAdapter.init$.pipe(take(1)).subscribe(() => {})
      // watch for fetch$ requests & reset scroller
      this.fetch$.pipe(untilDestroyed(this)).subscribe(() => {
        this.scrollAdapter!.reset()
      })
    }
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import { CvcActivityItem } from './activity-item/activity-item.component'
import {
  ActivityFeedGQL,
  EventFeedMode,
  EventFeedNodeFragment,
  EventFeedQuery,
  EventFeedQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  Subject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  map,
  merge,
} from 'rxjs'
import { ApolloQueryResult } from '@apollo/client/core'
import { QueryRef } from 'apollo-angular'
import {
  CvcActivityFeedFilters,
  CvcActivityFeedPrefs,
  CvcActivityFeedQueryParams,
  FetchMoreParams,
} from './activity-feed.types'
import { pluck } from 'rxjs-etc/dist/esm/operators'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

const prefsDefaults: CvcActivityFeedPrefs = {
  mode: EventFeedMode.Unscoped,
  pageSize: 15,
  pollEvents: 30000,
  includeAutomatedEvents: true,
  tagDisplay: 'displayAll',
  showFilters: false,
}

@UntilDestroy()
@Component({
  selector: 'cvc-activity-feed',
  standalone: true,
  imports: [CvcActivityItem],
  templateUrl: './activity-feed.component.html',
  styleUrl: './activity-feed.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityFeed implements OnInit, OnChanges {
  @Input() cvcFeedPrefs: CvcActivityFeedPrefs = prefsDefaults
  @Input() cvcFeedFilters?: CvcActivityFeedFilters

  // @Input SOURCE STREAMS
  filterChange$: BehaviorSubject<CvcActivityFeedFilters>
  prefChange$: BehaviorSubject<CvcActivityFeedPrefs>

  // SOURCE STREAMS
  onFetchMore$: Subject<FetchMoreParams>

  // INTERMEDIATE STREAMS
  refetch$: Observable<CvcActivityFeedQueryParams>
  fetchMore$: Observable<CvcActivityFeedQueryParams>
  queryRequest$: Subject<EventFeedQueryVariables>
  queryResult$: ReplaySubject<ApolloQueryResult<EventFeedQuery>>

  // PRESENTATION STREAMS
  events$?: Observable<Maybe<EventFeedNodeFragment>[]>
  loading$: Observable<boolean>

  queryRef?: QueryRef<EventFeedQuery, EventFeedQueryVariables>

  constructor(private gql: ActivityFeedGQL) {
    this.filterChange$ = new BehaviorSubject<CvcActivityFeedFilters>({})
    this.prefChange$ = new BehaviorSubject<CvcActivityFeedPrefs>(prefsDefaults)
    this.queryRequest$ = new Subject<EventFeedQueryVariables>()
    this.queryResult$ = new ReplaySubject<ApolloQueryResult<EventFeedQuery>>(1)
    this.onFetchMore$ = new Subject<FetchMoreParams>()
    this.loading$ = this.queryResult$.pipe(
      pluck('loading'),
      distinctUntilChanged()
    )
    // combine prefs, filters updates into a refetch query
    this.refetch$ = combineLatest([this.filterChange$, this.prefChange$]).pipe(
      map(([filters, prefs]) => {
        const queryParams: CvcActivityFeedQueryParams = {
          filters: filters,
          prefs: prefs,
        }
        return queryParams
      })
    )
    // convert fetchMore requests into fetch more query
    this.fetchMore$ = this.onFetchMore$.pipe(
      map((fetchParams) => {
        return { fetchMore: fetchParams }
      })
    )

    merge(this.refetch$, this.fetchMore$)
      .pipe(debounceTime(50), untilDestroyed(this))
      .subscribe((params: CvcActivityFeedQueryParams) => {
        const queryVars = this.getQueryVars(params)
        console.log('---- activity-feed query', queryVars)
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
  }

  ngOnInit() {
    console.log('activity-feed OnInit()')
    this.queryRef = this.gql.watch()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('activity-feed OnChanges()')
    if (changes.cvcFeedPrefs) {
      const prefs: CvcActivityFeedPrefs = changes.cvcFeedPrefs.currentValue
      if (prefs !== undefined) {
        this.prefChange$.next(prefs)
      }
    }
    if (changes.cvcFeedFilters) {
      const filters: CvcActivityFeedFilters =
        changes.cvcFeedFilters.currentValue
      if (filters !== undefined) {
        this.filterChange$.next(filters)
      }
    }
  }

  // export type EventFeedQueryVariables = Exact<{
  //   subject?: InputMaybe<SubscribableQueryInput>;
  //   first?: InputMaybe<Scalars['Int']>;
  //   last?: InputMaybe<Scalars['Int']>;
  //   before?: InputMaybe<Scalars['String']>;
  //   after?: InputMaybe<Scalars['String']>;
  //   originatingUserId?: InputMaybe<Scalars['Int']>;
  //   organizationId?: InputMaybe<Scalars['Int']>;
  //   eventType?: InputMaybe<EventAction>;
  //   mode?: InputMaybe<EventFeedMode>;
  //   includeAutomatedEvents?: InputMaybe<Scalars['Boolean']>;
  //   showFilters: Scalars['Boolean'];
  // }>;

  getQueryVars(params: CvcActivityFeedQueryParams): EventFeedQueryVariables {
    // showFilters is a required query var
    let queryVars: EventFeedQueryVariables = {
      showFilters: params.prefs?.showFilters ?? prefsDefaults.showFilters!,
    }
    // if this is a fetchMore query, add first & after vars,
    // else configure a refetch query
    if (params.fetchMore !== undefined) {
      queryVars = {
        ...queryVars,
        first: params.fetchMore.first ?? prefsDefaults.pageSize,
        after: params.fetchMore.after,
      }
    } else {
      if (params.filters !== undefined && params.prefs !== undefined) {
        // filters and preferences exist, set and/or merge with defaults
        queryVars = {
          ...queryVars,
          first: params.prefs.pageSize ?? prefsDefaults.pageSize,
          mode: params.prefs.mode ?? prefsDefaults.mode,
          includeAutomatedEvents:
            params.prefs.includeAutomatedEvents ??
            prefsDefaults.includeAutomatedEvents,
          originatingUserId: params.filters.originatingUserId,
          organizationId: params.filters.organizationId,
          eventType: params.filters.eventType,
        }
      } else {
        queryVars = {
          ...queryVars,
          ...params.filters,
          first: prefsDefaults.pageSize,
          mode: prefsDefaults.mode,
          includeAutomatedEvents: prefsDefaults.includeAutomatedEvents,
        }
      }
    }
    return queryVars
  }
}

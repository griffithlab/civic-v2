import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  WritableSignal,
  input,
  signal,
} from '@angular/core'
import {
  ActivityFeedGQL,
  ActivityFeedNodeFragment,
  ActivityFeedQuery,
  ActivityFeedQueryVariables,
  ActivityInterface,
  Maybe,
  SubscribableQueryInput,
} from '@app/generated/civic.apollo'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzLayoutModule } from 'ng-zorro-antd/layout'
import { CvcActivityFeedCounts } from './activity-feed-counts/activity-feed-counts.component'
import { CvcActivityFeedSettingsButton } from './activity-feed-settings/activity-feed-settings.component'
import {
  ActivityFeedFilters,
  ActivityFeedQueryParams,
  ActivityFeedScope,
  ActivityFeedSettings,
  FetchMoreParams,
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
} from 'rxjs'
import { QueryRef } from 'apollo-angular'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { feedDefaultFilters, feedDefaultSettings } from './activity-feed.config'
import { tag } from 'rxjs-spy/operators'
import { CvcActivityFeedFilterSelects } from './activity-feed-filters/activity-feed-filters.component'
import { pluck } from 'rxjs-etc/dist/esm/operators'
import { isNonNulled } from 'rxjs-etc'

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
    CvcActivityFeedCounts,
    CvcActivityFeedSettingsButton,
    CvcActivityFeedFilterSelects,
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
  refetch$: Observable<ActivityFeedQueryParams>
  fetchMore$: Observable<ActivityFeedQueryParams>
  queryRequest$: Subject<ActivityFeedQueryVariables>
  queryResult$: ReplaySubject<ApolloQueryResult<ActivityFeedQuery>>

  // PRESENTATION STREAMS
  activity$?: Observable<any>
  // feedInfo$: Observable<CvcActivityFeedInfo>

  queryRef?: QueryRef<ActivityFeedQuery, ActivityFeedQueryVariables>

  constructor(private gql: ActivityFeedGQL) {
    this.feedSetting$ = new Subject<ActivityFeedSettings>()
    this.feedSetting$.pipe(tag('activity-feed feedSetting$')).subscribe()
    this.feedFilter$ = new Subject<ActivityFeedFilters>()
    this.queryRequest$ = new Subject<ActivityFeedQueryVariables>()
    this.queryResult$ = new ReplaySubject<ApolloQueryResult<ActivityFeedQuery>>(
      1
    )
    this.nextPage$ = new Subject<FetchMoreParams>()
    // combine prefs, filters updates into a refetch query
    this.refetch$ = combineLatest([this.feedSetting$, this.feedFilter$]).pipe(
      map(([settings, filters]) => {
        return <ActivityFeedQueryParams>{}
        // const queryParams: CvcActivityFeedQueryParams = {
        //   settings: settings,
        //   filters: filters,
        // }
        // return queryParams
      }),
      tag('----- activity-feed refetch$')
    )

    // convert next page requests into fetch more query
    this.fetchMore$ = this.nextPage$.pipe(
      map((nextParams) => {
        return { fetchMore: nextParams }
      }),
      tag('+++++ activity-feed fetchMore$')
    )

    merge(this.refetch$, this.fetchMore$)
      .pipe(
        debounceTime(50),
        tag('+*+*+* activity-feed merge query'),
        untilDestroyed(this)
      )
      .subscribe((params: ActivityFeedQueryParams) => {
        const queryVars = this.getQueryVars(params)
        if (!this.queryRef) {
          // this.isFetchMore$.next(false)
          // this.queryError$.next({})
          this.queryRef = this.gql.watch(queryVars)

          // NOTE: refetch and fetchMore results from valueChanges do not
          // include network or queryGQL errors, so this extra queryError$ stuff
          // below is required to catch and forward any errors. bug report:
          // https://github.com/apollographql/apollo-client/issues/6857
          this.queryRef.valueChanges
            .pipe(tag('queryRef.valueChanges'), untilDestroyed(this))
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
    )
  }

  getQueryVars(params: ActivityFeedQueryParams): ActivityFeedQueryVariables {
    // showFilters is a required query var
    let queryVars: ActivityFeedQueryVariables = {
      showFilters: this.cvcShowFilters(),
    }
    // if this is a fetchMore query, add first & after vars,
    // else configure a refetch query
    if (params.fetchMore !== undefined) {
      queryVars = {
        ...queryVars,
        // first:
        //   params.fetchMore.first ?? cvcActivityFeedSettingsDefaults.pageSize,
        // after: params.fetchMore.after,
      }
    } else {
      queryVars = {
        ...queryVars,
      }
      // if (params.filters !== undefined && params.prefs !== undefined) {
      //   // filters and preferences exist, set and/or merge with defaults
      //   queryVars = {
      //     ...queryVars,
      //     // first:
      //     //   params.prefs.pageSize ?? cvcActivityFeedSettingsDefaults.pageSize,
      //     // mode: params.prefs.mode ?? cvcActivityFeedSettingsDefaults.mode,
      //     // includeAutomatedActivitys:
      //     //   params.prefs.includeAutomatedActivitys ??
      //     //   cvcActivityFeedSettingsDefaults.includeAutomatedActivitys,
      //     // originatingUserId: params.filters.originatingUserId,
      //     // organizationId: params.filters.organizationId,
      //     // eventType: params.filters.eventType,
      //     // subject: params.filters.subject,
      //   }
      // } else {
      //   queryVars = {
      //     ...queryVars,
      //     ...params.filters,
      //     first: cvcActivityFeedSettingsDefaults.pageSize,
      //     mode: cvcActivityFeedSettingsDefaults.mode,
      //     includeAutomatedActivitys:
      //       cvcActivityFeedSettingsDefaults.includeAutomatedActivitys,
      //   }
      // }
    }
    return queryVars
  }
  ngOnInit(): void {
    console.log('+++++ ngOnInit cvcSubjectType', this.cvcScope())
  }
}

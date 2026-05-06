import { Component, Input, OnInit } from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import {
  EventFeedGQL,
  EventFeedMode,
  EventFeedNodeFragment,
  EventFeedQuery,
  EventFeedQueryVariables,
  Maybe,
  PageInfo,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { environment } from 'environments/environment'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map } from 'rxjs/operators'
import { pluck } from 'rxjs-etc/operators'

export type EventDisplayOption =
  | 'hideSubject'
  | 'hideUser'
  | 'hideOrg'
  | 'displayAll'

@Component({
    selector: 'cvc-homepage-event-feed',
    templateUrl: './homepage-event-feed.component.html',
    styleUrls: ['./homepage-event-feed.component.less'],
    standalone: false
})
export class CvcHomepageEventFeedComponent implements OnInit {
  @Input() pageSize = 15

  mode: EventFeedMode = EventFeedMode.Unscoped
  tagDisplay: EventDisplayOption = 'hideOrg'
  showFilters: boolean = false

  private queryRef!: QueryRef<EventFeedQuery, EventFeedQueryVariables>
  private results$!: Observable<ApolloQueryResult<EventFeedQuery>>

  private initialQueryVars?: EventFeedQueryVariables

  events$?: Observable<Maybe<EventFeedNodeFragment>[]>
  pageInfo$?: Observable<PageInfo>
  unfilteredCount$?: Observable<number>

  constructor(private gql: EventFeedGQL) {}

  ngOnInit() {
    this.initialQueryVars = {
      first: this.pageSize,
      mode: this.mode,
      showFilters: this.showFilters,
      includeAutomatedEvents: false,
    }

    if (environment.production) {
      this.queryRef = this.gql.watch(this.initialQueryVars, {
        pollInterval: 30000,
      })
    } else {
      this.queryRef = this.gql.watch(this.initialQueryVars)
    }
    this.results$ = this.queryRef.valueChanges

    this.pageInfo$ = this.results$.pipe(
      pluck('data'),
      filter(isNonNulled),
      map(({ events }) => events.pageInfo)
    )

    this.events$ = this.results$.pipe(
      pluck('data'),
      filter(isNonNulled),
      map(({ events }) => events.edges.map((e) => e.node))
    )

    this.unfilteredCount$ = this.results$.pipe(
      pluck('data'),
      filter(isNonNulled),
      map(({ events }) => events.unfilteredCount)
    )
  }
}

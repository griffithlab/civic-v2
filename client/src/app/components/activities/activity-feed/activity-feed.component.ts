import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import {
  ActivityFeedGQL,
  ActivityFeedNodeFragment,
  ActivityFeedQuery,
  ActivityFeedQueryVariables,
  Maybe,
  NotificationOriginatingUsersFragment,
  PageInfo,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { ApolloQueryResult } from '@apollo/client/core'
import { Observable, Subject } from 'rxjs'
import {
  distinctUntilChanged,
  filter,
  map,
  pluck,
} from 'rxjs/operators'
import { isNonNulled } from 'rxjs-etc'
import { UntilDestroy } from '@ngneat/until-destroy'

// interface SelectableAction {
//   id: EventAction
// }

// export type EventDisplayOption =
//   | 'hideSubject'
//   | 'hideUser'
//   | 'hideOrg'
//   | 'displayAll'

@UntilDestroy()
@Component({
  selector: 'cvc-activity-feed',
  templateUrl: './activity-feed.component.html',
  styleUrls: ['./activity-feed.component.less'],
})
export class CvcActivityFeedComponent implements OnInit, OnDestroy {
  // @Input() subscribable?: SubscribableQueryInput
  // @Input() subscribableName?: string
  // @Input() organizationId: Maybe<number>
  @Input() userId: Maybe<number>
  // @Input() tagDisplay: EventDisplayOption = 'displayAll'
  // @Input() mode: EventFeedMode = EventFeedMode.Subject
  // @Input() showFilters: boolean = true
  @Input() pageSize = 15
  // @Input() pollForNewEvents: boolean = true
  // @Input() includeAutomatedEvents: boolean = true

  private queryRef!: QueryRef<ActivityFeedQuery, ActivityFeedQueryVariables>
  private results$!: Observable<ApolloQueryResult<ActivityFeedQuery>>

  private initialQueryVars?: ActivityFeedQueryVariables

  activities$?: Observable<Maybe<ActivityFeedNodeFragment>[]>
  pageInfo$?: Observable<PageInfo>
  //participants$?: Observable<Maybe<TagLinkableUser[]>>
  //organizations$?: Observable<Maybe<TagLinkableOrganization[]>>
  //actions$?: Observable<SelectableAction[]>
  //unfilteredCount$?: Observable<number>
  loading$?: Observable<boolean>

  //newEventCount$?: Observable<number>
  //originalEventCount?: number
  destroy$ = new Subject<void>()

  showChildren: boolean = false

  constructor(
    private gql: ActivityFeedGQL,
    //private eventCountGql: ActivityFeedCountGQL
  ) {}

  ngOnInit() {
    this.initialQueryVars = {
      //subject: this.subscribable,
      //organizationId: this.organizationId,
      userId: this.userId,
      first: this.pageSize,
      //mode: this.mode,
      //showFilters: this.showFilters,
      //includeAutomatedEvents: this.includeAutomatedEvents,
    }

    this.queryRef = this.gql.watch(this.initialQueryVars)

    //if (this.pollForNewEvents && environment.production) {
    //  this.newEventCount$ = this.eventCountGql
    //    .watch(this.initialQueryVars, { fetchPolicy: 'no-cache', pollInterval: 30000 })
    //    .valueChanges
    //    .pipe(
    //      filter(isNonNulled),
    //      map(({ data }) => data?.events?.unfilteredCount),
    //      takeUntil(this.destroy$)
    //    )
    //}

    this.results$ = this.queryRef.valueChanges
    // .pipe(tag('event-feed results$'))

    this.pageInfo$ = this.results$.pipe(map(({ data }) => data.activities.pageInfo))

    this.activities$ = this.results$
      .pipe(pluck('data', 'activities', 'edges'),
        filter(isNonNulled),
        map((edges) =>  edges.map( e => e.node)),
      )

    this.loading$ = this.results$.pipe(
      map(({ loading }) => loading),
      distinctUntilChanged()
    )

    //this.unfilteredCount$ = this.results$.pipe(
    //  map((r) => r.data),
    //  filter(isNonNulled),
    //  map(({ events }) => events.unfilteredCount)
    //)

    // this.unfilteredCount$
    //   .pipe(
    //     take(1),
    //     untilDestroyed(this))
    //   .subscribe(value => this.originalEventCount = value)

    // if (this.showFilters) {
    //   this.participants$ = this.results$.pipe(
    //     filter(isNonNulled),
    //     map(({ data }) => data.events.uniqueParticipants)
    //   )

    //   this.organizations$ = this.results$.pipe(
    //     filter(isNonNulled),
    //     map(({ data }) => data.events.participatingOrganizations)
    //   )

    //   this.actions$ = this.results$.pipe(
    //     filter(isNonNulled),
    //     map(({ data }) => data.events?.eventTypes?.map((et) => { return { id: et } }) || [])
    //   )
    // }
  }

  fetchMore(endCursor: string) {
    this.queryRef.fetchMore({
      variables: {
        first: this.pageSize,
        after: endCursor,
      },
    })
  }

  //onOrganizationSelected(s: Maybe<NotificationOrganizationFragment>) {
  //  this.queryRef.refetch({
  //    organizationId: s?.id,
  //    showFilters: this.showFilters,
  //  })
  //}

  //onActionSelected(a: Maybe<SelectableAction>) {
  //  this.queryRef.refetch({
  //    eventType: a ? a.id : undefined,
  //    showFilters: this.showFilters,
  //  })
  //}

  onUserSelected(s: Maybe<NotificationOriginatingUsersFragment>) {
    this.queryRef.refetch({
      userId: s?.id,
      //showFilters: this.showFilters,
    })
  }

  //refresh() {
  //  this.queryRef.refetch().then(({ data }) => {
  //    this.originalEventCount = data.events.unfilteredCount
  //  })
  //}

  // onShowChildrenToggle() {
  //   let newSubscribable: Maybe<SubscribableQueryInput>
  //   if (this.subscribable) {
  //     newSubscribable = {
  //       id: this.subscribable.id,
  //       entityType: this.subscribable.entityType,
  //       includeChildren: this.showChildren,
  //     }
  //     if (this.showChildren) {
  //       this.tagDisplay = 'displayAll'
  //     } else {
  //       this.tagDisplay = 'hideSubject'
  //     }
  //   } else {
  //     newSubscribable = undefined
  //   }

  //   this.queryRef.refetch({
  //     ...this.initialQueryVars,
  //     subject: newSubscribable,
  //     showFilters: this.showFilters,
  //   })
  // }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.unsubscribe()
  }
}

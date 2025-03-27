import { Component, Input, OnDestroy, OnInit } from '@angular/core'
import {
  EventAction,
  EventFeedCountGQL,
  EventFeedGQL,
  EventFeedMode,
  EventFeedNodeFragment,
  EventFeedQuery,
  EventFeedQueryVariables,
  Maybe,
  NotificationOrganizationFragment,
  NotificationOriginatingUsersFragment,
  PageInfo,
  SubscribableQueryInput,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { ApolloQueryResult } from '@apollo/client/core'
import { Observable, Subject } from 'rxjs'
import {
  distinctUntilChanged,
  filter,
  map,
  pluck,
  startWith,
  take,
  takeUntil,
} from 'rxjs/operators'
import { TagLinkableOrganization } from '@app/components/organizations/organization-tag/organization-tag.component'
import { TagLinkableUser } from '@app/components/users/user-tag/user-tag.component'
import { environment } from 'environments/environment'
import { isNonNulled } from 'rxjs-etc'
import { tag } from 'rxjs-spy/cjs/operators'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'

interface SelectableAction {
  id: EventAction
}

export type EventDisplayOption =
  | 'hideSubject'
  | 'hideUser'
  | 'hideOrg'
  | 'displayAll'

@UntilDestroy()
@Component({
    selector: 'cvc-event-feed',
    templateUrl: './event-feed.component.html',
    styleUrls: ['./event-feed.component.less'],
    standalone: false
})
export class CvcEventFeedComponent implements OnInit, OnDestroy {
  @Input() subscribable?: SubscribableQueryInput
  @Input() subscribableName?: string
  @Input() organizationId: Maybe<number>
  @Input() userId: Maybe<number>
  @Input() tagDisplay: EventDisplayOption = 'displayAll'
  @Input() mode: EventFeedMode = EventFeedMode.Subject
  @Input() showFilters: boolean = true
  @Input() pageSize = 15
  @Input() pollForNewEvents: boolean = true
  @Input() includeAutomatedEvents: boolean = true

  private queryRef!: QueryRef<EventFeedQuery, EventFeedQueryVariables>
  private results$!: Observable<ApolloQueryResult<EventFeedQuery>>

  private initialQueryVars?: EventFeedQueryVariables

  events$?: Observable<Maybe<EventFeedNodeFragment>[]>
  pageInfo$?: Observable<PageInfo>
  participants$?: Observable<Maybe<TagLinkableUser[]>>
  organizations$?: Observable<Maybe<TagLinkableOrganization[]>>
  actions$?: Observable<SelectableAction[]>
  unfilteredCount$?: Observable<number>
  loading$?: Observable<boolean>

  newEventCount$?: Observable<number>
  originalEventCount?: number
  destroy$ = new Subject<void>()

  showChildren: boolean = false

  constructor(
    private gql: EventFeedGQL,
    private eventCountGql: EventFeedCountGQL
  ) {}

  ngOnInit() {
    this.initialQueryVars = {
      subject: this.subscribable,
      organizationId: this.organizationId,
      originatingUserId: this.userId,
      first: this.pageSize,
      mode: this.mode,
      showFilters: this.showFilters,
      includeAutomatedEvents: this.includeAutomatedEvents,
    }

    this.queryRef = this.gql.watch(this.initialQueryVars)

    if (this.pollForNewEvents && environment.production) {
      this.newEventCount$ = this.eventCountGql
        .watch(this.initialQueryVars, { fetchPolicy: 'no-cache', pollInterval: 30000 })
        .valueChanges
        .pipe(
          filter(isNonNulled),
          map(({ data }) => data?.events?.unfilteredCount),
          takeUntil(this.destroy$)
        )
    }

    this.results$ = this.queryRef.valueChanges
    // .pipe(tag('event-feed results$'))

    this.pageInfo$ = this.results$.pipe(map(({ data }) => data.events.pageInfo))

    this.events$ = this.results$
      .pipe(pluck('data', 'events', 'edges'),
        filter(isNonNulled),
        map((edges) =>  edges.map( e => e.node)),
      )

    this.loading$ = this.results$.pipe(
      map(({ loading }) => loading),
      distinctUntilChanged()
    )

    this.unfilteredCount$ = this.results$.pipe(
      map((r) => r.data),
      filter(isNonNulled),
      map(({ events }) => events.unfilteredCount)
    )

    this.unfilteredCount$
      .pipe(
        take(1), 
        untilDestroyed(this))
      .subscribe(value => this.originalEventCount = value)

    if (this.showFilters) {
      this.participants$ = this.results$.pipe(
        filter(isNonNulled),
        map(({ data }) => data.events.uniqueParticipants)
      )

      this.organizations$ = this.results$.pipe(
        filter(isNonNulled),
        map(({ data }) => data.events.participatingOrganizations)
      )

      this.actions$ = this.results$.pipe(
        filter(isNonNulled),
        map(({ data }) => data.events?.eventTypes?.map((et) => { return { id: et } }) || [])
      )
    }
  }

  fetchMore(endCursor: string) {
    this.queryRef.fetchMore({
      variables: {
        first: this.pageSize,
        after: endCursor,
      },
    })
  }

  onOrganizationSelected(s: Maybe<NotificationOrganizationFragment>) {
    this.queryRef.refetch({
      organizationId: s?.id,
      showFilters: this.showFilters,
    })
  }

  onActionSelected(a: Maybe<SelectableAction>) {
    this.queryRef.refetch({
      eventType: a ? a.id : undefined,
      showFilters: this.showFilters,
    })
  }

  onOriginatingUserSelected(s: Maybe<NotificationOriginatingUsersFragment>) {
    this.queryRef.refetch({
      originatingUserId: s?.id,
      showFilters: this.showFilters,
    })
  }

  refresh() {
    this.queryRef.refetch().then(({ data }) => {
      this.originalEventCount = data.events.unfilteredCount
    })
  }

  onShowChildrenToggle() {
    let newSubscribable: Maybe<SubscribableQueryInput>
    if (this.subscribable) {
      newSubscribable = {
        id: this.subscribable.id,
        entityType: this.subscribable.entityType,
        includeChildren: this.showChildren,
      }
      if (this.showChildren) {
        this.tagDisplay = 'displayAll'
      } else {
        this.tagDisplay = 'hideSubject'
      }
    } else {
      newSubscribable = undefined
    }

    this.queryRef.refetch({
      ...this.initialQueryVars,
      subject: newSubscribable,
      showFilters: this.showFilters,
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.unsubscribe()
  }
}

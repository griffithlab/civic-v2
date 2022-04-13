import { Component, Input, OnInit } from "@angular/core";
import {
  EventAction,
  EventFeedGQL,
  EventFeedMode,
  EventFeedNodeFragment,
  EventFeedQuery,
  EventFeedQueryVariables,
  Maybe,
  NotificationOrganizationFragment,
  NotificationOriginatingUsersFragment,
  PageInfo,
  SubscribableQueryInput
} from "@app/generated/civic.apollo";
import { QueryRef } from "apollo-angular";
import { ApolloQueryResult } from "@apollo/client/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TagLinkableOrganization } from "@app/components/organizations/organization-tag/organization-tag.component";
import { TagLinkableUser } from "@app/components/users/user-tag/user-tag.component";
import { environment } from "environments/environment";

interface SelectableAction { id: EventAction }

export type EventDisplayOption = "hideSubject" | "hideUser" | "hideOrg" | "displayAll"

@Component({
  selector: 'cvc-event-feed',
  templateUrl: './event-feed.component.html',
  styleUrls: ['./event-feed.component.less'],
})
export class CvcEventFeedComponent implements OnInit {
  @Input() subscribable?: SubscribableQueryInput;
  @Input() subscribableName?: string;
  @Input() organizationId: Maybe<number>
  @Input() userId: Maybe<number>
  @Input() tagDisplay: EventDisplayOption = "displayAll"
  @Input() mode: EventFeedMode = EventFeedMode.Subject
  @Input() showFilters: boolean = true
  @Input() pageSize = 15

  private queryRef!: QueryRef<EventFeedQuery, EventFeedQueryVariables>;
  private results$!: Observable<ApolloQueryResult<EventFeedQuery>>;

  private initialQueryVars?: EventFeedQueryVariables;

  events$?: Observable<Maybe<EventFeedNodeFragment>[]>;
  pageInfo$?: Observable<PageInfo>;
  participants$?: Observable<TagLinkableUser[]>;
  organizations$?: Observable<TagLinkableOrganization[]>;
  actions$?: Observable<SelectableAction[]>
  unfilteredCount$?: Observable<number>

  showChildren: boolean = false

  constructor(private gql: EventFeedGQL) {
  }

  ngOnInit() {
    this.initialQueryVars = {
      subject: this.subscribable,
      organizationId: this.organizationId,
      originatingUserId: this.userId,
      first: this.pageSize,
      mode: this.mode,
      showFilters: this.showFilters
    }

    this.queryRef = this.gql.watch(this.initialQueryVars);

    this.results$ = this.queryRef.valueChanges;

    this.pageInfo$ = this.results$.pipe(
      map(({ data }) => data.events.pageInfo)
    )

    this.events$ = this.results$.pipe(
      map(({ data }) => {
        return data.events.edges.map(e => e.node)
      })
    )

    this.unfilteredCount$ = this.results$.pipe(
      map(({data}) => {
        return data.events.unfilteredCount
      })
    )

    if(this.showFilters) {
      this.participants$ = this.results$.pipe(
        map(({ data }) => data.events.uniqueParticipants)
      )

      this.organizations$ = this.results$.pipe(
        map(({ data }) => data.events.participatingOrganizations)
      )

      this.actions$ = this.results$.pipe(
        map(({data}) => data.events?.eventTypes?.map((et) => {return {id: et}}) || [])
      )
    }
  }

  fetchMore(endCursor: string) {
    this.queryRef.fetchMore({
      variables: {
        first: this.pageSize,
        after: endCursor,
      }
    })
  }

  onOrganizationSelected(s: Maybe<NotificationOrganizationFragment>) {
    this.queryRef.refetch({
      organizationId: s?.id,
      showFilters: this.showFilters
    })
  }

  onActionSelected(a: Maybe<SelectableAction>) {
    this.queryRef.refetch({
      eventType: a ? a.id : undefined,
      showFilters: this.showFilters
    })
  }

  onOriginatingUserSelected(s: Maybe<NotificationOriginatingUsersFragment>) {
    this.queryRef.refetch({
      originatingUserId: s?.id,
      showFilters: this.showFilters
    })
  }


  onShowChildrenToggle() {
    let newSubscribable: Maybe<SubscribableQueryInput>
    if (this.subscribable) {
      newSubscribable = {
        id: this.subscribable.id,
        entityType: this.subscribable.entityType,
        includeChildren: this.showChildren
      }
      if (this.showChildren) {
        this.tagDisplay = 'displayAll'
      }
      else {
        this.tagDisplay = 'hideSubject'
      }
    }
    else {
      newSubscribable = undefined
    }

    this.queryRef.refetch({
      ...this.initialQueryVars,
      subject: newSubscribable,
      showFilters: this.showFilters
    })
  }
}

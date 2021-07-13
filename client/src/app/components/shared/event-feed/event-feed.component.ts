import { Component, Input, OnInit } from "@angular/core";
import {
  EventAction,
  EventFeedGQL,
  EventFeedNodeFragment,
  EventFeedQuery,
  EventFeedQueryVariables,
  Maybe,
  PageInfo,
  SubscribableEntities,
  SubscribableInput
} from "@app/generated/civic.apollo";
import { QueryRef } from "apollo-angular";
import { ApolloQueryResult } from "@apollo/client/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LinkableUser } from "../user-pill/user-pill.component";
import { LinkableOrganization } from "../organization-pill/organization-pill.component";
import { sourceInputInitialModel } from "@app/forms/types/source-input/source-input.component";

interface SelectableAction { id: EventAction }

@Component({
  selector: 'cvc-event-feed',
  templateUrl: './event-feed.component.html',
  styleUrls: ['./event-feed.component.less'],
})
export class EventFeedComponent implements OnInit {
  @Input() subscribable?: SubscribableInput;
  @Input() subscribableName?: string;
  @Input() organizationId: Maybe<number>
  @Input() userId: Maybe<number>

  private queryRef!: QueryRef<EventFeedQuery, EventFeedQueryVariables>;
  private results$!: Observable<ApolloQueryResult<EventFeedQuery>>;

  private initialQueryVars?: EventFeedQueryVariables;
  private pageSize = 5;

  participantFilter: 'ALL' | number = 'ALL';
  organizationFilter: 'ALL' | number = 'ALL';
  actionFilter: 'ALL' | number = 'ALL';

  events$?: Observable<Maybe<EventFeedNodeFragment>[]>;
  pageInfo$?: Observable<PageInfo>;
  participants$?: Observable<LinkableUser[]>;
  organizations$?: Observable<LinkableOrganization[]>;
  actions$?: Observable<SelectableAction[]>

  constructor(private gql: EventFeedGQL) {
  }

  ngOnInit() {
    this.initialQueryVars = {
      subject: this.subscribable,
      organizationId: this.organizationId,
      originatingUserId: this.userId,
      first: this.pageSize,
    }

    this.queryRef = this.gql.watch(this.initialQueryVars, {});
    this.results$ = this.queryRef.valueChanges;

    this.pageInfo$ = this.results$.pipe(
      map(({ data }) => data.events.pageInfo)
    )

    this.events$ = this.results$.pipe(
      map(({ data }) => {
        return data.events.edges.map(e => e.node)
      })
    )

    this.participants$ = this.results$.pipe(
      map(({ data }) => data.events.uniqueParticipants)
    )

    this.organizations$ = this.results$.pipe(
      map(({ data }) => data.events.participatingOrganizations)
    )

    this.actions$ = this.results$.pipe(
      map(({data}) => data.events.eventTypes.map((et) => {return {id: et}}))
    )
  }

  fetchMore(endCursor: string) {
    this.queryRef.fetchMore({
      variables: {
        first: this.pageSize,
        after: endCursor,
      }
    })
  }

  onParticipantSelected(u: 'ALL' | number) {
    this.queryRef.refetch({
      ...this.initialQueryVars,
      originatingUserId: u === 'ALL' ? undefined : u
    })
  }

  onOrganizationSelected(o: 'ALL' | number) {
    this.queryRef.refetch({
      ...this.initialQueryVars,
      organizationId: o === 'ALL' ? undefined : o
    })
  }

  //onActionSelected(a: 'ALL' | Maybe<SelectableAction>) {
  onActionSelected(a: 'ALL' | EventAction) {
      console.log(a)
    this.queryRef.refetch({
      ...this.initialQueryVars,
      eventType: a === 'ALL'? undefined : a
    })
  }

  iconNameForSubscribableEntity(e: SubscribableEntities): string {
    switch (e) {
      case (SubscribableEntities.Assertion):
        return 'civic:assertion'
      case (SubscribableEntities.EvidenceItem):
        return 'civic:evidence'
      case (SubscribableEntities.Gene):
        return 'civic:gene'
      case (SubscribableEntities.Revision):
        return 'civic:revision'
      case (SubscribableEntities.Variant):
        return 'civic:variant'
      default:
        throw new Error('No icon name found for ' + e);
    }
  }

}

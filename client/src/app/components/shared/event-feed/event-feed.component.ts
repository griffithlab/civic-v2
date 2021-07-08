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

@Component({
  selector: 'cvc-event-feed',
  templateUrl: './event-feed.component.html',
  styleUrls: ['./event-feed.component.less'],
})
export class EventFeedComponent implements OnInit {
  @Input() subscribable?: SubscribableInput;
  @Input() subscribableName?: string;

  private queryRef!: QueryRef<EventFeedQuery, EventFeedQueryVariables>;
  private results$!: Observable<ApolloQueryResult<EventFeedQuery>>;

  private initialQueryVars?: EventFeedQueryVariables;
  private pageSize = 5;

  events$?: Observable<Maybe<EventFeedNodeFragment>[]>;
  pageInfo$?: Observable<PageInfo>;
  participants$?: Observable<LinkableUser[]>;
  organizations$?: Observable<LinkableOrganization[]>;

  constructor(private gql: EventFeedGQL) { }

  ngOnInit() {
    this.initialQueryVars = {
      subject: this.subscribable,
      first: this.pageSize,
    }

    this.queryRef = this.gql.watch(this.initialQueryVars, { fetchPolicy: 'cache-and-network' });
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
  }

  fetchMore(endCursor: string) {
    this.queryRef.fetchMore({
      variables: {
        first: this.pageSize,
        after: endCursor
      }
    })
  }

  onParticipantSelected(u: Maybe<LinkableUser>) {
    this.queryRef.refetch({
      ...this.initialQueryVars,
      organizationId: this.currentVariables()?.organizationId,
      originatingUserId: u?.id
    })
  }

  onOrganizationSelected(o: Maybe<LinkableOrganization>) {
    this.queryRef.refetch({
      ...this.initialQueryVars,
      originatingUserId: this.currentVariables().originatingUserId,
      organizationId: o?.id
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

  //TODO - Sigh, fix this when the new angular-apollo comes out
  private currentVariables(): EventFeedQueryVariables {
    return this.queryRef['obsQuery'].variables as EventFeedQueryVariables;
  }
}

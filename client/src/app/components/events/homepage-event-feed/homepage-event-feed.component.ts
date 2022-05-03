import { Component, Input, OnInit } from "@angular/core";
import {
  EventAction,
  EventFeedGQL,
  EventFeedMode,
  EventFeedNodeFragment,
  EventFeedQuery,
  EventFeedQueryVariables,
  Maybe,
  PageInfo,
} from "@app/generated/civic.apollo";
import { QueryRef } from "apollo-angular";
import { ApolloQueryResult } from "@apollo/client/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from "environments/environment";

interface SelectableAction { id: EventAction }

export type EventDisplayOption = "hideSubject" | "hideUser" | "hideOrg" | "displayAll"

@Component({
  selector: 'cvc-homepage-event-feed',
  templateUrl: './homepage-event-feed.component.html',
  styleUrls: ['./homepage-event-feed.component.less'],
})
export class CvcHomepageEventFeedComponent implements OnInit {
  @Input() pageSize = 15

  mode: EventFeedMode = EventFeedMode.Unscoped
  tagDisplay: EventDisplayOption = "hideOrg"
  showFilters: boolean = false

  private queryRef!: QueryRef<EventFeedQuery, EventFeedQueryVariables>;
  private results$!: Observable<ApolloQueryResult<EventFeedQuery>>;

  private initialQueryVars?: EventFeedQueryVariables;

  events$?: Observable<Maybe<EventFeedNodeFragment>[]>;
  pageInfo$?: Observable<PageInfo>;
  unfilteredCount$?: Observable<number>

  constructor(private gql: EventFeedGQL) {
  }

  ngOnInit() {
    this.initialQueryVars = {
      first: this.pageSize,
      mode: this.mode,
      showFilters: this.showFilters
    }

    if(environment.production) {
      this.queryRef = this.gql.watch(this.initialQueryVars, {pollInterval: 30000});
    } else {
      this.queryRef = this.gql.watch(this.initialQueryVars);
    }
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
  }
}
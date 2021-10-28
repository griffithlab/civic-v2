import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from "@apollo/client/core";
import { Maybe, NotificationNodeFragment, PageInfo, UserNotificationsGQL, UserNotificationsQuery, UserNotificationsQueryVariables } from '@app/generated/civic.apollo';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'cvc-users-notifications',
  templateUrl: './users-notifications.component.html',
  styleUrls: ['./users-notifications.component.less'],
})
export class UsersNotificationsComponent {
  userId: number

  private queryRef!: QueryRef<UserNotificationsQuery, UserNotificationsQueryVariables>;
  private results$!: Observable<ApolloQueryResult<UserNotificationsQuery>>;

  private initialQueryVars?: UserNotificationsQueryVariables;

  notifications$?: Observable<Maybe<NotificationNodeFragment>[]>;
  pageInfo$?: Observable<PageInfo>;

  constructor(private route: ActivatedRoute, private gql: UserNotificationsGQL) {
    this.userId = +this.route.snapshot.params['userId'];
  }

  ngOnInit() {
    this.initialQueryVars = {
    }

    this.queryRef = this.gql.watch(this.initialQueryVars, {});
    this.results$ = this.queryRef.valueChanges;

    this.pageInfo$ = this.results$.pipe(
      map(({ data }) => data.notifications.pageInfo)
    )

    this.notifications$ = this.results$.pipe(
      map(({ data }) => {
        return data.notifications.edges.map(e => e.node)
      })
    )
  }
  fetchMore(endCursor: string) {
    this.queryRef.fetchMore({
      variables: {
        after: endCursor,
      }
    })
  }
}

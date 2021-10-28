import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from "@apollo/client/core";
import { Maybe, NotificationNodeFragment, NotificationReason, PageInfo, UserNotificationsGQL, UserNotificationsQuery, UserNotificationsQueryVariables } from '@app/generated/civic.apollo';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface SelectableNotificationReason {
  id: number,
  type: NotificationReason,
  iconName: string,
  displayName: string
}

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

  includeReadInput: boolean = false


  notificationTypes: SelectableNotificationReason[] = [
    {id: 1, type: NotificationReason.Mention, iconName: 'notification', displayName: 'Mentioned'},
    {id: 2, type: NotificationReason.Subscription, iconName: 'book', displayName: 'Subscribed'},
  ]

  constructor(private route: ActivatedRoute, private gql: UserNotificationsGQL) {
    this.userId = +this.route.snapshot.params['userId'];
  }

  ngOnInit() {
    this.initialQueryVars = {
      includeRead: this.includeReadInput
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

  setIncludeRead(includeRead: boolean) {
    this.includeReadInput = includeRead
    this.queryRef.refetch({
      includeRead: this.includeReadInput
    })
  }

  onNotificationReasonSelected(r: Maybe<SelectableNotificationReason>) {
    this.queryRef.refetch({
      notificationReason: r?.type
    })
  }
}

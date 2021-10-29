import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult } from "@apollo/client/core";
import { EventAction, Maybe, NotificationFeedSubjectsFragment, NotificationNodeFragment, NotificationOrganizationFragment, NotificationOriginatingUsersFragment, NotificationReason, PageInfo, SubscribableEntities, SubscribableInput, UserNotificationsGQL, UserNotificationsQuery, UserNotificationsQueryVariables } from '@app/generated/civic.apollo';
import { QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface SelectableNotificationReason {
  id: number,
  type: NotificationReason,
  iconName: string,
  displayName: string
}

interface SelectableNotificationSubject {
  subjectWithCount: NotificationFeedSubjectsFragment,
  id: string
}

interface SelectableAction { id: EventAction }

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

  notificationSubjects$?: Observable<SelectableNotificationSubject[]>
  originatingUsers$?: Observable<NotificationOriginatingUsersFragment[]>
  actions$?: Observable<SelectableAction[]>
  organizations$?: Observable<NotificationOrganizationFragment[]>

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

    this.notificationSubjects$ = this.results$.pipe(
      map(({data}) => {
        return data.notifications.notificationSubjects.map((ns) => {
          return { id: `${ns.subject.__typename}:${ns.subject.id}`, subjectWithCount: ns} 
        })
      })
    )

    this.originatingUsers$ = this.results$.pipe(
      map(({data}) => {
        return data.notifications.originatingUsers
      })
    )

    this.actions$ = this.results$.pipe(
      map(({data}) => data.notifications.eventTypes.map((et) => {return {id: et}}))
    )

    this.organizations$ = this.results$.pipe(
      map(({data}) => {
        return data.notifications.organizations
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
  
  onNotificationSubjectSelected(s: Maybe<SelectableNotificationSubject>) {
    let orgObj: Maybe<SubscribableInput> = undefined

    if (s !== undefined) {
      let entityType: keyof typeof SubscribableEntities = <keyof typeof SubscribableEntities> s.subjectWithCount.subject.__typename
      console.log(entityType)
      orgObj = { 
        id: s.subjectWithCount.subject.id,
        entityType: SubscribableEntities[entityType]
      }
    }

    this.queryRef.refetch({
      originatingObject: orgObj
    })
  }

  onOriginatingUserSelected(s: Maybe<NotificationOriginatingUsersFragment>) {
    this.queryRef.refetch({
      originatingUserId: s?.id
    })
  }

  onActionSelected(a: Maybe<EventAction>) {
    console.log(a)
    this.queryRef.refetch({
      eventType: a
    })
  }

  onOrganizationSelected(s: Maybe<NotificationOrganizationFragment>) {
    this.queryRef.refetch({
      organizationId: s?.id
    })
  }
}

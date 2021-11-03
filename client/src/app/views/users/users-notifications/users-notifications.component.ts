import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApolloQueryResult, throwServerError } from "@apollo/client/core";
import { NetworkErrorsService } from '@app/core/services/network-errors.service';
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper';
import { EventAction, UpdateNotificationStatusGQL, UpdateNotificationStatusMutation, UpdateNotificationStatusMutationVariables, Maybe, NotificationFeedSubjectsFragment, NotificationNodeFragment, NotificationOrganizationFragment, NotificationOriginatingUsersFragment, NotificationReason, PageInfo, SubscribableEntities, SubscribableInput, UserNotificationsGQL, UserNotificationsQuery, UserNotificationsQueryVariables, ReadStatus, UnsubscribeGQL, UnsubscribeMutation, UnsubscribeMutationVariables, SubscribableFragment } from '@app/generated/civic.apollo';
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
}) export class UsersNotificationsComponent {
  userId: number

  private queryRef!: QueryRef<UserNotificationsQuery, UserNotificationsQueryVariables>;
  private results$!: Observable<ApolloQueryResult<UserNotificationsQuery>>;

  private initialQueryVars?: UserNotificationsQueryVariables;

  notifications$?: Observable<Maybe<NotificationNodeFragment>[]>;
  notificationState = new Map<NotificationNodeFragment, boolean>()
  pageInfo$?: Observable<PageInfo>;

  includeReadInput: boolean = false

  notificationSubjects$?: Observable<SelectableNotificationSubject[]>
  originatingUsers$?: Observable<NotificationOriginatingUsersFragment[]>
  actions$?: Observable<SelectableAction[]>
  organizations$?: Observable<NotificationOrganizationFragment[]>

  bulkSelectedIds: number[] = []
  bulkMarkEnabled: boolean = false
  bulkSelectedSubjects: NotificationFeedSubjectsFragment[] = []

  markAsReadMutator: MutatorWithState<UpdateNotificationStatusGQL,UpdateNotificationStatusMutation,UpdateNotificationStatusMutationVariables>;
  unsubscribeMutator: MutatorWithState<UnsubscribeGQL, UnsubscribeMutation, UnsubscribeMutationVariables>

  notificationTypes: SelectableNotificationReason[] = [
    {id: 1, type: NotificationReason.Mention, iconName: 'notification', displayName: 'Mentioned'},
    {id: 2, type: NotificationReason.Subscription, iconName: 'book', displayName: 'Subscribed'},
  ]

  constructor(private route: ActivatedRoute, private gql: UserNotificationsGQL, private networkErrorService: NetworkErrorsService, private updateNotificationStatusMuation: UpdateNotificationStatusGQL, private unsubscribeMutation: UnsubscribeGQL) {
    this.userId = +this.route.snapshot.params['userId'];
    this.markAsReadMutator = new MutatorWithState(networkErrorService)
    this.unsubscribeMutator = new MutatorWithState(networkErrorService)
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
        return data.notifications.edges.map(e => {
          if (e.node){
            this.notificationState.set(e.node, false)
          }
          return e.node
        })
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
      notificationReason: r ? r.type: undefined
    })
  }
  
  onNotificationSubjectSelected(s: Maybe<SelectableNotificationSubject>) {
    let orgObj: Maybe<SubscribableInput> = undefined

    if (s !== undefined) {
      let entityType: keyof typeof SubscribableEntities = <keyof typeof SubscribableEntities> s.subjectWithCount.subject.__typename
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

  onActionSelected(a: Maybe<SelectableAction>) {
    this.queryRef.refetch({
      eventType: a ? a.id : undefined
    })
  }

  onOrganizationSelected(s: Maybe<NotificationOrganizationFragment>) {
    this.queryRef.refetch({
      organizationId: s?.id
    })
  }

  markAsRead(id: number){
    this.markAsReadMutator.mutate(this.updateNotificationStatusMuation, {
      input: { 
        ids: [id],
        newStatus: ReadStatus.Read
      }
    })
  }

  markAsUnread(id: number){
    this.markAsReadMutator.mutate(this.updateNotificationStatusMuation, {
      input: { 
        ids: [id],
        newStatus: ReadStatus.Unread
      }
    })
  }

  unsubscribe(id: number, typename: string) {
    let entityType: keyof typeof SubscribableEntities = <keyof typeof SubscribableEntities> typename
    this.unsubscribeMutator.mutate(this.unsubscribeMutation, {
      input :{
        subscribables: [{id: id, entityType: SubscribableEntities[entityType]}]
      }
    })
  }

  onNotificationCheckBoxClicked(notificationId: number, newVal: boolean) {
    let key = Array.from(this.notificationState.keys()).find(e => e.id === notificationId)
    if (key) {
      this.notificationState.set(key, newVal)
    }
    if (newVal) {
      this.bulkMarkEnabled = true
    }
    else {
      if (Array.from(this.notificationState.values()).some(e => e)) {
        this.bulkMarkEnabled = true
      } else {
        this.bulkMarkEnabled = false
      }
    }
  }

  bulkMarkRead() {
    this.updateNotificationStatusMuation.mutate({
      input: {
        ids: this.bulkSelectedIds,
        newStatus: ReadStatus.Read
      }
    },
    {
      refetchQueries: [
        {
          query: this.gql.document,
          variables: this.queryRef.variables
        }
      ]
    }).subscribe()
    this.bulkMarkEnabled = false
    this.bulkSelectedIds = []

  }

  bulkMarkUnread() {
    let queryState = this.markAsReadMutator.mutate(this.updateNotificationStatusMuation, {
      input: {
        ids: this.bulkSelectedIds,
        newStatus: ReadStatus.Unread
      }
    })
    this.bulkMarkEnabled = false
    this.bulkSelectedIds = []
    queryState.submitSuccess$.subscribe((res) => {
      if(res) {
        this.queryRef.refetch()
      } 
    })
  }

  bulkUnsubscribe() {
    this.unsubscribeMutator.mutate(this.unsubscribeMutation, {
      input: {
        subscribables: this.bulkSelectedSubjects.map((s) => { 
          let entityType: keyof typeof SubscribableEntities = <keyof typeof SubscribableEntities> s.subject.__typename
          return {
            id: s.subject.id,
            entityType: SubscribableEntities[entityType]
          }
        })
      }
    })
  }
}

import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { ApolloQueryResult } from '@apollo/client/core'
import { NetworkErrorsService } from '@app/core/services/network-errors.service'
import { MutatorWithState } from '@app/core/utilities/mutation-state-wrapper'
import {
  EventAction,
  Maybe,
  NotificationConnection,
  NotificationFeedSubjectsFragment,
  NotificationNodeFragment,
  NotificationOrganizationFragment,
  NotificationOriginatingUsersFragment,
  NotificationReason,
  PageInfo,
  ReadStatus,
  SubscribableEntities,
  SubscribableInput,
  UnsubscribeGQL,
  UnsubscribeMutation,
  UnsubscribeMutationVariables,
  UpdateNotificationStatusGQL,
  UpdateNotificationStatusMutation,
  UpdateNotificationStatusMutationVariables,
  UserNotificationsGQL,
  UserNotificationsQuery,
  UserNotificationsQueryVariables,
} from '@app/generated/civic.apollo'
import { QueryRef } from 'apollo-angular'
import { Observable } from 'rxjs'
import { isNonNulled } from 'rxjs-etc'
import { filter, map, startWith } from 'rxjs/operators'

interface SelectableNotificationReason {
  id: number
  type: NotificationReason
  iconName: string
  displayName: string
}

interface SelectableNotificationSubject {
  subjectWithCount: NotificationFeedSubjectsFragment
  id: string
}

interface SelectableAction {
  id: EventAction
}

interface Checked {
  checked: boolean
}

@Component({
  selector: 'cvc-users-notifications',
  templateUrl: './users-notifications.component.html',
  styleUrls: ['./users-notifications.component.less'],
  standalone: false,
})
export class UsersNotificationsComponent {
  userId: number

  private queryRef!: QueryRef<
    UserNotificationsQuery,
    UserNotificationsQueryVariables
  >
  private results$!: Observable<ApolloQueryResult<UserNotificationsQuery>>

  private connection$!: Observable<NotificationConnection>

  private initialQueryVars?: UserNotificationsQueryVariables

  notifications$?: Observable<Maybe<NotificationNodeFragment>[]>
  notificationState = new Map<NotificationNodeFragment, Checked>()
  notificationStateObservable$?: Observable<
    Maybe<Map<NotificationNodeFragment, Checked>>
  >
  pageInfo$?: Observable<PageInfo>

  includeReadInput: boolean = false

  notificationSubjects$?: Observable<SelectableNotificationSubject[]>
  originatingUsers$?: Observable<NotificationOriginatingUsersFragment[]>
  actions$?: Observable<SelectableAction[]>
  organizations$?: Observable<NotificationOrganizationFragment[]>
  isLoading$?: Observable<boolean>

  bulkMarkEnabled: boolean = false
  allChecked: boolean = false
  someChecked: boolean = false

  updateNotificationStatusMutator: MutatorWithState<
    UpdateNotificationStatusGQL,
    UpdateNotificationStatusMutation,
    UpdateNotificationStatusMutationVariables
  >
  unsubscribeMutator: MutatorWithState<
    UnsubscribeGQL,
    UnsubscribeMutation,
    UnsubscribeMutationVariables
  >

  notificationTypes: SelectableNotificationReason[] = [
    {
      id: 1,
      type: NotificationReason.Mention,
      iconName: 'notification',
      displayName: 'Mentioned',
    },
    {
      id: 2,
      type: NotificationReason.Subscription,
      iconName: 'book',
      displayName: 'Subscribed',
    },
  ]

  constructor(
    private route: ActivatedRoute,
    private gql: UserNotificationsGQL,
    private networkErrorService: NetworkErrorsService,
    private updateNotificationStatusMuation: UpdateNotificationStatusGQL,
    private unsubscribeMutation: UnsubscribeGQL
  ) {
    this.userId = +this.route.snapshot.params['userId']
    this.updateNotificationStatusMutator = new MutatorWithState(
      networkErrorService
    )
    this.unsubscribeMutator = new MutatorWithState(networkErrorService)
  }

  ngOnInit() {
    this.initialQueryVars = {
      includeRead: this.includeReadInput,
    }

    this.queryRef = this.gql.watch(this.initialQueryVars)
    this.results$ = this.queryRef.valueChanges

    this.connection$ = this.results$.pipe(
      map((r) => r.data?.notifications),
      filter(isNonNulled)
    ) as Observable<NotificationConnection>

    this.pageInfo$ = this.connection$.pipe(
      map((c) => c.pageInfo),
      filter(isNonNulled)
    )

    this.notificationStateObservable$ = this.results$.pipe(
      map((r) => r.data),
      filter(isNonNulled),
      map(({ notifications }) => {
        let checkedMap = new Map<NotificationNodeFragment, Checked>()
        notifications.edges.forEach((e) => {
          if (e.node) {
            let initialChecked = { checked: false }
            checkedMap.set(e.node, initialChecked)
            this.notificationState.set(e.node, initialChecked)
          }
        })
        return checkedMap
      })
    )

    this.notificationSubjects$ = this.results$.pipe(
      map((r) => r.data),
      filter(isNonNulled),
      map(({ notifications }) => {
        return notifications.notificationSubjects.map((ns) => {
          return {
            id: `${ns.subject?.__typename}:${ns.subject?.id}`,
            subjectWithCount: ns,
          }
        })
      })
    )

    this.originatingUsers$ = this.results$.pipe(
      map(({ data }) => {
        return data.notifications.originatingUsers
      })
    )

    this.actions$ = this.results$.pipe(
      map(({ data }) =>
        data.notifications.eventTypes.map((et) => {
          return { id: et }
        })
      )
    )

    this.organizations$ = this.results$.pipe(
      map(({ data }) => {
        return data.notifications.organizations
      })
    )

    this.isLoading$ = this.results$.pipe(
      map(({ loading }) => loading),
      startWith(true)
    )
  }

  fetchMore(endCursor: string) {
    this.queryRef.fetchMore({
      variables: {
        after: endCursor,
      },
    })
  }

  setIncludeRead(includeRead: boolean) {
    this.includeReadInput = includeRead
    this.queryRef.refetch({
      includeRead: this.includeReadInput,
    })
  }

  onNotificationReasonSelected(r: Maybe<SelectableNotificationReason>) {
    this.queryRef.refetch({
      notificationReason: r ? r.type : undefined,
    })
  }

  onNotificationSubjectSelected(s: Maybe<SelectableNotificationSubject>) {
    let orgObj: Maybe<SubscribableInput> = undefined

    if (s !== undefined) {
      let entityType: keyof typeof SubscribableEntities = <
        keyof typeof SubscribableEntities
      >s.subjectWithCount.subject?.__typename
      orgObj = {
        id: s.subjectWithCount.subject!.id,
        entityType: SubscribableEntities[entityType],
      }
    }

    this.queryRef.refetch({
      originatingObject: orgObj,
    })
  }

  onOriginatingUserSelected(s: Maybe<NotificationOriginatingUsersFragment>) {
    this.queryRef.refetch({
      originatingUserId: s?.id,
    })
  }

  onActionSelected(a: Maybe<SelectableAction>) {
    this.queryRef.refetch({
      eventType: a ? a.id : undefined,
    })
  }

  onOrganizationSelected(s: Maybe<NotificationOrganizationFragment>) {
    this.queryRef.refetch({
      organizationId: s?.id,
    })
  }

  markAsRead(id: number) {
    this.updateNotificationStatusMutator.mutate(
      this.updateNotificationStatusMuation,
      {
        input: {
          ids: [id],
          newStatus: ReadStatus.Read,
        },
      }
    )
  }

  markAsUnread(id: number) {
    this.updateNotificationStatusMutator.mutate(
      this.updateNotificationStatusMuation,
      {
        input: {
          ids: [id],
          newStatus: ReadStatus.Unread,
        },
      }
    )
  }

  unsubscribe(id: number, typename: string) {
    let entityType: keyof typeof SubscribableEntities = <
      keyof typeof SubscribableEntities
    >typename
    this.unsubscribeMutator.mutate(this.unsubscribeMutation, {
      input: {
        subscribables: [
          { id: id, entityType: SubscribableEntities[entityType] },
        ],
      },
    })
  }

  onNotificationCheckBoxClicked(notificationId: number, newVal: boolean) {
    let key = Array.from(this.notificationState.keys()).find(
      (e) => e.id === notificationId
    )
    if (key) {
      let foo = this.notificationState.get(key)
      if (foo) {
        foo.checked = newVal
      }
    }
    if (newVal) {
      this.bulkMarkEnabled = true
      if (Array.from(this.notificationState.values()).every((e) => e.checked)) {
        this.allChecked = true
        this.someChecked = false
      } else {
        this.someChecked = true
      }
    } else {
      if (Array.from(this.notificationState.values()).some((e) => e.checked)) {
        this.bulkMarkEnabled = true
        this.allChecked = false
        if (
          Array.from(this.notificationState.values()).every((e) => !e.checked)
        ) {
          this.someChecked = false
        } else {
          this.someChecked = true
        }
      } else {
        this.bulkMarkEnabled = false
        this.allChecked = false
        this.someChecked = false
      }
    }
  }

  onCheckAllCheckBoxClicked(newVal: boolean) {
    if (newVal) {
      this.checkAll()
    } else {
      this.uncheckAll()
    }
  }

  getCheckedIds() {
    let ids: number[] = []
    this.notificationState.forEach((checked, notification) => {
      if (checked.checked) {
        ids.push(notification.id)
      }
    })

    return ids
  }

  checkAll() {
    this.queryRef.refetch().then(() => {
      this.notificationState.forEach((checkedState, _) => {
        checkedState.checked = true
      })
    })
    this.allChecked = true
    this.someChecked = false
    this.bulkMarkEnabled = true
  }

  uncheckAll() {
    this.queryRef.refetch().then(() => {
      this.notificationState.forEach((checkedState, _) => {
        checkedState.checked = false
      })
    })
    this.allChecked = false
    this.someChecked = false
    this.bulkMarkEnabled = false
  }

  bulkMarkRead() {
    this.updateNotificationStatusMutator.mutate(
      this.updateNotificationStatusMuation,
      {
        input: {
          ids: this.getCheckedIds(),
          newStatus: ReadStatus.Read,
        },
      }
    )
    this.uncheckAll()
  }

  bulkMarkUnread() {
    this.updateNotificationStatusMutator.mutate(
      this.updateNotificationStatusMuation,
      {
        input: {
          ids: this.getCheckedIds(),
          newStatus: ReadStatus.Unread,
        },
      }
    )
    this.uncheckAll()
  }

  bulkUnsubscribe() {
    let subscribables: SubscribableInput[] = []
    this.notificationState.forEach((checked, notification) => {
      if (checked.checked && notification.subscription) {
        let entityType: keyof typeof SubscribableEntities = <
          keyof typeof SubscribableEntities
        >notification.subscription.subscribable.__typename
        subscribables.push({
          id: notification.subscription.subscribable.id,
          entityType: SubscribableEntities[entityType],
        })
      }
    })

    this.unsubscribeMutator
      .mutate(this.unsubscribeMutation, {
        input: { subscribables: subscribables },
      })
      .submitSuccess$.subscribe((res) => {
        if (res) {
          this.queryRef.refetch()
        }
      })

    this.uncheckAll()
  }
}

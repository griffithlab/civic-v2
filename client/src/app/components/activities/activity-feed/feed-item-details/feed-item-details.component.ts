import {
  ChangeDetectionStrategy,
  Component,
  input,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core'
import {
  ActivityFeedItemFragment,
  ActivityFeedItemGQL,
  ActivityFeedItemQuery,
  ActivityFeedItemQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import { CommonModule } from '@angular/common'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { activityFeedTypeGuards } from '@app/components/activities/activity-feed/feed-item-details/feed-item-details.types'
import { CvcFlagEntityActivity } from '@app/components/activities/activity-feed/feed-item-details/flag-entity/flag-entity-activity.component'
import { CvcCommentActivity } from './comment/comment-activity.component'
import { distinctUntilChanged, filter, Observable, Subject } from 'rxjs'
import { QueryRef } from 'apollo-angular'
import { ApolloQueryResult } from '@apollo/client/core'
import { CvcAcceptRevisionsActivity } from '@app/components/activities/activity-feed/feed-item-details/accept-revisions/accept-revisions-activity.component'
import { CvcCreateMpActivity } from '@app/components/activities/activity-feed/feed-item-details/create-molecular-profile/create-mp-activity.component'
import { CvcCreateVariantActivity } from '@app/components/activities/activity-feed/feed-item-details/create-variant/create-variant-activity.component'
import { toSignal } from '@angular/core/rxjs-interop'
import { pluck } from 'rxjs-etc/operators'
import { isNonNulled } from 'rxjs-etc'
import { tag } from 'rxjs-spy/operators'

@Component({
  selector: 'cvc-activity-feed-item-details',
  standalone: true,
  imports: [
    CommonModule,
    CvcPipesModule,
    CvcCommentActivity,
    CvcFlagEntityActivity,
    CvcAcceptRevisionsActivity,
    CvcCreateMpActivity,
    CvcCreateVariantActivity,
  ],
  templateUrl: './feed-item-details.component.html',
  styleUrl: './feed-item-details.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityFeedItemDetails implements OnInit {
  cvcActivityId = input.required<number>()

  toggleDetail$: Subject<void>
  queryRef?: QueryRef<ActivityFeedItemQuery, ActivityFeedItemQueryVariables>
  result$?: Observable<ApolloQueryResult<ActivityFeedItemQuery>>

  activity: WritableSignal<Maybe<ActivityFeedItemFragment>>
  guards = activityFeedTypeGuards

  constructor(private gql: ActivityFeedItemGQL) {
    this.toggleDetail$ = new Subject()
    this.activity = signal<Maybe<ActivityFeedItemFragment>>(undefined)
  }

  ngOnInit() {
    this.queryRef = this.gql.watch({
      id: this.cvcActivityId(),
      requestDetails: true,
    })
    this.result$ = this.queryRef.valueChanges
    this.result$
      .pipe(
        pluck('data', 'activity'),
        tag('feed-item-detail activity'),
        filter(isNonNulled)
      )
      .subscribe((activity) => this.activity.set(activity))
  }
}

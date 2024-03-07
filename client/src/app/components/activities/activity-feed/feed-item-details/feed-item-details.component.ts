import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  OnInit,
  Output,
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
import { CvcFlagEntityActivity } from '@app/components/activities/activity-feed/feed-item-details/flag-entity/flag-entity-activity.component'
import { CvcCommentActivity } from './comment/comment-activity.component'
import { filter, Observable, Subject } from 'rxjs'
import { QueryRef } from 'apollo-angular'
import { ApolloQueryResult } from '@apollo/client/core'
import { CvcAcceptRevisionsActivity } from '@app/components/activities/activity-feed/feed-item-details/accept-revisions/accept-revisions-activity.component'
import { CvcCreateMpActivity } from '@app/components/activities/activity-feed/feed-item-details/create-molecular-profile/create-mp-activity.component'
import { CvcCreateVariantActivity } from '@app/components/activities/activity-feed/feed-item-details/create-variant/create-variant-activity.component'
import { pluck } from 'rxjs-etc/operators'
import { isNonNulled } from 'rxjs-etc'
import { tag } from 'rxjs-spy/operators'
import { CvcDeprecateMpActivity } from '@app/components/activities/activity-feed/feed-item-details/deprecate-molecular-profile/deprecate-mp-activity.component'
import { CvcDeprecateVariantActivity } from '@app/components/activities/activity-feed/feed-item-details/deprecate-variant/deprecate-variant-activity.component'
import { CvcModerateAssertionActivity } from '@app/components/activities/activity-feed/feed-item-details/moderate-assertion/moderate-assertion-activity.component'
import { CvcModerateEvidenceActivity } from '@app/components/activities/activity-feed/feed-item-details/moderate-evidence/moderate-evidence-activity.component'
import { CvcRejectRevisionsActivity } from '@app/components/activities/activity-feed/feed-item-details/reject-revisions/reject-revisions-activity.component'
import { CvcResolveFlagActivity } from '@app/components/activities/activity-feed/feed-item-details/resolve-flag/resolve-flag-activity.component'
import { CvcSubmitAssertionActivity } from '@app/components/activities/activity-feed/feed-item-details/submit-assertion/submit-assertion-activity.component'
import { CvcSuggestRevisionsActivity } from '@app/components/activities/activity-feed/feed-item-details/suggest-revisions/suggest-revisions-activity.component'
import { CvcSuggestSourceActivity } from '@app/components/activities/activity-feed/feed-item-details/suggest-source/suggest-source-activity.component'
import { CvcUpdateSourceSuggestionActivity } from '@app/components/activities/activity-feed/feed-item-details/update-source-suggestion/update-source-suggestion-activity.component'
import { CvcSubmitEvidenceActivity } from '@app/components/activities/activity-feed/feed-item-details/submit-evidence/submit-evidence-activity.component'

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
    CvcDeprecateMpActivity,
    CvcDeprecateVariantActivity,
    CvcModerateAssertionActivity,
    CvcModerateEvidenceActivity,
    CvcRejectRevisionsActivity,
    CvcResolveFlagActivity,
    CvcSubmitAssertionActivity,
    CvcSuggestRevisionsActivity,
    CvcSuggestRevisionsActivity,
    CvcSuggestSourceActivity,
    CvcUpdateSourceSuggestionActivity,
    CvcSubmitEvidenceActivity,
  ],
  templateUrl: './feed-item-details.component.html',
  styleUrl: './feed-item-details.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityFeedItemDetails implements OnInit {
  cvcActivityId = input.required<number>()

  queryRef?: QueryRef<ActivityFeedItemQuery, ActivityFeedItemQueryVariables>
  result$?: Observable<ApolloQueryResult<ActivityFeedItemQuery>>

  activity: WritableSignal<Maybe<ActivityFeedItemFragment>>

  constructor(private gql: ActivityFeedItemGQL) {
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
        // tag('feed-item-detail activity'),
        filter(isNonNulled)
      )
      .subscribe((activity) => this.activity.set(activity))
  }
}

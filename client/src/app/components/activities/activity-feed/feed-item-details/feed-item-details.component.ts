import {
  ChangeDetectionStrategy,
  Component,
  EnvironmentInjector,
  Inject,
  inject,
  input,
  OnInit,
  runInInjectionContext,
  Signal,
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
import { debounceTime, filter, Observable } from 'rxjs'
import { QueryRef } from 'apollo-angular'
import { ApolloQueryResult } from '@apollo/client/core'
import { CvcAcceptRevisionsActivity } from '@app/components/activities/activity-feed/feed-item-details/accept-revisions/accept-revisions-activity.component'
import { CvcCreateMpActivity } from '@app/components/activities/activity-feed/feed-item-details/create-molecular-profile/create-mp-activity.component'
import { CvcCreateVariantActivity } from '@app/components/activities/activity-feed/feed-item-details/create-variant/create-variant-activity.component'
import { pluck } from 'rxjs-etc/operators'
import { isNonNulled } from 'rxjs-etc'
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
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { toSignal } from '@angular/core/rxjs-interop'
import { startWith } from 'rxjs/operators'
import { FEED_SCROLL_SERVICE_TOKEN } from '@app/components/activities/activity-feed/activity-feed.component'
import { ScrollerStateService } from '@app/components/activities/activity-feed/feed-scroll-service/feed-scroll.service'

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
    NzSkeletonModule,
  ],
  templateUrl: './feed-item-details.component.html',
  styleUrl: './feed-item-details.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcActivityFeedItemDetails implements OnInit {
  cvcActivityId = input.required<number>()

  // SOURCE STREAMS
  result$?: Observable<ApolloQueryResult<ActivityFeedItemQuery>>

  // PRESENTATION SIGNALS
  $loading!: Signal<boolean>
  $activity!: Signal<Maybe<ActivityFeedItemFragment>>

  injector: EnvironmentInjector
  queryRef?: QueryRef<ActivityFeedItemQuery, ActivityFeedItemQueryVariables>
  constructor(
    private gql: ActivityFeedItemGQL,
    @Inject(FEED_SCROLL_SERVICE_TOKEN)
    private scrollerState: ScrollerStateService
  ) {
    this.injector = inject(EnvironmentInjector)
  }

  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      this.queryRef = this.gql.watch({
        id: this.cvcActivityId(),
        requestDetails: true,
      })
      this.result$ = this.queryRef.valueChanges

      this.$loading = toSignal(
        this.result$.pipe(
          pluck('loading'),
          filter(isNonNulled),
          debounceTime(250),
          startWith(true)
        ),
        { requireSync: true }
      )
      this.$activity = toSignal(
        this.result$.pipe(
          pluck('data', 'activity'),
          // tag('feed-item-detail activity'),
          filter(isNonNulled)
        ),
        { initialValue: undefined }
      )
    })
  }
}

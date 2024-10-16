import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
  input,
  effect,
  ElementRef,
  EnvironmentInjector,
  Signal,
  Inject,
  OnInit,
  output,
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module'
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import { CvcRevisionTagModule } from '@app/components/revisions/revision-tag/revision-tag.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcVariantGroupTagModule } from '@app/components/variant-groups/variant-group-tag/variant-group-tag.module'
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import {
  ActivityFeedItemFragment,
  ActivityFeedItemGQL,
  Maybe,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { Subject } from 'rxjs'
import { CvcCommentActivity } from '../feed-item-details/comment/comment-activity.component'
import { CvcActivityFeedItemDetails } from '../feed-item-details/feed-item-details.component'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { ActivityFeedScope } from '@app/components/activities/activity-feed/activity-feed.types'
import {
  ScrollerState,
  ScrollerStateService,
} from '@app/components/activities/activity-feed/feed-scroll-service/feed-scroll.service'
import { FEED_SCROLL_SERVICE_TOKEN } from '@app/components/activities/activity-feed/activity-feed.component'
import { tag } from 'rxjs-spy/operators'
import { map, skip } from 'rxjs/operators'
import { simpleActivityTypes } from '../activity-feed.config'
import { CvcFeatureVariantTagModule } from '@app/components/shared/feature-variant-tag/feature-variant-tag.module'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcCommentTagModule } from '../../../comments/comment-tag/comment-tag.module'

export type FeedItemToggle = {
  id: number
  showDetails: boolean
}

@UntilDestroy()
@Component({
  selector: 'cvc-activity-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrl: './feed-item.component.less',
  animations: [
    trigger('details', [
      state('hidden', style({ height: 0, 'overflow-y': 'hidden' })),
      state('visible', style({ height: '*', 'overflow-y': 'hidden' })),
      transition('visible <=> hidden', animate('.25s ease-out')),
      transition('hidden <=> visible', animate('.25s ease-in')),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    NzCardModule,
    NzTypographyModule,
    NzIconModule,
    NzTagModule,
    NzGridModule,
    CvcActivityFeedItemDetails,
    CvcPipesModule,
    CvcUserTagModule,
    CvcOrganizationTagModule,
    CvcFeatureTagModule,
    CvcAssertionsTagModule,
    CvcEvidenceTagModule,
    CvcVariantTagModule,
    CvcRevisionTagModule,
    CvcVariantGroupTagModule,
    CvcSourceTagModule,
    CvcMolecularProfileTagModule,
    CvcCommentActivity,
    CvcFeatureVariantTagModule,
    CvcCommentTagModule,
  ],
})
export class CvcActivityFeedItem implements OnInit {
  activity = input<Maybe<ActivityFeedItemFragment>>(undefined, {
    alias: 'cvcActivity',
  })
  scope = input.required<ActivityFeedScope>({ alias: 'cvcScope' })

  $showDetails!: WritableSignal<boolean>
  onToggleDone$: Subject<boolean>

  simpleActivityTypes = simpleActivityTypes

  $scroller: Signal<ScrollerState>
  constructor(
    private gql: ActivityFeedItemGQL,
    private element: ElementRef,
    private injector: EnvironmentInjector,
    @Inject(FEED_SCROLL_SERVICE_TOKEN)
    private scrollerState: ScrollerStateService
  ) {
    this.$showDetails = signal(false)
    this.onToggleDone$ = new Subject()
    this.onToggleDone$
      .pipe(
        skip(1),
        map((show) => ({
          id: this.activity()!.id,
          showDetails: show,
        })),
        untilDestroyed(this)
      )
      .subscribe((item) => {
        this.scrollerState.onToggleItem$.next(item)
      })
    this.$scroller = scrollerState.state.asReadonly()
  }

  ngOnInit(): void {
    const initialDetailState = this.scrollerState
      .state()
      .toggledItems.has(this.activity()!.id)
    this.$showDetails.set(initialDetailState)
  }
}

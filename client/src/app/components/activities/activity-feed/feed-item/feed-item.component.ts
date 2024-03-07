import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  WritableSignal,
  signal,
  input,
  effect,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core'
import { ApolloQueryResult } from '@apollo/client/core'
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module'
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module'
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module'
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
  ActivityFeedItemQuery,
  ActivityFeedItemQueryVariables,
  Maybe,
} from '@app/generated/civic.apollo'
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy'
import { PushPipe } from '@ngrx/component'
import { QueryRef } from 'apollo-angular'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { Observable, Subject } from 'rxjs'
import { tag } from 'rxjs-spy/operators'
import { CvcCommentActivity } from '../feed-item-details/comment/comment-activity.component'
import { CvcActivityFeedItemDetails } from '../feed-item-details/feed-item-details.component'
import { animate, state, style, transition, trigger } from '@angular/animations'
import { ActivityFeedScope } from '@app/components/activities/activity-feed/activity-feed.types'

export type FeedDetailToggle = {
  id: number
  showDetails: boolean
}

@UntilDestroy()
@Component({
  selector: 'cvc-activity-feed-item',
  standalone: true,
  imports: [
    CommonModule,
    PushPipe,
    NzIconModule,
    NzTypographyModule,
    NzGridModule,
    NzButtonModule,
    NzCardModule,
    NzTagModule,
    CvcPipesModule,
    CvcUserTagModule,
    CvcOrganizationTagModule,
    CvcGeneTagModule,
    CvcAssertionsTagModule,
    CvcEvidenceTagModule,
    CvcVariantTagModule,
    CvcRevisionTagModule,
    CvcVariantGroupTagModule,
    CvcSourceTagModule,
    CvcMolecularProfileTagModule,
    CvcCommentActivity,
    CvcActivityFeedItemDetails,
  ],
  templateUrl: './feed-item.component.html',
  styleUrl: './feed-item.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('details', [
      state('hidden', style({ 'max-height': 0 })),
      state('visible', style({ 'max-height': '300px' })),
      transition('visible <=> hidden', animate('.25s ease-out')),
      transition('hidden <=> visible', animate('.25s ease-in')),
    ]),
  ],
})
export class CvcActivityFeedItem implements OnInit {
  activity = input<Maybe<ActivityFeedItemFragment>>(undefined, {
    alias: 'cvcActivity',
  })
  initWithDetails = input<boolean>(false, { alias: 'cvcInitWithDetails' })
  scope = input.required<ActivityFeedScope>({ alias: 'cvcScope' })
  @Output() cvcOnToggleDetail = new EventEmitter<FeedDetailToggle>()

  toggleDetails!: WritableSignal<boolean>
  constructor(private gql: ActivityFeedItemGQL) {
    // effect(() => {
    //   const id = this.activity()?.id
    //   if (id) {
    //     this.cvcOnToggleDetail.next({
    //       id: id,
    //       showDetails: this.toggleDetails(),
    //     })
    //   }
    // })
  }
  ngOnInit() {
    this.toggleDetails = signal(this.initWithDetails())
  }
}

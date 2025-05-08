import { Component, input, Signal } from '@angular/core'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzCollapseModule } from 'ng-zorro-antd/collapse'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import {
  AssertionDetailFieldsFragment,
  EndorsementListNodeFragment,
  Maybe,
} from '@app/generated/civic.apollo'
import {
  ActivityFeedFilters,
  ActivityFeedSettings,
} from '@app/components/activities/activity-feed/activity-feed.types'
import {
  feedDefaultFilters,
  feedDefaultSettings,
} from '@app/components/activities/activity-feed/activity-feed.config'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcEndorsementActionTooltipPipe } from '@app/components/endorsements/endorsement-pipes/endorsement-action-tooltip.pipe'
import { CvcCanRevokeEndorsement } from '@app/components/endorsements/endorsement-pipes/can-revoke-endorsement.pipe'
import { CvcEndorseAssertionButtonComponent } from '@app/components/endorsements/endorse-assertion-button/endorse-assertion-button.component'
import { Viewer, ViewerService } from '@app/core/services/viewer/viewer.service'
import { toSignal } from '@angular/core/rxjs-interop'
import { NzFlexModule } from 'ng-zorro-antd/flex'
import { CvcCanApproveEndorsement } from '@app/components/endorsements/endorsement-pipes/can-approve-endorsement.pipe'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'cvc-endorsement-item',
  imports: [
    CommonModule,
    NzListModule,
    NzTypographyModule,
    NzCollapseModule,
    NzDescriptionsModule,
    NzTagModule,
    NzFlexModule,
    CvcPipesModule,
    CvcActivityFeed,
    CvcUserTagModule,
    CvcOrganizationTagModule,
    CvcEndorsementActionTooltipPipe,
    CvcCanRevokeEndorsement,
    CvcCanApproveEndorsement,
    CvcEndorseAssertionButtonComponent,
  ],
  templateUrl: './endorsement-item.component.html',
  styleUrl: './endorsement-item.component.less',
})
export class CvcEndorsementItemComponent {
  cvcEndorsement = input.required<EndorsementListNodeFragment>()
  cvcAssertion = input.required<AssertionDetailFieldsFragment>()

  viewer: Signal<Maybe<Viewer>>

  constructor(private viewerService: ViewerService) {
    this.viewer = toSignal(this.viewerService.viewer$)
  }

  feedSettings(): ActivityFeedSettings {
    return {
      ...feedDefaultSettings,
      showOrganization: false,
    }
  }

  feedFilters(endorsement: EndorsementListNodeFragment): ActivityFeedFilters {
    return {
      ...feedDefaultFilters,
      linkedEndorsementId: endorsement.id,
      occurredAfter: new Date(endorsement.lastReviewed),
    }
  }
}

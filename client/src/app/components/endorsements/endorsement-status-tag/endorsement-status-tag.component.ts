import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { CvcActivityFeed } from '@app/components/activities/activity-feed/activity-feed.component'
import {
  feedDefaultFilters,
  feedDefaultSettings,
} from '@app/components/activities/activity-feed/activity-feed.config'
import {
  ActivityFeedFilters,
  ActivityFeedSettings,
} from '@app/components/activities/activity-feed/activity-feed.types'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { EndorsementListNodeFragment } from '@app/generated/civic.apollo'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@Component({
  selector: 'cvc-endorsement-status-tag',
  imports: [
    NzTagModule,
    NzPopoverModule,
    NzIconModule,
    NzDescriptionsModule,
    NzTypographyModule,
    NzSpaceModule,
    CvcPipesModule,
    CvcOrganizationTagModule,
    CvcUserTagModule,
    CvcPipesModule,
    CvcActivityFeed,
  ],
  templateUrl: './endorsement-status-tag.component.html',
  styleUrl: './endorsement-status-tag.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvcEndorsementStatusTag {
  cvcEndorsement = input.required<EndorsementListNodeFragment>()
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

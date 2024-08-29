// noinspection TypeScriptValidateTypes

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcActivityFeedComponent } from './activity-feed.component'
import { ScrollerStateService } from './feed-scroll-service/feed-scroll.service'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcActivityFeedCounts } from './feed-counts/feed-counts.component'
import { CvcActivityFeedSettingsButton } from './feed-settings/feed-settings.component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { CvcActivityFeedFilterSelects } from './feed-filters/feed-filters.component'
import { CvcActivityFeedItem } from './feed-item/feed-item.component'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module'
import { PushPipe } from '@ngrx/component'
import { UiScrollModule } from 'ngx-ui-scroll'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcOrganizationTagModule } from '@app/components/organizations/organization-tag/organization-tag.module'
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module'
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module'
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module'
import { CvcRevisionTagModule } from '@app/components/revisions/revision-tag/revision-tag.module'
import { CvcVariantGroupTagModule } from '@app/components/variant-groups/variant-group-tag/variant-group-tag.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcCommentActivity } from './feed-item-details/comment/comment-activity.component'
import { CvcActivityFeedItemDetails } from './feed-item-details/feed-item-details.component'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'

@NgModule({
  declarations: [CvcActivityFeedComponent, CvcActivityFeedItem],
  imports: [
    CommonModule,
    PushPipe,
    NzCardModule,
    NzSpaceModule,
    NzTagModule,
    NzIconModule,
    NzGridModule,
    NzSpinModule,
    UiScrollModule,
    CvcAutoHeightDivModule,
    CvcActivityFeedCounts,
    CvcActivityFeedSettingsButton,
    CvcActivityFeedFilterSelects,
    NzTypographyModule,
    NzGridModule,
    NzButtonModule,
    NzCardModule,
    NzTagModule,
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
    CvcActivityFeedItemDetails,
  ],
  exports: [CvcActivityFeedComponent],
  providers: [ScrollerStateService],
})
export class CvcActivityFeedModule {}

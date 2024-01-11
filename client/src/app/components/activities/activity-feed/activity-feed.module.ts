import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcActivityFeedComponent } from './activity-feed.component'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzFormModule } from 'ng-zorro-antd/form'
import { FormsModule } from '@angular/forms'
import { NzSwitchModule } from 'ng-zorro-antd/switch'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { CvcEventTimelineModule } from '../../events/event-timeline/event-timeline.module'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { CvcParticipantListModule } from '@app/components/shared/participant-list/participant-list.module'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzBadgeModule } from 'ng-zorro-antd/badge'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTimelineModule } from 'ng-zorro-antd/timeline'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module'
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module'
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module'
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module'
import { CvcVariantGroupTagModule } from '@app/components/variant-groups/variant-group-tag/variant-group-tag.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcRevisionTagModule } from '@app/components/revisions/revision-tag/revision-tag.module'
import { NzCollapseModule } from 'ng-zorro-antd/collapse'
import { CvcActivityCardModule } from '../activity-card/activity-card.module'
import { CvcCollapsibleCardModule } from '../collapsible-card/collapsible-card.module'

@NgModule({
  declarations: [CvcActivityFeedComponent],
  imports: [
    CommonModule,
    FormsModule,
    LetDirective,
    PushPipe,
    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzFormModule,
    NzSelectModule,
    NzSwitchModule,
    NzGridModule,
    NzSpaceModule,
    NzEmptyModule,
    NzAvatarModule,
    NzSpinModule,
    NzBadgeModule,
    NzToolTipModule,
    NzTimelineModule,
    NzCollapseModule,
    CvcEventTimelineModule,
    CvcPipesModule,
    CvcParticipantListModule,
    CvcPipesModule,
    CvcUserTagModule,
    CvcGeneTagModule,
    CvcAssertionsTagModule,
    CvcEvidenceTagModule,
    CvcVariantTagModule,
    CvcVariantGroupTagModule,
    CvcSourceTagModule,
    CvcMolecularProfileTagModule,
    CvcRevisionTagModule,
    CvcActivityCardModule,
    CvcCollapsibleCardModule,
  ],
  exports: [CvcActivityFeedComponent],
})
export class CvcActivityFeedModule {}

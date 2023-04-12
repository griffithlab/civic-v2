import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SourceSuggestionsComponent } from './source-suggestions.component'
import { FormsModule } from '@angular/forms'

import { LetModule, PushModule } from '@ngrx/component'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzBadgeModule } from 'ng-zorro-antd/badge'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzCommentModule } from 'ng-zorro-antd/comment'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzSpinModule } from 'ng-zorro-antd/spin'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { EvidenceModule } from '../evidence/evidence.module'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { CvcClinicalTrialTagModule } from '@app/components/clinical-trials/clinical-trial-tag/clinical-trial-tag.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { CvcFlagListAndFilterModule } from '@app/components/flags/flag-list-and-filter/flag-list-and-filter.module'
import { CvcFlaggableModule } from '@app/components/flags/flaggable/flaggable.module'
import { SourceSuggestionsHomeModule } from './source-suggestions-home/source-suggestions-home.module'
import { SourceSuggestionsRoutingModule } from './source-suggestions-routing.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [SourceSuggestionsComponent],
  imports: [
    CommonModule,
    SourceSuggestionsHomeModule,
    CvcEvidenceTableModule,
    CvcLinkTagModule,
    CvcClinicalTrialTagModule,
    CvcSourceTagModule,
    CvcFlagListAndFilterModule,
    CvcFlaggableModule,
    CvcSectionNavigationModule,
    SourceSuggestionsRoutingModule,

    NzAvatarModule,
    NzBadgeModule,
    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzCommentModule,
    NzFormModule,
    NzDescriptionsModule,
    NzDropDownModule,
    NzGridModule,
    NzListModule,
    NzPageHeaderModule,
    NzPopoverModule,
    NzSpaceModule,
    NzSpinModule,
    NzSkeletonModule,
    NzTableModule,
    NzTabsModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
    LetModule,
    PushModule,
    NzInputModule,
    FormsModule,

    EvidenceModule,

    NzSelectModule,
    CvcPipesModule
  ],
  exports: [],
})
export class SourceSuggestionsModule {}

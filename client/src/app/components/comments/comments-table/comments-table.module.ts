import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module'
import { CvcCommentTagModule } from '@app/components/comments/comment-tag/comment-tag.module'
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'
import { CvcFlagTagModule } from '@app/components/flags/flag-tag/flag-tag.module'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcRevisionTagModule } from '@app/components/revisions/revision-tag/revision-tag.module'
import { CvcFeatureVariantTagModule } from '@app/components/shared/feature-variant-tag/feature-variant-tag.module'
import { CvcNoMoreRowsModule } from '@app/components/shared/no-more-rows/no-more-rows.module'
import { CvcTableCountsModule } from '@app/components/shared/table-counts/table-counts.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcVariantGroupTagModule } from '@app/components/variant-groups/variant-group-tag/variant-group-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module'
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module'
import { CvcTableScrollModule } from '@app/directives/table-scroll/table-scroll.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { CvcCommentsTableComponent } from './comments-table.component'

@NgModule({
  declarations: [CvcCommentsTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    LetDirective,
    PushPipe,

    NzCardModule,
    NzIconModule,
    NzTableModule,
    NzTagModule,
    NzToolTipModule,

    CvcPipesModule,
    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
    CvcNoMoreRowsModule,
    CvcTableCountsModule,
    CvcTableScrollModule,

    CvcAssertionsTagModule,
    CvcCommentTagModule,
    CvcEvidenceTagModule,
    CvcFeatureTagModule,
    CvcFeatureVariantTagModule,
    CvcFlagTagModule,
    CvcMolecularProfileTagModule,
    CvcRevisionTagModule,
    CvcSourceTagModule,
    CvcUserTagModule,
    CvcVariantGroupTagModule,
  ],
  exports: [CvcCommentsTableComponent],
})
export class CvcCommentsTableModule {}

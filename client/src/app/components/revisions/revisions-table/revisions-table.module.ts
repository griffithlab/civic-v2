import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CvcDiseaseTagModule } from '@app/components/diseases/disease-tag/disease-tag.module'
import { CvcEvidenceTagModule } from '@app/components/evidence/evidence-tag/evidence-tag.module'
import { CvcMolecularProfileTagModule } from '@app/components/molecular-profiles/molecular-profile-tag/molecular-profile-tag.module'
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module'
import { CvcNoMoreRowsModule } from '@app/components/shared/no-more-rows/no-more-rows.module'
import { CvcTableCountsModule } from '@app/components/shared/table-counts/table-counts.module'
import { CvcTagListModule } from '@app/components/shared/tag-list/tag-list.module'
import { CvcTagOverflowModule } from '@app/components/shared/tag-overflow/tag-overflow.module'
import { CvcTherapyTagModule } from '@app/components/therapies/cvc-therapy-tag/cvc-therapy-tag.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module'
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module'
import { CvcTableScrollModule } from '@app/directives/table-scroll/table-scroll.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { NzRadioModule } from 'ng-zorro-antd/radio'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { CvcRevisionsTableComponent } from './revisions-table.component'
import { CvcAssertionsTagModule } from '@app/components/assertions/assertions-tag/assertions-tag.module'
import { CvcFeatureTagModule } from '@app/components/features/feature-tag/feature-tag.module'
import { CvcCommentTagModule } from '@app/components/comments/comment-tag/comment-tag.module'
import { CvcFeatureVariantTagModule } from '@app/components/shared/feature-variant-tag/feature-variant-tag.module'
import { CvcRevisionTagModule } from '../revision-tag/revision-tag.module'
import { CvcVariantGroupTagModule } from '@app/components/variant-groups/variant-group-tag/variant-group-tag.module'
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module'
import { CvcUserTagModule } from '@app/components/users/user-tag/user-tag.module'
import { CvcActivityRevision } from '@app/components/activities/activity-feed/feed-item-details/shared/activity-revision/activity-revision.component'

@NgModule({
  declarations: [CvcRevisionsTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    LetDirective,
    PushPipe,

    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzSelectModule,
    NzTableModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
    NzDropDownModule,
    NzRadioModule,
    NzCheckboxModule,

    CvcFeatureTagModule,
    CvcAssertionsTagModule,
    CvcCommentTagModule,
    CvcEvidenceTagModule,
    CvcFeatureVariantTagModule,
    CvcRevisionTagModule,
    CvcVariantGroupTagModule,
    CvcSourceTagModule,
    CvcMolecularProfileTagModule,
    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
    CvcClearableInputFilterModule,
    CvcClearableInputFilterModule,
    CvcDiseaseTagModule,
    CvcTherapyTagModule,
    CvcNoMoreRowsModule,
    CvcPipesModule,
    CvcTableCountsModule,
    CvcTableScrollModule,
    CvcTagListModule,
    CvcTagOverflowModule,
    CvcUserTagModule,
    CvcActivityRevision,
  ],
  exports: [CvcRevisionsTableComponent],
})
export class CvcRevisionsTableModule {}

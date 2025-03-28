import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { CvcDiseaseTagModule } from '@app/components/diseases/disease-tag/disease-tag.module'
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
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'
import { NzFormModule } from 'ng-zorro-antd/form'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzInputModule } from 'ng-zorro-antd/input'
import { NzSelectModule } from 'ng-zorro-antd/select'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcEvidenceTagModule } from '../evidence-tag/evidence-tag.module'
import { CvcEvidenceTableComponent } from './evidence-table.component'
import { NzDropDownModule } from 'ng-zorro-antd/dropdown'
import { NzRadioModule } from 'ng-zorro-antd/radio'

@NgModule({
  declarations: [CvcEvidenceTableComponent],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    FormsModule,

    NzButtonModule,
    NzCardModule,
    NzCheckboxModule,
    NzFormModule,
    NzIconModule,
    NzInputModule,
    NzSelectModule,
    NzSpaceModule,
    NzTableModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,
    NzDropDownModule,
    NzRadioModule,
    NzCheckboxModule,

    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
    CvcClearableInputFilterModule,
    CvcDiseaseTagModule,
    CvcTherapyTagModule,
    CvcEvidenceTagModule,
    CvcPipesModule,
    CvcNoMoreRowsModule,
    CvcTableCountsModule,
    CvcTableScrollModule,
    CvcTagListModule,
    CvcTagOverflowModule,
    CvcMolecularProfileTagModule,
  ],
  exports: [CvcEvidenceTableComponent],
})
export class CvcEvidenceTableModule {}

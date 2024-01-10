import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { CvcNoMoreRowsModule } from '@app/components/shared/no-more-rows/no-more-rows.module'
import { CvcTableCountsModule } from '@app/components/shared/table-counts/table-counts.module'
import { CvcTagOverflowModule } from '@app/components/shared/tag-overflow/tag-overflow.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module'
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module'
import { CvcTableScrollModule } from '@app/directives/table-scroll/table-scroll.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcDiseaseTagModule } from '../cvc-disease-tag/cvc-disease-tag.module'
import { CvcDiseasesTableComponent } from './diseases-table.component'

@NgModule({
  declarations: [CvcDiseasesTableComponent],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,

    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzIconModule,
    NzTableModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,

    CvcPipesModule,
    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
    CvcClearableInputFilterModule,
    CvcDiseaseTagModule,
    CvcLinkTagModule,
    CvcNoMoreRowsModule,
    CvcTableCountsModule,
    CvcTableScrollModule,
    CvcTagOverflowModule,
  ],
  exports: [CvcDiseasesTableComponent],
})
export class CvcDiseasesTableModule {}

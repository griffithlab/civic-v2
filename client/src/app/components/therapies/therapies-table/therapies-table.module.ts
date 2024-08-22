import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcTherapiesTableComponent } from './therapies-table.component'
import { NzTableModule } from 'ng-zorro-antd/table'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module'
import { LetDirective, PushPipe } from '@ngrx/component'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module'
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module'
import { CvcTableScrollModule } from '@app/directives/table-scroll/table-scroll.module'
import { CvcTableCountsModule } from '@app/components/shared/table-counts/table-counts.module'
import { CvcNoMoreRowsModule } from '@app/components/shared/no-more-rows/no-more-rows.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcTherapyTagModule } from '../cvc-therapy-tag/cvc-therapy-tag.module'
import { CvcPlainTagOverflowModule } from '@app/components/shared/plain-tag-overflow/plain-tag-overflow.module'

@NgModule({
  declarations: [CvcTherapiesTableComponent],
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
    CvcTherapyTagModule,
    CvcLinkTagModule,
    CvcNoMoreRowsModule,
    CvcTableCountsModule,
    CvcTableScrollModule,
    CvcPlainTagOverflowModule,
  ],
  exports: [CvcTherapiesTableComponent],
})
export class CvcTherapiesTableModule {}

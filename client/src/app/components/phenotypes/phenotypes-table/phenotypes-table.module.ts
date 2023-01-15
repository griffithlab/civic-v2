import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcPhenotypesTableComponent } from './phenotypes-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcPhenotypeTagModule } from '../phenotype-tag/phenotype-tag.module';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { LetModule, PushModule } from '@ngrx/component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module';
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module';
import { CvcNoMoreRowsModule } from '@app/components/shared/no-more-rows/no-more-rows.module';
import { CvcTableScrollModule } from '@app/directives/table-scroll/table-scroll.module';
import { CvcTableCountsModule } from '@app/components/shared/table-counts/table-counts.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';

@NgModule({
  declarations: [CvcPhenotypesTableComponent],
  imports: [
    CommonModule,
    LetModule, PushModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    NzTypographyModule,
    NzCardModule,
    NzToolTipModule,
    NzTagModule,
    CvcPipesModule,
    CvcNoMoreRowsModule,
    CvcTableScrollModule,
    CvcTableCountsModule,
    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
    CvcClearableInputFilterModule,
    CvcPhenotypeTagModule,
    CvcLinkTagModule,
  ],
  exports: [CvcPhenotypesTableComponent],
})
export class CvcPhenotypesTableModule {}

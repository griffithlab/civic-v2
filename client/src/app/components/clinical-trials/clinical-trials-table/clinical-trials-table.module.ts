import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcNoMoreRowsModule } from '@app/components/shared/no-more-rows/no-more-rows.module';
import { CvcTableCountsModule } from '@app/components/shared/table-counts/table-counts.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module';
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module';
import { CvcTableScrollModule } from '@app/directives/table-scroll/table-scroll.module';
import { LetModule, PushModule } from '@ngrx/component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcClinicalTrialTagModule } from '../clinical-trial-tag/clinical-trial-tag.module';
import { CvcClinicalTrialsTableComponent } from './clinical-trials-table.component';

@NgModule({
  declarations: [CvcClinicalTrialsTableComponent],
  imports: [
    CommonModule,
    LetModule, PushModule,

    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzTableModule,
    NzTagModule,
    NzToolTipModule,
    NzTypographyModule,

    CvcPipesModule,
    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
    CvcClearableInputFilterModule,
    CvcClinicalTrialTagModule,
    CvcNoMoreRowsModule,
    CvcTableCountsModule,
    CvcTableScrollModule,
  ],
  exports: [CvcClinicalTrialsTableComponent],
})
export class CvcClinicalTrialsTableModule {}

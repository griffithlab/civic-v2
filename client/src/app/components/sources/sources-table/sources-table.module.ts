import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcSourcesTableComponent } from './sources-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { FormsModule } from '@angular/forms';
import { CvcSourceTagModule } from '../source-tag/source-tag.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcPlainTagOverflowModule } from '@app/components/shared/plain-tag-overflow/plain-tag-overflow.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module';
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module';
import { NzTagModule } from 'ng-zorro-antd/tag';

@NgModule({
  declarations: [CvcSourcesTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveComponentModule,
    NzTableModule,
    NzSelectModule,
    NzIconModule,
    NzTypographyModule,
    NzCardModule,
    NzButtonModule,
    NzTagModule,
    NzToolTipModule,
    CvcClearableInputFilterModule,
    CvcSourceTagModule,
    CvcPlainTagOverflowModule,
    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
  ],
  exports: [CvcSourcesTableComponent]
})
export class CvcSourcesTableModule { }

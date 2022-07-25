import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcNoMoreRowsModule } from '@app/components/shared/no-more-rows/no-more-rows.module';
import { CvcTableCountsModule } from '@app/components/shared/table-counts/table-counts.module';
import { CvcTagOverflowModule } from '@app/components/shared/tag-overflow/tag-overflow.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module';
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module';
import { CvcTableScrollModule } from '@app/directives/table-scroll/table-scroll.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TimeagoModule } from 'ngx-timeago';
import { CvcOrganizationTagModule } from '../organization-tag/organization-tag.module';
import { CvcOrganizationsTableComponent } from './organizations-table.component';

@NgModule({
  declarations: [CvcOrganizationsTableComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,

    NzIconModule,
    NzTableModule,
    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzTypographyModule,
    NzTagModule,

    TimeagoModule,

    CvcNoMoreRowsModule,
    CvcTableCountsModule,
    CvcTableScrollModule,
    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
    CvcClearableInputFilterModule,
    CvcOrganizationTagModule,
    CvcTagOverflowModule,
    CvcPipesModule,
  ],
  exports: [CvcOrganizationsTableComponent]
})
export class CvcOrganizationsTableModule { }

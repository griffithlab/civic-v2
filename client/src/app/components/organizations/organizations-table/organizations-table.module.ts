import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcOrganizationsTableComponent } from './organizations-table.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcOrganizationTagModule } from '../organization-tag/organization-tag.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcTagOverflowModule } from '@app/components/shared/tag-overflow/tag-overflow.module';
import { TimeagoModule } from 'ngx-timeago';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { CvcAutoHeightCardModule } from '@app/directives/auto-height-card/auto-height-card.module';
import { CvcAutoHeightTableModule } from '@app/directives/auto-height-table/auto-height-table.module';
import { NzTagModule } from 'ng-zorro-antd/tag';



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
    CvcAutoHeightCardModule,
    CvcAutoHeightTableModule,
    CvcClearableInputFilterModule,
    CvcOrganizationTagModule,
    CvcTagOverflowModule,
    TimeagoModule
  ],
  exports: [CvcOrganizationsTableComponent]
})
export class CvcOrganizationsTableModule { }
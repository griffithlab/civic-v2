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



@NgModule({
  declarations: [CvcOrganizationsTableComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzIconModule,
    NzTableModule,
    NzButtonModule,
    CvcClearableInputFilterModule,
    CvcOrganizationTagModule,
    CvcTagOverflowModule,
    TimeagoModule
  ],
  exports: [CvcOrganizationsTableComponent]
})
export class CvcOrganizationsTableModule { }

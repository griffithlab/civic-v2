import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcOrganizationsTableComponent } from './organizations-table.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcOrganizationTagModule } from '../organization-tag/organization-tag.module';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [CvcOrganizationsTableComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzIconModule,
    NzTableModule,
    CvcClearableInputFilterModule,
    CvcOrganizationTagModule,
  ],
  exports: [CvcOrganizationsTableComponent]
})
export class CvcOrganizationsTableModule { }

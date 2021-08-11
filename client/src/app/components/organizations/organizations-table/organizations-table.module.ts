import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationsTableComponent } from './organizations-table.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';



@NgModule({
  declarations: [OrganizationsTableComponent],
  imports: [
    CommonModule,
    NzIconModule,
    NzTableModule,
    CvcClearableInputFilterModule,

  ],
  exports: [OrganizationsTableComponent]
})
export class OrganizationsTableModule { }

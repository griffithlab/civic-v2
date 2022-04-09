import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { OrganizationsHomePage } from './organizations-home.page';
import { CvcOrganizationsTableModule } from '@app/components/organizations/organizations-table/organizations-table.module';

@NgModule({
  declarations: [OrganizationsHomePage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,
    CvcOrganizationsTableModule
  ],
})
export class OrganizationsHomeModule { }

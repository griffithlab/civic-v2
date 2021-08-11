import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { OrganizationsHomePage } from './organizations-home.page';

@NgModule({
  declarations: [OrganizationsHomePage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,
  ],
  exports: [OrganizationsHomePage]
})
export class OrganizationsHomeModule { }

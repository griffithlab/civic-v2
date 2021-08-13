import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantGroupsHomePage } from './variant-groups-home.page';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CvcVariantGroupsTableModule } from '@app/components/variant-groups/variant-groups-table/variant-groups-table.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [VariantGroupsHomePage],
  imports: [
    CommonModule,
    NzGridModule,
    NzPageHeaderModule,
    NzIconModule,
    CvcVariantGroupsTableModule
  ],
  exports: [VariantGroupsHomePage]
})
export class VariantGroupsHomeModule { }

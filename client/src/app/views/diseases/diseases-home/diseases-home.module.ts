import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiseasesHomePage } from './diseases-home.page';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcDiseasesTableModule } from '@app/components/diseases/diseases-table/diseases-table.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';

@NgModule({
  declarations: [DiseasesHomePage],
  imports: [
    CommonModule,
    NzIconModule,
    NzPageHeaderModule,
    NzGridModule,
    CvcSectionNavigationModule,
    CvcDiseasesTableModule,
  ],
  exports: [DiseasesHomePage]
})
export class DiseasesHomeModule { }

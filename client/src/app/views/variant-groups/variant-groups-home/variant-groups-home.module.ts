import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantGroupsHomePage } from './variant-groups-home.page';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CvcVariantGroupsTableModule } from '@app/components/variant-groups/variant-groups-table/variant-groups-table.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { RouterModule } from '@angular/router';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpaceModule } from 'ng-zorro-antd/space';

@NgModule({
  declarations: [VariantGroupsHomePage],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzButtonModule,
    NzGridModule,
    NzPageHeaderModule,
    NzIconModule,
    NzTypographyModule,
    NzSpaceModule,
    CvcVariantGroupsTableModule,
    CvcSectionNavigationModule,
  ],
  exports: [VariantGroupsHomePage]
})
export class VariantGroupsHomeModule { }

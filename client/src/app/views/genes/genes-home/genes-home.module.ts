import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesHomePage } from './genes-home.page';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcGenesTableModule } from '@app/components/genes/genes-table/genes-table.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [GenesHomePage],
  imports: [
    CommonModule,
    CvcSectionNavigationModule,
    CvcGenesTableModule,
    NzButtonModule,
    NzIconModule,
    NzSpaceModule,
    NzTypographyModule,
    NzPageHeaderModule,
    NzGridModule
  ],
  exports: [GenesHomePage]
})
export class GenesHomeModule { }

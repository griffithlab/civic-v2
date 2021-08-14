import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenesHomePage } from './genes-home.page';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcGenesTableModule } from '@app/components/genes/genes-table/genes-table.module';
import { SectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [GenesHomePage],
  imports: [
    CommonModule,
    SectionNavigationModule,
    CvcGenesTableModule,
    NzIconModule,
    NzPageHeaderModule,
    NzGridModule
  ],
  exports: [GenesHomePage]
})
export class GenesHomeModule { }

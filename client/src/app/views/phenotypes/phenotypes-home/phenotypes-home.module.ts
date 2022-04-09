import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CvcPhenotypesTableModule } from '@app/components/phenotypes/phenotypes-table/phenotypes-table.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { PhenotypesHomePage } from './phenotypes-home.page';

@NgModule({
  declarations: [PhenotypesHomePage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,
    CvcSectionNavigationModule,
    CvcPhenotypesTableModule
  ],
})
export class PhenotypesHomeModule { }

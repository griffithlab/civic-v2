import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhenotypesHomePage } from './phenotypes-home.page';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { CvcPhenotypesTableModule } from '@app/components/phenotypes/phenotypes-table/phenotypes-table.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [PhenotypesHomePage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,
    CvcPhenotypesTableModule
  ],
  exports: [PhenotypesHomePage]
})
export class PhenotypesHomeModule { }

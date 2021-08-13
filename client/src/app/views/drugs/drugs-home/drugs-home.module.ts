import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugsHomePage } from './drugs-home.page';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcDrugsTableModule } from '@app/components/drugs/drugs-table/drugs-table.module';

@NgModule({
  declarations: [DrugsHomePage],
  imports: [
    CommonModule,
    NzIconModule,
    NzPageHeaderModule,
    NzGridModule,
    CvcDrugsTableModule,
  ],
  exports: [DrugsHomePage]
})
export class DrugsHomeModule { }

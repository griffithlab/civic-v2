import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourcesHomePage } from './sources-home.page';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcSourcesTableModule } from '@app/components/sources/sources-table/sources-table.module';

@NgModule({
  declarations: [SourcesHomePage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,
    CvcSourcesTableModule,
  ],
  exports: [SourcesHomePage]
})
export class SourcesHomeModule { }

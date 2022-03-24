import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourcesHomePage } from './sources-home.page';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcSourcesTableModule } from '@app/components/sources/sources-table/sources-table.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [SourcesHomePage],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    CvcSectionNavigationModule,
    CvcSourcesTableModule,
  ],
  exports: [SourcesHomePage]
})
export class SourcesHomeModule { }

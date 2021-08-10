import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssertionsHomePage } from './assertions-home.page';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [AssertionsHomePage],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzIconModule,
    NzTypographyModule,
    NzPageHeaderModule,
    NzGridModule,
    NzSwitchModule,
    CvcAssertionsTableModule
  ],
  exports: [AssertionsHomePage]
})
export class AssertionsHomeModule { }

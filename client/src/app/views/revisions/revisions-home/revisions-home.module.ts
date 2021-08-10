import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { RevisionsHomePage } from './revisions-home.page';

@NgModule({
  declarations: [RevisionsHomePage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,
  ],
  exports: [RevisionsHomePage]
})
export class RevisionsHomeModule { }

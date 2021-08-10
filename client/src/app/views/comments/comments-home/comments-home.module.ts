import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';

import { CommentsHomePage } from './comments-home.page';

@NgModule({
  declarations: [CommentsHomePage],
  imports: [
    CommonModule,
    NzPageHeaderModule,
    NzIconModule,
    NzGridModule,
  ],
  exports: [CommentsHomePage]
})
export class CommentsHomeModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { CommentsHomeModule } from './comments-home/comments-home.module';
import { NzIconModule } from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    NzIconModule,
    CommentsHomeModule,
  ],
  exports: [
  ]
})
export class CommentsModule { }

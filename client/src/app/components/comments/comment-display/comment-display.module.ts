import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcCommentDisplayComponent } from './comment-display.component';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { TimeagoModule } from 'ngx-timeago';

@NgModule({
  declarations: [CvcCommentDisplayComponent],
  imports: [
    CommonModule,
    NzCommentModule,
    NzAvatarModule,
    TimeagoModule.forChild(),
  ],
  exports: [CvcCommentDisplayComponent]
})
export class CvcCommentDisplayModule { }

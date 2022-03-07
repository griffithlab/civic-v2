import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcCommentListModule } from '@app/components/comments/comment-list/comment-list.module';
import { AssertionsCommentsComponent } from './assertions-comments.component';

@NgModule({
  declarations: [AssertionsCommentsComponent],
  imports: [
    CommonModule,
    CvcCommentListModule,
  ],
  exports: [AssertionsCommentsComponent]
})
export class AssertionsCommentsModule { }

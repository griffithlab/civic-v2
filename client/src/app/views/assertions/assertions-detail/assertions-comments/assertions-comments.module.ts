import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcCommentListModule } from '@app/components/comments/comment-list/comment-list.module';
import { AssertionsCommentsPage } from './assertions-comments.page';

@NgModule({
  declarations: [AssertionsCommentsPage],
  imports: [
    CommonModule,
    CvcCommentListModule,
  ],
  exports: [AssertionsCommentsPage]
})
export class AssertionsCommentsModule { }

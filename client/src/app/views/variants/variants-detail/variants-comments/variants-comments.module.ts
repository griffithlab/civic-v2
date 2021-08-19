import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantsCommentsPage } from './variants-comments.page';
import { CvcCommentListModule } from '@app/components/comments/comment-list/comment-list.module';

@NgModule({
  declarations: [VariantsCommentsPage],
  imports: [
    CommonModule,
    CvcCommentListModule
  ],
  exports: [VariantsCommentsPage],
})
export class VariantsCommentsModule { }

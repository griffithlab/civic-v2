import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcCommentListModule } from '@app/components/comments/comment-list/comment-list.module';
import { SourcesCommentsPage } from './sources-comments.page';

@NgModule({
  declarations: [SourcesCommentsPage],
  imports: [CommonModule, CvcCommentListModule],
  exports: [SourcesCommentsPage],
})
export class SourcesCommentsModule {}

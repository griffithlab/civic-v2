import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { GenesCommentsPage } from './genes-comments.page'
import { CvcCommentListModule } from '@app/components/comments/comment-list/comment-list.module'

@NgModule({
  declarations: [GenesCommentsPage],
  imports: [CommonModule, CvcCommentListModule],
  exports: [GenesCommentsPage],
})
export class GenesCommentsModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EvidenceCommentsPage } from './evidence-comments.page'
import { CvcCommentListModule } from '@app/components/comments/comment-list/comment-list.module'

@NgModule({
  declarations: [EvidenceCommentsPage],
  imports: [CommonModule, CvcCommentListModule],
})
export class EvidenceCommentsModule {}

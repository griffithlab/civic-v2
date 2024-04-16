import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FeaturesCommentsPage } from './features-comments.page'
import { CvcCommentListModule } from '@app/components/comments/comment-list/comment-list.module'

@NgModule({
  declarations: [FeaturesCommentsPage],
  imports: [CommonModule, CvcCommentListModule],
  exports: [FeaturesCommentsPage],
})
export class FeaturesCommentsModule {}

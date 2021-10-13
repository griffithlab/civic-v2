import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceCommentsComponent } from './evidence-comments.component';
import { CvcCommentListModule } from '@app/components/comments/comment-list/comment-list.module';

@NgModule({
  declarations: [EvidenceCommentsComponent],
  imports: [
    CommonModule,
    CvcCommentListModule
  ]
})
export class EvidenceCommentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcCommentListModule } from '@app/components/comments/comment-list/comment-list.module';
import { MolecularProfilesCommentsPage } from './molecular-profiles-comments.page';

@NgModule({
  declarations: [MolecularProfilesCommentsPage],
  imports: [CommonModule, CvcCommentListModule],
  exports: [MolecularProfilesCommentsPage],
})
export class MolecularProfilesCommentsModule {}

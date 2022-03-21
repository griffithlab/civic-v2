import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VariantGroupsCommentsPage } from './variant-groups-comments.page';
import { CvcCommentListModule } from '@app/components/comments/comment-list/comment-list.module';

@NgModule({
  declarations: [VariantGroupsCommentsPage],
  imports: [
    CommonModule,
    CvcCommentListModule,
  ],
  exports: [VariantGroupsCommentsPage],

})
export class VariantGroupsCommentsModule { }

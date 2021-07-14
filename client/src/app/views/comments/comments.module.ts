import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconsProviderModule } from '@app/icons-provider.module';
import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { CommentsBrowseComponent } from './comments-browse/comments-browse.component';


@NgModule({
  declarations: [
    CommentsComponent,
    CommentsBrowseComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    IconsProviderModule
  ],
  exports: [
    CommentsBrowseComponent
  ]
})
export class CommentsModule { }

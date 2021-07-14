import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsBrowseComponent } from './comments-browse/comments-browse.component';
import { CommentsComponent } from './comments.component';

const routes: Routes = [
  {
    path: '', component: CommentsComponent,
    children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      {
        path: 'browse',
        component: CommentsBrowseComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsRoutingModule { }

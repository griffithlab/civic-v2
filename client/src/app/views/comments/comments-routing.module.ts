import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsHomePage } from './comments-home/comments-home.page';
import { CommentsComponent } from './comments.component';

const routes: Routes = [
  {
    path: '',
    component: CommentsComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: CommentsHomePage
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentsRoutingModule { }

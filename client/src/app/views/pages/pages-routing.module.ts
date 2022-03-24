import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesContactComponent } from './pages-contact/pages-contact.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'contact',
        component: PagesContactComponent
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

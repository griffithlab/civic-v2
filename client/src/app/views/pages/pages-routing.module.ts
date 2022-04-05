import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesAboutPage } from './pages-about/pages-about.page';
import { PagesHelpPage } from './pages-help/pages-help.page';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'about',
        component: PagesAboutPage
      },
      {
        path: 'help',
        component: PagesHelpPage
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

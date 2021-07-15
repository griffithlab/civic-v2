import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesAboutComponent } from './pages-about/pages-about.component';
import { PagesContactComponent } from './pages-contact/pages-contact.component';
import { PagesHelpComponent } from './pages-help/pages-help.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'about',
        component: PagesAboutComponent
      },
      {
        path: 'help',
        component: PagesHelpComponent
      },
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

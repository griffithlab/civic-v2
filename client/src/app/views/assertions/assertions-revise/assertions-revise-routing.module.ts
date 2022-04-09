import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssertionsReviseView } from './assertions-revise.view';
import { AssertionSuggestModule } from './assertion-suggest/assertion-suggest.module';
import { AssertionSuggestPage } from './assertion-suggest/assertion-suggest.page';

const routes: Routes = [
  {
    path: '',
    component: AssertionsReviseView,
    data: { breadcrumb: 'Revise' },
    children: [
      { path: '', redirectTo: 'suggest', pathMatch: 'full' },
      {
        path: 'suggest',
        component: AssertionSuggestPage,
        data: {
          breadcrumb: 'Suggest Revision'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), AssertionSuggestModule],
  exports: [RouterModule],
})
export class AssertionsReviseRoutingModule { }

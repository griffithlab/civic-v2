import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AssertionAddView } from './assertion-add.view'
import { AssertionSubmitModule } from './assertion-submit/assertion-submit.module'
import { AssertionSubmitPage } from './assertion-submit/assertion-submit.page'

const routes: Routes = [
  {
    path: '',
    component: AssertionAddView,
    children: [
      { path: '', redirectTo: 'submit', pathMatch: 'full' },
      {
        path: 'submit',
        component: AssertionSubmitPage,
        data: {
          breadcrumb: 'Submit New Assertion',
        },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes), AssertionSubmitModule],
  exports: [RouterModule],
})
export class AssertionAddRoutingModule {}

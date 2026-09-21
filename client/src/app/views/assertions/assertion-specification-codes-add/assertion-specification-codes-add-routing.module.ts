import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AssertionSpecificationCodesAddView } from './assertion-specification-codes-add.view'
import { AssertionSpecificationCodesSubmitModule } from './assertion-specification-codes-submit/assertion-specification-codes-submit.module'
import { AssertionSpecificationCodesSubmitPage } from './assertion-specification-codes-submit/assertion-specification-codes-submit.page'

const routes: Routes = [
  {
    path: '',
    component: AssertionSpecificationCodesAddView,
    children: [
      { path: '', redirectTo: 'specification_codes_submit', pathMatch: 'full' },
      {
        path: 'specification_codes_submit',
        component: AssertionSpecificationCodesSubmitPage,
        data: {
          breadcrumb: 'Add',
        },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes), AssertionSpecificationCodesSubmitModule],
  exports: [RouterModule],
})
export class AssertionSpecificationCodesAddRoutingModule {}

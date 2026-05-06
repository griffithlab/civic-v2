import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { VariantsReviseView } from './variants-revise.view'
import { VariantsSuggestModule } from './variants-suggest/variants-suggest.module'
import { VariantsSuggestPage } from './variants-suggest/variants-suggest.page'

const routes: Routes = [
  {
    path: '',
    component: VariantsReviseView,
    data: { breadcrumb: 'Revise' },
    children: [
      { path: '', redirectTo: 'suggest', pathMatch: 'full' },
      {
        path: 'suggest',
        component: VariantsSuggestPage,
        data: {
          breadcrumb: 'Suggest Revision',
        },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes), VariantsSuggestModule],
  exports: [RouterModule],
})
export class VariantsReviseRoutingModule {}

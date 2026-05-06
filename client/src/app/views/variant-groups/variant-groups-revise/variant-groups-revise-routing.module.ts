import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { VariantGroupsReviseView } from './variant-groups-revise.view'
import { VariantGroupSuggestModule } from './variant-group-suggest/variant-group-suggest.module'
import { VariantGroupSuggestPage } from './variant-group-suggest/variant-group-suggest.page'

const routes: Routes = [
  {
    path: '',
    component: VariantGroupsReviseView,
    data: { breadcrumb: 'Revise' },
    children: [
      { path: '', redirectTo: 'suggest', pathMatch: 'full' },
      {
        path: 'suggest',
        component: VariantGroupSuggestPage,
        data: {
          breadcrumb: 'Suggest Revision',
        },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes), VariantGroupSuggestModule],
  exports: [RouterModule],
})
export class VariantGroupsReviseRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VariantGroupsAddView } from './variant-groups-add.view';
import { VariantGroupSubmitModule } from './variant-group-submit/variant-group-submit.module';
import { VariantGroupSubmitPage } from './variant-group-submit/variant-group-submit.page';

const routes: Routes = [
  {
    path: '',
    component: VariantGroupsAddView,
    children: [
      { path: '', redirectTo: 'submit', pathMatch: 'full' },
      {
        path: 'submit',
        component: VariantGroupSubmitPage,
        data: {
          breadcrumb: 'Submit New Variant Groups',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), VariantGroupSubmitModule],
  exports: [RouterModule],
})
export class VariantGroupsAddRoutingModule {}

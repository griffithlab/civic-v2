import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariantsView } from './variants.view';
import { VariantsHomeModule } from './variants-home/variants-home.module';
import { VariantsHomePage } from './variants-home/variants-home.page';

const routes: Routes = [
  {
    path: '',
    component: VariantsView,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: VariantsHomePage,
        data: {
          breadcrumb: 'Home',
        },
      },
      {
        path: ':variantId',
        data: { breadcrumb: 'DISPLAYNAME' },
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@app/views/variants/variants-detail/variants-detail.module').then(
                (m) => m.VariantsDetailModule
              ),
          },
          {
            path: 'revise',
            loadChildren: () =>
              import('@app/views/variants/variants-revise/variants-revise.module').then(
                (m) => m.VariantsReviseModule
              ),
            data: { breadcrumb: 'Revise' }
          },
        ]
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    VariantsHomeModule
  ],
  exports: [RouterModule],
})
export class VariantsRoutingModule {}

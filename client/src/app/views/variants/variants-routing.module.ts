import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariantsComponent } from './variants.component';
import { VariantsHomeModule } from './variants-home/variants-home.module';
import { VariantsHomePage } from './variants-home/variants-home.page';

const routes: Routes = [
  {
    path: '',
    component: VariantsComponent,
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
        loadChildren: () =>
          import('@app/views/variants/variants-detail/variants-detail.module').then(
            (m) => m.VariantsDetailModule
          ),
        data: { breadcrumb: 'DISPLAYNAME' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), VariantsHomeModule],
  exports: [RouterModule],
})
export class VariantsRoutingModule {}

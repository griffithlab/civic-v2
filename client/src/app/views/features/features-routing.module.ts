import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FeaturesView } from './features.view'
import { FeaturesHomeModule } from './features-home/features-home.module'
import { FeaturesHomePage } from './features-home/features-home.page'

const routes: Routes = [
  {
    path: '',
    component: FeaturesView,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: FeaturesHomePage,
        data: {
          breadcrumb: 'Home',
        },
      },
      {
        path: ':featureId',
        data: { breadcrumb: 'DISPLAYNAME' },
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@app/views/features/features-detail/features-detail.module').then(
                (m) => m.FeaturesDetailModule
              ),
          },
          {
            path: 'revise',
            loadChildren: () =>
              import('@app/views/features/features-revise/features-revise.module').then(
                (m) => m.FeaturesReviseModule
              ),
            data: { breadcrumb: 'Revise' },
          },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes), FeaturesHomeModule],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}

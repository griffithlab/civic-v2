import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { GenesView } from './genes.view'
import { GenesHomeModule } from './genes-home/genes-home.module'
import { GenesHomePage } from './genes-home/genes-home.page'

const routes: Routes = [
  {
    path: '',
    component: GenesView,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: GenesHomePage,
        data: {
          breadcrumb: 'Home',
        },
      },
      {
        path: ':geneId',
        data: { breadcrumb: 'DISPLAYNAME' },
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@app/views/genes/genes-detail/genes-detail.module').then(
                (m) => m.GenesDetailModule
              ),
          },
          {
            path: 'revise',
            loadChildren: () =>
              import('@app/views/genes/genes-revise/genes-revise.module').then(
                (m) => m.GenesReviseModule
              ),
            data: { breadcrumb: 'Revise' },
          },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes), GenesHomeModule],
  exports: [RouterModule],
})
export class GenesRoutingModule {}

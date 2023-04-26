import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { VariantGroupsHomePage } from './variant-groups-home/variant-groups-home.page'
import { VariantGroupsView } from './variant-groups.view'

const routes: Routes = [
  {
    path: '',
    component: VariantGroupsView,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: VariantGroupsHomePage,
        data: {
          breadcrumb: 'Home',
        },
      },
      {
        path: 'add',
        loadChildren: () =>
          import(
            '@app/views/variant-groups/variant-groups-add/variant-groups-add.module'
          ).then((m) => m.VariantGroupsAddModule),
        data: { breadcrumb: 'Add' },
      },
      {
        path: ':variantGroupId',
        data: {
          breadcrumb: 'DISPLAYNAME', // triggers label generation by getRouteLabel in section-navigation
        },
        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                '@app/views/variant-groups/variant-groups-detail/variant-groups-detail.module'
              ).then((m) => m.VariantGroupsDetailModule),
          },
          {
            path: 'revise',
            loadChildren: () =>
              import(
                '@app/views/variant-groups/variant-groups-revise/variant-groups-revise.module'
              ).then((m) => m.VariantGroupsReviseModule),
            data: { breadcrumb: 'Revise' },
          },
        ],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VariantGroupsRoutingModule {}

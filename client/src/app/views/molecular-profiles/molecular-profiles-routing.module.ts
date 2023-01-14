import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MolecularProfilesHomeModule } from './molecular-profiles-home/molecular-profiles-home.module';
import { MolecularProfilesHomePage } from './molecular-profiles-home/molecular-profiles-home.page';
import { MolecularProfilesView } from './molecular-profiles.view';

const routes: Routes = [
  {
    path: '',
    component: MolecularProfilesView,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: MolecularProfilesHomePage,
        data: {
          breadcrumb: 'Home',
        },
      },
      {
        path: ':molecularProfileId',
        data: { breadcrumb: 'DISPLAYNAME' },
        children: [
          {
            path: '',
            loadChildren: () =>
              import(
                '@app/views/molecular-profiles/molecular-profiles-detail/molecular-profiles-detail.module'
              ).then((m) => m.MolecularProfilesDetailModule),
          },
          {
            path: 'revise',
            loadChildren: () =>
              import(
                '@app/views/molecular-profiles/molecular-profiles-revise/molecular-profiles-revise.module'
              ).then((m) => m.MolecularProfilesReviseModule),
            data: { breadcrumb: 'Revise' },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), MolecularProfilesHomeModule],
  exports: [RouterModule],
})
export class MolecularProfilesRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MolecularProfilesReviseView } from './molecular-profiles-revise.view';
import { MolecularProfilesSuggestModule } from './molecular-profiles-suggest/molecular-profiles-suggest.module';
import { MolecularProfilesSuggestPage } from './molecular-profiles-suggest/molecular-profiles-suggest.page';

const routes: Routes = [
  { path: '',
    component: MolecularProfilesReviseView,
    data: { breadcrumb: 'Revise' },
    children: [
      { path: '', redirectTo: 'suggest', pathMatch: 'full' },
      {
        path: 'suggest',
        component: MolecularProfilesSuggestPage,
        data: {
          breadcrumb: 'Suggest Revision'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MolecularProfilesSuggestModule],
  exports: [RouterModule],
})
export class MolecularProfilesReviseRoutingModule {}

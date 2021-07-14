import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlagsBrowseComponent } from './flags-browse/flags-browse.component';
import { FlagsComponent } from './flags.component';

const routes: Routes = [
  {
    path: '', component: FlagsComponent,
    children: [
      { path: '', redirectTo: 'browse', pathMatch: 'full' },
      {
        path: 'browse',
        component: FlagsBrowseComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlagsRoutingModule {}

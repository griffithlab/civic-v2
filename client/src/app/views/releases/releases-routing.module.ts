import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ReleasesMainComponent } from './releases-main/releases-main.component'
import { ReleasesComponent } from './releases.component'
import { ReleasesLicensingComponent } from '@app/views/releases/releases-licensing/releases-licensing.component'

const routes: Routes = [
  {
    path: '',
    component: ReleasesComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      {
        path: 'main',
        component: ReleasesMainComponent,
        data: { breadcrumb: 'Downloads' },
      },
      {
        path: 'licensing',
        component: ReleasesLicensingComponent,
        data: { breadcrumb: 'Licensing' },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReleasesRoutingModule {}

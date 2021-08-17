import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenesComponent } from './genes.component';
import { GenesHomeModule } from './genes-home/genes-home.module';
import { GenesHomePage } from './genes-home/genes-home.page';

const routes: Routes = [
  {
    path: '',
    component: GenesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        component: GenesHomePage,
        data: {
          breadcrumb: 'Home'
        }
      },
      {
        path: ':geneId',
        loadChildren: () => import('@app/views/genes/genes-detail/genes-detail.module').then(m => m.GenesDetailModule),
        data: { breadcrumb: 'DISPLAYNAME' }
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    GenesHomeModule,
  ],
})
export class GenesRoutingModule { }

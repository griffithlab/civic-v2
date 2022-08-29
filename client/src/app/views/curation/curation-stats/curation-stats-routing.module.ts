import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurationChartsPage } from './curation-charts/curation-charts.page';

const routes: Routes = [
  { path: '', redirectTo: 'curation-stats', pathMatch: 'full' },
  {
    path: 'curation-stats',
    component: CurationChartsPage,
    data: {
      breadcrumb: 'Charts'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurationStatsRoutingModule { }

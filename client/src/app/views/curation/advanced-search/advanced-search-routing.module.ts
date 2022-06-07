import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneAdvancedSearchPage } from './gene-advanced-search/gene-advanced-search.page';

const routes: Routes = [
  { path: '', redirectTo: 'gene-search', pathMatch: 'full' },
  {
    path: 'gene-search',
    component: GeneAdvancedSearchPage,
    data: {
      breadcrumb: 'Gene Search'
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedSearchRoutingModule { }

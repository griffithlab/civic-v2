import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SourceSuggestionsComponent } from './source-suggestions.component';
import { SourceSuggestionsHomePage } from './source-suggestions-home/source-suggestions-home.page';

const routes: Routes = [
  {
    path: '',
    component: SourceSuggestionsComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: SourceSuggestionsHomePage,
        data: {
          breadcrumb: 'Home',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SourceSuggestionsRoutingModule {}

import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { SearchView } from '@app/views/search/search.view'
import { StructuredSearchPage } from '@app/views/search/structured/structured-search.page'

const routes: Routes = [
  {
    path: '',
    component: SearchView,
    children: [
      { path: '', redirectTo: 'structured', pathMatch: 'full' },
      {
        path: 'structured',
        component: StructuredSearchPage,
        data: {
          breadcrumb: 'Structured Search',
        },
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}

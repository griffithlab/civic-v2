import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { SearchView } from '@app/views/search/search.view'
import { QuerySearchPage } from '@app/views/search/query-search/query-search.page'

const defaultSearchEndpoint = 'searchAssertions'

const routes: Routes = [
  {
    path: '',
    component: SearchView,
    children: [
      // default search endpoint
      {
        path: '',
        redirectTo: `query/${defaultSearchEndpoint}`,
        pathMatch: 'full',
      },
      {
        path: 'query/:searchEndpoint',
        component: QuerySearchPage,
        data: {
          breadcrumb: 'Search by Query',
        },
      },
      // handle search endpoint default if only a path provided
      { path: 'query', redirectTo: `query/${defaultSearchEndpoint}` },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}

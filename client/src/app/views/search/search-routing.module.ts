import {
  RouterModule,
  Routes,
  UrlMatchResult,
  UrlSegment,
} from '@angular/router'
import { NgModule } from '@angular/core'
import { SearchView } from '@app/views/search/search.view'
import { QuerySearchPage } from '@app/views/search/query-search/query-search.page'
import { isUuidV4 } from '@app/core/utilities/uuid'

const defaultSearchEndpoint = 'searchAssertions'

/**
 * Unified matcher for `query/<segment>`.
 * If the segment is a UUID v4, it is treated as a permalinkId.
 * Otherwise, it is treated as a searchEndpoint name.
 */
export function searchQueryMatcher(
  segments: UrlSegment[]
): UrlMatchResult | null {
  if (segments.length !== 2 || segments[0].path !== 'query') return null
  const segment = segments[1]
  if (isUuidV4(segment.path)) {
    return { consumed: segments, posParams: { permalinkId: segment } }
  }
  return { consumed: segments, posParams: { searchEndpoint: segment } }
}

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
        matcher: searchQueryMatcher,
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

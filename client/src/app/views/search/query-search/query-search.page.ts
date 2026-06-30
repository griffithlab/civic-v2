import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  input,
  model,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core'
import { EvidenceStatusFilter, Maybe } from '@app/generated/civic.apollo'
import { CommonModule } from '@angular/common'
import { NzTabsModule } from 'ng-zorro-antd/tabs'
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module'
import { CvcQueryBuilderModule } from '@app/forms/config/query-builder/query-builder.module'
import { ActivatedRoute, Router } from '@angular/router'
import {
  getSearchEndpointFromTabIndex,
  getTabIndexFromSearchEndpoint,
  queryBuilderTabs,
} from '@app/views/search/query-search/query-search.functions'
import {
  AdvancedSearchEndpoint,
  QueryBuilderFormModel,
  QueryBuilderResult,
} from '@app/forms/config/query-builder/query-builder.types'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzResizableModule, NzResizeEvent } from 'ng-zorro-antd/resizable'
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module'
import { CvcDiseasesTableModule } from '@app/components/diseases/diseases-table/diseases-table.module'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { CvcAssertionsTableModule } from '@app/components/assertions/assertions-table/assertions-table.module'
import { CvcFeaturesTableModule } from '@app/components/features/features-table/features-table.module'
import { CvcMolecularProfilesTableModule } from '@app/components/molecular-profiles/molecular-profile-table/molecular-profile-table.module'
import { CvcVariantsTableModule } from '@app/components/variants/variants-table/variants-table.module'
import { CvcUsersTableModule } from '@app/components/users/users-table/users-table.module'
import { CvcVariantTypesTableModule } from '@app/components/variant-types/variant-types-table/variant-types-table.module'
import { CvcPhenotypesTableModule } from '@app/components/phenotypes/phenotypes-table/phenotypes-table.module'
import { CvcTherapiesTableModule } from '@app/components/therapies/therapies-table/therapies-table.module'
import { CvcSourcesTableModule } from '@app/components/sources/sources-table/sources-table.module'
import { CvcRevisionsTableModule } from '@app/components/revisions/revisions-table/revisions-table.module'
import { CvcCommentsTableModule } from '@app/components/comments/comments-table/comments-table.module'
import { NzResultComponent, NzResultModule } from 'ng-zorro-antd/result'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzListComponent, NzListModule } from 'ng-zorro-antd/list'
import {
  QUERY_SEARCH_EXAMPLES,
  QuerySearchExample,
} from './query-search.examples'
import {
  AdvancedSearchUrlService,
  QUERY_MODEL_PARAM,
} from '@app/forms/config/query-builder/advanced-search-url.service'

@Component({
  selector: 'cvc-query-search-page',
  templateUrl: './query-search.page.html',
  styleUrls: ['./query-search.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    NzTabsModule,
    NzGridModule,
    NzResizableModule,
    NzEmptyModule,
    NzIconModule,
    NzButtonModule,
    NzPopoverModule,
    NzListModule,
    NzResultModule,
    CvcAutoHeightDivModule,
    CvcQueryBuilderModule,
    CvcEvidenceTableModule,
    CvcDiseasesTableModule,
    CvcAssertionsTableModule,
    CvcFeaturesTableModule,
    CvcMolecularProfilesTableModule,
    CvcVariantsTableModule,
    CvcUsersTableModule,
    CvcVariantTypesTableModule,
    CvcPhenotypesTableModule,
    CvcTherapiesTableModule,
    CvcSourcesTableModule,
    CvcRevisionsTableModule,
    CvcCommentsTableModule,
  ],
})
export class QuerySearchPage {
  searchEndpoint = model<AdvancedSearchEndpoint>('searchAssertions')
  permalinkId = model<Maybe<string>>()
  // encoded shareable query token, auto-bound from the ?queryModel= query param
  queryModel = input<Maybe<string>>()

  searchResults = signal<Maybe<QueryBuilderResult>>(undefined)
  selectedTabIndex: WritableSignal<number> = signal(0)

  tabs = queryBuilderTabs
  searchExamples = QUERY_SEARCH_EXAMPLES

  searchExampleQuery = signal<Maybe<QueryBuilderFormModel['query']>>(undefined)
  // drives the form's auto-run: true for shareable-link loads, false for examples
  autoRunSearch = signal(false)

  // Make enum available in template
  EvidenceStatusFilter = EvidenceStatusFilter

  // form block dimensions for resizer feature.
  // formWidth is a percentage (XXl+ row layout, resolves against the
  // container's definite width); formHeight is pixels (below-XXl column
  // layout, where a percentage height has no definite containing block).
  // The results block fills the remainder via flex.
  formWidth = signal(50)
  formHeight = signal(300)

  @ViewChild('panelContainer') panelContainer!: ElementRef<HTMLElement>

  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private searchUrl = inject(AdvancedSearchUrlService)
  private previousEndpoint?: AdvancedSearchEndpoint

  tabBarStyle = {
    paddingLeft: '16px',
    paddingRight: '16px',
  }

  constructor() {
    // EFFECT: sync route with searchEndpoint and permalinkId
    effect(() => {
      const endpoint = this.searchEndpoint()
      const permalinkId = this.permalinkId()
      // always sync tab index
      this.selectedTabIndex.set(getTabIndexFromSearchEndpoint(endpoint))

      // reset results when endpoint changes, but not when the change
      // was driven by a permalink resolution (permalinkId is set)
      if (endpoint !== this.previousEndpoint) {
        if (!permalinkId) {
          this.searchResults.set(undefined)
        }
        this.previousEndpoint = endpoint
      }

      // if on the bare permalink route (no searchEndpoint in paramMap),
      // skip navigation until the permalink resolves and we have results
      const routeHasSearchEndpoint =
        this.route.snapshot.paramMap.has('searchEndpoint')
      if (!routeHasSearchEndpoint && !this.searchResults()) return

      // only navigate if something actually changed
      const currentEndpoint = this.route.snapshot.paramMap.get('searchEndpoint')
      const currentPermalinkId =
        this.route.snapshot.queryParams['permalinkId'] ?? undefined

      const endpointChanged = endpoint !== currentEndpoint
      const permalinkChanged = permalinkId !== currentPermalinkId

      if (!endpointChanged && !permalinkChanged) return

      const commands = endpointChanged ? ['../', endpoint] : []
      this.router.navigate(commands, {
        relativeTo: this.route,
        queryParams: { permalinkId },
        queryParamsHandling: 'merge',
        // replace the bare UUID URL so it doesn't pollute browser history
        replaceUrl: !routeHasSearchEndpoint,
      })
    })

    // EFFECT: decode a shareable query-model token from the URL, rehydrate the
    // builder and auto-run its search, then strip the param so it can't
    // re-trigger on later in-app navigation (one-shot). The recipient's link
    // still works; only the in-app URL is cleaned.
    effect(() => {
      const token = this.queryModel()
      if (!token) return
      const decoded = this.searchUrl.decode(token)
      if (!decoded) {
        console.warn('Ignoring invalid queryModel token in URL.')
        return
      }
      // set autoRun before the query so the form sees it when formModelQuery lands
      this.autoRunSearch.set(true)
      this.searchEndpoint.set(decoded.endpoint)
      this.searchExampleQuery.set(decoded.query)
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: { [QUERY_MODEL_PARAM]: null },
        queryParamsHandling: 'merge',
        replaceUrl: true,
      })
    })

    // EFFECT: update searchEndpoint and permalinkId from searchResults
    effect(() => {
      const result = this.searchResults()
      if (!result) return
      if (result.status === 'error') return
      if (result.status === 'reset') {
        this.permalinkId.update(() => undefined)
        return
      }
      this.searchEndpoint.set(result.endpoint)
      this.permalinkId.set(result.permalinkId)
    })
  }
  onTabIndexChange(index: number) {
    const newEndpoint = getSearchEndpointFromTabIndex(index)
    if (newEndpoint === this.searchEndpoint()) return
    this.searchEndpoint.set(newEndpoint)
    this.permalinkId.set(undefined)
  }

  onResize(event: NzResizeEvent): void {
    if (event.direction === 'bottom') {
      // below XXl: apply the form height directly in pixels; results fills
      // the remaining vertical space via flex.
      if (event.height === undefined) return
      this.formHeight.set(event.height)
      // moving the form only shifts the results card's top edge, which its
      // ResizeObserver-based auto-height directives don't see; broadcast a
      // resize so they (and the inner auto-height table) recompute.
      window.dispatchEvent(new Event('resize'))
    } else {
      // XXl+: form width as a percentage of the container's definite width.
      if (event.width === undefined) return
      const containerWidth = this.panelContainer.nativeElement.offsetWidth
      if (containerWidth === 0) return
      const percent = Math.round((event.width / containerWidth) * 100)
      this.formWidth.set(percent)
    }
  }

  onExampleSelect(example: QuerySearchExample): void {
    // examples populate the builder only; the user reviews and runs the search
    this.autoRunSearch.set(false)
    this.searchEndpoint.set(example.searchEndpoint)
    this.searchExampleQuery.set(example.formQuery)
  }
}

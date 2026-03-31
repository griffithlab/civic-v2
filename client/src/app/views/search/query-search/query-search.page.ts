import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  model,
  signal,
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
  QueryBuilderResult,
} from '@app/forms/config/query-builder/query-builder.types'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzResizableModule } from 'ng-zorro-antd/resizable'
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
import { NzResultComponent } from 'ng-zorro-antd/result'
import { NzIconModule } from 'ng-zorro-antd/icon'

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
    NzResultComponent,
  ],
})
export class QuerySearchPage {
  searchEndpoint = model.required<AdvancedSearchEndpoint>()
  permalinkId = model<Maybe<string>>()

  searchResults = signal<Maybe<QueryBuilderResult>>(undefined)
  selectedTabIndex: WritableSignal<number> = signal(0)

  tabs = queryBuilderTabs

  // Make enum available in template
  EvidenceStatusFilter = EvidenceStatusFilter

  private router = inject(Router)
  private route = inject(ActivatedRoute)
  private previousEndpoint?: AdvancedSearchEndpoint

  constructor() {
    // EFFECT: sync route with searchEndpoint and permalinkId
    effect(() => {
      const endpoint = this.searchEndpoint()
      const permalinkId = this.permalinkId()
      // always sync tab index
      this.selectedTabIndex.set(getTabIndexFromSearchEndpoint(endpoint))

      // reset results when endpoint changes
      if (endpoint !== this.previousEndpoint) {
        this.searchResults.set(undefined)
        this.previousEndpoint = endpoint
      }

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
        replaceUrl: false,
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
}

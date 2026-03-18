import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  model,
  signal,
  WritableSignal,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
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
import { CvcEvidenceTableModule } from '../../../components/evidence/evidence-table/evidence-table.module'
import { CvcDiseasesTableModule } from '../../../components/diseases/diseases-table/diseases-table.module'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { CvcAssertionsTableModule } from '../../../components/assertions/assertions-table/assertions-table.module'
import { CvcFeaturesTableModule } from '../../../components/features/features-table/features-table.module'
import { CvcMolecularProfilesTableModule } from '../../../components/molecular-profiles/molecular-profile-table/molecular-profile-table.module'
import { CvcVariantsTableModule } from '../../../components/variants/variants-table/variants-table.module'
import { CvcUsersTableModule } from '../../../components/users/users-table/users-table.module'
import { CvcVariantTypesTableModule } from '../../../components/variant-types/variant-types-table/variant-types-table.module'
import { CvcPhenotypesTableModule } from '../../../components/phenotypes/phenotypes-table/phenotypes-table.module'
import { CvcTherapiesTableModule } from '../../../components/therapies/therapies-table/therapies-table.module'
import { CvcSourcesTableModule } from '../../../components/sources/sources-table/sources-table.module'
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
  // update tab index when searchEndpoint changes
  selectedTabIndex: WritableSignal<number> = signal(0)

  tabs = queryBuilderTabs

  private router = inject(Router)
  private route = inject(ActivatedRoute)

  constructor() {
    // update tabs and route when searchEndpoint changes
    effect(() => {
      const newEndpoint = this.searchEndpoint()
      this.selectedTabIndex.set(getTabIndexFromSearchEndpoint(newEndpoint))
      const currentEndpoint = this.route.snapshot.paramMap.get('searchEndpoint')
      if (newEndpoint === currentEndpoint) return
      this.searchResults.set(undefined)
      this.router.navigate(['../', newEndpoint], {
        relativeTo: this.route,
        queryParams: {
          ...this.route.snapshot.queryParams,
          permalinkId: this.permalinkId(),
        },
        queryParamsHandling: 'merge',
        replaceUrl: true,
        skipLocationChange: false,
      })
    })
    // update route with permalinkId when provided
    effect(() => {
      const permalinkId = this.permalinkId()
      if (!permalinkId) return
      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          permalinkId,
        },
        queryParamsHandling: 'merge',
        replaceUrl: true,
        skipLocationChange: false,
      })
    })
  }
  onTabIndexChange(index: number) {
    this.searchEndpoint.set(getSearchEndpointFromTabIndex(index))
    this.permalinkId.set(undefined)
  }
}

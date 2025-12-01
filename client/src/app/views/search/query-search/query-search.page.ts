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
import { QueryBuilderSearchEndpoint } from '@app/forms/config/query-builder/query-builder.types'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzResizableModule, NzResizeEvent } from 'ng-zorro-antd/resizable'
import { CvcEvidenceTableModule } from '../../../components/evidence/evidence-table/evidence-table.module'
import { CvcDiseasesTableModule } from '../../../components/diseases/diseases-table/diseases-table.module'
import { NzEmptyModule } from 'ng-zorro-antd/empty'

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
    CvcAutoHeightDivModule,
    CvcQueryBuilderModule,
    CvcEvidenceTableModule,
    CvcDiseasesTableModule,
  ],
})
export class QuerySearchPage {
  searchEndpoint = model.required<QueryBuilderSearchEndpoint>()
  permalinkId = model<Maybe<string>>()

  // update tab index when searchEndpoint changes
  selectedTabIndex: WritableSignal<number> = signal(0)

  resultIds: WritableSignal<Maybe<number[]>> = signal(undefined)
  tabs = queryBuilderTabs

  private router = inject(Router)
  private route = inject(ActivatedRoute)

  resizableFrameId = -1
  resizableHeight = -1
  constructor() {
    // update tabs and route when searchEndpoint changes
    effect(() => {
      const newEndpoint = this.searchEndpoint()
      this.selectedTabIndex.set(getTabIndexFromSearchEndpoint(newEndpoint))
      const currentEndpoint = this.route.snapshot.paramMap.get('searchEndpoint')
      if (newEndpoint === currentEndpoint) return
      this.resultIds.set(undefined)
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
  onContentResize(event: NzResizeEvent): void {
    const { width, height, col, mouseEvent, direction } = event
    cancelAnimationFrame(this.resizableFrameId)
    this.resizableFrameId = requestAnimationFrame(() => {
      this.resizableHeight = height!
    })
  }
}

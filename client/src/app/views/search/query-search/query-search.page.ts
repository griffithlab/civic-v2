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
import { NzTabComponent, NzTabsComponent } from 'ng-zorro-antd/tabs'
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module'
import { CvcQueryBuilderModule } from '@app/forms/config/query-builder/query-builder.module'
import { ActivatedRoute, Router } from '@angular/router'
import {
  getSearchEndpointFromTabIndex,
  getTabIndexFromSearchEndpoint,
  queryBuilderTabs,
} from '@app/views/search/query-search/query-search.functions'
import { QueryBuilderSearchEndpoint } from '@app/forms/config/query-builder/query-builder.types'

@Component({
  selector: 'cvc-query-search-page',
  templateUrl: './query-search.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    NzTabComponent,
    NzTabsComponent,
    CvcAutoHeightDivModule,
    CvcQueryBuilderModule,
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

  constructor() {
    // update tabs and route when searchEndpoint changes
    effect(() => {
      const newEndpoint = this.searchEndpoint()
      this.selectedTabIndex.set(getTabIndexFromSearchEndpoint(newEndpoint))
      const currentEndpoint = this.route.snapshot.paramMap.get('searchEndpoint')
      if (newEndpoint === currentEndpoint) return
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
  }
  onTabIndexChange(index: number) {
    this.searchEndpoint.set(getSearchEndpointFromTabIndex(index))
    this.permalinkId.set(undefined)
  }
}

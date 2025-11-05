import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  model,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core'
import { Maybe } from '@app/generated/civic.apollo'
import { CommonModule } from '@angular/common'
import { NzTabComponent, NzTabsComponent } from 'ng-zorro-antd/tabs'
import { CvcAutoHeightDivModule } from '@app/directives/auto-height-div/auto-height-div.module'
import { CvcQueryBuilderForm } from '@app/forms/config/query-builder/query-builder.form'
import { ActivatedRoute, Router } from '@angular/router'
import {
  getSearchEndpointFromTabIndex,
  getTabIndexFromSearchEndpoint,
  queryBuilderTabs,
} from '@app/views/search/query-search/query-search.functions'

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
    CvcQueryBuilderForm,
  ],
})
export class QuerySearchPage {
  searchEndpoint = model.required<string>()
  permalinkId = model<Maybe<string>>()

  // update tab index when searchEndpoint changes
  selectedTabIndex: Signal<number> = computed(() =>
    getTabIndexFromSearchEndpoint(this.searchEndpoint())
  )

  resultIds: WritableSignal<Maybe<number[]>> = signal(undefined)
  tabs = queryBuilderTabs

  private router = inject(Router)
  private route = inject(ActivatedRoute)

  constructor() {
    // update route when searchEndpoint changes
    effect(() => {
      const newEndpoint = this.searchEndpoint()
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

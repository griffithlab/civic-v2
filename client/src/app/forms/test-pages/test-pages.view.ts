import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component'
import { Maybe } from '@app/generated/civic.apollo'

@Component({
    selector: 'cvc-test-pages',
    templateUrl: './test-pages.view.html',
    styleUrls: ['./test-pages.view.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class TestPagesView {
  tabs: RouteableTab[]
  selectedTabIndex: Maybe<number>
  constructor(private router: Router) {
    this.selectedTabIndex = this.getActivatedRouteIndex(this.router.url)
    this.tabs = [
      {
        routeName: 'evidence-submit-test',
        iconName: 'civic-evidence',
        tabLabel: 'Submit',
      },
      {
        routeName: 'evidence-revise-test',
        iconName: 'civic-evidence',
        tabLabel: 'Revise',
      },
      {
        routeName: 'assertion-submit-test',
        iconName: 'civic-assertion',
        tabLabel: 'Submit',
      },
      {
        routeName: 'assertion-revise-test',
        iconName: 'civic-assertion',
        tabLabel: 'Revise',
      },
      {
        routeName: 'variantgroup-revise-test',
        iconName: 'civic-variantgroup',
        tabLabel: 'Revise',
      },
      {
        routeName: 'gene-revise-test',
        iconName: 'civic-feature',
        tabLabel: 'Revise',
      },
      {
        routeName: 'mp-revise-test',
        iconName: 'civic-molecularprofile',
        tabLabel: 'Revise',
      },
      {
        routeName: 'variant-submit-test',
        iconName: 'civic-variant',
        tabLabel: 'Submit',
      },
      {
        routeName: 'variant-revise-test',
        iconName: 'civic-variant',
        tabLabel: 'Revise',
      },
      {
        routeName: 'vertical-form',
        iconName: 'layout',
        tabLabel: 'Vertical',
      },
      {
        routeName: 'inline-form',
        iconName: 'layout',
        tabLabel: 'Inline',
      },
      {
        routeName: 'horizontal-form',
        iconName: 'layout',
        tabLabel: 'Horizontal',
      },
      {
        routeName: 'tags-test',
        iconName: 'tag',
        tabLabel: 'Tags',
      },
    ]
  }

  getActivatedRouteIndex(url: string): Maybe<number> {
    return this.tabs?.findIndex((path) => url.includes(path.routeName))
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { RouteableTab } from '@app/components/shared/tab-navigation/tab-navigation.component'
import { Maybe } from '@app/generated/civic.apollo'

@Component({
  selector: 'cvc-test-pages',
  templateUrl: './test-pages.view.html',
  styleUrls: ['./test-pages.view.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
        tabLabel: 'Evidence Submit',
      },
      {
        routeName: 'evidence-revise-test',
        iconName: '',
        tabLabel: 'Evidence Revise',
      },
      {
        routeName: 'assertion-submit-test',
        iconName: '',
        tabLabel: 'Assertion Submit',
      },
      {
        routeName: 'assertion-revise-test',
        iconName: '',
        tabLabel: 'Assertion Revise',
      },
      {
        routeName: 'variantgroup-revise-test',
        iconName: '',
        tabLabel: 'VG Revise',
      }
        routeName: 'gene-revise-test',
        iconName: '',
        tabLabel: 'Gene Revise',
      },
      {
        routeName: 'mp-revise-test',
        iconName: '',
        tabLabel: 'MP Revise',
      },
      {
        routeName: 'variant-revise-test',
        iconName: '',
        tabLabel: 'Variant Revise',

      },
      {
        routeName: 'vertical-form',
        iconName: '',
        tabLabel: 'Vertical',
      },
      {
        routeName: 'inline-form',
        iconName: '',
        tabLabel: 'Inline',
      },
      {
        routeName: 'horizontal-form',
        iconName: '',
        tabLabel: 'Horizontal',
      },
      {
        routeName: 'tags-test',
        iconName: '',
        tabLabel: 'Tags',
      },
    ]
  }

  getActivatedRouteIndex(url: string): Maybe<number> {
    return this.tabs?.findIndex((path) => url.includes(path.routeName))
  }
}

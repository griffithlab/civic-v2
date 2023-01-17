import { Component, ContentChild, Input, TemplateRef } from '@angular/core'
import { Maybe, SubscribableInput } from '@app/generated/civic.apollo'
import { Router } from '@angular/router'

export interface RouteableTab {
  routeName: string
  tabLabel: string
  iconName: string
  badgeCount?: number
}

@Component({
  selector: 'cvc-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.less'],
})
export class CvcTabNavigationComponent {
  @Input() entity: Maybe<SubscribableInput>
  @Input() tabs: Maybe<RouteableTab[]>

  //May pass in an <ng-template #tabBarExtraContent> as a child element
  @ContentChild('tabBarExtraContent') tabBarExtraContent?: TemplateRef<any>

  selectedTabIndex: Maybe<number>

  constructor(private router: Router) {
    this.selectedTabIndex = this.getActivatedRouteIndex(this.router.url)
  }

  getActivatedRouteIndex(url: string): Maybe<number> {
    return this.tabs?.findIndex((path) => url.includes(path.routeName))
  }
}

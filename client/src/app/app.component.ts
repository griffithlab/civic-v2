import { Component } from '@angular/core'
import { NzIconService } from 'ng-zorro-antd/icon'

import { fullColorIcons } from '@app/icons-provider.module'
import { CivicIconLiteral } from './generated/civic.icons'
import { NavigationEnd, Router } from '@angular/router'
import { environment } from 'environments/environment'

declare let gtag: Function

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    standalone: false
})
export class AppComponent {
  constructor(private iconService: NzIconService, private router: Router) {
    this.addIcons(fullColorIcons)
    if (environment.production) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          gtag('config', 'UA-60119642-1', {
            page_path: event.urlAfterRedirects,
          })
        }
      })
    }
  }

  // TODO: switch to twotone civic custom icons ('civic-[entity]') exclusively.
  // Registering 'civic:[entity]' full color icons here for backwards compatibility
  private addIcons(icons: CivicIconLiteral[]): void {
    icons.forEach((icon: CivicIconLiteral) => {
      const regex = /Fullcolor/i
      const name = 'civic:' + icon.name.replace(regex, '')
      this.iconService.addIconLiteral(name, icon.data)
    })
  }
}

import { Component, OnInit } from '@angular/core'

import { CookieService } from 'ngx-cookie-service'

import { encodeUriString } from '@app/core/utilities/encode-uri-string'

@Component({
    selector: 'cvc-auth-options-list',
    templateUrl: './auth-options-list.component.html',
    styleUrls: ['./auth-options-list.component.less'],
    standalone: false
})
export class CvcAuthOptionsListComponent implements OnInit {
  location: string
  xsrfToken: string

  constructor(private cookies: CookieService) {
    this.location = encodeUriString(window.location.href)
    this.xsrfToken = this.cookies.get('XSRF-TOKEN')
  }

  ngOnInit(): void {}
}

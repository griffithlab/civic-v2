import { Component, Input, OnInit } from '@angular/core'

import { CookieService } from 'ngx-cookie-service'

import { encodeUriString } from '@app/core/utilities/encode-uri-string'

@Component({
  selector: 'cvc-auth-options-list',
  templateUrl: './auth-options-list.component.html',
  styleUrls: ['./auth-options-list.component.less'],
  standalone: false,
})
export class CvcAuthOptionsListComponent implements OnInit {
  @Input() redirectUrl: string | undefined

  location: string
  xsrfToken: string

  constructor(private cookies: CookieService) {
    this.location = encodeUriString(window.location.href)
    this.xsrfToken = this.cookies.get('XSRF-TOKEN')
  }

  ngOnInit(): void {
    if (this.redirectUrl) {
      const base = window.location.origin
      const targetUrl = this.redirectUrl.startsWith('http')
        ? this.redirectUrl
        : `${base}${this.redirectUrl}`

      // Only allow same-origin redirects to prevent open redirect vulnerabilities
      try {
        const parsed = new URL(targetUrl)
        if (parsed.origin === base) {
          this.location = encodeUriString(targetUrl)
        }
      } catch {
        // Invalid URL, fall back to current page (default behavior)
      }
    }
  }
}

import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'cvc-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.less'],
  standalone: false,
})
export class CvcLoginButtonComponent implements OnInit {
  authVisible: boolean
  redirectUrl: string | undefined

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.authVisible = false
  }

  ngOnInit(): void {
    const params = this.route.snapshot.queryParamMap
    if (params.get('sign_in') === 'true') {
      this.authVisible = true
      this.redirectUrl = params.get('redirect') ?? undefined
    }
  }

  showAuth(): void {
    this.authVisible = true
  }

  handleCancel(): void {
    this.authVisible = false
    this.cleanQueryParams()
  }

  private cleanQueryParams(): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { sign_in: null, redirect: null },
      queryParamsHandling: 'merge',
    })
  }
}

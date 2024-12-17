import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'cvc-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.less'],
  standalone: false,
})
export class CvcLoginButtonComponent implements OnInit {
  authVisible: boolean

  constructor() {
    this.authVisible = false
  }

  ngOnInit(): void {}

  showAuth(): void {
    this.authVisible = true
  }

  handleCancel(): void {
    this.authVisible = false
  }
}

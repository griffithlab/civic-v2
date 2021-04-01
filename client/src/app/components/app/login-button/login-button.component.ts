import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'cvc-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.less']
})
export class LoginButtonComponent implements OnInit {
  isVisible: boolean = false;
  location: string;
  xsrfToken: string;

  constructor(private cookies: CookieService) {
    this.location = encodeUriString(window.location.href);
    this.xsrfToken = this.cookies.get('XSRF-TOKEN');
  }

  ngOnInit(): void {
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}

export function encodeUriString(s: string): string {
  return encodeURIComponent(s)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',');
}

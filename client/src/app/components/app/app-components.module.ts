import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './login-button/login-button.component';

import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  declarations: [
   LoginButtonComponent
  ],
  imports: [
    CommonModule,
    NzPopoverModule,
    NzButtonModule,
    NzListModule,
    NzModalModule
  ],
  exports: [
    LoginButtonComponent
  ]
})

export class AppComponentsModule { }

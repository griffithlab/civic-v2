import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { CvcLoginButtonComponent } from './login-button.component'
import { NzAlertModule } from 'ng-zorro-antd/alert'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzModalModule } from 'ng-zorro-antd/modal'
import { CvcAuthOptionsListModule } from '../auth-options-list/auth-options-list.module'

@NgModule({
  declarations: [CvcLoginButtonComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzAlertModule,
    NzButtonModule,
    NzModalModule,
    CvcAuthOptionsListModule,
  ],
  exports: [CvcLoginButtonComponent],
})
export class CvcLoginButtonModule {}

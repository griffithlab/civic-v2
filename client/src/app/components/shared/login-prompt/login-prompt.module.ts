import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcLoginPromptComponent } from './login-prompt.component'
import { CvcLoginButtonModule } from '@app/components/layout/login-button/login-button.module'
import { NzEmptyModule } from 'ng-zorro-antd/empty'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@NgModule({
  declarations: [CvcLoginPromptComponent],
  imports: [
    CommonModule,
    CvcLoginButtonModule,
    NzEmptyModule,
    NzIconModule,
    NzTypographyModule,
  ],
  exports: [CvcLoginPromptComponent],
})
export class CvcLoginPromptModule {}

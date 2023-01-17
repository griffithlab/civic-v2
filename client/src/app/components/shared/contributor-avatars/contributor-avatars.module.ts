import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcContributorAvatarsComponent } from './contributor-avatars.component'
import { LetModule, PushModule } from '@ngrx/component'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcContributorStackModule } from '../contributor-stack/contributor-stack.module'

@NgModule({
  declarations: [CvcContributorAvatarsComponent],
  imports: [
    CommonModule,
    LetModule,
    PushModule,
    NzTypographyModule,
    CvcContributorStackModule,
  ],
  exports: [CvcContributorAvatarsComponent],
})
export class CvcContributorAvatarsModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcContributorAvatarsComponent } from './contributor-avatars.component'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzTypographyModule } from 'ng-zorro-antd/typography'
import { CvcContributorStackModule } from '../contributor-stack/contributor-stack.module'

@NgModule({
  declarations: [CvcContributorAvatarsComponent],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzTypographyModule,
    CvcContributorStackModule,
  ],
  exports: [CvcContributorAvatarsComponent],
})
export class CvcContributorAvatarsModule {}

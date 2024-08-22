import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcCommentDisplayComponent } from './comment-display.component'
import { NzCommentModule } from 'ng-zorro-antd/comment'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { CvcCommentBodyModule } from '../comment-body/comment-body.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzTypographyModule } from 'ng-zorro-antd/typography'

@NgModule({
  declarations: [CvcCommentDisplayComponent],
  imports: [
    CommonModule,
    NzCommentModule,
    NzAvatarModule,
    NzTypographyModule,
    CvcCommentBodyModule,
    CvcPipesModule,
  ],
  exports: [CvcCommentDisplayComponent],
})
export class CvcCommentDisplayModule {}

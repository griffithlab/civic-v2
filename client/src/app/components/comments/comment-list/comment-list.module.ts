import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcCommentListComponent } from './comment-list.component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { CvcParticipantListModule } from '@app/components/shared/participant-list/participant-list.module'
import { CvcCommentDisplayModule } from '../comment-display/comment-display.module'
import { CvcCommentAddFormModule } from '@app/forms2/components/comment-add/comment-add.module'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [CvcCommentListComponent],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzButtonModule,
    NzGridModule,
    NzCardModule,
    NzListModule,
    NzIconModule,
    CvcPipesModule,
    NzAvatarModule,
    NzSpaceModule,
    NzSkeletonModule,
    CvcCommentAddFormModule,
    CvcParticipantListModule,
    CvcCommentDisplayModule,
  ],
  exports: [CvcCommentListComponent],
})
export class CvcCommentListModule {}

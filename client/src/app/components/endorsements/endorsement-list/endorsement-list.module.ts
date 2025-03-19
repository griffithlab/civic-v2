import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcEndorsementListComponent } from './endorsement-list.component'
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzCardModule } from 'ng-zorro-antd/card'
import { NzListModule } from 'ng-zorro-antd/list'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'
import { NzSpaceModule } from 'ng-zorro-antd/space'
import { LetDirective, PushPipe } from '@ngrx/component'
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcEndorsementDisplayModule } from '../endorsement-display/endorsement-display.module'

@NgModule({
  declarations: [CvcEndorsementListComponent],
  imports: [
    CommonModule,
    LetDirective,
    PushPipe,
    NzButtonModule,
    NzGridModule,
    NzCardModule,
    NzListModule,
    NzIconModule,
    NzAvatarModule,
    NzSpaceModule,
    NzSkeletonModule,
    CvcPipesModule,
    CvcEndorsementDisplayModule,
  ],
  exports: [CvcEndorsementListComponent],
})
export class CvcEndorsementListModule {}

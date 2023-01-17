import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcUserAvatarComponent } from './user-avatar.component'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'

@NgModule({
  declarations: [CvcUserAvatarComponent],
  imports: [CommonModule, NzAvatarModule],
  exports: [CvcUserAvatarComponent],
})
export class CvcUserAvatarModule {}

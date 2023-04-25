import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcOrganizationAvatarComponent } from './organization-avatar.component'
import { NzAvatarModule } from 'ng-zorro-antd/avatar'

@NgModule({
  declarations: [CvcOrganizationAvatarComponent],
  imports: [CommonModule, NzAvatarModule],
  exports: [CvcOrganizationAvatarComponent],
})
export class CvcOrganizationAvatarModule {}

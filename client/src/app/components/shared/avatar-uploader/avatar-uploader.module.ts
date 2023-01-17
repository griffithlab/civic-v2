import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NzButtonModule } from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcAvatarUploaderComponent } from './avatar-uploader.component'

@NgModule({
  declarations: [CvcAvatarUploaderComponent],
  imports: [CommonModule, NzButtonModule, NzIconModule],
  exports: [CvcAvatarUploaderComponent],
})
export class CvcAvatarUploaderModule {}

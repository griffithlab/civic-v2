import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcLinkTagComponent } from './link-tag.component'
import { NzTooltipModule } from 'ng-zorro-antd/tooltip'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'

@NgModule({
  declarations: [CvcLinkTagComponent],
  imports: [CommonModule, NzTooltipModule, NzTagModule, NzIconModule],
  exports: [CvcLinkTagComponent],
})
export class CvcLinkTagModule {}

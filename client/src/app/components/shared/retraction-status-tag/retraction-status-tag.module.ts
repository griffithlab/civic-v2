import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcRetractionStatusTagComponent } from './retraction-status-tag.component'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { NzListModule } from 'ng-zorro-antd/list'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcLinkTagModule } from '../link-tag/link-tag.module'

@NgModule({
  declarations: [CvcRetractionStatusTagComponent],
  imports: [
    CommonModule,
    NzTagModule,
    NzIconModule,
    NzPopoverModule,
    NzDescriptionsModule,
    NzListModule,
    CvcPipesModule,
    CvcLinkTagModule
  ],
  exports: [CvcRetractionStatusTagComponent],
})
export class CvcRetractionStatusTagModule {}

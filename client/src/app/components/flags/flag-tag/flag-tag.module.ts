import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcFlagTagComponent } from './flag-tag.component'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { RouterModule } from '@angular/router'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcFlagPopoverModule } from '../flag-popover/flag-popover.module'
import { NzPopoverModule } from 'ng-zorro-antd/popover'

@NgModule({
  declarations: [CvcFlagTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzIconModule,
    NzPopoverModule,
    CvcPipesModule,
    CvcFlagPopoverModule,
  ],
  exports: [CvcFlagTagComponent],
})
export class CvcFlagTagModule {}

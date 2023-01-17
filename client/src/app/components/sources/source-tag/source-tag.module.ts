import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcSourceTagComponent } from './source-tag.component'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { RouterModule } from '@angular/router'
import { CvcSourcePopoverModule } from '../source-popover/source-popover.module'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [CvcSourceTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzIconModule,
    NzPopoverModule,
    NzTagModule,
    CvcSourcePopoverModule,
    CvcPipesModule,
  ],
  exports: [CvcSourceTagComponent],
})
export class CvcSourceTagModule {}

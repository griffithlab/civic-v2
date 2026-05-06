import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcRevisionTagComponent } from './revision-tag.component'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { RouterModule } from '@angular/router'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcRevisionPopoverModule } from '../revision-popover/revision-popover.module'
import { NzPopoverModule } from 'ng-zorro-antd/popover'

@NgModule({
  declarations: [CvcRevisionTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    CvcPipesModule,
    CvcRevisionPopoverModule,
    NzTagModule,
    NzIconModule,
    NzPopoverModule,
  ],
  exports: [CvcRevisionTagComponent],
})
export class CvcRevisionTagModule {}

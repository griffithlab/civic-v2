import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcTherapyTagComponent } from './cvc-therapy-tag.component'
import { RouterModule } from '@angular/router'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcTherapyPopoverModule } from '../cvc-therapy-popover/cvc-therapy-popover.module'

@NgModule({
  declarations: [CvcTherapyTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzPopoverModule,
    NzIconModule,
    CvcPipesModule,
    CvcTherapyPopoverModule,
  ],
  exports: [CvcTherapyTagComponent],
})
export class CvcTherapyTagModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcAssertionTagComponent } from './assertion-tag.component'
import { RouterModule } from '@angular/router'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcAssertionsPopoverModule } from '../assertions-popover/assertions-popover.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcIconBadgesModule } from '@app/components/shared/icon-badges/icon-badges.module'

@NgModule({
  declarations: [CvcAssertionTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzPopoverModule,
    NzIconModule,
    CvcAssertionsPopoverModule,
    CvcPipesModule,
    CvcIconBadgesModule,
  ],
  exports: [CvcAssertionTagComponent],
})
export class CvcAssertionsTagModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcVariantGroupTagComponent } from './variant-group-tag.component'
import { RouterModule } from '@angular/router'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcVariantGroupPopoverModule } from '../variant-group-popover/variant-group-popover.module'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcIconBadgesModule } from '@app/components/shared/icon-badges/icon-badges.module'

@NgModule({
  declarations: [CvcVariantGroupTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzPopoverModule,
    NzTagModule,
    NzIconModule,
    CvcVariantGroupPopoverModule,
    CvcPipesModule,
    CvcIconBadgesModule,
  ],
  exports: [CvcVariantGroupTagComponent],
})
export class CvcVariantGroupTagModule {}

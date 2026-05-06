import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcFeatureTagComponent } from './feature-tag.component'
import { RouterModule } from '@angular/router'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzBadgeModule } from 'ng-zorro-antd/badge'
import { CvcIconBadgesModule } from '@app/components/shared/icon-badges/icon-badges.module'
import { CvcFeaturePopoverModule } from '../feature-popover/feature-popover.module'

@NgModule({
  declarations: [CvcFeatureTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzPopoverModule,
    NzIconModule,
    NzBadgeModule,
    CvcPipesModule,
    CvcFeaturePopoverModule,
    CvcIconBadgesModule,
  ],
  exports: [CvcFeatureTagComponent],
})
export class CvcFeatureTagModule {}

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcMolecularProfileTagComponent } from './molecular-profile-tag.component'
import { RouterModule } from '@angular/router'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { CvcMolecularProfilePopoverModule } from '../molecular-profile-popover/molecular-profile-popover.module'
import { CvcIconBadgesModule } from '@app/components/shared/icon-badges/icon-badges.module'

@NgModule({
  declarations: [CvcMolecularProfileTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzTagModule,
    NzPopoverModule,
    NzIconModule,
    CvcPipesModule,
    CvcMolecularProfilePopoverModule,
    CvcIconBadgesModule,
  ],
  exports: [CvcMolecularProfileTagComponent],
})
export class CvcMolecularProfileTagModule {}

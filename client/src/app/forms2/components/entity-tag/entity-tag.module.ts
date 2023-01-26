import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcEntityTagComponent } from './entity-tag.component'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'
import { NzToolTipModule } from 'ng-zorro-antd/tooltip'
import { RouterModule } from '@angular/router'
import { EntityTagDirectivesModule } from './directives/directives.module'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { CvcVariantPopoverModule } from '@app/components/variants/variant-popover/variant-popover.module'

@NgModule({
  declarations: [CvcEntityTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzIconModule,
    NzTagModule,
    NzToolTipModule,
    NzPopoverModule,
    EntityTagDirectivesModule,
    CvcPipesModule,
    CvcVariantPopoverModule
  ],
  exports: [CvcEntityTagComponent, EntityTagDirectivesModule],
})
export class CvcEntityTagModule {}

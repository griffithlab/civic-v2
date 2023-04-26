import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcVariantTypePopoverComponent } from './variant-type-popover.component'
import { NzCardModule } from 'ng-zorro-antd/card'
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module'
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions'
import { LetModule, PushModule } from '@ngrx/component'
import { NzIconModule } from 'ng-zorro-antd/icon'
import { CvcPipesModule } from '@app/core/pipes/pipes.module'

@NgModule({
  declarations: [CvcVariantTypePopoverComponent],
  imports: [
    CommonModule,
    LetModule,
    PushModule,
    NzIconModule,
    NzCardModule,
    NzDescriptionsModule,
    CvcPipesModule,
    CvcLinkTagModule,
  ],
  exports: [CvcVariantTypePopoverComponent],
})
export class CvcVariantTypePopoverModule {}

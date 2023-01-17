import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CvcVariantTypeTagComponent } from './variant-type-tag.component'
import { RouterModule } from '@angular/router'
import { NzTagModule } from 'ng-zorro-antd/tag'
import { CvcVariantTypePopoverModule } from '@app/components/variant-types/variant-type-popover/variant-type-popover.module'
import { NzPopoverModule } from 'ng-zorro-antd/popover'
import { NzIconModule } from 'ng-zorro-antd/icon'

@NgModule({
  declarations: [CvcVariantTypeTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzIconModule,
    NzTagModule,
    NzPopoverModule,
    CvcVariantTypePopoverModule,
  ],
  exports: [CvcVariantTypeTagComponent],
})
export class CvcVariantTypeTagModule {}

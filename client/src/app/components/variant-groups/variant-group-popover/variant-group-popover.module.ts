import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcVariantGroupPopoverComponent } from './variant-group-popover.component';
import { CvcSourceTagModule } from '@app/components/sources/source-tag/source-tag.module';
import { CvcVariantTagModule } from '@app/components/variants/variant-tag/variant-tag.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { ReactiveComponentModule } from '@ngrx/component';



@NgModule({
  declarations: [CvcVariantGroupPopoverComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzCardModule,
    NzDescriptionsModule,
    CvcSourceTagModule,
    CvcVariantTagModule
  ],
  exports: [CvcVariantGroupPopoverComponent]
})
export class CvcVariantGroupPopoverModule { }

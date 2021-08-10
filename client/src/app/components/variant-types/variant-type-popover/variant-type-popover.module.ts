import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcVariantTypePopoverComponent } from './variant-type-popover.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CvcLinkTagModule } from '@app/components/shared/cvc-link-tag/cvc-link-tag.module';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CvcVariantTypePopoverComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzIconModule,
    NzCardModule,
    NzDescriptionsModule,
    CvcLinkTagModule,
  ],
  exports: [CvcVariantTypePopoverComponent]
})
export class CvcVariantTypePopoverModule { }

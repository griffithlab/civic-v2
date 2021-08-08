import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcDrugPopoverComponent } from './cvc-drug-popover.component';
import { RouterModule } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcLinkTagModule } from '@app/components/shared/cvc-link-tag/cvc-link-tag.module';

@NgModule({
  declarations: [CvcDrugPopoverComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzCardModule,
    NzDescriptionsModule,

    CvcLinkTagModule
  ],
  exports: [CvcDrugPopoverComponent]
})
export class CvcDrugPopoverModule { }

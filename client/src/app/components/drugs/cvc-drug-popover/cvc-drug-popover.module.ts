import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcDrugPopoverComponent } from './cvc-drug-popover.component';
import { RouterModule } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { ReactiveComponentModule } from '@ngrx/component';
import { CvcLinkTagModule } from '@app/components/shared/cvc-link-tag/cvc-link-tag.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconsProviderModule } from '@app/icons-provider.module';

@NgModule({
  declarations: [CvcDrugPopoverComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveComponentModule,
    NzCardModule,
    NzDescriptionsModule,
    NzIconModule,
    CvcLinkTagModule
  ],
  exports: [CvcDrugPopoverComponent]
})
export class CvcDrugPopoverModule { }

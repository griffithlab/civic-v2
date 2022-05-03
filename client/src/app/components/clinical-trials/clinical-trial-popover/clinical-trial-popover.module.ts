import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcClinicalTrialPopoverComponent } from './clinical-trial-popover.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CvcClinicalTrialPopoverComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzCardModule,
    NzIconModule,
    NzDescriptionsModule,
    CvcLinkTagModule,
  ],
  exports: [CvcClinicalTrialPopoverComponent]
})
export class CvcClinicalTrialPopoverModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcClinicalTrialPopoverComponent } from './clinical-trial-popover.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [CvcClinicalTrialPopoverComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzCardModule,
    NzDescriptionsModule,
    CvcLinkTagModule,
  ],
  exports: [CvcClinicalTrialPopoverComponent]
})
export class CvcClinicalTrialPopoverModule { }

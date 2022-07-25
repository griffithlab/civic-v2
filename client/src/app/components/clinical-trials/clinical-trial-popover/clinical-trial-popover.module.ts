import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CvcLinkTagModule } from '@app/components/shared/link-tag/link-tag.module';
import { CvcPipesModule } from '@app/core/pipes/pipes.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcClinicalTrialPopoverComponent } from './clinical-trial-popover.component';

@NgModule({
  declarations: [CvcClinicalTrialPopoverComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,

    NzCardModule,
    NzIconModule,
    NzDescriptionsModule,

    CvcLinkTagModule,
    CvcPipesModule,
  ],
  exports: [CvcClinicalTrialPopoverComponent]
})
export class CvcClinicalTrialPopoverModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcClinicalTrialTagComponent } from './clinical-trial-tag.component';
import { RouterModule } from '@angular/router';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { CvcClinicalTrialPopoverModule } from '../clinical-trial-popover/clinical-trial-popover.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [CvcClinicalTrialTagComponent],
  imports: [
    CommonModule,
    RouterModule,
    NzIconModule,
    NzTagModule,
    NzPopoverModule,
    CvcClinicalTrialPopoverModule
  ],
  exports: [CvcClinicalTrialTagComponent]
})
export class CvcClinicalTrialTagModule { }

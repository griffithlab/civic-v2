import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcClinicalTrialsTableComponent } from './clinical-trials-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcClinicalTrialTagModule } from '../clinical-trial-tag/clinical-trial-tag.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [CvcClinicalTrialsTableComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzTableModule,
    NzButtonModule,
    CvcClearableInputFilterModule,
    CvcClinicalTrialTagModule,
  ],
  exports: [CvcClinicalTrialsTableComponent]
})
export class CvcClinicalTrialsTableModule { }

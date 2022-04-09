import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcClinicalTrialsTableComponent } from './clinical-trials-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CvcClearableInputFilterModule } from '@app/components/shared/clearable-input-filter/clearable-input-filter.module';
import { CvcClinicalTrialTagModule } from '../clinical-trial-tag/clinical-trial-tag.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [CvcClinicalTrialsTableComponent],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzTableModule,
    NzButtonModule,
    NzCardModule,
    NzIconModule,
    NzTypographyModule,
    NzToolTipModule,
    CvcClearableInputFilterModule,
    CvcClinicalTrialTagModule,
  ],
  exports: [CvcClinicalTrialsTableComponent]
})
export class CvcClinicalTrialsTableModule { }

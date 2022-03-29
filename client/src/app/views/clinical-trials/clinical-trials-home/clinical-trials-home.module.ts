import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicalTrialsHomePage } from './clinical-trials-home.page';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcClinicalTrialsTableModule } from '@app/components/clinical-trials/clinical-trials-table/clinical-trials-table.module';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';

@NgModule({
  declarations: [ClinicalTrialsHomePage],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzGridModule,
    NzPageHeaderModule,
    NzIconModule,
    CvcClinicalTrialsTableModule,
    CvcSectionNavigationModule,
  ],
  exports: [ClinicalTrialsHomePage]
})
export class ClinicalTrialsHomeModule { }

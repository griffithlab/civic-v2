import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvidenceHomePage } from './evidence-home.page';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcEvidenceTableModule } from '@app/components/evidence/evidence-table/evidence-table.module';
import { CvcGeneTagModule } from '@app/components/genes/gene-tag/gene-tag.module';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

@NgModule({
  declarations: [EvidenceHomePage],
  imports: [
    CommonModule,
    ReactiveComponentModule,
    NzSwitchModule,
    NzPageHeaderModule,
    NzGridModule,
    NzIconModule,
    CvcSectionNavigationModule,
    CvcGeneTagModule,
    CvcEvidenceTableModule,
  ],
  exports: [EvidenceHomePage]
})
export class EvidenceHomeModule { }

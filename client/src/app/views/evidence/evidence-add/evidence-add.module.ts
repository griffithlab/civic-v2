import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvidenceAddRoutingModule } from './evidence-add-routing.module';
import { EvidenceAddView } from './evidence-add.view';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';


@NgModule({
  declarations: [EvidenceAddView],
  imports: [
    CommonModule,
    EvidenceAddRoutingModule,
    NzPageHeaderModule,
    CvcSectionNavigationModule,
  ]
})
export class EvidenceAddModule { }

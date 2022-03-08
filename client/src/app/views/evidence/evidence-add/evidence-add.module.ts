import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EvidenceAddRoutingModule } from './evidence-add-routing.module';
import { EvidenceAddView } from './evidence-add.view';
import { CvcSectionNavigationModule } from '@app/components/shared/section-navigation/section-navigation.module';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CvcLoginPromptModule } from '@app/components/shared/login-prompt/login-prompt.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { ReactiveComponentModule } from '@ngrx/component';


@NgModule({
  declarations: [EvidenceAddView],
  imports: [
    CommonModule,
    EvidenceAddRoutingModule,
    NzPageHeaderModule,
    NzIconModule,
    CvcSectionNavigationModule,
    CvcLoginPromptModule,
    NzGridModule,
    ReactiveComponentModule
  ]
})
export class EvidenceAddModule { }

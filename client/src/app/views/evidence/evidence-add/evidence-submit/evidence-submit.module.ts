import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzCardModule } from 'ng-zorro-antd/card';
import { EvidenceSubmitPage } from './evidence-submit.page';
import { EvidenceSubmitFormModule } from '@app/forms/evidence-submit/evidence-submit.module';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/config/components/org-selector-btn-group/org-selector-btn-group.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule } from '@angular/forms';
import { NzRadioModule } from 'ng-zorro-antd/radio';

@NgModule({
  declarations: [EvidenceSubmitPage],
  imports: [
    CommonModule,
    FormsModule,
    NzGridModule,
    NzSpaceModule,
    NzCardModule,
    NzSkeletonModule,
    EvidenceSubmitFormModule,

    // debug
    NzSwitchModule,
    NzRadioModule,
    NzGridModule,
    NzIconModule,
    NzButtonModule,
    CvcOrgSelectorBtnGroupModule,
  ],
})
export class EvidenceSubmitModule {}

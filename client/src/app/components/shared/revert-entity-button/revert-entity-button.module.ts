import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcRevertEntityButtonComponent } from './revert-entity-button.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CvcRevertEntityButtonComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzIconModule,
    NzToolTipModule,
    NzModalModule,
    NzSpinModule,
    NzSpaceModule,
    ReactiveComponentModule,
    CvcOrgSelectorBtnGroupModule
  ],
  exports: [CvcRevertEntityButtonComponent]
})
export class CvcRevertEntityButtonModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';

import { CvcMolecularProfileInputForm } from './molecular-profile-input.form';
import { CvcFormErrorsAlertModule } from '@app/forms/config/components/form-errors-alert/form-errors-alert.module';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/config/components/org-selector-btn-group/org-selector-btn-group.module';
import { CvcFormButtonsModule } from '@app/forms/config/components/form-buttons/form-buttons.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzMentionModule } from 'ng-zorro-antd/mention';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { CvcMolecularProfileTagNameModule } from '@app/components/molecular-profiles/molecular-profile-tag-name/molecular-profile-tag-name.module';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { VariantSubmitFormModule } from '../variant-submit/variant-submit.module';

@NgModule({
  declarations: [CvcMolecularProfileInputForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    NzButtonModule,
    NzCardModule,
    NzFormModule,
    NzIconModule,
    NzPopoverModule,
    NzSpaceModule,
    NzMentionModule,
    NzAlertModule,
    FormsModule,
    CvcFormErrorsAlertModule,
    CvcOrgSelectorBtnGroupModule,
    CvcFormButtonsModule,
    CvcMolecularProfileTagNameModule,
    VariantSubmitFormModule,
    NgxJsonViewerModule
  ],
  exports: [CvcMolecularProfileInputForm]
})
export class CvcMolecularInputFormModule { }

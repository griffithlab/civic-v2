import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CvcFormButtonsModule } from '@app/forms/config/components/form-buttons/form-buttons.module';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/config/components/org-selector-btn-group/org-selector-btn-group.module';
import { CvcFlagResolveForm } from './flag-resolve.form';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CvcCommentInputModule } from '@app/forms/comment-input/comment-input.module';

@NgModule({
  declarations: [CvcFlagResolveForm],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveComponentModule,
    NzButtonModule,
    NzFormModule,
    FormsModule,
    NzAlertModule,
    NzCardModule,
    NzPopoverModule,
    NzIconModule,
    NzToolTipModule,
    NzSpinModule,
    CvcCommentInputModule,
    CvcFormButtonsModule,
    CvcOrgSelectorBtnGroupModule,
  ],
  exports: [CvcFlagResolveForm]
})
export class CvcResolveFlagModule { }

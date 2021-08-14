import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneSuggestRevisionForm } from './gene-suggest-revision.form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { FormlyModule } from '@ngx-formly/core';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module';
import { RouterModule } from '@angular/router';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CvcFormErrorsAlertModule } from '@app/forms/shared/components/form-errors-alert/form-errors-alert.module';
import { CvcFormButtonsModule } from '@app/forms/shared/components/form-buttons/form-buttons.module';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [GeneSuggestRevisionForm],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    NzFormModule,
    NzAlertModule,
    NzGridModule,
    NzButtonModule,
    FormlyModule.forChild(),
    CvcOrgSelectorBtnGroupModule,
    CvcFormErrorsAlertModule,
    CvcFormButtonsModule,
  ],
  exports: [GeneSuggestRevisionForm]
})
export class GeneSuggestRevisionFormModule { }

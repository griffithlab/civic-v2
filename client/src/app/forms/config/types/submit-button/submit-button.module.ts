import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SubmitButtonComponent,
  SubmitButtonTypeOption,
} from './submit-button.type';
import { CvcFormButtonsModule } from '../../components/form-buttons/form-buttons.module';
import { CvcOrgSelectorBtnGroupModule } from '../../components/org-selector-btn-group/org-selector-btn-group.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SubmitButtonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forChild({ types: [SubmitButtonTypeOption] }),
    NzButtonModule,
    CvcFormButtonsModule,
    CvcOrgSelectorBtnGroupModule,
  ],
  exports: [SubmitButtonComponent],
})
export class CvcSubmitButtonTypeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitButtonComponent } from './submit-button.type';
import { CvcFormButtonsModule } from '../../components/form-buttons/form-buttons.module';
import { CvcOrgSelectorBtnGroupModule } from '../../components/org-selector-btn-group/org-selector-btn-group.module';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [
    SubmitButtonComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    CvcFormButtonsModule,
    CvcOrgSelectorBtnGroupModule,
  ]
})
export class CvcSubmitButtonTypeModule { }

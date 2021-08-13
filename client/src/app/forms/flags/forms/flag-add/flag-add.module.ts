import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvcFlagAddComponent } from './flag-add.component';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzCardModule } from 'ng-zorro-antd/card';
import { CvcOrgSelectorBtnGroupModule } from '@app/forms/shared/components/org-selector-btn-group/org-selector-btn-group.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CvcFormButtonsModule } from '@app/forms/shared/components/form-buttons/form-buttons.module';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  declarations: [CvcFlagAddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    FormlyModule.forChild(),
    NzCardModule,
    CvcOrgSelectorBtnGroupModule,
    NzButtonModule,
    CvcFormButtonsModule,
  ],
  exports: [CvcFlagAddComponent]
})
export class CvcFlagAddModule { }
